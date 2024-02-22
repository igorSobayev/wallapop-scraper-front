<script setup>

const { t } = useI18n()

useHead({
  title: t('tos_title'),
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
        <div class="lg:w-[50%] flex flex-col gap-3">
            <h2 class="text-2xl">{{ $t('tos_title') }}</h2>
            <div>
                <p>1. {{ $t('tos_introduction') }}</p>
                <p class="mb-3">{{ $t('tos_introduction_text') }}</p>

                <p>2. {{ $t('tos_agreement') }}</p>
                <p class="mb-3">{{ $t('tos_agreement_text') }}</p>

                <p>3. {{ $t('tos_access') }}</p>
                <p class="mb-3">{{ $t('tos_access_text_one') }}</p>
                <p class="mb-3">{{ $t('tos_access_text_two') }}</p>
                <p class="mb-3">{{ $t('tos_access_text_three') }}</p>

                <p>4. {{ $t('tos_refunds') }}</p>
                <p class="mb-3">{{ $t('tos_refunds_text') }}</p>

                <p>5. {{ $t('tos_disclaimer') }}</p>
                <p class="mb-3">{{ $t('tos_disclaimer_text') }}</p>

                <p>6. {{ $t('tos_warranties') }}</p>
                <p class="mb-3">{{ $t('tos_warranties_text_one') }}</p>
                <p class="mb-3">{{ $t('tos_warranties_text_two') }}</p>

                <p>7. {{ $t('tos_responsabilities') }}</p>
                <p class="mb-3">{{ $t('tos_responsabilities_text') }}</p>
                
                <p>8. {{ $t('tos_general') }}</p>
                <p class="mb-3">{{ $t('tos_general_text') }}</p>

                <p class="mt-2">{{ $t('tos_update') }}</p>
            </div>
        </div>
    </div>
</template>
  
