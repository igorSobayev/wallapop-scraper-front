<script setup>
import { useAuthStore } from '../../../store/auth'
import { useI18n } from 'vue-i18n'
import { VueSpinnerBall } from 'vue3-spinners'
import { useUserStore } from '~/store/user'

const authStore = useAuthStore()
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()
const { t } = useI18n()

useHead({
  title: t('verify'),
  meta: [
    {
      name: 'description',
      content: 'TODO: SEO' 
    },
  ],
})

const loading = ref(true)
const showForm = ref(false)
const errorOnVerify = ref(false)
const errorMessage = ref('Ha ocurrido algún error al intentar verificar, intentalo otra vez o contacto con el equipo técnico')

const state = ref({
  username: '',
  code: '',
})

const validate = (state) => {
  const errors = []
  if (!state.username) errors.push({ path: 'username', message: t('required') })
  if (!state.code) errors.push({ path: 'code', message: t('required') })
  return errors
}

const form = ref()

async function submit () {
  await form.value.validate()

  const { username, code } = state.value

  await verify(username, code)
    
}

async function verify (username, code) {
    loading.value = true
    showForm.value = false

    await authStore.verify(username, code).then(async res => {
        loading.value = false
        showForm.value = false
        errorOnVerify.value = false

        // Check if comes from landing
        const planCookie = useCookie('wsPlan')

        if (planCookie.value) {
            const session = await userStore.createCheckoutSession(planCookie.value)

            window.location.replace(session.url)
        }        

    }).catch(e => {
        errorOnVerify.value = true
        loading.value = false
        showForm.value = true

        if (e.name === 'AlreadyActiveError') {
            errorMessage.value = 'El usuario ya esta activo'
        }

        if (e.name === 'InvalidCodeError') {
            errorMessage.value = 'El codigo utilizado es incorrecto'
        }
    })
}

onNuxtReady(async () => {
    const { username, code } = route.query

    showForm.value = !username && !code

    // Username y code estan, por lo cual intentamos verificar directamente
    if (!showForm.value) {
        await verify(username, code)
    }
})
</script>

<template>
    <div class="flex items-center justify-center h-[80vh]">
        <div v-if="showForm">
            <div v-if="errorOnVerify" class="text-red-600 text-lg text-center">{{ errorMessage }}</div>
            <UForm
                class="bg-white p-5 rounded-md"
                ref="form"
                :validate="validate"
                :state="state"
                :validate-on="['submit']"
                @submit="submit"
            >
                <UFormGroup name="username" :label="$t('username')" class="mt-3">
                    <UInput v-model="state.username" placeholder="johndoe" />
                </UFormGroup>

                <UFormGroup name="code" label="Codigo" class="mt-3">
                    <UInput v-model="state.code" placeholder="42sdq5" icon="i-heroicons-envelope" />
                </UFormGroup>

                <UButton block type="submit" class="mt-5" :label="$t('Verificar')" />
            </UForm>
        </div>
        <div v-else>
            <div v-if="loading" class="flex gap-2 flex-col items-center"> 
                <p class="text-2xl">¡Ya casi lo tenemos, se esta terminando de verificar tu dirección!</p>
                <VueSpinnerBall size="60" color="primary" class="mt-3" />
            </div>
            <div v-else class="flex gap-2 flex-col items-center">
                <p class="text-3xl">¡Todo listo, ya puedes iniciar sesión!</p>
                <UButton class="mt-5" size="xl" to="/login" :label="$t('login')" />
            </div>
        </div>
    </div>
</template>
