<script setup></script>


<template>
    <div class="flex flex-col items-center gap-2">
        <h3 class="text-sm font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">¿Cómo funciona?</h3>
        <div class="mb-5 text-2xl">Empieza el seguimiento de todos tus productos hoy mismo</div>
        <div class="flex flex-col mt-5">
            <div class="flex flex-row gap-3 items-center">
                <div class="w-12 h-12 text-xl font-bold border-2 rounded-full flex justify-center items-center mr-5 ">1</div>
                <div class="">
                    <h4 class="text-xl mb-3 font-bold">Introduce el enlace del producto</h4>
                    <p class="text-sm w-80">Busca en Wallapop el producto al que quieres realizar el seguimiento y copia su enlace en el tracker</p>
                </div>
            </div>
            <div class="text-center mt-5 mb-5"><UIcon name="i-heroicons-arrow-long-down text-5xl font-bold bg-gradient-to-b from-amber-500 to-pink-500" /></div>
            <div class="flex flex-row gap-3 items-center mt-5">
                <div class="w-12 h-12 text-xl font-bold border-2 rounded-full flex justify-center items-center mr-5">2</div>
                <div class="">
                    <h4 class="text-xl mb-3 font-bold">El bot busca la información</h4>
                    <p class="text-sm w-80">Se va a realizar una búsqueda automática inicial para cargar la información del producto</p>
                </div>
            </div>
            <div class="text-center mt-5 mb-5"><UIcon name="i-heroicons-arrow-long-down text-5xl font-bold bg-gradient-to-b from-amber-500 to-pink-500" /></div>
            <div class="flex flex-row gap-3 items-center mt-5">
                <div class="w-12 h-12 text-xl font-bold border-2 rounded-full flex justify-center items-center mr-5">3</div>
                <div class="">
                    <h4 class="text-xl mb-3 font-bold">Recibe actualizaciones</h4>
                    <p class="text-sm w-80">Una vez cargada la información, el bot va a realizar actualizaciones periodicas para counstruir un historico de la evolución del estado del producto</p>
                </div>
            </div>
        </div>
    </div>
</template>