<template>
  <div class="h-screen flex flex-col overflow-x-hidden">
    <NKNavBar />
    <div class="flex justify-center pt-20 mb-auto">
      <NuxtPage class="2xl:w-2/3 w-[90%]" />
    </div>
    <NKFooter />
    <UNotifications />
    <WTCookieAdvice />
  </div>
</template>


<script setup>
import NKNavBar from './components/layout/NKNavBar.vue'
import NKFooter from './components/layout/NKFooter.vue'
import WTCookieAdvice from './components/custom/WTCookieAdvice.vue'
</script>

<style>
</style>