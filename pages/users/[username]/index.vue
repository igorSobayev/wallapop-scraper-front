<script setup>

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
      Yay
    </div>
</template>