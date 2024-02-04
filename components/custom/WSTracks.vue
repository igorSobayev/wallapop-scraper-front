<script setup>
import { useTrackStore } from '../../store/track'
import { useUserStore } from '~/store/user'

const route = useRoute()

const trackStore = useTrackStore()
const userStore = useUserStore()

const loadingTracks = ref(false)
const tracks = ref([])

const columns = [
    {
        key: 'tag',
        label: 'ID'
    },
    {
        key: 'previewImg',
    },
    {
        key: 'title',
        label: 'Título'
    },
    {
        key: 'views',
        label: 'Visitas'
    },
    {
        key: 'favs',
        label: 'Likes'
    },
    {
        key: 'price',
        label: 'Precio'
    },
    {
        key: 'updateDate',
        label: 'Fecha sync'
    },
    {
        key: 'state',
        label: 'Estado'
    },
    {
        key: 'actions'
    }
]

const maxTracksByPlan = computed(() => {
    const plan = userStore.userData.plan?.toUpperCase()
    if (!plan) return 5

   return shared.PLANS_DETAILS[plan].MAX_TRACKS
})

const userTracks = computed(() => {
    return userStore.userData.tracksCounter
})

const archiveTrack = async (trackId) => {
    loadingTracks.value = true

    await trackStore.archiveTrack(trackId)

    await loadTracksInfo()
}

const deleteTrack = async (trackId) => {
    loadingTracks.value = true
    
    await trackStore.deleteTrack(trackId)

    await loadTracksInfo()
}

const syncTrack = async (trackId) => {
    loadingTracks.value = true

    try {
        await trackStore.syncTrack(trackId)
        await loadTracksInfo()
    } catch (e) {
        loadingTracks.value = false
    }
}

const items = (row) => [
    [
        {
            label: 'Sync info',
            icon: 'i-heroicons-pencil-square-20-solid',
            disabled: row.deletedFromPlatform,
            click: () => syncTrack(row._id)
        }
    ],
    [
        {
            label: 'Archive',
            icon: 'i-heroicons-archive-box-20-solid',
            disabled: row.deletedFromPlatform,
            click: () => archiveTrack(row._id)
        }, {
            label: 'Delete',
            icon: 'i-heroicons-trash-20-solid',
            click: () => deleteTrack(row._id)
        }
    ]
]

function formatDate(time) {
    const date = new Date(time);

    const month = date.toLocaleString('default', { month: '2-digit' });
    const day = date.toLocaleString('default', { day: '2-digit' });

    const hour = date.toLocaleString('default', { hour: '2-digit' })
    const minutes = date.toLocaleString('default', { minute: '2-digit' })

    return `${hour}:${minutes} ${day}/${month}`;
}

const updateTracksInfo = async () => {
    loadingTracks.value = true
    await trackStore.updateTracksInfo()
    await loadTracksInfo()
    loadingTracks.value = false
}

const loadTracksInfo = async () => {
    loadingTracks.value = true
    const rawTracks = await trackStore.loadTracks()
    tracks.value = rawTracks.map(track => {

        track.class = getTrackStyle(track)

        track.viewsUpdate = getTrackViewsUpdate(track)

        track.favsUpdate = getTrackFavsUpdate(track)

        track.priceUpdate = getPriceUpdate(track)

        return track
    })
    loadingTracks.value = false
}

const getTrackStyle = (track) => {
    let styleClass = ''

    if (track.reserved) {
        styleClass = 'bg-yellow-100'
    }

    if (track.sold) {
        styleClass = 'bg-red-50'
    }

    if (track.deletedFromPlatform) {
        styleClass = 'bg-red-200'
    }

    return styleClass
}

const getTrackViewsUpdate = (track) => {
    let viewsUpdate = 0

    const views = track.views
    const trackToCompare = track.lastElement

    if (!trackToCompare) {
        return viewsUpdate
    }

    viewsUpdate = views - trackToCompare.views

    return viewsUpdate
}

const getTrackFavsUpdate = (track) => {
    let favsUpdate = 0

    const favs = track.favs
    const trackToCompare = track.lastElement

    if (!trackToCompare) {
        return favsUpdate
    }

    favsUpdate = favs - trackToCompare.favs

    return favsUpdate
}

