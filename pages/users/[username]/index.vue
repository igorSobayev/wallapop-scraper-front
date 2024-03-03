<script setup>
import WSNewTrack from '~/components/custom/WSNewTrack.vue'
import WSTracks from '~/components/custom/WSTracks.vue'
import WSUpdateTracksConfig from '~/components/custom/WSUpdateTracksConfig.vue'

const route = useRoute()

const tracksComp = ref(null)

useHead({
  title: route.params.username,
  meta: [
    {
      name: 'description',
      content: 'TODO: SEO'
    },
  ],
})

const trackUploaded = () => {
  tracksComp.value.loadTracksInfo()
}

const trackUploading = () => {
  tracksComp.value.loadingTracks = true
}

onNuxtReady(async () => {

})
</script>

<template>
  <div class="flex justify-center flex-col gap-2 pt-5">
    <!-- Add new track -->
    <div class="mb-4">
      <WSNewTrack @track-uploaded="trackUploaded" @track-uploading="trackUploading" />
    </div>
    <hr class="my-4">
    <div class="my-4">
      <WSUpdateTracksConfig />
    </div>
    <hr class="my-4">
    <!-- Track table -->
    <div class="mt-4">
      <WSTracks ref="tracksComp" />
    </div>
  </div>
</template>