<script setup>

const { t } = useI18n()

useHead({
  title: t('privacy_policy_title'),
  meta: [
    {
      name: 'description',
      content: 'TODO: SEO' 
    },
  ],
})

</script>

<template>
    <div class="flex justify-center">
        <div class="w-[50%] flex flex-col gap-3">
            <h2 class="text-2xl">{{ $t('privacy_policy_title') }}</h2>
            <div>
                <p class="mb-3">{{ $t('privacy_policy_text_1') }}</p>

                <p class="mb-3">{{ $t('privacy_policy_text_2') }}</p>

                <p class="mb-3">{{ $t('privacy_policy_text_4') }}</p>

                <p class="mb-3">{{ $t('privacy_policy_text_5') }}</p>

                <p class="mb-3">{{ $t('privacy_policy_text_6') }}</p>

                <p class="mb-3">{{ $t('privacy_policy_text_7') }}</p>

                <p class="mb-3">{{ $t('privacy_policy_text_8') }}</p>

                <p class="mb-3">{{ $t('privacy_policy_text_9') }}</p>

                <p class="mb-3">{{ $t('privacy_policy_text_10') }}</p>
            </div>
        </div>
    </div>
</template>
  