const getPriceUpdate = (track) => {
    // TODO
    let priceUpdate = 0

    const actualPrice = track.price
    const trackToCompare = track.lastElement

    if (!trackToCompare) {
        return priceUpdate
    }

    priceUpdate = actualPrice - trackToCompare.price

    return priceUpdate
}

onNuxtReady(async () => {
    await loadTracksInfo()
})

defineExpose({
    loadTracksInfo,
  })
</script>

<template>
    <div>
        <div class="mb-2 flex justify-between align-center">
            <UButton color="primary" size="md" @click="updateTracksInfo" variant="solid">Update tracks info</UButton>
            <div class="flex align-center text-2xl font-bold">
                <span class="inline">
                    <span :class="{ 
                        'text-green-500': userTracks < maxTracksByPlan,
                        'text-yellow-500': userTracks >= maxTracksByPlan / 2 && userTracks < maxTracksByPlan,
                        'text-red-500': userTracks === maxTracksByPlan
                        }">{{ userTracks }}</span> <span class="text-gray-500"> / </span> <span class="text-gray-500">{{ maxTracksByPlan }}</span>
                </span>
            </div>
        </div>
        <div class="border">
            <UTable :columns="columns" :rows="tracks" :loading="loadingTracks">

                <template #tag-data="{ row }">
                    <span class="text-stone-950"> {{ row.tag }} </span>
                </template>

                <template #previewImg-data="{ row }">
                    <img :src="row.previewImg" width="25" />
                </template>

                <template #title-data="{ row }">
                    <a class="text-gray-600" target="_blank" :href="row.link"> {{ row.title }} </a>
                </template>

                <template #views-data="{ row }">
                    <div class="text-stone-950"> 
                        {{ row.views }} 
                        <span v-if="row.viewsUpdate" class="ml-2 text-green-600">
                            ({{ row.viewsUpdate }} <UIcon name="i-heroicons-arrow-trending-up" /> )
                        </span>
                 </div>
                </template>

                <template #favs-data="{ row }">
                    <div class="text-stone-950"> 
                        {{ row.favs }} 
                        <span v-if="row.favsUpdate > 0" class="ml-2 text-green-600">
                            ({{ row.favsUpdate }} <UIcon name="i-heroicons-arrow-trending-up" /> )
                        </span>
                        <span v-if="row.favsUpdate < 0" class="ml-2 text-red-500">
                            ({{ row.favsUpdate }} <UIcon name="i-heroicons-arrow-trending-down" /> )
                        </span>
                    </div>
                </template>

                <template #price-data="{ row }">
                    <div class="text-stone-950"> 
                        {{ row.price }} € 
                        <span v-if="row.priceUpdate < 0" class="ml-2 text-green-600">
                            ({{ Math.abs(row.priceUpdate) }} € <UIcon name="i-heroicons-arrow-trending-down" /> )
                        </span>
                        <span v-if="row.priceUpdate > 0" class="ml-2 text-red-500">
                            ({{ Math.abs(row.priceUpdate) }} € <UIcon name="i-heroicons-arrow-trending-up" /> )
                        </span>
                    </div>
                </template>

                <template #updateDate-data="{ row }">
                    <span class="text-stone-950"> {{ formatDate(row.updateDate) }} </span>
                </template>

                <template #state-data="{ row }">
                    <UBadge color="primary" v-if="!row.sold && !row.reserved && !row.deletedFromPlatform" size="sm" class="mr-1" variant="solid">Disponible</UBadge>
                    <UBadge color="white" v-if="row.sold" size="sm" class="mr-1" variant="solid">Vendido</UBadge>
                    <UBadge color="gray" v-if="row.reserved" size="sm" variant="solid">Reservado</UBadge>
                    <UBadge color="red" v-if="row.deletedFromPlatform" size="sm" variant="solid">Eliminado</UBadge>
                </template>

                <template #actions-data="{ row }">
                    <UDropdown :items="items(row)">
                        <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
                    </UDropdown>
                </template>
            </UTable>
        </div>
    </div>
</template>