<script setup>

const { t } = useI18n()

useHead({
  title: t('cookies_title'),
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
            <h2 class="text-2xl">{{ $t('cookies_title') }}</h2>
            <div>
                <p class="mb-3">{{ $t('cookies_date') }}</p>

                <p class="mb-3">{{ $t('cookies_introduction') }}</p>

                <b>{{ $t('cookies_one_title') }}</b>
                <p class="mb-3">{{ $t('cookies_one_text') }}</p>

                <b class="mb-1">{{ $t('cookies_two_title') }}</b> <br />
                <b class="mb-2">{{ $t('cookies_two_necesary') }}</b>
                <ul class="mb-3">
                  <li>- {{ $t('cookies_two_necesary_one') }}</li>
                  <li>- {{ $t('cookies_two_necesary_two') }}</li>
                </ul>

                <b class="mb-2">{{ $t('cookies_two_analytics') }}</b>
                <ul class="mb-3">
                  <li>- {{ $t('cookies_two_analytics_one') }}</li>
                </ul>

                <b>{{ $t('cookies_three_title') }}</b>
                <p class="mb-3">{{ $t('cookies_three_text') }}</p>

                <b>{{ $t('cookies_four_title') }}</b>
                <p class="mb-3">{{ $t('cookies_four_text') }}</p>

                <b>{{ $t('cookies_five_title') }}</b>
                <p class="mb-3">{{ $t('cookies_five_text') }}</p>

            </div>
        </div>
    </div>
</template>
  
