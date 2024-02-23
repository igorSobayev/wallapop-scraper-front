<script setup>
import WSHomeHeaderImages from '~/components/custom/WSHomeHeaderImages.vue'
import WSDemoTrack from '~/components/custom/WSDemoTrack.vue'
import WSHowItWorks from '~/components/custom/WSHowItWorks.vue'
import WSWhoShouldUseIt from '~/components/custom/WSWhoShouldUseIt.vue'
import WSHomePricingTable from '~/components/custom/WSHomePricingTable.vue'

useHead({
  title: 'WallaTracker',
  meta: [
    {
      name: 'description',
      content: `Toma el control de tus compras en Wallapop con WallaTracker.
       Con nuestra herramienta, podrás estar al tanto de las actualizaciones de estado de tus productos favoritos,
        así como monitorizar cambios de precios en tiempo real. Simplifica tu experiencia de compra y ahorra tiempo en Wallapop.
        ¡Empieza a disfrutar de una experiencia de compra más inteligente hoy mismo!`
    },
  ],
})


const demoActive = ref(false)
const demoUrl = ref('')

const demoTrackTable = ref(null)

const runDemo = () => {
    if (!demoUrl.value) return

    demoTrackTable.value.uploadDemoTrack(demoUrl.value)    

    demoActive.value = true
}

</script>

<template>
    <div class="flex flex-col">
        <div class="flex lg:flex-row flex-col">
            <div class="lg:w-[50%] p-3 w-full">
                <h2 class="text-3xl" v-html="$t('home_header_title')" />
                <UBadge color="gray" size="xs" class="mt-5 mb-5" variant="outline">{{ $t('home_header_tag') }}</UBadge>
                <div>
                    <p class="text-md">
                        {{ $t('home_header_subtitle') }}
                    </p>
                    <div class="mt-2">
                        <div class="flex items-center gap-1"><UIcon name="i-heroicons-check text-green-500 text-md" /> {{ $t('home_header_adv_1') }}</div>
                        <div class="flex items-center gap-1"><UIcon name="i-heroicons-check text-green-500 text-md" /> {{ $t('home_header_adv_2') }}</div>
                        <div class="flex items-center gap-1"><UIcon name="i-heroicons-check text-green-500 text-md" /> {{ $t('home_header_adv_3') }}</div>
                        <div class="flex items-center gap-1"><UIcon name="i-heroicons-check text-green-500 text-md" /> {{ $t('home_header_adv_4') }}</div>
                    </div>
                </div>
            </div>
            <div class="lg:w-[50%] p-3 w-full">
                <WSHomeHeaderImages />
            </div>
        </div>
        <div>
            <div class="mt-5">
                <div class="h-14 w-full rounded-md bg-gradient-to-r from-amber-500 to-pink-500 p-1">
                    <div class="h-full w-full bg-white p-2 flex items-center gap-2 flex-row relative">
                        <UInput icon="i-heroicons-magnifying-glass" variant="none" class="w-full" v-model="demoUrl" size="md" color="white" :trailing="false"
                            :placeholder="$t('home_header_demo_placeholder')" />
                        <UButton @click="runDemo" icon="i-heroicons-sparkles" class="from-purple-600 to-blue-600 bg-gradient-to-r hover:opacity-90 absolute right-2">
                            {{ $t('home_header_try_btn') }}
                        </UButton>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-[50px] mb-[50px]" v-show="demoActive">
            <WSDemoTrack ref="demoTrackTable" />
        </div>
        <div class="mt-[100px] border rounded-lg bg-primary-100 py-[50px] px-3">
            <WSHowItWorks />
        </div>
        <div class="mt-[100px] mb-[100px] border rounded-lg bg-gray-100 py-[50px] px-3">
            <WSWhoShouldUseIt />
        </div>
        <div class="mt-5 mb-[100px] border rounded-lg pt-[50px] pb-[150px] px-3">
            <WSHomePricingTable />
        </div>
    </div>
</template>
  
