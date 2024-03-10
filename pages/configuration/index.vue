<script setup>
import { useAuthStore } from '../../store/auth'
import { useUserStore } from './../../store/user'
import { onNuxtReady, ref } from '../../.nuxt/imports'
import NKPasswordInput from '../../components/custom/NKPasswordInput.vue'
import { useI18n } from 'vue-i18n'

const toast = useToast()
const authStore = useAuthStore()
const userStore = useUserStore()

const { t } = useI18n()

useHead({
  title: t('configuration'),
  meta: [
    {
      name: 'description',
      content: 'TODO: SEO' 
    },
  ],
})

const state = ref({})

const changingPassword = ref(false)

const changePasswordState = ref({
    actualPassword: '',
    newPassword: '',
    repeatedNewPassword: '',
})

function formatDate(time, returnYear = false) {
    const date = new Date(time);

    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    const hour = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);

    if (returnYear) {
        const year = ('' + date.getFullYear()).slice(-2);
        return `${hour}:${minutes} ${day}/${month}/${year}`;
    }

    return `${hour}:${minutes} ${day}/${month}`;
}

const verificationDate = computed(() => {
    return formatDate(state.value.verificationDate, true)
})

const validatePassword = (state) => {
  const errors = []
  if (!state.actualPassword) errors.push({ path: 'actualPassword', message: t('required') })
  if (!state.newPassword) errors.push({ path: 'newPassword', message: t('required') })
  if (!state.repeatedNewPassword) errors.push({ path: 'repeatedNewPassword', message: t('required') })
  if (state.newPassword !== state.repeatedNewPassword) errors.push({ path: 'newPassword', message: t('passwordsNotMatch') })
  return errors
}

const formPassword = ref()

async function changePassword () {

    await formPassword.value.validate()

    await authStore.changePassword({
        actualPassword: changePasswordState.value.actualPassword,
        newPassword: changePasswordState.value.newPassword,
        repeatedNewPassword: changePasswordState.value.repeatedNewPassword,
    })

    changingPassword.value = false

    toast.add({ title: t('passwordUpdated') })
}

function cancelChangePassword () {
    changingPassword.value = false
}

async function loadUserData () {
    state.value = await userStore.loadUserData()
}

onNuxtReady(async () => {
    await loadUserData()
})
</script>

<template>
    <div class="flex items-center justify-center">
        <div class="bg-white p-12 rounded-lg border-2 w-[60%]" v-if="!changingPassword">
            <div>
                <div class="flex justify-end mb-5">
                    <UButton @click="changingPassword = true" icon="i-heroicons-key" size="md" :label="$t('changePassword')" color="gray" class="ml-3" />
                </div>
                <div class="flex gap-2">
                    <UFormGroup name="username" :label="$t('user')" class="mt-3 w-[50%]">
                        <UInput disabled v-model="state.username" />
                    </UFormGroup>

                    <UFormGroup name="email" label="Email" class="mt-3 w-[50%]">
                        <UInput type="email" disabled v-model="state.email" placeholder="you@example.com" icon="i-heroicons-envelope" />
                    </UFormGroup>        
                </div>
                <div class="flex gap-2 flex-col mt-3">
                    <div>
                        {{ $t('config_actual_plan') }} <b class="capitalize">{{ state.plan }}</b>
                    </div>
                    <div>
                       {{ $t('config_tracks_num') }} <b>{{ state.tracksCounter }}</b>
                    </div>
                    <div>
                        {{ $t('config_update_dates') }} <b>{{ $t(`update_preference_${state.trackUpdatePreference}`) }}</b>
                    </div>
                    <div>
                        {{ $t('config_active_since') }} <b>{{ verificationDate }}</b>
                    </div>
                </div>

                <UButton v-if="state.editing" block type="submit" class="mt-5" :label="$t('save')" />
            </div>
        </div>
        <!-- Change password form -->
        <UForm
            ref="formPassword"
            :validate="validatePassword"
            :state="changePasswordState"
            @submit="changePassword"
            :validate-on="['submit']"
            class="bg-white p-12 rounded-lg border-2 w-[60%]"
            v-else
        >
            <div>
                <div class="flex justify-end mb-5">
                    <UButton type="submit" icon="i-heroicons-key" size="md" :label="$t('update')" color="gray" class="ml-3" />
                    <UButton @click="cancelChangePassword" icon="i-heroicons-x-mark" size="md" :label="$t('cancel')" color="red" class="ml-3" />
                </div>
                <div class="flex justify-center align-center flex-col items-center gap-4">
                    <NKPasswordInput v-model="changePasswordState.actualPassword" :label="$t('currentPassword')" class="mt-3 w-full" name="actualPassword" />
                    <NKPasswordInput v-model="changePasswordState.newPassword" :label="$t('newPassword')" class="mt-3 w-full" name="newPassword" />
                    <NKPasswordInput v-model="changePasswordState.repeatedNewPassword" :label="$t('repeatNewPassword')" class="mt-3 w-full" name="repeatedNewPassword" />
                </div>
            </div>
        </UForm>
    </div>
</template>
