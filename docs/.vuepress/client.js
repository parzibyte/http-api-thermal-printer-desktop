import { defineClientConfig } from 'vuepress/client'
import MiBoton from './components/MiBoton.vue'

export default defineClientConfig({
  enhance({ app }) {
    // Registrar el componente globalmente
    app.component('MiBoton', MiBoton)
  },
})
