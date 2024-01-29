<script setup>
import { useUserStore } from '~/store/user'
import { useTrackStore } from '~/store/track'
import { useAuthStore } from '~/store/auth'
import shared from '~/utils/shared'

const route = useRoute()

const trackStore = useTrackStore()
const userStore = useUserStore()
const authStore = useAuthStore()
const nextUpdateOur = ref('')

const getNextUpdateHour = () => {
    const user = authStore.user
    const now = new Date()

    console.log(now)

    let nextUpdate
    console.log(user)

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
            return 'No se illo'
    }

    console.log(nextUpdate)

    console.log(nextUpdate.getMinutes())
    const hora = nextUpdate.getHours()
    const minutos = nextUpdate.getMinutes().toString().padStart(2, '0')
    const dia = nextUpdate.getDate()
    const mes = (nextUpdate.getMonth() + 1).toString().padStart(2, '0')
    const año = nextUpdate.getFullYear();

    return `${hora}:${minutos} ${dia}/${mes}/${año}`
}

onNuxtReady(async () => {
    nextUpdateOur.value = getNextUpdateHour()
})
</script>

<template>
    <div class="">
        La proxima actualización de los datos será: <span class="font-bold">{{ nextUpdateOur }}</span>
    </div>
</template>