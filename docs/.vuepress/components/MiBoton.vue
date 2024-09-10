<!-- .vuepress/components/MiBoton.vue -->
<template>
  <div>
    Hola?
    <button @click="increment">Clicked {{ count }} times</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Define una variable reactiva para contar los clics
const count = ref(0)

// Método para incrementar el contador
const increment = () => {
  count.value++
}
</script>
