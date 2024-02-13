<script setup>
import WSPlansTable from '~/components/custom/WSPlansTable.vue'
</script>


<template>
    <div class="flex flex-col items-center">
        <div class="flex flex-col items-center gap-2">
            <h3 class="text-sm font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">Precios</h3>
            <div class="text-2xl">Reduce a la mitad el tiempo de gestión de tus productos</div>
            <div class="text-sm text-slate-700 text-center mt-5">
                <p>Construye tu tabla de seguimiento en segundos</p>
                <p>¡Empieza a optimizar hoy mismo!</p>
            </div>
        </div>
    </div>
    <WSPlansTable />
</template>