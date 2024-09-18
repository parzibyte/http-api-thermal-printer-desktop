<script setup lang="ts">
import { computed } from "vue";
type TipoDeBoton = "success" | "info" | "warning" | "primary" | "danger"
type PropiedadesDelComponente = {
    disabled: boolean,
    tipo: TipoDeBoton,
};
const propiedades = withDefaults(defineProps<PropiedadesDelComponente>(), {
    disabled: false,
    tipo: "info",
});
const clasesSegunTipo = computed(() => {
    return {
        "dark:bg-red-800 dark:hover:bg-red-700 bg-red-500 hover:bg-red-400 focus:bg-red-400 disabled:bg-red-200": propiedades.tipo === "danger",
        "dark:bg-sky-800 dark:hover:bg-sky-700 bg-sky-500 hover:bg-sky-400 focus:bg-sky-400 disabled:bg-sky-200 dark:disabled:bg-sky-950 disabled:cursor-not-allowed": propiedades.tipo === "info",
        "bg-green-500 hover:bg-green-400 focus:bg-green-400 disabled:bg-green-200": propiedades.tipo === "success",
        "bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 disabled:bg-indigo-200": propiedades.tipo === "primary",
        "bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-400 disabled:bg-yellow-200": propiedades.tipo === "warning",
    };
});
</script>
<template>
    <button :disabled="propiedades.disabled" :class="clasesSegunTipo"
        class="rounded-md px-3 py-2 m-1 text-white text-sm font-semibold inline-flex items-center focus:outline-none max-h-10 max-w-max flex flex-row">
        <slot></slot>
    </button>
</template>