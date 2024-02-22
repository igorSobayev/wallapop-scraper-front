<script setup>

import shared from './../../utils/shared.js'
import { useAuthStore } from '~/store/auth'
import { useUserStore } from '~/store/user'

// const props = defineProps({ 
//     isLoggedIn: Boolean,
// })

const authStore = useAuthStore()
const userStore = useUserStore()
const router = useRouter()

const selectPlan = async (plan) => {
  if (plan === shared.PLANS.FREE) {
    router.push('/signup')
    return
  }

  if (!authStore.isLoggedIn) {

    const expirationDate = new Date()

    expirationDate.setHours(expirationDate.getHours() + 1)

    const planCookie = useCookie("wsPlan", { expires: expirationDate })
    planCookie.value = plan

    router.push('/signup')
    return
  }

  const session = await userStore.createCheckoutSession(plan)

  window.location.replace(session.url)
}

onNuxtReady(async () => {

})
</script>

<template>
  <div class="flex justify-center flex-col gap-2 pt-5 h-full">
    <!-- Plans container -->
    <div class="flex flex-col lg:flex-row gap-5 p-5 relative" :class="{ 'justify-center': authStore.isLoggedIn, 'justify-between': !authStore.isLoggedIn }"> 
      <span class="invisible lg:visible absolute -inset-6 opacity-20 rounded-3xl blur-2xl" :class="{ 'bg-gradient-center': authStore.isLoggedIn, 'bg-gradient-br': !authStore.isLoggedIn }"></span>
      <!-- Plan free -->
      <div class="w-full lg:w-[30%] z-20 h-full" v-if="!authStore.isLoggedIn">
        <UCard class="h-full custom-card-height">
          <Placeholder class="h-full grid">
            <h3 class="text-4xl font-bold">
              {{ $t('pricing_table_free_plan_title') }}
            </h3>
            <div class="text-3xl font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent mt-3">
              0€
            </div>
            <div class="text-xl mt-3">
              <div class="flex align-center gap-2">
                <UIcon name="i-heroicons-check text-green-500 text-2xl" /> <span>5 tracks</span>
              </div>
              <div class="flex align-center gap-2">
                <UIcon name="i-heroicons-check text-green-500 text-2xl" /> <span>{{ $t('pricing_table_free_plan_adv_one') }}</span>
              </div>
            </div>
            <div class="mt-5 self-end">
              <UButton @click="selectPlan(shared.PLANS.FREE)" class="" block>
                {{ $t('pricing_table_free_plan_try_free') }}
              </UButton>
              <span class="text-center block text-xs mt-2 text-slate-500">{{ $t('pricing_table_free_plan_footer') }}</span>
            </div>
          </Placeholder>
        </UCard>
      </div>
      <!-- Plan medium -->
      <div class="w-full lg:w-[30%] z-20 h-full">
        <UCard class="h-full custom-card-height">
          <Placeholder class="h-full grid">
            <div>
              <h3 class="text-4xl font-bold">
                {{ $t('pricing_table_medium_plan_title') }}
              </h3>
              <div class="mt-3">
                <span class="text-3xl font-bold from-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent inline">
                  6€
                </span>
              </div>
              <div class="text-xl mt-3">
                <div class="flex align-center gap-2">
                  <UIcon name="i-heroicons-check text-green-500 text-2xl" /> <span>30 tracks</span>
                </div>
                <div class="flex align-center gap-2">
                  <UIcon name="i-heroicons-check text-green-500 text-2xl" /> <span>{{ $t('pricing_table_medium_plan_adv_one') }}</span>
                </div>
              </div>
            </div>
            <div class="mt-5 self-end" v-if="userStore.userData.plan !== shared.PLANS.MEDIUM">
              <UButton @click="selectPlan(shared.PLANS.MEDIUM)" class="from-purple-600 to-blue-600 bg-gradient-to-r hover:opacity-90" block>
                {{ $t('pricing_table_medium_plan_try') }}
              </UButton>
              <span class="text-center block text-xs mt-2 text-slate-500">{{ $t('pricing_table_no_payment_footer') }}</span>
            </div>
            <div v-else class="mt-5 self-center text-center text-xl">
              Este es tu plan actual
            </div>
          </Placeholder>
        </UCard>
      </div>
      <!-- Plan premium -->
      <div class="w-full lg:w-[30%] z-20 relative h-full">
        <span class="absolute w-[100%] flex justify-center top-[-10px] h-[20px] text-sm">
          <span class="text-white px-2 font-bold bg-gradient-to-r from-amber-500 to-pink-500 rounded-md">{{ $t('pricing_table_premium_tag') }}</span>
        </span>
        <UCard class="border-2 border-primary h-full">
          <Placeholder class="h-32">
            <h3 class="text-4xl font-bold">
              {{ $t('pricing_table_premium_title') }}
            </h3>
            <div class="mt-3">
              <span class="text-3xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent inline">
                12€
              </span>
            </div>
            <div class="text-xl mt-3 mb-5">
              <div class="flex align-center gap-2">
                <UIcon name="i-heroicons-check text-green-500 text-2xl" /> <span>100 tracks</span>
              </div>
              <div class="flex align-center gap-2">
                <UIcon name="i-heroicons-check text-green-500 text-2xl" /> <span>{{ $t('pricing_table_premium_adv_one') }}</span>
              </div>
              <div class="flex align-center gap-2">
                <UIcon name="i-heroicons-check text-green-500 text-2xl" /> <span>{{ $t('pricing_table_premium_adv_two') }}</span>
              </div>
              <div class="flex align-center gap-2">
                <UIcon name="i-heroicons-check text-green-500 text-2xl" /> <span>{{ $t('pricing_table_premium_adv_three') }}</span>
              </div>
            </div>
            <div class="mt-5" v-if="userStore.userData.plan !== shared.PLANS.PREMIUM">
              <UButton @click="selectPlan(shared.PLANS.PREMIUM)" class="bg-gradient-to-r from-amber-500 to-pink-500 hover:opacity-90" block>
                {{ $t('pricing_table_premium_try') }}
              </UButton>
              <span class="text-center block text-xs mt-2 text-slate-500">{{ $t('pricing_table_no_payment_footer') }}</span>
            </div>
            <div v-else class="mt-5 self-center text-center text-xl">
              Este es tu plan actual
            </div>
          </Placeholder>
        </UCard>
      </div>
    </div>
  </div>
</template>

<style>
.bg-gradient-br {
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 18%, rgba(0,212,255,1) 52%, rgba(217,4,96,1) 77%);
}

.bg-gradient-center {
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 10%, rgba(0,212,255,1) 39%, rgba(217,4,96,1) 58%, rgba(255,255,255,1) 90%);
}

.custom-card-height > div:nth-child(1) {
  height: 100%;
}
</style>