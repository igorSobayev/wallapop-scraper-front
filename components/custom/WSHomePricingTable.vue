<script setup>
import WSPlansTable from '~/components/custom/WSPlansTable.vue'
</script>


<template>
    <div class="flex flex-col items-center">
        <div class="flex flex-col items-center gap-2">
            <h3 class="text-sm font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">{{ $t('home_pricing_title') }}</h3>
            <div class="text-2xl">{{ $t('home_pricing_subtitle') }}</div>
            <div class="text-sm text-slate-700 text-center mt-5">
                <p>{{ $t('home_pricing_text_one') }}</p>
                <p>{{ $t('home_pricing_text_two') }}</p>
            </div>
        </div>
    </div>
    <WSPlansTable />
</template>