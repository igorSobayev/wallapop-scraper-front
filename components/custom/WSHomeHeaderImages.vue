<script setup>
import wt1 from '~/assets/imgs/wt1.jpg'
import wt2 from '~/assets/imgs/wt2.jpg'
import wt3 from '~/assets/imgs/wt3.jpg'
import wt4 from '~/assets/imgs/wt4.jpg'
import wt5 from '~/assets/imgs/wt5.jpg'

const items = [
    wt1,
    wt2,
    wt3,
    wt4,
    wt5,
]
</script>

<template>
    <div>
        <UCarousel v-slot="{ item }" :items="items" :ui="{ 
            item: 'basis-full',
            indicators: {
            inactive: 'bg-gray-100 dark:bg-gray-800 mix-blend-normal'
        }
        }" class="rounded-lg overflow-hidden border" indicators>
            <img :src="item" class="w-full" draggable="false">
        </UCarousel>
    </div>
</template>