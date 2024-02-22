<script setup></script>


<template>
    <div class="flex flex-col items-center gap-2">
        <h3 class="text-sm font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">{{ $t('who_title') }}</h3>
        <div class="mb-5 text-center text-xl lg:text-2xl">{{ $t('who_subtitle') }}</div>
        <div class="flex flex-col lg:flex-row justify-center mt-5 w-full">
            <div class="w-[70%] lg:w-[30%]">
                <h4 class="text-xl lg:text-3xl mb-4">{{ $t('who_buyer') }}</h4>
                <div class="leading-5 text-sm lg:text-md flex flex-col gap-3">
                    <p>
                        {{ $t('who_buyer_text_one') }}
                    </p>
                    <p>
                        {{ $t('who_buyer_text_two') }}
                    </p>
                    <p>
                        {{ $t('who_buyer_text_three') }}
                    </p>
                </div>
                <div class="mt-4">
                    <div class="flex items-center gap-1 mb-2"><UIcon name="i-heroicons-check text-green-500 text-md" /> {{ $t('who_buyer_adv_one') }}</div>
                    <div class="flex items-center gap-1 mb-2"><UIcon name="i-heroicons-check text-green-500 text-md" /> {{ $t('who_buyer_adv_two') }}</div>
                    <div class="flex items-center gap-1 mb-2"><UIcon name="i-heroicons-check text-green-500 text-md" /> {{ $t('who_buyer_adv_three') }}</div>
                    <div class="flex items-center gap-1 mb-2"><UIcon name="i-heroicons-check text-green-500 text-md" /> {{ $t('who_buyer_adv_four') }}</div>
                </div>
            </div>
            <div class="w-[10%] invisible lg:visible"><UDivider class="h-full" label="OR" orientation="vertical" /></div>
            <div class="w-full my-3 lg:hidden"><UDivider class="h-full" label="OR" orientation="horizontal" /></div>
            <div class="w-[70%] lg:w-[30%]">
                <h4 class="text-xl lg:text-3xl mb-4">{{ $t('who_seller') }}</h4>
                <div class="leading-5 text-sm lg:text-md flex flex-col gap-3">
                    <p>
                        {{ $t('who_seller_text_one') }}
                    </p>
                    <p>
                        {{ $t('who_seller_text_two') }}
                    </p>
                    <p>
                        {{ $t('who_seller_text_three') }}
                    </p>
                    <p>
                        {{ $t('who_seller_text_four') }}
                    </p>
                </div>
                <div class="mt-4">
                    <div class="flex items-center gap-1 mb-2"><UIcon name="i-heroicons-check text-green-500 text-md" /> {{ $t('who_seller_adv_one') }}</div>
                    <div class="flex items-center gap-1 mb-2"><UIcon name="i-heroicons-check text-green-500 text-md" /> {{ $t('who_seller_adv_two') }}</div>
                    <div class="flex items-center gap-1 mb-2"><UIcon name="i-heroicons-check text-green-500 text-md" /> {{ $t('who_seller_adv_three') }}</div>
                    <div class="flex items-center gap-1 mb-2"><UIcon name="i-heroicons-check text-green-500 text-md" /> {{ $t('who_seller_adv_four') }}</div>
                </div>
            </div>
        </div>
    </div>
</template>