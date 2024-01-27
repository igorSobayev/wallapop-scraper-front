<script setup>
import { useTrackStore } from '../../store/track'

const route = useRoute()

const trackStore = useTrackStore()

const loadingTracks = ref(false)
const tracks = ref([])

const columns = [
    {
        key: 'tag',
        label: 'ID'
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

    await trackStore.syncTrack(trackId)

    await loadTracksInfo()
}

const items = (row) => [
    [
        {
            label: 'Sync info',
            icon: 'i-heroicons-pencil-square-20-solid',
            click: () => syncTrack(row._id)
        }
    ],
    [
        {
            label: 'Archive',
            icon: 'i-heroicons-archive-box-20-solid',
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

        track.class = styleClass

        return track
    })
    loadingTracks.value = false
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
        <div class="mb-2">
            <UButton color="primary" size="md" @click="updateTracksInfo" variant="solid">Update tracks info</UButton>
        </div>
        <div class="border">
            <UTable :columns="columns" :rows="tracks" :loading="loadingTracks">

                <template #tag-data="{ row }">
                    <span class="text-stone-950"> {{ row.tag }} </span>
                </template>

                <template #title-data="{ row }">
                    <a class="text-gray-600" :href="row.link"> {{ row.title }} </a>
                </template>

                <template #views-data="{ row }">
                    <span class="text-stone-950"> {{ row.views }} </span>
                </template>

                <template #favs-data="{ row }">
                    <span class="text-stone-950"> {{ row.favs }} </span>
                </template>

                <template #price-data="{ row }">
                    <span class="text-stone-950"> {{ row.price }} € </span>
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