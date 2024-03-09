<script setup>

const year = ref(new Date().getFullYear())

</script>

<template>
    <div class="w-full bg-white flex p-8 mt-8 justify-center border-t bg-stone-100">
        <div class="mr-5 max-w-[250px]">
            <div><img class="w-32 lg:-52 cursor-pointer" src="./../../assets/logo.png" alt="WallaTracker Logo"></div>
            <p class="text-sm text-zinc-600 mt-2">{{ $t('footer_title') }}</p>
            <p class="text-xs text-zinc-400">Copyright © {{ $t(year) }} - All right reserved</p>
        </div>
        <div class="ml-5">
            <div class="text-lg text-stone-600">Legal</div>
            <div class="flex flex-col text-sm">
                <NuxtLink class="hover:text-gray-500" to="/terms-conditions">{{ $t('tos_title') }}</NuxtLink>
                <NuxtLink class="hover:text-gray-500" to="/privacy-policy">{{ $t('privacy_policy_title') }}</NuxtLink>
                <NuxtLink class="hover:text-gray-500" to="/cookies">{{ $t('cookies_title') }}</NuxtLink>
            </div>
        </div>
        <div class="ml-5 max-w-[250px]">
            <div class="text-lg text-stone-600">Contacto</div>
            <div class="flex flex-col text-xs">
                <p>{{ $t('footer_contact_claim') }} <a href="mailto:hola@wallatracker.com">hola@wallatracker.com</a></p>
            </div>
        </div>
    </div>
</template>
  