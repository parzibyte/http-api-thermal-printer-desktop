import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: "/dist/",
  locales: {
    "/es/": {
      lang: "es-ES",
      title: "Plugin comandos ESC POS impresora térmica",
      description: "Documentación de la API HTTP REST para controlar cualquier impresora térmica conectada por cable USB y enviarle comandos ESC POS desde cualquier lenguaje de programación",
    },
    "/": {
      lang: "en-US",
      title: "ESC POS thermal printer plugin docs",
      description: "HTTP REST API docs to control any thermal printer connected by USB cable and send ESC POS commands to it from any programming language"
    },
  },
  plugins: [
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
          '/es/', '/es/get-started', '/es/introduccion', '/es/guia', "/es/playground",
          {
            text: "Operaciones disponibles",
            children: [
              '/es/esc-pos/iniciar.md',
              '/es/esc-pos/escribir-texto.md',
              '/es/esc-pos/pulso-(abrir-cajon).md',
              '/es/esc-pos/corte-parcial.md',
              '/es/esc-pos/cortar-papel.md',
              '/es/esc-pos/avanzar-papel.md',
              '/es/esc-pos/texto-segun-pagina-de-codigos.md',
              '/es/esc-pos/cambiar-alineacion.md',
              '/es/esc-pos/cambiar-tamano-de-fuente.md',
              '/es/esc-pos/cambiar-subrayado.md',
              '/es/esc-pos/cambiar-enfatizado.md',
              '/es/esc-pos/impresion-al-reves.md',
              '/es/esc-pos/rotar-90-grados.md',
              '/es/esc-pos/impresion-inversa.md',
              '/es/esc-pos/establecer-fuente.md',
              '/es/esc-pos/habilitar-caracteres-personalizados.md',
              '/es/esc-pos/deshabilitar-caracteres-personalizados.md',
              '/es/esc-pos/definir-caracter-personalizado.md',
              '/es/esc-pos/imagen-local.md',
              '/es/esc-pos/imagen-de-internet.md',
              '/es/esc-pos/html.md',
              '/es/esc-pos/pagina-web.md',
              '/es/esc-pos/imagen-en-base64.md',
              '/es/esc-pos/codigo-de-barras-code-39.md',
              '/es/esc-pos/codigo-de-barras-code-93.md',
              '/es/esc-pos/codigo-de-barras-pdf-417.md',
              '/es/esc-pos/codigo-de-barras-upc-a.md',
              '/es/esc-pos/codigo-de-barras-upc-e.md',
              '/es/esc-pos/codigo-de-barras-ean.md',
              '/es/esc-pos/codigo-de-barras-ean-8.md',
              '/es/esc-pos/codigo-de-barras-itf.md',
              '/es/esc-pos/codigo-de-barras-codabar.md',
              '/es/esc-pos/codigo-de-barras-code-128.md',
              '/es/esc-pos/codigo-qr.md'
            ],
          },
          {
            text: "Text",
            children: ["/es/guia/descargar-plugin.md", "/es/guia/comenzar.md", "/es/guia/compartir-impresora.md"]
          }
        ],
        sidebar: {
          "/es/esc-pos/": [
            '/es/esc-pos/iniciar.md',
            '/es/esc-pos/escribir-texto.md',
            '/es/esc-pos/pulso-(abrir-cajon).md',
            '/es/esc-pos/corte-parcial.md',
            '/es/esc-pos/cortar-papel.md',
            '/es/esc-pos/avanzar-papel.md',
            '/es/esc-pos/texto-segun-pagina-de-codigos.md',
            '/es/esc-pos/cambiar-alineacion.md',
            '/es/esc-pos/cambiar-tamano-de-fuente.md',
            '/es/esc-pos/cambiar-subrayado.md',
            '/es/esc-pos/cambiar-enfatizado.md',
            '/es/esc-pos/impresion-al-reves.md',
            '/es/esc-pos/rotar-90-grados.md',
            '/es/esc-pos/impresion-inversa.md',
            '/es/esc-pos/establecer-fuente.md',
            '/es/esc-pos/habilitar-caracteres-personalizados.md',
            '/es/esc-pos/deshabilitar-caracteres-personalizados.md',
            '/es/esc-pos/definir-caracter-personalizado.md',
            '/es/esc-pos/imagen-local.md',
            '/es/esc-pos/imagen-de-internet.md',
            '/es/esc-pos/html.md',
            '/es/esc-pos/pagina-web.md',
            '/es/esc-pos/imagen-en-base64.md',
            '/es/esc-pos/codigo-de-barras-code-39.md',
            '/es/esc-pos/codigo-de-barras-code-93.md',
            '/es/esc-pos/codigo-de-barras-pdf-417.md',
            '/es/esc-pos/codigo-de-barras-upc-a.md',
            '/es/esc-pos/codigo-de-barras-upc-e.md',
            '/es/esc-pos/codigo-de-barras-ean.md',
            '/es/esc-pos/codigo-de-barras-ean-8.md',
            '/es/esc-pos/codigo-de-barras-itf.md',
            '/es/esc-pos/codigo-de-barras-codabar.md',
            '/es/esc-pos/codigo-de-barras-code-128.md',
            '/es/esc-pos/codigo-qr.md'
          ],
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
          '/',
          {
            text: "Guide",
            children: ["/guide/introduction.md", "/guide/download.md", "/guide/install-share-printer.md", "/guide/hello-printer.md",]
          },
          {
            text: "API description",
            children: ["/api/introduction.md", "/api/print.md", "/api/get-printers.md", "/api/version-ping.md", "/api/forward.md", "/api/stop.md",],
          },

          {
            text: "Available ESC POS operations",
            children: [
              '/esc-pos/init.md',
              '/esc-pos/write-text.md',
              '/esc-pos/pulse-(open-cash-drawer).md',
              '/esc-pos/partial-cut.md',
              '/esc-pos/paper-cut.md',
              '/esc-pos/feed-paper.md',
              '/esc-pos/text-with-charcode-page.md',
              '/esc-pos/set-justification.md',
              '/esc-pos/change-font-size.md',
              '/esc-pos/set-underline.md',
              '/esc-pos/set-bold-text.md',
              '/esc-pos/upside-down-print.md',
              '/esc-pos/90-degrees-rotation.md',
              '/esc-pos/inverse-mode-printing.md',
              '/esc-pos/set-font.md',
              '/esc-pos/enable-custom-characters.md',
              '/esc-pos/disable-custom-characters.md',
              '/esc-pos/define-custom-character.md',
              '/esc-pos/filesystem-image.md',
              '/esc-pos/internet-image.md',
              '/esc-pos/html.md',
              '/esc-pos/webpage.md',
              '/esc-pos/base64-image.md',
              '/esc-pos/code-39-barcode.md',
              '/esc-pos/code-93-barcode.md',
              '/esc-pos/pdf-417-barcode.md',
              '/esc-pos/upc-a-barcode.md',
              '/esc-pos/upc-e-barcode.md',
              '/esc-pos/ean-barcode.md',
              '/esc-pos/ean-8-barcode.md',
              '/esc-pos/2of5-itf-barcode.md',
              '/esc-pos/codabar-barcode.md',
              '/esc-pos/code-128-barcode.md',
              '/esc-pos/qr-code.md'
            ],
          },
          "/playground",
          "/compatible-printers",
        ],
        sidebar: {
          "/esc-pos/": [
            '/esc-pos/init.md',
            '/esc-pos/write-text.md',
            '/esc-pos/pulse-(open-cash-drawer).md',
            '/esc-pos/partial-cut.md',
            '/esc-pos/paper-cut.md',
            '/esc-pos/feed-paper.md',
            '/esc-pos/text-with-charcode-page.md',
            '/esc-pos/set-justification.md',
            '/esc-pos/change-font-size.md',
            '/esc-pos/set-underline.md',
            '/esc-pos/set-bold-text.md',
            '/esc-pos/upside-down-print.md',
            '/esc-pos/90-degrees-rotation.md',
            '/esc-pos/inverse-mode-printing.md',
            '/esc-pos/set-font.md',
            '/esc-pos/enable-custom-characters.md',
            '/esc-pos/disable-custom-characters.md',
            '/esc-pos/define-custom-character.md',
            '/esc-pos/filesystem-image.md',
            '/esc-pos/internet-image.md',
            '/esc-pos/html.md',
            '/esc-pos/webpage.md',
            '/esc-pos/base64-image.md',
            '/esc-pos/code-39-barcode.md',
            '/esc-pos/code-93-barcode.md',
            '/esc-pos/pdf-417-barcode.md',
            '/esc-pos/upc-a-barcode.md',
            '/esc-pos/upc-e-barcode.md',
            '/esc-pos/ean-barcode.md',
            '/esc-pos/ean-8-barcode.md',
            '/esc-pos/2of5-itf-barcode.md',
            '/esc-pos/codabar-barcode.md',
            '/esc-pos/code-128-barcode.md',
            '/esc-pos/qr-code.md'
          ],
          "/guide/": ["/guide/introduction.md", "/guide/download.md", "/guide/install-share-printer.md", "/guide/hello-printer.md",],
          "/api/": [
            "/api/introduction.md", "/api/print.md", "/api/get-printers.md", "/api/version-ping.md", "/api/forward.md", "/api/stop.md",
          ],
        }
      }
    },
    lastUpdatedText: "AAAAAAAA",
    logo: '/images/header.jpg',
  }),

  bundler: viteBundler(),

})
