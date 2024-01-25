<script setup>
import WSNewTrack from '~/components/custom/WSNewTrack.vue'
import WSTracks from '~/components/custom/WSTracks.vue'

const route = useRoute()

const tracksComp = ref(null)

useHead({
  title: route.params.username + '  page',
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

onNuxtReady(async () => {

})
</script>

<template>
  <div class="flex justify-center flex-col gap-2 pt-5">
    <!-- Add new track -->
    <div class="mb-4">
      <WSNewTrack @track-uploaded="trackUploaded" />
    </div>
    <!-- Track table -->
    <div class="mt-4">
      <WSTracks ref="tracksComp" />
    </div>
  </div>
</template>