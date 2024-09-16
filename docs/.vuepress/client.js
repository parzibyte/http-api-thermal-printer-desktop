import { defineClientConfig } from 'vuepress/client'
import MiBoton from './components/MiBoton.vue'
import Playground from './components/Playground.vue'
import './styles/estilos.css'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  messages: {
    es: {
      versionPlugin: 'Plugin ejecutándose en',
      pluginNoDetectado: "Plugin no detectado",
      licencia: "Licencia (opcional)",
      seleccionaImpresora: "Selecciona tu impresora",
      seleccionaUnaOperacion: "Selecciona una operación de abajo para comenzar",
      hacerPeticion: "Hacer petición",
      buscar: "Filtrar",
      eliminarOperacion: "Eliminar",
      guiaDescarga: "Guía de descarga",
      noHayImpresoras: "No se detectaron impresoras",
      guiaCompartirImpresoras: "Guía de instalación",
      refrescarImpresoras: "Volver a cargar lista",
      expandir: "Expandir",
      contraer: "Contraer",
      nombreOperacion: "Nombre de operación",
      compartir: "Compartir",
      copiado: "Copiado",
      copiarManualmente: "Por favor copia el enlace",
    },
    en: {
      versionPlugin: 'Plugin running with platform',
      pluginNoDetectado: "Plugin not running",
      licencia: "License (optional)",
      seleccionaImpresora: "Select your printer",
      seleccionaUnaOperacion: "Select an operation below",
      hacerPeticion: "Execute request",
      buscar: "Filter",
      eliminarOperacion: "Remove",
      guiaDescarga: "Download guide",
      noHayImpresoras: "No printers detected",
      guiaCompartirImpresoras: "Install printer guide",
      refrescarImpresoras: "Refresh printer list",
      expandir: "Show info",
      contraer: "Hide info",
      nombreOperacion: "Operation's name",
      compartir: "Share",
      copiado: "Copied to clibpoard",
      copiarManualmente: "Please copy link",
    }
  }
})

export default defineClientConfig({
  enhance({ app }) {
    // Registrar el componente globalmente
    app.component('MiBoton', MiBoton)
    app.component('Playground', Playground)
    app.use(i18n)
  },
})
