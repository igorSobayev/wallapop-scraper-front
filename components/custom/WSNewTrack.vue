<script setup>
import { useUserStore } from '~/store/user'
import { useTrackStore } from '../../store/track'

const route = useRoute()

const trackStore = useTrackStore()
const userStore = useUserStore()

const emit = defineEmits(['trackUploaded', 'trackUploading'])

const newTracks = ref([])
const newTracksRaw = ref()
const wrongTracks = ref([])
const tracksInputLoading = ref(false)

const errorUploading = ref(false)
const errorUploadingMsg = ref('')

const addNewTracks = async () => {
    if (!newTracksRaw.value) return

    const removeSpaces = newTracksRaw.value.replace(/\s/g, '');

    const splitByComma = removeSpaces.split(',')

    // De momento, solo permitimos wallapop, ya nos pelearemos luego con otras plataformas

    const filtered = splitByComma.filter(track => {
        if (track.includes('wallapop.com/')) return track

        if (track) wrongTracks.value.push(track)
        
    })

    newTracks.value = filtered

    tracksInputLoading.value = true

    emit('trackUploading')

    try {
        await trackStore.uploadTracks(newTracks.value)

        errorUploading.value = false
    } catch (err) {
        errorUploading.value = true
        errorUploadingMsg.value = err.message
    }

    userStore.loadUserData()

    emit('trackUploaded')

    resetTracksInput()
}

const resetTracksInput = () => {
    newTracks.value = []
    newTracksRaw.value = ''
    wrongTracks.value = []
    tracksInputLoading.value = false
}

onNuxtReady(async () => {

})
</script>

<template>
    <div class="">
        <div class="w-full text-3xl mb-2">
            {{ $t('new_track') }}
        </div>
        <div class="w-full flex gap-2 items-center">
            <div class="w-[80%]">
                <UInput icon="i-heroicons-folder-arrow-down" :loading="tracksInputLoading" v-model="newTracksRaw" size="md" color="white" :trailing="false"
                    :placeholder="$t('new_track_placeholder')" />
            </div>
            <div>
                <UButton color="primary" size="md" @click="addNewTracks" variant="solid">{{ $t('new_track_add') }}</UButton>
            </div>
        </div>
        <div class="mt-3 text-red-500" v-if="errorUploading">
            Ha ocurrido un error al subir los tracks: {{ errorUploadingMsg }}
        </div>
    </div>
</template>