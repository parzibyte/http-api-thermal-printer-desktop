<script setup>
const operaciones = [];
import { useSiteData } from '@vuepress/client'
import { ref, computed, onMounted } from 'vue'
import MiInput from "./MiInput.vue"
import MiBoton from "./MiBoton.vue"
import SelectSimple from "./SelectSimple.vue"
import CustomTextarea from "./CustomTextarea.vue"
const url = ref("http://localhost:8000")
const licencia = ref("")
const operacionesDisponibles = [
    {
        "id": 1,
        "nombre": "Iniciar",
        "descripcion": "Inicializar impresora. Limpia los datos en el búfer y reinicia la impresora al modo que estaba en efecto cuando fue encendida. En algunas impresoras es recomendado invocar esta función antes y después de imprimir imágenes.",
        "descripcion_ingles": "Initialize printer.Clean the data in the buffer and restart The printer to the way it was indeed when it was on. In some printers it is recommended to invoke this function before and after printing images.",
        "argumentos": []
    },
    {
        "id": 2,
        "nombre": "EscribirTexto",
        "descripcion": "Escribe texto en la impresora. El texto no será impreso hasta que se encuentre un salto de línea (\\n) o se invoque a Feed",
        "descripcion_ingles": "Write text in the printer.The text will not be printed until A line jump (\\ n) is found or feed is invoked",
        "argumentos": [
            {
                "id": 1,
                "nombre": "texto",
                "tipo": "string",
                "descripcion": "Hola",
                "descripcion_ingles": "Hello",
                "ejemplo": "Hola impresora",
                "ejemplo_ingles": "Hello printer"
            }
        ]
    },
    {
        "id": 3,
        "nombre": "Pulso",
        "descripcion": "Genera un pulso tomando en cuenta tiempoEncendido que son los milisegundos para encender y los milisegundos para apagar según tiempoApagado El pin puede ser 48 o 49 Lo recomendado es el pin 48, tiempoEncendido 60, tiempoApagado 120",
        "descripcion_ingles": "It generates a pulse taking into account ancestry time that are the milliseconds to light and the milliseconds to turn off as time The pin can be 48 or 49 The recommended thing is PIN 48, time in 60, TimeApagado 120",
        "argumentos": [
            {
                "id": 2,
                "nombre": "pin",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 3,
                "nombre": "tiempoEncendido",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 4,
                "nombre": "tiempoApagado",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 4,
        "nombre": "CorteParcial",
        "descripcion": "Corte parcial",
        "descripcion_ingles": "Partial cut",
        "argumentos": []
    },
    {
        "id": 5,
        "nombre": "Corte",
        "descripcion": "Corte completo",
        "descripcion_ingles": "Full cut",
        "argumentos": [
            {
                "id": 5,
                "nombre": "lineas",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 6,
        "nombre": "Feed",
        "descripcion": "Imprime los datos almacenados en el búfer de la impresora (almacenados al escribir texto) y avanza el papel una cantidad de lineas",
        "descripcion_ingles": "Print the data stored in the printer buffer (stored when writing text) and the paper progresses a number of lines",
        "argumentos": [
            {
                "id": 6,
                "nombre": "lineas",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 7,
        "nombre": "TextoSegunPaginaDeCodigos",
        "descripcion": "Permite escribir texto con acentos. Hay que especificar el número de página (según la impresora) y el character code page para iconv.  Si me preguntan, yo he elegido la página 2 pero en lugar de especificar cp860 (como debería ser) especifico cp850 Así puedo imprimir lo siguiente con todo y acentos, signos, etcétera cp850 con numero 2 ¿EL VELOZ MURCIÉLAGO HINDÚ COMÍA FELIZ CARDILLO Y KIWI? ¡LA CIGÜEÑA TOCABA EL SAXOFÓN DETRÁS DEL PALENQUE DE PAJA!. cp850 con número 2 ¿el veloz murciélago hindú comía feliz cardillo y kiwi? ¡la cigüeña tocaba el saxofón detrás del palenque de paja!.  Esta función no tiene ningún efecto si la versión del plugin usada es la versión que no tiene iconv",
        "descripcion_ingles": "Allows you to write text with accents.You have to specify the page number (according to the printer) and the Character Code Page for ICONV.  If they ask me, I have chosen page 2 but instead of specifying CP860 (as it should be) specific CP850 So I can print the following with everything and accents, signs, etc. CP850 with number 2 The fast Hindu bat a happily cardillo and kiwi?The stork played the saxophone behind the straw palenque! CP850 with number 2 Does the fast Hindu bat he ate happy cardillo and kiwi?The stork played the saxophone behind the straw palenque!  This function has no effect if the used plugin version is the version that has no iconv",
        "argumentos": [
            {
                "id": 7,
                "nombre": "numeroPagina",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 8,
                "nombre": "pagina",
                "tipo": "string",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 9,
                "nombre": "texto",
                "tipo": "string",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 8,
        "nombre": "EstablecerAlineacion",
        "descripcion": "Establece la alineación del texto e imágenes (incluyendo códigos de barras y QR) según la alineacion. Izquierda es 0, Centro 1 y Derecha 2",
        "descripcion_ingles": "Establish the alignment of the text and images (including bar codes and QR) According to the alignment.Left is 0, center 1 and right 2",
        "argumentos": [
            {
                "id": 10,
                "nombre": "alineacion",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 9,
        "nombre": "EstablecerEnfatizado",
        "descripcion": "Establece el tamaño de la fuente según el multiplicador de ancho y el multiplicador del alto. Ambos valores pueden ir desde el 1 hasta el 8 También afecta a los caracteres personalizados",
        "descripcion_ingles": "Set the source size according to the wide multiplier and the high multiplier.Both values ​​can range from 1 to 8 It also affects personalized characters",
        "argumentos": [
            {
                "id": 11,
                "nombre": "enfatizado",
                "tipo": "bool",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 10,
        "nombre": "EstablecerSubrayado",
        "descripcion": "Habilita o deshabilita el modo de texto subrayado",
        "descripcion_ingles": "Enable or disable underlined text mode",
        "argumentos": [
            {
                "id": 12,
                "nombre": "subrayado",
                "tipo": "bool",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 11,
        "nombre": "EstablecerImpresionAlReves",
        "descripcion": "Habilita o deshabilita la impresión al revés",
        "descripcion_ingles": "Enable or disable the impression upside down",
        "argumentos": [
            {
                "id": 13,
                "nombre": "alReves",
                "tipo": "bool",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 12,
        "nombre": "EstablecerRotacionDe90Grados",
        "descripcion": "Habilita o deshabilita la rotación de 90 grados",
        "descripcion_ingles": "Enable or disable 9 90 degrees rotation",
        "argumentos": [
            {
                "id": 14,
                "nombre": "rotar",
                "tipo": "bool",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 13,
        "nombre": "EstablecerImpresionBlancoYNegroInversa",
        "descripcion": "Habilita o deshabilita la impresión inversa. En modo inverso, el fondo es negro y el texto blanco",
        "descripcion_ingles": "Enable or disable reverse impression.In reverse mode, the background is black and the white text",
        "argumentos": [
            {
                "id": 15,
                "nombre": "invertir",
                "tipo": "bool",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 14,
        "nombre": "EstablecerFuente",
        "descripcion": "Establece la fuente, que puede ser 0 o 1. En mi caso solo soporta una fuente que es la A Tener cuidado al cambiar la fuente e intentar imprimir un carácter personalizado, pues por el momento solo funciona con la fuente A",
        "descripcion_ingles": "Set the source, which can be 0 or 1. In my case it only supports a source that is the A Be careful when changing the source and trying to print a personalized character, then At the moment it only works with the source to",
        "argumentos": [
            {
                "id": 16,
                "nombre": "fuente",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 15,
        "nombre": "HabilitarCaracteresPersonalizados",
        "descripcion": "Habilita los caracteres personalizados. Si está habilitado entonces se va a imprimir el carácter personalizado en lugar del carácter que fue reemplazado",
        "descripcion_ingles": "Enable personalized characters.If you are enabled then you will print the personalized character instead of the character that was replaced",
        "argumentos": []
    },
    {
        "id": 16,
        "nombre": "DeshabilitarCaracteresPersonalizados",
        "descripcion": "Deshabilita los caracteres personalizados",
        "descripcion_ingles": "Disable custom characters",
        "argumentos": []
    },
    {
        "id": 17,
        "nombre": "DefinirCaracterPersonalizado",
        "descripcion": "Establece un carácter personalizado de 24x12. Es útil para imprimir caracteres no soportados por algunas impresoras, ya sea el euro, centavo o lo que puedas dibujar en un cuadro de 24x12 Esta función establece el carácter personalizado pero no lo imprime. Solo hace falta llamarla a una vez, y después cada que se imprima el carácter reemplazado se va a imprimir el personalizado La matrizComoCadena debe ser, como su nombre lo dice, una matriz como cadena. Debe tener exactamente 24 líneas (separadas por un salto de línea) y en cada línea debe haber exactamente 12 dígitos, cada dígito debe ser un 1 o un 0. No debe haber tabulaciones ni espacios extra  Nota: la matriz es de 24x12 porque así es la fuente A. Si fuera la fuente B sería de 17x9, pero esa fuente no funciona en mi impresora así que no he probado. Es decir, no intentes esto si tienes seleccionada la fuente B",
        "descripcion_ingles": "Establishes a personalized 24x12 character.It is useful for printing characters not supported by some printers, either the euro, penny or what You can draw in a 24x12 box This function establishes the personalized character but does not print it.Only It is necessary to call it once, and then every time the replaced character is printed You will print the personalized The environmental matrix must be, as its name says, a matrix as a chain.You must have exactly 24 lines (separated by a line jump) and in each line there must be exactly 12 digits, each digit It must be a 1 or 0. There should be no tabulations or extra spaces  Note: The matrix is ​​24x12 because this is the source A. If it were the source B would be 17x9, but that source It doesn't work in my printer so I haven't tried.That is, do not try this if you have source B select",
        "argumentos": [
            {
                "id": 17,
                "nombre": "caracterRemplazoComoCadena",
                "tipo": "string",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 18,
                "nombre": "matrizComoCadena",
                "tipo": "string",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 18,
        "nombre": "CargarImagenLocalEImprimir",
        "descripcion": "Imprime una imagen usando el algoritmo NV Graphics. El ancho de la imagen debe ser múltiplo de 8. Si el ancho de la imagen es mayor al anchoMaximo especificado, la misma será redimensionada para que su ancho sea anchoMaximo",
        "descripcion_ingles": "Print an image using the NV Graphics algorithm.The image width must be a multiple of 8. If the image width is greater than the specified anchomaximo, it will be resolved so that Its wide be anchomaximo",
        "argumentos": [
            {
                "id": 19,
                "nombre": "ruta",
                "tipo": "string",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 20,
                "nombre": "maximoAncho",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 21,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 22,
                "nombre": "aplicarDithering",
                "tipo": "bool",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 19,
        "nombre": "DescargarImagenDeInternetEImprimir",
        "descripcion": "Descarga una imagen de internet y la imprime. La imagen debe ser accesible públicamente usando solo la URL. La imagen será convertida a blanco y negro. Si el ancho de la imagen es mayor que maximoAncho, la imagen será redimensionada para que coincida con el maximoAncho El algoritmo se refiere al algoritmo usado al imprimir una imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ El parámetro aplicarDithering indica si se debe aplicar el algoritmo Floyd-Steinberg-Dithering a la imagen antes de ser impresa. Es recomendado aplicarlo en fotografías, así se mantiene la iluminación y los detalles incluso al ser convertida a blanco y negro. Más información sobre dithering: https://parzibyte.me/blog/2024/07/28/algoritmo-floyd-steinberg-dithering-golang/",
        "descripcion_ingles": "Download an internet image and print it.The image must be publicly accessible using only the URL. The image will be converted to black and white. If the image width is greater than maximoancho, the image will be resolved to coincide with the maximoancho The algorithm refers to the algorithm used by printing an image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-impprimprima-imagenes-impressoras-termicas/ The applied parameter indicates whether the Floyd-Steinberg-Dithhering algorithm should be applied to the image before be printed.It is recommended to apply it in photographs, this is how lighting and details are maintained When converted to black and white. More information about dithering: https://parzibyte.me/blog/2024/07/28/algorithmo-floyd-steinberg-dithhering-golang/",
        "argumentos": [
            {
                "id": 23,
                "nombre": "urlImagen",
                "tipo": "string",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "https://github.com/parzibyte.png",
                "ejemplo_ingles": "https://github.com/parzibyte.png"
            },
            {
                "id": 24,
                "nombre": "maximoAncho",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": 380,
                "ejemplo_ingles": 380
            },
            {
                "id": 25,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": 0,
                "ejemplo_ingles": 0
            },
            {
                "id": 26,
                "nombre": "deberiaAplicarDithering",
                "tipo": "bool",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": true,
                "ejemplo_ingles": true
            }
        ]
    },
    {
        "id": 20,
        "nombre": "GenerarImagenAPartirDeHtmlEImprimir",
        "descripcion": "Genera una imagen a partir del html usando el anchoPagina como el ancho de la pantalla del navegador web para renderizar la imagen Después, imprime esa imagen con el maximoAncho y el algoritmo indicado La imagen será convertida a blanco y negro. Si el ancho de la imagen es mayor que maximoAncho, la imagen será redimensionada para que coincida con el maximoAncho El algoritmo se refiere al algoritmo usado al imprimir una imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ El parámetro aplicarDithering indica si se debe aplicar el algoritmo Floyd-Steinberg-Dithering a la imagen antes de ser impresa. Es recomendado aplicarlo en fotografías, así se mantiene la iluminación y los detalles incluso al ser convertida a blanco y negro. Más información sobre dithering: https://parzibyte.me/blog/2024/07/28/algoritmo-floyd-steinberg-dithering-golang/",
        "descripcion_ingles": "It generates an image from the HTML using the canopagin as the width of the screen of the web browser to render the image Then, print that image with the maximoancho and the algorithm indicated The image will be converted to black and white. If the image width is greater than maximoancho, the image will be resolved to coincide with the maximoancho The algorithm refers to the algorithm used by printing an image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-impprimprima-imagenes-impressoras-termicas/ The applied parameter indicates whether the Floyd-Steinberg-Dithhering algorithm should be applied to the image before be printed.It is recommended to apply it in photographs, this is how lighting and details are maintained When converted to black and white. More information about dithering: https://parzibyte.me/blog/2024/07/28/algorithmo-floyd-steinberg-dithhering-golang/",
        "argumentos": [
            {
                "id": 27,
                "nombre": "html",
                "tipo": "string",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 28,
                "nombre": "anchoPagina",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 29,
                "nombre": "maximoAncho",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 30,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 31,
                "nombre": "deberiaAplicarDithering",
                "tipo": "bool",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 21,
        "nombre": "GenerarImagenAPartirDePaginaWebEImprimir",
        "descripcion": "Genera una imagen a partir del html generado por la página web ubicada en la direccionPagina usando el anchoPagina como el ancho de la pantalla del navegador web para renderizar la imagen Después, imprime esa imagen con el maximoAncho y el algoritmo indicado La imagen será convertida a blanco y negro. Si el ancho de la imagen es mayor que maximoAncho, la imagen será redimensionada para que coincida con el maximoAncho El algoritmo se refiere al algoritmo usado al imprimir una imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ El parámetro aplicarDithering indica si se debe aplicar el algoritmo Floyd-Steinberg-Dithering a la imagen antes de ser impresa. Es recomendado aplicarlo en fotografías, así se mantiene la iluminación y los detalles incluso al ser convertida a blanco y negro. Más información sobre dithering: https://parzibyte.me/blog/2024/07/28/algoritmo-floyd-steinberg-dithering-golang/",
        "descripcion_ingles": "It generates an image from the HTML generated by the website located in the directionpagine Using the canopagin as the width of the screen of the web browser to render the image Then, print that image with the maximoancho and the algorithm indicated The image will be converted to black and white. If the image width is greater than maximoancho, the image will be resolved to coincide with the maximoancho The algorithm refers to the algorithm used by printing an image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-impprimprima-imagenes-impressoras-termicas/ The applied parameter indicates whether the Floyd-Steinberg-Dithhering algorithm should be applied to the image before be printed.It is recommended to apply it in photographs, this is how lighting and details are maintained When converted to black and white. More information about dithering: https://parzibyte.me/blog/2024/07/28/algorithmo-floyd-steinberg-dithhering-golang/",
        "argumentos": [
            {
                "id": 32,
                "nombre": "direccionPagina",
                "tipo": "string",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 33,
                "nombre": "anchoPagina",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 34,
                "nombre": "maximoAncho",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 35,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 36,
                "nombre": "deberiaAplicarDithering",
                "tipo": "bool",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 22,
        "nombre": "ImprimirImagenEnBase64",
        "descripcion": "Convierte el texto en base64 a una imagen, la convierte a blanco y negro y la imprime usando el algoritmo indicado. La imagenCodificadaEnBase64 puede ser JPG o PNG y puede tener o no tener el \"base64,\" La imagen será convertida a blanco y negro. Si el ancho de la imagen es mayor que maximoAncho, la imagen será redimensionada para que coincida con el maximoAncho El algoritmo se refiere al algoritmo usado al imprimir una imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ El parámetro aplicarDithering indica si se debe aplicar el algoritmo Floyd-Steinberg-Dithering a la imagen antes de ser impresa. Es recomendado aplicarlo en fotografías, así se mantiene la iluminación y los detalles incluso al ser convertida a blanco y negro. Más información sobre dithering: https://parzibyte.me/blog/2024/07/28/algoritmo-floyd-steinberg-dithering-golang/",
        "descripcion_ingles": "Convert the text based on an image, it makes it black and white and print it using the algorithm indicated.The Imagencified in Base64 can be JPG or PNG and may or may not have the \"base64,\" The image will be converted to black and white. If the image width is greater than maximoancho, the image will be resolved to coincide with the maximoancho The algorithm refers to the algorithm used by printing an image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-impprimprima-imagenes-impressoras-termicas/ The applied parameter indicates whether the Floyd-Steinberg-Dithhering algorithm should be applied to the image before be printed.It is recommended to apply it in photographs, this is how lighting and details are maintained When converted to black and white. More information about dithering: https://parzibyte.me/blog/2024/07/28/algorithmo-floyd-steinberg-dithhering-golang/",
        "argumentos": [
            {
                "id": 37,
                "nombre": "imagenCodificadaEnBase64",
                "tipo": "string",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 38,
                "nombre": "maximoAncho",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 39,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 40,
                "nombre": "deberiaAplicarDithering",
                "tipo": "bool",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 23,
        "nombre": "ImprimirCodigoDeBarrasCode39",
        "descripcion": "Imprime un código de barras en formato Code39. El algoritmo se refiere al algoritmo usado al imprimir una imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código",
        "descripcion_ingles": "Print a bar code in CODE39 format. The algorithm refers to the algorithm used by printing an image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-impprimprima-imagenes-impressoras-termicas/ The other parameters are typical of the code generation algorithm",
        "argumentos": [
            {
                "id": 41,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 42,
                "nombre": "incluirSumaDeVerificacion",
                "tipo": "bool",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 43,
                "nombre": "modoAsciiCompleto",
                "tipo": "bool",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 44,
                "nombre": "alto",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 45,
                "nombre": "ancho",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 46,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 24,
        "nombre": "ImprimirCodigoDeBarrasCode93",
        "descripcion": "Imprime un código de barras en formato Code93. El algoritmo se refiere al algoritmo usado al imprimir una imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código",
        "descripcion_ingles": "Print a bar code in CODE93 format. The algorithm refers to the algorithm used by printing an image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-impprimprima-imagenes-impressoras-termicas/ The other parameters are typical of the code generation algorithm",
        "argumentos": [
            {
                "id": 47,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 48,
                "nombre": "alto",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 49,
                "nombre": "ancho",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 50,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 25,
        "nombre": "ImprimirCodigoDeBarrasPdf417",
        "descripcion": "Imprime un código de barras en formato PDF417 El algoritmo se refiere al algoritmo usado al imprimir una imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código Nota: el nivel de seguridad tiene que ver con el propio algoritmo del código de barras, no con el plugin. Debe ser entre 0 y 8",
        "descripcion_ingles": "Print a barcode in PDF417 format The algorithm refers to the algorithm used by printing an image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-impprimprima-imagenes-impressoras-termicas/ The other parameters are typical of the code generation algorithm Note: The security level has to do with the bargain algorithm itself, not with the plugin.It must be between 0 and 8",
        "argumentos": [
            {
                "id": 51,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 52,
                "nombre": "nivelSeguridad",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 53,
                "nombre": "alto",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 54,
                "nombre": "ancho",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 55,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 26,
        "nombre": "ImprimirCodigoDeBarrasUpcA",
        "descripcion": "Imprime un código de barras en formato UpcA El algoritmo se refiere al algoritmo usado al imprimir una imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código",
        "descripcion_ingles": "Print a bar code in UPCA format The algorithm refers to the algorithm used by printing an image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-impprimprima-imagenes-impressoras-termicas/ The other parameters are typical of the code generation algorithm",
        "argumentos": [
            {
                "id": 56,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 57,
                "nombre": "alto",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 58,
                "nombre": "ancho",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 59,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 27,
        "nombre": "ImprimirCodigoDeBarrasUpcE",
        "descripcion": "Imprime un código de barras en formato UPC E El algoritmo se refiere al algoritmo usado al imprimir una imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código",
        "descripcion_ingles": "Print a bar code in UPC and format The algorithm refers to the algorithm used by printing an image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-impprimprima-imagenes-impressoras-termicas/ The other parameters are typical of the code generation algorithm",
        "argumentos": [
            {
                "id": 60,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 61,
                "nombre": "alto",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 62,
                "nombre": "ancho",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 63,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 28,
        "nombre": "ImprimirCodigoDeBarrasEan",
        "descripcion": "Imprime un código de barras en formato Ean. El algoritmo se refiere al algoritmo usado al imprimir una imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código",
        "descripcion_ingles": "Print a bar code in EAN format. The algorithm refers to the algorithm used by printing an image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-impprimprima-imagenes-impressoras-termicas/ The other parameters are typical of the code generation algorithm",
        "argumentos": [
            {
                "id": 64,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 65,
                "nombre": "alto",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 66,
                "nombre": "ancho",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 67,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 29,
        "nombre": "ImprimirCodigoDeBarrasEan8",
        "descripcion": "Imprime un código de barras en formato Ean8 El algoritmo se refiere al algoritmo usado al imprimir una imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código",
        "descripcion_ingles": "Print a bar code in EAN8 format The algorithm refers to the algorithm used by printing an image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-impprimprima-imagenes-impressoras-termicas/ The other parameters are typical of the code generation algorithm",
        "argumentos": [
            {
                "id": 68,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 69,
                "nombre": "alto",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 70,
                "nombre": "ancho",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 71,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 30,
        "nombre": "ImprimirCodigoDeBarrasTwoOfFiveITF",
        "descripcion": "Imprime un código de barras en formato Two of five ITF (Entrelazados 2 de 5). El algoritmo se refiere al algoritmo usado al imprimir una imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código Nota: el parámetro \"intercalado\" es propio del algoritmo del código de barras, no del plugin",
        "descripcion_ingles": "Print a barcode on TWO of Five Itf format (intertwined 2 of 5). The algorithm refers to the algorithm used by printing an image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-impprimprima-imagenes-impressoras-termicas/ The other parameters are typical of the code generation algorithm Note: The \"interspersed\" parameter is typical of the barcode algorithm, not the plugin",
        "argumentos": [
            {
                "id": 72,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 73,
                "nombre": "intercalado",
                "tipo": "bool",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 74,
                "nombre": "alto",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 75,
                "nombre": "ancho",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 76,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 31,
        "nombre": "ImprimirCodigoDeBarrasCodabar",
        "descripcion": "Imprime un código de barras en formato Codabar El algoritmo se refiere al algoritmo usado al imprimir una imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código",
        "descripcion_ingles": "Print a barcode in Codabar format The algorithm refers to the algorithm used by printing an image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-impprimprima-imagenes-impressoras-termicas/ The other parameters are typical of the code generation algorithm",
        "argumentos": [
            {
                "id": 77,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 78,
                "nombre": "alto",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 79,
                "nombre": "ancho",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 80,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 32,
        "nombre": "ImprimirCodigoDeBarrasCode128",
        "descripcion": "Imprime un código de barras en formato Code128. El algoritmo se refiere al algoritmo usado al imprimir una imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código",
        "descripcion_ingles": "Print a bar code in CODE128 format. The algorithm refers to the algorithm used by printing an image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-impprimprima-imagenes-impressoras-termicas/ The other parameters are typical of the code generation algorithm",
        "argumentos": [
            {
                "id": 81,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 82,
                "nombre": "alto",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 83,
                "nombre": "ancho",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 84,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    },
    {
        "id": 33,
        "nombre": "ImprimirCodigoQr",
        "descripcion": "Imprime un código QR El algoritmo se refiere al algoritmo usado al imprimir una imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código Nota: el nivelRecuperacion es propio del algoritmo generador del QR, no del plugin. Puede ser 0 (low), 1 (medium), 2(high) y 3 (highest). Se recomienda medium",
        "descripcion_ingles": "Print a QR code The algorithm refers to the algorithm used by printing an image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-impprimprima-imagenes-impressoras-termicas/ The other parameters are typical of the code generation algorithm Note: The levelrection is typical of the QR generating algorithm, not the plugin.It can be 0 (low), 1 (medium), 2 (high) and 3 (Highest).Medium is recommended",
        "argumentos": [
            {
                "id": 85,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 86,
                "nombre": "anchoMaximo",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 87,
                "nombre": "nivelRecuperacion",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            },
            {
                "id": 88,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "",
                "descripcion_ingles": "",
                "ejemplo": "",
                "ejemplo_ingles": ""
            }
        ]
    }
];

const busqueda = ref("");

const operacionesFiltradas = computed(() => {

    if (busqueda.value === "") {

        return operacionesDisponibles;
    }
    const expresion = new RegExp(`${busqueda.value}.*`, "i");
    return operacionesDisponibles.filter(operacion => {
        if (expresion.test(operacion.descripcion) || expresion.test(operacion.nombre)) {
            return true;
        }
        return false;
    })
});
const arregloDeOperaciones = ref([]);
const siteData = useSiteData()
const agregarOperacion = (operacion) => {
    const limpia = JSON.parse(JSON.stringify(operacion));
    arregloDeOperaciones.value.push(limpia);
}


const obtenerJsonCodificado = computed(() => {
    return JSON.stringify(obtenerJsonResultante.value);
});
const obtenerJsonResultante = computed(() => {
    const jsonResultante = {
        serial: licencia.value,
        nombreImpresora: impresoraSeleccionada.value,
        operaciones: arregloDeOperaciones.value.map(operacion => {
            return {
                nombre: operacion.nombre,
                argumentos: operacion.argumentos.map(argumento => {
                    if (argumento.tipo === "float64") {
                        return parseFloat(argumento.ejemplo);
                    }

                    if (argumento.tipo === "bool") {
                        if (argumento.ejemplo === "false") {
                            return false;
                        }
                        return Boolean(argumento.ejemplo);
                    }
                    return argumento.ejemplo;
                })
            };
        }),
    };
    return jsonResultante;
});

const enviar = async () => {
    deberiaMostrarAlerta.value = false;
    const respuesta = await fetch(url.value + "/imprimir", {
        method: "POST",
        body: obtenerJsonCodificado.value,
    });
    respuestaHttp.value = await respuesta.json();
    deberiaMostrarAlerta.value = true;
    console.log({ respuesta });

}

const deberiaMostrarAlerta = ref(false);
const impresoraSeleccionada = ref("");

const codigo = computed(() => {
    return `const respuesta = await fetch("${url.value}/imprimir",
{
    method: "POST",
    body: JSON.stringify(${JSON.stringify(obtenerJsonResultante.value, null, 4)}),
    headers:{
    "Content-Type": "application/json",
},
    });`
});

const respuestaHttp = ref({ ok: false, message: "" });
const impresoras = ref([]);
const mensajeValidacionImpresora = computed(() => {
    if (impresoraSeleccionada.value) {
        return "";
    }
    return "Selecciona tu impresora";
});

const refrescarImpresoras = async () => {
    const respuesta = await fetch(url.value + "/impresoras")
    impresoras.value = await respuesta.json();
}

const eliminarOperacion = (indice) => {
    arregloDeOperaciones.value.splice(indice, 1);
}
const deberiaDeshabilitarBoton = computed(() => {
    if (!url.value) {
        return true;
    }

    if (!impresoraSeleccionada.value) {
        return true;
    }

    if (arregloDeOperaciones.value.length <= 0) {
        return true;
    }
    return false;
});

const detallesPlugin = ref({});
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const mensajeErrorVersion = ref("");


const refrescarDetalles = async () => {
    try {
        const respuestaHttp = await fetch(url.value + "/version")
        const detalles = await respuestaHttp.json();
        detallesPlugin.value = detalles;
        mensajeErrorVersion.value = "";
    } catch (e) {
        detallesPlugin.value = {};
        mensajeErrorVersion.value = e;
    } finally {
        await sleep(1500);
        await refrescarDetalles();
    }
}

onMounted(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const posibleNombreOperacion = urlSearchParams.get("operacion");
    if (posibleNombreOperacion) {
        const indice = operacionesDisponibles.findIndex(operacion => {
            return operacion.nombre === posibleNombreOperacion;
        });
        console.log({indice});
        if (indice != -1) {
            agregarOperacion(operacionesDisponibles[indice]);
        }
    }
    refrescarDetalles();
    refrescarImpresoras();
});
</script>
<template>
    <div class="flex flex-col">
        <div>
            <div class="bg-green-400 text-white p-2 rounded-md" v-if="detallesPlugin.plataforma === 'Desktop'">
                <strong>Versión: </strong> {{ detallesPlugin.plataforma }}
            </div>
            <div class="bg-red-400 text-white p-2 rounded-md"
                v-if="!detallesPlugin.plataforma || detallesPlugin.plataforma !== 'Desktop' || mensajeErrorVersion">
                Plugin no se está ejecutando {{ mensajeErrorVersion }}
            </div>
            <MiInput v-model="url" label="URL"></MiInput>
            <MiInput v-model="licencia" label="Licencia"></MiInput>
            <SelectSimple :mensajeValidacion="mensajeValidacionImpresora" v-model="impresoraSeleccionada"
                label="Selecciona tu impresora" :elementos="impresoras">
            </SelectSimple>
        </div>
    </div>

    <div class="flex flex-row">
        <div class="flex w-1/2 flex-col">
            <p v-show="arregloDeOperaciones.length <= 0">Selecciona una operación de abajo</p>
            <div class="p-2 bg-gray-200 mb-1 rounded-md hover:bg-gray-300"
                v-for="(operacion, indiceOperacion) in arregloDeOperaciones">
                <div class="flex flex-row">
                    <small class="break-all" :title="operacion.descripcion">

                        <a href="#">
                            {{ operacion.nombre }}
                        </a>
                    </small>
                </div>
                <CustomTextarea v-model="argumento.ejemplo" :title="argumento.descripcion"
                    v-for="argumento in operacion.argumentos" :label="argumento.nombre + ' (' + argumento.tipo + ')'">
                </CustomTextarea>
                <MiBoton @click="eliminarOperacion(indiceOperacion)" tipo="danger">Eliminar</MiBoton>
            </div>
        </div>
        <div class="flex w-1/2 flex-col p-1">
            <MiBoton @click="enviar" :disabled="deberiaDeshabilitarBoton">Enviar</MiBoton>
            <div class="bg-yellow-500 text-white p-2 rounded-md" v-show="deberiaMostrarAlerta">
                {{ respuestaHttp }}
            </div>
            <div class="max-w-fit overflow-auto">
                <pre><code >{{ codigo }}</code></pre>
            </div>
        </div>

    </div>
    <div class="flex flex-row">
        <strong>{{ siteData }}</strong>
    </div>
    <div class="flex flex-col">
        <MiInput v-model="busqueda" :label="'Buscar'"></MiInput>
        <div>
            <div class="p-1 mb-1 hover:bg-gray-200 hover:cursor-pointer" @click="agregarOperacion(operacion)"
                v-for="(operacion, indice) in operacionesFiltradas">
                <p>
                    <a href="#">
                        {{ operacion.nombre }}
                    </a>
                    <small class="text-xs">: {{ operacion.descripcion }}</small>
                </p>
            </div>
        </div>

    </div>
</template>