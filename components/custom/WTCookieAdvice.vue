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

const { gtag, grantConsent, revokeConsent } = useGtag()

const lang = ref('es')

// example: react to a cookie being accepted
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      !previous?.includes('gtag') &&
      current?.includes('gtag')
    ) {
      grantConsent() // TODO, grant consent checking the cookie acceptance
    }

    if (
      previous?.includes('gtag') &&
      !current?.includes('gtag')
    ) {
      revokeConsent()
    }
  },
  { deep: true },
)

onNuxtReady(async () => {
  const userLangSelection = useCookie('i18n_redirected')
  if (userLangSelection.value) {
    lang.value = userLangSelection.value
  }

  // Grant consent if the cookie is accepted
  if (cookiesEnabledIds?.value?.includes('gtag')) {
    grantConsent()
  }
})
</script>
