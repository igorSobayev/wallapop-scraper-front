<script setup>
import WSDemoTrack from '~/components/custom/WSDemoTrack.vue'
import WSHowItWorks from '~/components/custom/WSHowItWorks.vue'
import WSWhoShouldUseIt from '~/components/custom/WSWhoShouldUseIt.vue'
import WSHomePricingTable from '~/components/custom/WSHomePricingTable.vue'

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
        <div class="flex flex-row">
            <div class="w-[50%] p-3">
                <h2 class="text-3xl">
                    ¡Revisa la <span class="font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">actualización</span> de tus productos de Wallapop <span class="font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">en segundos</span>!
                </h2>
                <UBadge color="gray" size="xs" class="mt-5 mb-5" variant="outline">Tracker #1 de Wallapop</UBadge>
                <div>
                    <p class="text-md">
                        Nuestro configurador te permite realizar el seguimiento de todos tus productos desde un mismo sitio con actualizaciones configurables
                    </p>
                    <div class="mt-2">
                        <div class="flex items-center gap-1"><UIcon name="i-heroicons-check text-green-500 text-md" /> Actualizaciones de precio</div>
                        <div class="flex items-center gap-1"><UIcon name="i-heroicons-check text-green-500 text-md" /> Número de visitas</div>
                        <div class="flex items-center gap-1"><UIcon name="i-heroicons-check text-green-500 text-md" /> Crecimiento de favoritos</div>
                        <div class="flex items-center gap-1"><UIcon name="i-heroicons-check text-green-500 text-md" /> Cambios de estado</div>
                    </div>
                </div>
                <div class="mt-5">
                    <div class="h-14 w-full rounded-md bg-gradient-to-r from-amber-500 to-pink-500 p-1">
                        <div class="h-full w-full bg-white p-2 flex items-center gap-2 flex-row relative">
                            <UInput icon="i-heroicons-magnifying-glass" variant="none" class="w-full" v-model="demoUrl" size="md" color="white" :trailing="false"
                                placeholder="Prueba añadiendo el enlace de un producto" />
                            <UButton @click="runDemo" icon="i-heroicons-sparkles" class="from-purple-600 to-blue-600 bg-gradient-to-r hover:opacity-90 absolute right-2">
                                ¡Probar!
                            </UButton>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[50%] p-3">
                FOTO
            </div>
        </div>
        <div class="mt-[50px] mb-[50px]" v-show="demoActive">
            <WSDemoTrack ref="demoTrackTable" />
        </div>
        <div class="mt-[150px]">
            <WSHowItWorks />
        </div>
        <div class="mt-[150px] mb-[150px]">
            <WSWhoShouldUseIt />
        </div>
        <div class="mt-5 mb-[150px]">
            <WSHomePricingTable />
        </div>
    </div>
</template>
  
