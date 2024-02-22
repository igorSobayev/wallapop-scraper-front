<script setup></script>


<template>
    <div class="flex flex-col items-center gap-2">
        <h3 class="text-sm font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">{{ $t('how_it_works') }}</h3>
        <div class="mb-5 text-center text-xl lg:text-2xl">{{ $t('how_subtitle') }}</div>
        <div class="flex flex-col mt-5 p-2">
            <div class="flex flex-col md:flex-row gap-3 items-center p-3 border rounded-lg border-gray-500">
                <div class="h-10 w-10 lg:h-14 lg:w-14 bg-gradient-to-r from-amber-500 to-pink-500 font-bold flex p-1 rounded-full mr-5">
                    <span class="bg-white h-full w-full rounded-full flex justify-center items-center text-xl lg:text-3xl">
                        1
                    </span>
                </div>
                <div class="text-center">
                    <h4 class="text-lg lg:text-xl mb-3 font-bold">{{ $t('how_step_one_title') }}</h4>
                    <p class="text-xs lg:text-sm md:w-80">{{ $t('how_step_one_desc') }}</p>
                </div>
            </div>
            <div class="text-center mt-5 mb-5"><UIcon name="i-heroicons-arrow-long-down text-5xl font-bold bg-gradient-to-b from-amber-500 to-pink-500" /></div>
            <div class="flex flex-col md:flex-row gap-3 items-center p-3 border rounded-lg border-gray-500 mt-5">
                <div class="h-10 w-10 lg:h-14 lg:w-14 bg-gradient-to-r from-amber-500 to-pink-500 font-bold flex p-1 rounded-full mr-5">
                    <span class="bg-white h-full w-full rounded-full flex justify-center items-center text-xl lg:text-3xl">
                        2
                    </span>
                </div>
                <div class="text-center">
                    <h4 class="text-lg lg:text-xl mb-3 font-bold">{{ $t('how_step_two_title') }}</h4>
                    <p class="text-xs lg:text-sm md:w-80">{{ $t('how_step_two_desc') }}</p>
                </div>
            </div>
            <div class="text-center mt-5 mb-5"><UIcon name="i-heroicons-arrow-long-down text-5xl font-bold bg-gradient-to-b from-amber-500 to-pink-500" /></div>
            <div class="flex flex-col md:flex-row gap-3 items-center p-3 border rounded-lg border-gray-500 mt-5">
                <div class="h-10 w-10 lg:h-14 lg:w-14 bg-gradient-to-r from-amber-500 to-pink-500 font-bold flex p-1 rounded-full mr-5">
                    <span class="bg-white h-full w-full rounded-full flex justify-center items-center text-xl lg:text-3xl">
                        3
                    </span>
                </div>
                <div class="text-center">
                    <h4 class="text-lg lg:text-xl mb-3 font-bold">{{ $t('how_step_three_title') }}</h4>
                    <p class="text-xs lg:text-sm md:w-80">{{ $t('how_step_three_desc') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>