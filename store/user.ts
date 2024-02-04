import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
import { ref } from '../.nuxt/imports'
import types from './types'

export const useUserStore = defineStore('user', () => {
  const authStore = useAuthStore()

  const baseUrl = useRuntimeConfig().public.API_BASE_URL

  const userData = ref({} as types.User)

  async function loadUserData (): Promise<types.User | unknown> {
    const user = await $fetch(`${baseUrl}/user/${authStore.user.id}`, {
      method: 'GET',
      credentials: 'include',
    }).catch(async () => {
      await authStore.redirectLogin()
    }) as types.User

    userData.value = user

    return user
  }

  async function createCheckoutSession (plan = 'premium'): Promise<unknown> {
    if (!plan) return

    const returnPage = window.location.href
    const succeededPage = `${window.location.origin}/users/${authStore.user.username}` 

    const session: unknown = await $fetch(`${baseUrl}/user/create-checkout-session/${authStore.user.id}`, {
      method: 'POST',
      body: {
        plan,
        returnPage,
        succeededPage,
      },
      credentials: 'include',
    }).catch(async () => {
      await authStore.redirectLogin()
    })

    return session
  }

  return {
    loadUserData,
    createCheckoutSession,
    userData,
  }
})
