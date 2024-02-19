<script setup>
import { useTrackStore } from '../../store/track'
import { useUserStore } from '~/store/user'
import { useI18n } from 'vue-i18n'
import utils from '~/utils'

const { t } = useI18n()

const route = useRoute()

const trackStore = useTrackStore()
const userStore = useUserStore()

const loadingTracks = ref(false)
const rawTracks = ref([])
const tracks = ref([])

const updateError = ref(false)
const updateErrorMessage = ref('Ha ocurrido un error al sincronizar manualmente')

// Compare dates vars
const selectedCompareDate = ref(shared.COMPARE_DATES_OPTIONS.LAST_ELEMENT)
const compareDateOptions = computed(() => {
    return [
        [
            {
                id: shared.COMPARE_DATES_OPTIONS.LAST_ELEMENT,
                label: t('compare_date_last_element'),
                disabled: showBuyPremiumPlanMsg?.value,
                click: async () => {
                    selectedCompareDate.value = shared.COMPARE_DATES_OPTIONS.LAST_ELEMENT
                }
            },
            {
                id: shared.COMPARE_DATES_OPTIONS.TWELVE,
                label: t('compare_date_twelve'),
                disabled: showBuyPremiumPlanMsg?.value,
                click: async () => {
                    selectedCompareDate.value = shared.COMPARE_DATES_OPTIONS.TWELVE
                }
            },
            {
                id: shared.COMPARE_DATES_OPTIONS.YESTERDAY,
                label: t('compare_date_yesterday'),
                disabled: showBuyPremiumPlanMsg?.value,
                click: async () => {
                    selectedCompareDate.value = shared.COMPARE_DATES_OPTIONS.YESTERDAY
                }
            },
            {
                id: shared.COMPARE_DATES_OPTIONS.THREE_DAYS,
                label: t('compare_date_three_days'),
                disabled: showBuyPremiumPlanMsg?.value,
                click: async () => {
                    selectedCompareDate.value = shared.COMPARE_DATES_OPTIONS.THREE_DAYS
                }
            },
            {
                id: shared.COMPARE_DATES_OPTIONS.FIVE_DAYS,
                label: t('compare_date_five_days'),
                disabled: showBuyPremiumPlanMsg?.value,
                click: async () => {
                    selectedCompareDate.value = shared.COMPARE_DATES_OPTIONS.FIVE_DAYS
                }
            },
            {
                id: shared.COMPARE_DATES_OPTIONS.ONE_WEEK,
                label: t('compare_date_one_week'),
                disabled: showBuyPremiumPlanMsg?.value,
                click: async () => {
                    selectedCompareDate.value = shared.COMPARE_DATES_OPTIONS.ONE_WEEK
                }
            },
            {
                id: shared.COMPARE_DATES_OPTIONS.FIRST_ELEMENT,
                label: t('compare_date_first_element'),
                disabled: showBuyPremiumPlanMsg?.value,
                click: async () => {
                    selectedCompareDate.value = shared.COMPARE_DATES_OPTIONS.FIRST_ELEMENT
                }
            }
        ]
    ]})

// Update info of the price views and favs on change the compare date
watch(selectedCompareDate, (() => {

    loadingTracks.value = true

    buildTracksTable()

    loadingTracks.value = false

}))

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

const maxTracksByPlan = computed(() => {
    const plan = userStore.userData.plan?.toUpperCase()
    if (!plan) return 5

   return shared.PLANS_DETAILS[plan].MAX_TRACKS
})

const userTracks = computed(() => {
    return userStore.userData.tracksCounter
})

const haveAdminPerms = computed(() => {
    return userStore.userData.role === shared.ROLES.ADMIN
})

const showBuyPremiumPlanMsg = computed(() => {
    return !haveAdminPerms.value && userStore.userData.plan !== shared.PLANS.PREMIUM
})

const canRunManualSync = computed(() => {

    const now = new Date()
    const otherDate = new Date(userStore.userData.lastManualUpdate)

    const difTime = now.getTime() - otherDate.getTime()

    const hoursSinceLastRun = difTime / (1000 * 60 * 60)

    if (haveAdminPerms.value) {
        return true
    }

    return hoursSinceLastRun >= 1 && userStore.userData.plan === shared.PLANS.PREMIUM

})

const archiveTrack = async (trackId) => {
    loadingTracks.value = true

    await trackStore.archiveTrack(trackId)

    await loadTracksInfo()

    userStore.loadUserData()
}

const deleteTrack = async (trackId) => {
    loadingTracks.value = true
    
    await trackStore.deleteTrack(trackId)

    await loadTracksInfo()

    userStore.loadUserData()
}

const syncTrack = async (trackId) => {
    if (showBuyPremiumPlanMsg.value) return

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
            label: t('demo_items_sync_info'),
            icon: 'i-heroicons-pencil-square-20-solid',
            disabled: row.deletedFromPlatform || showBuyPremiumPlanMsg.value,
            click: () => syncTrack(row._id)
        }
    ],
    [
        {
            label: t('demo_items_archive'),
            icon: 'i-heroicons-archive-box-20-solid',
            disabled: row.deletedFromPlatform,
            click: () => archiveTrack(row._id)
        }, {
            label: t('demo_items_delete'),
            icon: 'i-heroicons-trash-20-solid',
            click: () => deleteTrack(row._id)
        }
    ]
]

const updateTracksInfo = async () => {
    loadingTracks.value = true
    try {
        await trackStore.updateTracksInfo()

        updateError.value = false
    } catch (e) {
        updateError.value = true
        if (e.name === 'ManualRunToSoonError') {
            updateErrorMessage.value = 'Has intentado ejecutar la sincronización manual demasiado pronto, máximo una vez por hora.'
        }
    }
    
    await loadTracksInfo()
    loadingTracks.value = false
}

