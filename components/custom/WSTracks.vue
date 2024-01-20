<script setup>

const route = useRoute()

const people = [
    {
        id: 1,
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        email: 'lindsay.walton@example.com',
        role: 'Member'
    }
]

onNuxtReady(async () => {

})
</script>

<template>
    <div class="border">
        <UTable :rows="people" />
    </div>
</template>