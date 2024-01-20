<script setup>
import WSNewTrack from '~/components/custom/WSNewTrack.vue'
import WSTracks from '~/components/custom/WSTracks.vue'

const route = useRoute()

useHead({
  title: route.params.username + '  page',
  meta: [
    {
      name: 'description',
      content: 'TODO: SEO'
    },
  ],
})

onNuxtReady(async () => {

})
</script>

<template>
  <div class="flex justify-center flex-col gap-2 pt-5">
    <!-- Add new track -->
    <div class="mb-4">
      <WSNewTrack />
    </div>
    <!-- Track table -->
    <div class="mt-4">
      <WSTracks />
    </div>
  </div>
</template>