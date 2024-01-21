import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
import types from './types'

export const useUserStore = defineStore('user', () => {
  const authStore = useAuthStore()

  const baseUrl = useRuntimeConfig().public.API_BASE_URL

  async function loadUserData (): Promise<types.User | unknown> {
    const user: types.User | unknown = await $fetch(`${baseUrl}/user/${authStore.user.id}`, {
      method: 'GET',
      credentials: 'include',
    }).catch(async () => {
      await authStore.redirectLogin()
    })

    return user
  }

  async function loadPublicUserData (username: string): Promise<types.User | unknown> {
    if (!username) {
      return 'Missing username'
    }

    const authUserId = authStore.user.id
    // TODO manage error
    const user: types.User | unknown = await $fetch(`${baseUrl}/user/public/${username}`, {
      method: 'PUT',
      body: {
        userId: authUserId
      }
    })

    console.log(user)

    return user
  }

  async function loadPublicUserRecipes (username: string): Promise<types.User | unknown> {
    if (!username) {
      return 'Missing username'
    }
    // TODO manage error
    const user: types.User | unknown = await $fetch(`${baseUrl}/user/public-recipes/${username}`, {
      method: 'GET'
    })

    return user
  }

  async function  edit (userData: types.EditUserParams) {
    await $fetch(`${baseUrl}/user/edit/${userData.id}`, {
      method: 'PUT',
      body: userData,
      credentials: 'include',
    })
  }

  async function deleteFiles (filesRoutes: string[]): Promise<void> {
    const userId = authStore.user.id

    await $fetch(`${baseUrl}/user/delete-files/${userId}`, {
      method: 'POST',
      body: { filesRoutes },
      credentials: 'include',
    })
  }

  // Followers section
  async function followUser (username: string): Promise<void> {
    const userId = authStore.user.id
    await $fetch(`${baseUrl}/user/follow/${username}`, {
      method: 'PUT',
      body: {
        userId: userId,
      },
      credentials: 'include',
    })
  }

  async function unfollowUser (username: string): Promise<void> {
    const userId = authStore.user.id
    await $fetch(`${baseUrl}/user/unfollow/${username}`, {
      method: 'PUT',
      body: {
        userId: userId,
      },
      credentials: 'include',
    })
  }

  async function listFollowing (username: string): Promise<void> {
    return $fetch(`${baseUrl}/user/following/${username}`, {
      method: 'GET',
    })
  }

  async function listFollowers (username: string): Promise<void> {
    return $fetch(`${baseUrl}/user/followers/${username}`, {
      method: 'GET',
    })
  }

  // User home recipes
  async function followingRecipes (): Promise<any> {
    const userId = authStore.user.id
    
    const recipes = await $fetch(`${baseUrl}/user/${userId}/list-following-recipes`, {
      method: 'GET',
      credentials: 'include',
    })

    return recipes
  }

  return {
    loadUserData,
    loadPublicUserData,
    edit,
    deleteFiles,
    loadPublicUserRecipes,
    followUser,
    unfollowUser,
    listFollowing,
    listFollowers,
    followingRecipes,
  }
})
