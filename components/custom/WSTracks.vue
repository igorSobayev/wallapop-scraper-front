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
        key: 'actions'
    }
]

const items = (row) => [
    [
        {
            label: 'Sync info',
            icon: 'i-heroicons-pencil-square-20-solid',
            click: () => console.log('Sync data') // TODO
        }
    ],
    [
        {
            label: 'Archive',
            icon: 'i-heroicons-archive-box-20-solid',
        }, {
            label: 'Delete',
            icon: 'i-heroicons-trash-20-solid',
            click: () => trackStore.deleteTrack(row._id)
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
    tracks.value = await trackStore.loadTracks()
    loadingTracks.value = false
}

onNuxtReady(async () => {
    await loadTracksInfo()
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

                <template #actions-data="{ row }">
                    <UDropdown :items="items(row)">
                        <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
                    </UDropdown>
                </template>
            </UTable>
        </div>
    </div>
</template>