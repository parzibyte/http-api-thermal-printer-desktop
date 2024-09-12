import { defineClientConfig } from 'vuepress/client'
import MiBoton from './components/MiBoton.vue'
import Playground from './components/Playground.vue'
import './styles/estilos.css'
export default defineClientConfig({
    enhance({ app }) {
    // Registrar el componente globalmente
    app.component('MiBoton', MiBoton)
    app.component('Playground', Playground)
  },
})
