<script setup>

const route = useRoute()

onNuxtReady(async () => {

})
</script>

<template>
    <div class="">
        <div class="w-full text-3xl mb-2">
            New Track
        </div>
        <div class="w-full flex gap-2 items-center">
            <div class="w-[80%]">
                <UInput icon="i-heroicons-folder-arrow-down" size="md" color="white" :trailing="false"
                    placeholder="Add link to the product" />
            </div>
            <div>
                <UButton color="primary" size="md" variant="solid">Add track</UButton>
            </div>
        </div>
    </div>
</template>