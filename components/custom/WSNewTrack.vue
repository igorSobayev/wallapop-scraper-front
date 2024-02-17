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

    console.log('THE GOOD ONES')
    console.log(newTracks.value)
    console.log('THE BAD ONES')
    console.log(wrongTracks.value)

    tracksInputLoading.value = true

    emit('trackUploading')

    await trackStore.uploadTracks(newTracks.value)

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
    </div>
</template>