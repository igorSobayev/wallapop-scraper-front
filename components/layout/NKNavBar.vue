<template>
    <header class="bg-white z-50 fixed w-screen border-b">
        <nav class="flex justify-between items-center w-[92%] mx-auto">
            <NuxtLink class="p-2" to="/">
                <img class="w-32 lg:-52 cursor-pointer" src="./../../assets/logo.png" alt="WallaTracker Logo">
            </NuxtLink>
            <div class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[40vh] left-0 top-[-1000%] md:w-auto  w-full flex items-center px-5 z-50" :class="{ 'top-[101%]': menuOpenned }">
                <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8" v-if="authStore.isLoggedIn">
                    <NuxtLink class="hover:text-gray-500" to="/">{{ $t('home') }}</NuxtLink>
                    <NuxtLink class="hover:text-gray-500" :to="`/users/${authStore.user.username}`">{{ $t('products_dashboard') }}</NuxtLink>
                    <!-- <NuxtLink class="hover:text-gray-500" to="/plans" v-if="userStore.userData.plan !== shared.PLANS.PREMIUM">{{ $t('nav_plans') }}</NuxtLink> -->
                </ul>
            </div>
            <div class="flex items-center gap-2">
                <NKLang />
                <span v-if="!authStore.isLoggedIn" class="flex items-center gap-2">
                    <UButton to="/login" icon="i-material-symbols-login-sharp" size="md" color="primary" class="nbtn"><span class="sm:block hidden">{{ $t('login') }}</span></UButton>
                    <UButton to="/signup" icon="i-heroicons-sparkles" size="md" color="gray" class="nbtn"><span class="sm:block hidden">{{ $t('signup') }}</span></UButton>
                </span>
                <span v-else class="flex items-center gap-2">
                    <NKProfileNav />
                </span>
                <UIcon @click="onToggleMenu" class="text-3xl cursor-pointer md:hidden" :name="menuOpenned ? 'i-material-symbols-close' : 'i-material-symbols-menu'" />
            </div>
        </nav>
    </header>
  </template>

<script setup>
import NKProfileNav from './../custom/NKProfileNav.vue'
import NKLang from '../components/custom/NKLang.vue'
import { useAuthStore } from './../../store/auth'
import { useUserStore } from '~/store/user'
import shared from '~/sharedUtils/shared.js'

const authStore = useAuthStore()
const userStore = useUserStore()

const menuOpenned = ref(false)
const onToggleMenu = (e) => {
    menuOpenned.value = !menuOpenned.value
}

// Manage login in server 
authStore.manageLoginSession()

// Manage login data on client
onMounted(() => {
  if(!process.client) return
  authStore.manageLoginSessionClient()
})
</script>
  