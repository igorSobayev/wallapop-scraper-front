<script setup>
import { useUserStore } from '~/store/user'
import { useTrackStore } from '~/store/track'
import { useAuthStore } from '~/store/auth'
import shared from '~/utils/shared'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const route = useRoute()

const trackStore = useTrackStore()
const userStore = useUserStore()

const updateOptions = ref([])

const trackUpdatePreference = computed(() => {
    return userStore.userData.trackUpdatePreference
})

const nextUpdateHour = computed(() => {
    const user = userStore.userData

    const now = new Date()

    let nextUpdate

    switch (user.trackUpdatePreference) {
        case shared.PLANS_CONFIG.DAILY:
            nextUpdate = new Date(now)
            nextUpdate.setDate(now.getDate() + 1)
            nextUpdate.setHours(0, 0, 0, 0)
            break
        case shared.PLANS_CONFIG.TWICE:
            nextUpdate = new Date(now)
            nextUpdate.setHours(now.getHours() + 12, 0, 0, 0)
            break
        case shared.PLANS_CONFIG.SIX_HOURS:
            nextUpdate = new Date(now)
            nextUpdate.setHours(now.getHours() + 6, 0, 0, 0)
            break
        case shared.PLANS_CONFIG.THREE_HOURS:
            nextUpdate = new Date(now)
            nextUpdate.setHours(now.getHours() + 3, 0, 0, 0)
            break
        case shared.PLANS_CONFIG.ONE_HOUR:
            nextUpdate = new Date(now)
            nextUpdate.setHours(now.getHours() + 1, 0, 0, 0)
            break
        default:
            return 'Unknown'
    }

    const hora = nextUpdate.getHours()
    const minutos = nextUpdate.getMinutes().toString().padStart(2, '0')
    const dia = nextUpdate.getDate()
    const mes = (nextUpdate.getMonth() + 1).toString().padStart(2, '0')
    const año = nextUpdate.getFullYear();

    return `${hora}:${minutos} ${dia}/${mes}/${año}`
})

onNuxtReady(async () => {
    updateOptions.value = [
        [
            {
                id: shared.PLANS_CONFIG.DAILY,
                label: t('update_preference_daily'),
                click: async () => {
                    await userStore.changeTrackUpdatePreference(shared.PLANS_CONFIG.DAILY)
                }
            },
            {
                id: shared.PLANS_CONFIG.TWICE,
                label: t('update_preference_twice'),
                click: async () => {
                    await userStore.changeTrackUpdatePreference(shared.PLANS_CONFIG.TWICE)
                }
            },
            {
                id: shared.PLANS_CONFIG.SIX_HOURS,
                label: t('update_preference_six_hours'),
                click: async () => {
                    await userStore.changeTrackUpdatePreference(shared.PLANS_CONFIG.SIX_HOURS)
                }
            },
            {
                id: shared.PLANS_CONFIG.THREE_HOURS,
                label: t('update_preference_three_hours'),
                click: async () => {
                    await userStore.changeTrackUpdatePreference(shared.PLANS_CONFIG.THREE_HOURS)
                }
            },
            {
                id: shared.PLANS_CONFIG.ONE_HOUR,
                label: t('update_preference_one_hour'),
                click: async () => {
                    await userStore.changeTrackUpdatePreference(shared.PLANS_CONFIG.ONE_HOUR)
                }
            }
        ]
    ]

    // Not nice :/
    setTimeout((() => {
        const userPlan = userStore.userData.plan

        for (const option of updateOptions.value[0]) {
            if (userPlan === shared.PLANS.PREMIUM) {
                option.disabled = false
                continue
            }

            if (userPlan === shared.PLANS.MEDIUM) {

                if (
                    option.id === shared.PLANS_CONFIG.DAILY ||
                    option.id === shared.PLANS_CONFIG.TWICE ||
                    option.id === shared.PLANS_CONFIG.SIX_HOURS
                ) {
                    option.disabled = false
                    continue
                }
            }

            if (userPlan === shared.PLANS.FREE) {

                if (option.id === shared.PLANS_CONFIG.DAILY) {
                    option.disabled = false
                    continue
                }

            }

            option.disabled = true
        }
    }), 1000)


})
</script>

<template>
    <div class="flex flex-row items-center gap-2">
        <div class="">
            {{ $t('next_update_on') }} <span class="font-bold">{{ nextUpdateHour }}</span>
        </div>
        <div class="font-5xl mx-3">
            |
        </div>

        <div class="w-[150px]">
            <UDropdown :items="updateOptions" :popper="{ placement: 'bottom-start' }">
                <UButton color="white" :label="$t(`update_preference_${trackUpdatePreference}`)" trailing-icon="i-heroicons-chevron-down-20-solid" />

                <template #item="{ item }">
                    <div class="truncate flex w-full p-1" :class="{ 'bg-green-100': item.id === trackUpdatePreference }">{{ item.label }}</div>
                </template>
            </UDropdown>
        </div>
    </div>
</template>