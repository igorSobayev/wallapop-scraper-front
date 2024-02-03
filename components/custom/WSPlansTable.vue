<script setup>

onNuxtReady(async () => {

})
</script>

<template>
  <div class="flex justify-center flex-col gap-2 pt-5 h-full">
    <!-- Plans container -->
    <div class="flex gap-5 justify-between p-5 relative"> 
      <span class="absolute -inset-6 bg-gradient-br opacity-20 rounded-3xl blur-2xl"></span>
      <!-- Plan free -->
      <div class="w-[30%] z-20 h-full">
        <UCard class="h-full custom-card-height">
          <Placeholder class="h-full grid">
            <h3 class="text-4xl font-bold">
              Free plan
            </h3>
            <div class="text-3xl font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent mt-3">
              0€
            </div>
            <div class="text-xl mt-3">
              <div class="flex align-center gap-2">
                <UIcon name="i-heroicons-check text-green-500 text-2xl" /> <span>5 tracks</span>
              </div>
              <div class="flex align-center gap-2">
                <UIcon name="i-heroicons-check text-green-500 text-2xl" /> <span>Daily update</span>
              </div>
            </div>
            <div class="mt-5 self-end">
              <UButton class="" block>
                Register now
              </UButton>
            </div>
          </Placeholder>
        </UCard>
      </div>
      <!-- Plan medium -->
      <div class="w-[30%] z-20 h-full">
        <UCard class="h-full custom-card-height">
          <Placeholder class="h-full grid">
            <div>
              <h3 class="text-4xl font-bold">
                Medium plan
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
                  <UIcon name="i-heroicons-check text-green-500 text-2xl" /> <span>Updates every 24/12/6 hours</span>
                </div>
              </div>
            </div>
            <div class="mt-5 self-end">
              <UButton class="from-purple-600 to-blue-600 bg-gradient-to-r hover:opacity-90" block>
                Get Medium Plan Now
              </UButton>
            </div>
          </Placeholder>
        </UCard>
      </div>
      <!-- Plan premium -->
      <div class="w-[30%] z-20 relative h-full">
        <span class="absolute w-[100%] flex justify-center top-[-10px] h-[20px] text-sm">
          <span class="text-white px-2 font-bold bg-gradient-to-r from-amber-500 to-pink-500 rounded-md">MOST POPULAR</span>
        </span>
        <UCard class="border-2 border-primary h-full">
          <Placeholder class="h-32">
            <h3 class="text-4xl font-bold">
              Premium plan
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
                <UIcon name="i-heroicons-check text-green-500 text-2xl" /> <span>Update every hour</span>
              </div>
              <div class="flex align-center gap-2">
                <UIcon name="i-heroicons-check text-green-500 text-2xl" /> <span>Manual sync</span>
              </div>
              <div class="flex align-center gap-2">
                <UIcon name="i-heroicons-check text-green-500 text-2xl" /> <span>Compare historic data</span>
              </div>
            </div>
            <div class="mt-5">
              <UButton class="bg-gradient-to-r from-amber-500 to-pink-500 hover:opacity-90" block>
                Start Tracking Now!
              </UButton>
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

.custom-card-height > div:nth-child(1) {
  height: 100%;
}
</style>