const loadTracksInfo = async () => {
    loadingTracks.value = true
    rawTracks.value = await trackStore.loadTracks()

    buildTracksTable()

    loadingTracks.value = false
}

const buildTracksTable = () => {
    tracks.value = rawTracks.value.map(track => {
        track.class = getTrackStyle(track)

        track.viewsUpdate = getTrackViewsUpdate(track)

        track.favsUpdate = getTrackFavsUpdate(track)

        track.priceUpdate = getPriceUpdate(track)

        return track
    })
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

    let trackToCompare

    const views = track.views

    trackToCompare = getTrackToCompare(track)

    if (!trackToCompare) {
        return viewsUpdate
    }

    viewsUpdate = views - trackToCompare.views

    return viewsUpdate
}

const getTrackFavsUpdate = (track) => {
    let favsUpdate = 0

    let trackToCompare

    const favs = track.favs

    trackToCompare = track.lastElement

    trackToCompare = getTrackToCompare(track)

    if (!trackToCompare) {
        return favsUpdate
    }

    favsUpdate = favs - trackToCompare.favs

    return favsUpdate
}

const getPriceUpdate = (track) => {
    // TODO
    let priceUpdate = 0

    let trackToCompare

    const actualPrice = track.price

    trackToCompare = getTrackToCompare(track)

    if (!trackToCompare) {
        return priceUpdate
    }

    priceUpdate = actualPrice - trackToCompare.price

    return priceUpdate
}

const getTrackToCompare = (track) => {
    let trackToCompare = track.lastElement

    // Si tiene historial, es que es premium TODO hacer un check igualmente
    if (!trackToCompare && track.historial?.length) {
        
        if (selectedCompareDate.value === shared.COMPARE_DATES_OPTIONS.LAST_ELEMENT) {
            trackToCompare = track.historial[track.historial.length - 1]
        }

        if (selectedCompareDate.value === shared.COMPARE_DATES_OPTIONS.FIRST_ELEMENT) {
            trackToCompare = track.historial[0]
        }

        if (selectedCompareDate.value !== shared.COMPARE_DATES_OPTIONS.LAST_ELEMENT && selectedCompareDate.value !== shared.COMPARE_DATES_OPTIONS.FIRST_ELEMENT) {
            trackToCompare = findCloser(track.historial, getBaseTime.value)
        }
        
    }

    return trackToCompare
}

// Base time looking into the compare date selected
const getBaseTime = computed(() => {
    const now = new Date()

    switch (selectedCompareDate.value) {
        case shared.COMPARE_DATES_OPTIONS.TWELVE:
            return new Date(now.getTime() - (12 * 60 * 60 * 1000))
        case shared.COMPARE_DATES_OPTIONS.YESTERDAY:
            return new Date(now.getTime() - (24 * 60 * 60 * 1000))
        case shared.COMPARE_DATES_OPTIONS.THREE_DAYS:
            return new Date(now.getTime() - (3 * 24 * 60 * 60 * 1000))
        case shared.COMPARE_DATES_OPTIONS.FIVE_DAYS:
            return new Date(now.getTime() - (5 * 24 * 60 * 60 * 1000))
        case shared.COMPARE_DATES_OPTIONS.ONE_WEEK:
            return new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000))
        default:
            return null
    }
})

// Search the closer date to the selected compare date (baseTime)
const findCloser = (list, baseTime) => {
  return list.reduce((prev, curr) => {
    const prevDate = Math.abs(new Date(prev.updateDate) - baseTime)
    const currentDate = Math.abs(new Date(curr.updateDate) - baseTime)
    return currentDate < prevDate ? curr : prev
  })
}

onNuxtReady(async () => {
    await loadTracksInfo()
})

defineExpose({
    loadTracksInfo,
    loadingTracks,
  })
</script>

<template>
    <div>
        <div class="mb-2 flex justify-between align-center">
            <div class="flex gap-3 items-center">
                <UButton color="primary" size="md" v-if="canRunManualSync" @click="updateTracksInfo" variant="solid">{{ $t('tracks_update_tracks_info_btn') }}</UButton>
                <UButton color="primary" size="md" v-else disabled variant="solid">{{ $t('tracks_update_tracks_info_btn') }}</UButton>
                <p v-if="updateError" class="text-red-500">{{ updateErrorMessage }}</p>
                <div v-if="showBuyPremiumPlanMsg">{{ $t('tracks_available_on_premium') }}  <UIcon name="i-heroicons-arrow-right" /> <NuxtLink class="text-green-400" to="/plans">{{ $t('tracks_available_on_premium_btn') }}</NuxtLink></div>
            </div>
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
        <div class="border p-2 flex gap-2 items-center py-4">
            <div>
                {{ $t('tracks_date_compare') }}
            </div>
            <UDropdown :items="compareDateOptions" :popper="{ placement: 'bottom-start' }">
                <UButton color="white" :label="$t(`compare_date_${selectedCompareDate}`)" trailing-icon="i-heroicons-chevron-down-20-solid" />

                <template #item="{ item }">
                    <div class="truncate flex w-full p-1" :class="{ 'bg-green-100': item.id === selectedCompareDate }">{{ item.label }}</div>
                </template>
            </UDropdown>
            <div v-if="showBuyPremiumPlanMsg">{{ $t('tracks_available_on_premium') }}  <UIcon name="i-heroicons-arrow-right" /> <NuxtLink class="text-green-400" to="/plans">{{ $t('tracks_available_on_premium_btn') }}</NuxtLink></div>
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