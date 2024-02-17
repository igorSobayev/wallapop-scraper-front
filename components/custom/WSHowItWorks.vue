<script setup></script>


<template>
    <div class="flex flex-col items-center gap-2">
        <h3 class="text-sm font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">{{ $t('how_it_works') }}</h3>
        <div class="mb-5 text-2xl">{{ $t('how_subtitle') }}</div>
        <div class="flex flex-col mt-5">
            <div class="flex flex-row gap-3 items-center">
                <div class="h-14 w-14 bg-gradient-to-r from-amber-500 to-pink-500 font-bold flex p-1 rounded-full mr-5 ">
                    <span class="bg-white h-full w-full rounded-full flex justify-center items-center text-3xl">
                        1
                    </span>
                </div>
                <div class="">
                    <h4 class="text-xl mb-3 font-bold">{{ $t('how_step_one_title') }}</h4>
                    <p class="text-sm w-80">{{ $t('how_step_one_desc') }}</p>
                </div>
            </div>
            <div class="text-center mt-5 mb-5"><UIcon name="i-heroicons-arrow-long-down text-5xl font-bold bg-gradient-to-b from-amber-500 to-pink-500" /></div>
            <div class="flex flex-row gap-3 items-center mt-5">
                <div class="h-14 w-14 bg-gradient-to-r from-amber-500 to-pink-500 font-bold flex p-1 rounded-full mr-5 ">
                    <span class="bg-white h-full w-full rounded-full flex justify-center items-center text-3xl">
                        2
                    </span>
                </div>
                <div class="">
                    <h4 class="text-xl mb-3 font-bold">{{ $t('how_step_two_title') }}</h4>
                    <p class="text-sm w-80">{{ $t('how_step_two_desc') }}</p>
                </div>
            </div>
            <div class="text-center mt-5 mb-5"><UIcon name="i-heroicons-arrow-long-down text-5xl font-bold bg-gradient-to-b from-amber-500 to-pink-500" /></div>
            <div class="flex flex-row gap-3 items-center mt-5">
                <div class="h-14 w-14 bg-gradient-to-r from-amber-500 to-pink-500 font-bold flex p-1 rounded-full mr-5 ">
                    <span class="bg-white h-full w-full rounded-full flex justify-center items-center text-3xl">
                        3
                    </span>
                </div>
                <div class="">
                    <h4 class="text-xl mb-3 font-bold">{{ $t('how_step_three_title') }}</h4>
                    <p class="text-sm w-80">{{ $t('how_step_three_desc') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>