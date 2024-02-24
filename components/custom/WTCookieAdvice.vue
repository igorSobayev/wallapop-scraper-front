<template>
    <CookieControl :locale="lang">
    </CookieControl>
</template>
  

<script setup>
const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions,
} = useCookieControl()

const lang = ref('es')

// example: react to a cookie being accepted
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    console.log(current)
    if (
      !previous?.includes('gtag') &&
      current?.includes('gtag')
    ) {
      // cookie with id `google-analytics` got added
      window.location.reload() // placeholder for your custom change handler
    }
  },
  { deep: true },
)

onNuxtReady(async () => {
    const userLangSelection = useCookie('i18n_redirected')
    if (userLangSelection.value) {
        lang.value = userLangSelection.value
    }
})
</script>
