// import { defineNuxtConfig } from 'nuxt'
// import icons from './icons'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
  // @ts-ignore
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    'nuxt-rating',
    '@nuxtjs/i18n',
    ['@dargmuesli/nuxt-cookie-control', {
      localeTexts: {
        es: {
          accept: 'Aceptar',
          acceptAll: 'Aceptar todas',
          bannerDescription: 'Utilizamos cookies propias y de terceros para poder mostrar correctamente este sitio web y comprender mejor cómo se utiliza, con el fin de mejorar los servicios que ofrecemos. La decisión sobre los permisos de uso de cookies puede modificarse en cualquier momento mediante el botón de cookies que aparecerá tras realizar una selección en este banner.',
          bannerTitle: 'Cookies',
          close: 'Cerrar',
          cookiesFunctional: 'Cookies funcionales',
          cookiesNecessary: 'Cookies necesarias',
          cookiesOptional: 'Cookies opcionales',
          decline: 'Rechazar',
          declineAll: 'Rechazar todo',
          here: 'aquí',
          manageCookies: 'Revisar y configurar',
          save: 'Guardar',
          settingsUnsaved: 'Tienes cambios sin guardar',
        }
      },
      locales: ['es'],
      cookies: {
        necessary: [
          {
            description: {
              en: 'Translations',
              es: 'Traducciones',
            },
            id: 'i18n_redirect',
            name: {
              en: 'i18n',
              es: 'i18n',
            },
            targetCookieIds: ['i18n_redirect']
          },
          {
            description: {
              en: 'Use to be authenticated',
              es: 'Usada para la autentificación',
            },
            id: 'auth',
            name: {
              en: 'Login',
              es: 'Inicio de sesión',
            },
            targetCookieIds: ['auth']
          }          
        ],
        optional: [
          {
            description: {
              en: 'Google Analytics',
              es: 'Google Analytics',
            },
            id: 'gtag',
            name: {
              en: 'GA',
              es: 'GA',
            },
            targetCookieIds: ['gtag']
          }
        ]
      }
    }],
    'nuxt-gtag',
  ],
  gtag: {
    id: process.env.GOOGLE_ANALYTICS,
    initialConsent: false
  },
  ui: {
    icons: ['material-symbols', 'icon-park', 'icon-park-outline', 'mingcute', 'emojione-v1']
  },
  css: ['~/assets/css/custom.css'],
  colorMode: {
    preference: 'light'
  }
})
