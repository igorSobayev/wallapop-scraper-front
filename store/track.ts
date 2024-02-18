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
    }).catch(error => { 
      throw error.response._data
    })
  }

  // Upload the demo track
  async function uploadDemoTrack (demoUrl: string): Promise<void> {
    console.log(demoUrl)
    return $fetch(`${baseUrl}/track/upload-demo`, {
      method: 'POST',
      body: {
        demoUrl,
      }
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
    }).catch(error => { 
      throw error.response._data
    })
  }

  // Update tracks info
  async function deleteTrack (trackId: string): Promise<void> {
    const userId = authStore.user.id

    if (!trackId) return

    await $fetch(`${baseUrl}/track/delete/${trackId}`, {
      method: 'DELETE',
      body: {
        userId: userId,
      },
      credentials: 'include',
    })
  }

  async function archiveTrack (trackId: string): Promise<void> {
    const userId = authStore.user.id

    if (!trackId) return

    await $fetch(`${baseUrl}/track/archive/${trackId}`, {
      method: 'PUT',
      body: {
        userId: userId,
      },
      credentials: 'include',
    })
  }

  async function syncTrack (trackId: string): Promise<void> {
    const userId = authStore.user.id

    if (!trackId) return

    await $fetch(`${baseUrl}/track/sync-track/${trackId}`, {
      method: 'PUT',
      body: {
        userId: userId,
      },
      credentials: 'include',
    }).catch(e => {
      throw e
    })
  }

  return {
    uploadTracks,
    loadTracks,
    updateTracksInfo,
    deleteTrack,
    archiveTrack,
    syncTrack,
    uploadDemoTrack,
  }
})
