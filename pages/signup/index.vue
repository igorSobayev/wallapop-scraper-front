<script setup>
import { useAuthStore } from '../../store/auth'
import NKPasswordInput from '../../components/custom/NKPasswordInput.vue'
import { useI18n } from 'vue-i18n'
import { VueSpinnerBall } from 'vue3-spinners'

const authStore = useAuthStore()
const router = useRouter()
const { t } = useI18n()

useHead({
  title: t('signup'),
  meta: [
    {
      name: 'description',
      content: 'TODO: SEO' 
    },
  ],
})

const loading = ref(false)

const state = ref({
  username: '',
  email: '',
  password: '',
  repeatPassword: '',
  userRegistered: false,
  alertTitle: t('succesfullyRegistered'),
})

const validate = (state) => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: t('required') })
  if (!state.username) errors.push({ path: 'username', message: t('required') })
  if (!state.password) errors.push({ path: 'password', message: t('required') })
  if (!state.repeatPassword) errors.push({ path: 'repeatPassword', message: t('required') })
  if (state.password !== state.repeatPassword) errors.push({ path: 'repeatPassword', message: t('passwordsNotMatch') })
  return errors
}

const form = ref()

async function submit () {
  await form.value.validate()

    loading.value = true
    authStore
        .signup({
            username: state.value.username,
            email: state.value.email,
            password: state.value.password,
        })
        .then(() => {
            loading.value = false
            state.value.userRegistered = true
        })
        .catch((error) => console.log("API error", error))
}

onNuxtReady(() => {
    if (authStore.isLoggedIn) {
        router.push(`/users/${authStore.user.username}`)
    }
})
</script>

<template>
    <div v-if="!state.userRegistered" class="flex items-center justify-center flex-col h-[80vh]">
        <VueSpinnerBall v-if="loading" size="30" color="primary" class="text-center" />
        <UForm
            class="bg-white p-5 rounded-md"
            ref="form"
            :validate="validate"
            :state="state"
            :validate-on="['submit']"
            @submit="submit"
        >
            <UFormGroup name="username" :label="$t('user')" class="mt-3">
                <UInput v-model="state.username" />
            </UFormGroup>

            <UFormGroup name="email" label="Email" class="mt-3">
                <UInput v-model="state.email" placeholder="you@example.com" icon="i-heroicons-envelope" />
            </UFormGroup>

            <div class="grid md:grid-cols-2 grid-cols-1 gap-4 mt-3">
                <NKPasswordInput v-model="state.password" :label="$t('password')" name="password" />
                <NKPasswordInput v-model="state.repeatPassword" :label="$t('repeatPassword')" name="repeatPassword" />
            </div>

            <div class="mt-3">
                <UCheckbox :label="$t('signup_check_conditions_label')" required />
                <div class="text-xs"><NuxtLink class="hover:text-gray-500" to="/terms-conditions">{{ $t('signup_check_conditions_text') }}</NuxtLink></div>
            </div>

            <UButton block type="submit" :disabled="loading" class="mt-5" :label="$t('signup')" />
        </UForm>
    </div>
    <div v-else class="flex items-center justify-center h-[80vh]">
        <UAlert icon="i-emojione-v1-party-popper" color="primary" variant="solid" :title="state.alertTitle">
            <template #description>
                <span>{{ $t('registerFormSend') }}</span>
            </template>
        </UAlert>
    </div>
</template>
