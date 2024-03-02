<script setup>
import { ref, useToast, useRouter } from '../../.nuxt/imports'
import { useAuthStore } from '../../store/auth'
import NKPasswordInput from '../../components/custom/NKPasswordInput.vue'
import { useI18n } from 'vue-i18n'
import { VueSpinnerBall } from 'vue3-spinners'

const toast = useToast()
const authStore = useAuthStore()
const router = useRouter()
const { t } = useI18n()

useHead({
  title: t('forgotPasswordTitle'),
  meta: [
    {
      name: 'description',
      content: 'TODO: SEO' 
    },
  ],
})

const state = ref({
  email: ''
})

const newPasswordState = ref({
  email: '',
  resetCode: '',
  newPassword: '',
  repeatedNewPassword: '',
})

const loading = ref(false)

const resetCodeSend = ref(false)

const validate = (state) => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: t('required') })
  return errors
}

const validateResetCode = (state) => {
  const errors = []
  if (!state.email) errors.push({ path: 'userEmail', message: t('required') })
  if (!state.resetCode) errors.push({ path: 'resetCode', message: t('required') })
  if (!state.newPassword) errors.push({ path: 'newPassword', message: t('required') })
  if (!state.repeatedNewPassword) errors.push({ path: 'repeatedNewPassword', message: t('required') })
  if (state.newPassword !== state.repeatedNewPassword) errors.push({ path: 'newPassword', message: t('passwordsNotMatch') })
  return errors
}

const form = ref()
const formResetPass = ref()

async function sendResetCode () {
  await form.value.validate()

  loading.value = true

  authStore
    .forgotPassword(state.value.email)
    .then(() => {
      loading.value = false
      resetCodeSend.value = true
    })
    .catch((error) => {
      resetCodeSend.value = false
      loading.value = false
      console.log("API error", error)
    })
}

async function resetPassword () {
  await formResetPass.value.validate()
  
  loading.value = true
  
  authStore
    .resetPassword({
      email: newPasswordState.value.email,
      newPassword: newPasswordState.value.newPassword,
      resetCode: newPasswordState.value.resetCode,
    })
    .then(() => {
      loading.value = false
      toast.add({ title: t('passwordRecovered') })
      router.push("/login")
    })
    .catch((error) => console.log("API error", error))
}

</script>

<template>
    <div class="flex justify-center items-center h-[80vh]">
        <div class="bg-white p-5 rounded-md">

            <div class="flex justify-center mb-3" v-if="loading">
              <VueSpinnerBall size="30" color="primary" class="mt-3" />
            </div>

            <UForm
            ref="form"
            :validate="validate"
            :state="state"
            :validate-on="['submit']"
            @submit="sendResetCode"
            v-if="!resetCodeSend && !loading"
            >
              <UFormGroup label="Email" name="email">
                  <UInput type="email" name="email" v-model="state.email" />
              </UFormGroup>
          
              <UButton type="submit" class="mt-4" block>
                  {{ $t('getResetCode') }}
              </UButton>
            </UForm>

            <UForm
            ref="formResetPass"
            :validate="validateResetCode"
            :state="newPasswordState"
            :validate-on="['submit']"
            @submit="resetPassword"
            v-if="resetCodeSend && !loading"
            >
              <UFormGroup class="mt-4" label="Email" name="userEmail">
                  <UInput type="email" name="userEmail" v-model="newPasswordState.email" />
              </UFormGroup>

              <UFormGroup class="mt-4" :label="$t('resetCode')" name="resetCode">
                  <UInput type="text" name="resetCode" v-model="newPasswordState.resetCode" />
              </UFormGroup>

              <NKPasswordInput v-model="newPasswordState.newPassword" :label="$t('newPassword')" name="newPassword" class="mt-4" />

              <NKPasswordInput v-model="newPasswordState.repeatedNewPassword" :label="$t('repeatNewPassword')" class="mt-4 w-full" name="repeatedNewPassword" />

              <UButton type="submit" class="mt-4" block>
                  {{ $t('changePassword') }}
              </UButton>
            </UForm>
        </div>
    </div>
</template>