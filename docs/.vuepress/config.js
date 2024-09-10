import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

export default defineUserConfig({
  base: "/dist/",
  locales: {
    "/es/": {
      lang: "es-ES",
      title: "En español",
      description: "API HTTP impresora térmica",
    },
    "/": {
      lang: "en-US",
      title: "En inglés",
      description: "HTTP thermal plugin API"
    },
  },
  plugins: [
    //registerComponentsPlugin(),
  ],

  title: 'Plugin para Impresora térmica',
  description: 'Controla tu impresora térmica con una API HTTP',

  theme: defaultTheme({
    locales: {
      "/es/": {
        prev: "Anterior",
        next: "Siguiente",
        selectLanguageName: "Español",
        navbar: [
          '/es/', '/es/get-started', '/es/introduccion', '/es/guia', {
            text: "Text",
            children: ["/es/guia/descargar-plugin.md", "/es/guia/comenzar.md", "/es/guia/compartir-impresora.md"]
          }
        ],
        sidebar: {
          "/es/guia/": [
            {
              text: "TExtttt",
              children: [
                "/es/guia/comenzar.md",
                "/es/guia/compartir-impresora.md",
                "/es/guia/descargar-plugin.md",
              ]
            }
          ]
        },
      },
      "/": {
        selectLanguageName: "English",
        navbar: [
          '/', '/get-started', '/introduccion', '/guia', {
            text: "Text",
            children: ["/guia/descargar-plugin.md", "/guia/comenzar.md", "/guia/compartir-impresora.md"]
          }
        ],
        sidebar: {
          "/guia/": [
            {
              text: "English",
              children: [
                "/guia/comenzar.md",
                "/guia/compartir-impresora.md",
                "/guia/descargar-plugin.md",
              ]
            }
          ]
        }
      }
    },
    lastUpdatedText: "AAAAAAAA",
    logo: '/images/header.jpg',
  }),

  bundler: viteBundler(),
})
