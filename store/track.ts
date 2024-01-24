import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
import types from './types'

export const useTrackStore = defineStore('track', () => {
  const authStore = useAuthStore()

  const baseUrl = useRuntimeConfig().public.API_BASE_URL

  // Upload the tracks
  async function uploadTracks (tracks: string[]): Promise<void> {
    const userId = authStore.user.id

    await $fetch(`${baseUrl}/track/upload`, {
      method: 'POST',
      body: {
        userId: userId,
        tracks,
      },
      credentials: 'include',
    })
  }

  // Load actual tracks
  async function loadTracks (): Promise<types.Track[] | unknown> {
    const userId = authStore.user.id

    const tracks: types.Track[] | unknown = await $fetch(`${baseUrl}/track/all/${userId}`, {
      method: 'GET',
      credentials: 'include',
    }).catch(async () => {
      await authStore.redirectLogin()
    })

    return tracks
  }

  // Update tracks info
  async function updateTracksInfo (): Promise<void> {
    const userId = authStore.user.id

    await $fetch(`${baseUrl}/track/update-user-tracks-info`, {
      method: 'POST',
      body: {
        userId: userId,
      },
      credentials: 'include',
    })
  }

  // Update tracks info
  async function deleteTrack (trackId: string): Promise<void> {
    const userId = authStore.user.id

    console.log(trackId)
    if (!trackId) return

    await $fetch(`${baseUrl}/track/delete/${trackId}`, {
      method: 'DELETE',
      body: {
        userId: userId,
      },
      credentials: 'include',
    })
  }

  return {
    uploadTracks,
    loadTracks,
    updateTracksInfo,
    deleteTrack,
  }
})
