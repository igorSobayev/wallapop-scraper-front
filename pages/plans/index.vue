<script setup>
import WSPlansTable from '~/components/custom/WSPlansTable.vue'

const route = useRoute()

const tracksComp = ref(null)

useHead({
  title: 'Plans',
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
    <WSPlansTable />
  </div>
</template>