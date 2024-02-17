<script setup>
import { useTrackStore } from '../../store/track'
import { useI18n } from 'vue-i18n'
import utils from '~/utils'

const { t } = useI18n()

const trackStore = useTrackStore()

const loadingTracks = ref(false)
const rawTracks = ref([])
const tracks = ref([])

const trackError = ref(false)
const trackErrorMessage = ref('')

// Compare dates vars
const selectedCompareDate = ref(shared.COMPARE_DATES_OPTIONS.LAST_ELEMENT)
const compareDateOptions = [
        [
            {
                id: shared.COMPARE_DATES_OPTIONS.LAST_ELEMENT,
                label: t('compare_date_last_element'),
                disabled: true
            },
            {
                id: shared.COMPARE_DATES_OPTIONS.TWELVE,
                label: t('compare_date_twelve'),
                disabled: true
            },
            {
                id: shared.COMPARE_DATES_OPTIONS.YESTERDAY,
                label: t('compare_date_yesterday'),
                disabled: true
            },
            {
                id: shared.COMPARE_DATES_OPTIONS.THREE_DAYS,
                label: t('compare_date_three_days'),
                disabled: true
            },
            {
                id: shared.COMPARE_DATES_OPTIONS.FIVE_DAYS,
                label: t('compare_date_five_days'),
                disabled: true
            },
            {
                id: shared.COMPARE_DATES_OPTIONS.ONE_WEEK,
                label: t('compare_date_one_week'),
                disabled: true
            },
            {
                id: shared.COMPARE_DATES_OPTIONS.FIRST_ELEMENT,
                label: t('compare_date_first_element'),
                disabled: true
            }
        ]
    ]

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
        label: t('demo_title')
    },
    {
        key: 'views',
        label: t('demo_views'),
        sortable: true
    },
    {
        key: 'favs',
        label: t('demo_favs'),
        sortable: true
    },
    {
        key: 'price',
        label: t('demo_price'),
        sortable: true
    },
    {
        key: 'updateDate',
        label: t('demo_sync'),
        sortable: true
    },
    {
        key: 'state',
        label: t('demo_state')
    },
    {
        key: 'actions'
    }
]

const items = () => [
    [
        {
            label: t('demo_items_sync_info'),
            icon: 'i-heroicons-pencil-square-20-solid',
            disabled: true
        }
    ],
    [
        {
            label: t('demo_items_archive'),
            icon: 'i-heroicons-archive-box-20-solid',
            disabled: true
        }, {
            label: t('demo_items_delete'),
            icon: 'i-heroicons-trash-20-solid',
            disabled: true
        }
    ]
]

const uploadDemoTrack = async (demoUrl) => {
    loadingTracks.value = true

    const track = await trackStore.uploadDemoTrack(demoUrl).catch(e => {
        trackError.value = true

        if (e.name === 'DemoProductDeletedError') {
            trackErrorMessage.value = t('demo_error_product_removed')
        } else {
            trackErrorMessage.value = t('demo_error_try_valid')
        }
    })


    if (!track) {
        return
    }

    trackError.value = false

    rawTracks.value.push(track)

    buildTracksTable()

    loadingTracks.value = false
}

const buildTracksTable = () => {
    tracks.value = rawTracks.value.map(track => {
        return track
    })
}

onNuxtReady(async () => {

})

defineExpose({
    uploadDemoTrack,
  })
</script>

<template>
    <div>
        <div class="mb-2 flex justify-between align-center">
            <UButton color="primary" size="md" disabled variant="solid">{{ t('demo_sync_info') }}</UButton>
            <div class="flex align-center text-2xl font-bold">
                <span class="inline">
                    <span class="text-green-500">1</span> <span class="text-gray-500"> / </span> <span class="text-gray-500">5</span>
                </span>
            </div>
        </div>
        <div v-if="trackError">
            <p>{{ $t('demo_error_title') }}</p>
            <span class="text-red-600">{{ trackErrorMessage }}</span>
        </div>
        <div class="border p-2 flex gap-2 items-center py-4">
            <div>
                {{ $t('demo_dates_compare') }}
            </div>
            <UDropdown :items="compareDateOptions" :popper="{ placement: 'bottom-start' }">
                <UButton color="white" :label="$t(`compare_date_${selectedCompareDate}`)" trailing-icon="i-heroicons-chevron-down-20-solid" />

                <template #item="{ item }">
                    <div class="truncate flex w-full p-1" :class="{ 'bg-green-100': item.id === selectedCompareDate }">{{ item.label }}</div>
                </template>
            </UDropdown>
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
                    <span class="text-stone-950"> {{ utils.formatDate(row.updateDate) }} </span>
                </template>

                <template #state-data="{ row }">
                    <UBadge color="primary" v-if="!row.sold && !row.reserved && !row.deletedFromPlatform" size="sm" class="mr-1" variant="solid">{{ $t('product_state_available') }}</UBadge>
                    <UBadge color="white" v-if="row.sold" size="sm" class="mr-1" variant="solid">{{ $t('product_state_sold') }}</UBadge>
                    <UBadge color="gray" v-if="row.reserved" size="sm" variant="solid">{{ $t('product_state_reserved') }}</UBadge>
                    <UBadge color="red" v-if="row.deletedFromPlatform" size="sm" variant="solid">{{ $t('product_state_removed') }}</UBadge>
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