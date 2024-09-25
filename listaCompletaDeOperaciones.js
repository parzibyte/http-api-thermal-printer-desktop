export const operacionesDisponibles = [
    {
        "id": 1,
        "nombre": "Iniciar",
        nombre_corto: "Iniciar",
        nombre_corto_ingles: "Init",
        "descripcion": "Inicializar impresora. Limpia los datos en el búfer y reinicia la impresora al modo que estaba en efecto cuando fue encendida. En algunas impresoras es recomendado invocar esta función antes y después de imprimir imágenes.",
        "descripcion_ingles": "Initialize printer.Clean the data in the buffer and restart the printer to the state it was when it was turned on. In some printers it is recommended to invoke this function before and after printing images.",
        "argumentos": []
    },
    {
        "id": 2,
        "nombre": "EscribirTexto",
        nombre_corto: "Escribir texto",
        nombre_corto_ingles: "Write text",
        "descripcion": "Escribe texto en la impresora. El texto no será impreso hasta que se encuentre un salto de línea (\\n) o se invoque a Feed",
        "descripcion_ingles": "Write text in the printer. The text will not be printed until a line jump (\\n) is found or Feed is invoked",
        "argumentos": [
            {
                "id": 1,
                "nombre": "texto",
                "tipo": "string",
                "descripcion": "Texto que se imprime",
                "descripcion_ingles": "Text to be printed",
                "ejemplo": "Hola impresora\n",
                "ejemplo_ingles": "Hello printer\n"
            }
        ]
    },
    {
        "id": 3,
        "nombre": "Pulso",
        nombre_corto: "Pulso (abrir cajón)",
        nombre_corto_ingles: "Pulse (Open cash drawer)",
        "descripcion": "Genera un pulso eléctrico (sirve para abrir el cajón de dinero) tomando en cuenta el tiempo encendido que son los milisegundos para encender y los milisegundos para apagar según el tiempo de apagado. El pin puede ser 48 o 49. Lo recomendado es el pin 48, tiempo encendido de 60 y tiempoApagado de 120",
        "descripcion_ingles": "It generates an electric pulse (used to open the cash drawer) taking into account the on time which are the milliseconds to turn on and the milliseconds to turn off according to the off time. The pin can be 48 or 49. The recommended pin is 48, on time of 60 and off time of 120.",
        "argumentos": [
            {
                "id": 2,
                "nombre": "pin",
                "tipo": "float64",
                "descripcion": "Número de pin (48 o 49)",
                "descripcion_ingles": "Pin number (48 or 49)",
                "ejemplo": 48,
                "ejemplo_ingles": 48
            },
            {
                "id": 3,
                "nombre": "tiempoEncendido",
                "tipo": "float64",
                "descripcion": "Tiempo encendido del pulso en milisegundos",
                "descripcion_ingles": "Pulse on time in ms",
                "ejemplo": 60,
                "ejemplo_ingles": 60,
            },
            {
                "id": 4,
                "nombre": "tiempoApagado",
                "tipo": "float64",
                "descripcion": "Tiempo apagado del pulso en milisegundos",
                "descripcion_ingles": "Off time pulse in ms",
                "ejemplo": 120,
                "ejemplo_ingles": 120
            }
        ]
    },
    {
        "id": 4,
        "nombre": "CorteParcial",
        "descripcion": "Corte parcial",
        nombre_corto: "Corte parcial",
        nombre_corto_ingles: "Partial cut",
        "descripcion_ingles": "Partial cut",
        "argumentos": []
    },
    {
        "id": 5,
        "nombre": "Corte",
        nombre_corto: "Cortar papel",
        nombre_corto_ingles: "Paper cut",
        "descripcion": "Corte completo",
        "descripcion_ingles": "Full cut",
        "argumentos": [
            {
                "id": 5,
                "nombre": "lineas",
                "tipo": "float64",
                "descripcion": "Líneas de avance de papel",
                "descripcion_ingles": "Line feed number",
                "ejemplo": 1,
                "ejemplo_ingles": 1
            }
        ]
    },
    {
        "id": 6,
        "nombre": "Feed",
        nombre_corto: "Avanzar papel",
        nombre_corto_ingles: "Feed paper",
        "descripcion": "Imprime los datos almacenados en el búfer de la impresora (almacenados al escribir texto) y avanza el papel una cantidad de lineas",
        "descripcion_ingles": "Print the data stored in the printer buffer (stored when writing text) and feeds paper a number of lines",
        "argumentos": [
            {
                "id": 6,
                "nombre": "lineas",
                "tipo": "float64",
                "descripcion": "Cantidad de líneas para avanzar papel",
                "descripcion_ingles": "Line feed count",
                "ejemplo": 2,
                "ejemplo_ingles": 2
            }
        ]
    },
    {
        "id": 7,
        "nombre": "TextoSegunPaginaDeCodigos",
        nombre_corto: "Texto según página de códigos",
        nombre_corto_ingles: "Text with charcode page",
        "descripcion": "Permite escribir texto con acentos. Hay que especificar el número de página (según la impresora) y el character code page para iconv. Recomiendo probar con varias combinaciones. Esta función no tiene ningún efecto si la versión del plugin usada es la versión que no tiene iconv",
        "descripcion_ingles": "Allows you to write diacritic text. You have to specify the page number (according to the printer) and the Character Code Page for ICONV. It is suggested to try every combination if it does not work at first. This function has no effect if the used plugin version is the version that has no iconv",
        "argumentos": [
            {
                "id": 7,
                "nombre": "numeroPagina",
                "tipo": "float64",
                "descripcion": "Número de página según tu impresora",
                "descripcion_ingles": "Page number according to yout printer",
                "ejemplo": 2,
                "ejemplo_ingles": 2
            },
            {
                "id": 8,
                "nombre": "pagina",
                "tipo": "string",
                "descripcion": "Código de página de caracteres para iconv",
                "descripcion_ingles": "Character code page for iconv",
                "ejemplo": "cp850",
                "ejemplo_ingles": "cp850"
            },
            {
                "id": 9,
                "nombre": "texto",
                "tipo": "string",
                "descripcion": "Texto para convertir e imprimir",
                "descripcion_ingles": "Text to convert and print",
                "ejemplo": "Grim, Guayaba, Maggie y Panqué toman el té con la cigüeña de María José",
                "ejemplo_ingles": "Grim, Guayaba, Maggie y Panqué toman el té con la cigüeña de María José"
            }
        ]
    },
    {
        "id": 8,
        "nombre": "EstablecerAlineacion",
        nombre_corto: "Cambiar alineación",
        nombre_corto_ingles: "Set justification",
        "descripcion": "Establece la alineación del texto e imágenes (incluyendo códigos de barras y QR) según la alineacion. Izquierda es 0, Centro 1 y Derecha 2",
        "descripcion_ingles": "Set text, images, barcodes and QR codes justification according to the alignment providad. Left is 0, center 1 and right 2",
        "argumentos": [
            {
                "id": 10,
                "nombre": "alineacion",
                "tipo": "float64",
                "descripcion": "Alineación (0, 1 o 2)",
                "descripcion_ingles": "Justification (0, 1 or 2)",
                "ejemplo": 1,
                "ejemplo_ingles": 1
            }
        ]
    },
    {
        "id": 9,
        "nombre": "EstablecerTamañoFuente",
        nombre_corto: "Cambiar tamaño de fuente",
        nombre_corto_ingles: "Change font size",
        "descripcion": "Establece el tamaño de la fuente según el multiplicador de ancho y el multiplicador del alto. Ambos valores pueden ir desde el 1 hasta el 8. También afecta a los caracteres personalizados",
        "descripcion_ingles": "Set the font size according to the width and height multiplier. Both values ​​can range from 1 to 8. It also affects personalized characters",
        "argumentos": [
            {
                "id": 11,
                "nombre": "multiplicadorAncho",
                "tipo": "float64",
                "descripcion": "Multiplicador de ancho (1-8)",
                "descripcion_ingles": "Width multiplier (1-8)",
                "ejemplo": 2,
                "ejemplo_ingles": 2
            },
            {
                "id": 11,
                "nombre": "multiplicadorAlto",
                "tipo": "float64",
                "descripcion": "Multiplicador de alto (1-8)",
                "descripcion_ingles": "Height multiplier (1-8)",
                "ejemplo": 2,
                "ejemplo_ingles": 2
            }
        ]
    },
    {
        "id": 10,
        "nombre": "EstablecerSubrayado",
        nombre_corto: "Cambiar subrayado",
        nombre_corto_ingles: "Set underline",
        "descripcion": "Habilita o deshabilita el modo de texto subrayado",
        "descripcion_ingles": "Enable or disable underlined text mode",
        "argumentos": [
            {
                "id": 12,
                "nombre": "subrayado",
                "tipo": "bool",
                "descripcion": "Habilita el subrayado de texto",
                "descripcion_ingles": "Enable underlined text mode",
                "ejemplo": "true",
                "ejemplo_ingles": "true"
            }
        ]
    },
    {
        "id": 10,
        "nombre": "EstablecerEnfatizado",
        nombre_corto: "Cambiar enfatizado",
        nombre_corto_ingles: "Set bold text",
        "descripcion": "Habilita o deshabilita el modo de texto enfatizado",
        "descripcion_ingles": "Enable or disable bold text mode",
        "argumentos": [
            {
                "id": 12,
                "nombre": "enfatizado",
                "tipo": "bool",
                "descripcion": "Habilitar texto enfatizado",
                "descripcion_ingles": "Set bold text mode",
                "ejemplo": "true",
                "ejemplo_ingles": "true"
            }
        ]
    },
    {
        "id": 11,
        "nombre": "EstablecerImpresionAlReves",
        nombre_corto: "Impresión al revés",
        nombre_corto_ingles: "Upside down print",
        "descripcion": "Habilita o deshabilita la impresión al revés",
        "descripcion_ingles": "Enable or disable  upside down print",
        "argumentos": [
            {
                "id": 13,
                "nombre": "alReves",
                "tipo": "bool",
                "descripcion": "Habilita o deshabilita impresión al revés",
                "descripcion_ingles": "Enable or disable upside down text print",
                "ejemplo": "true",
                "ejemplo_ingles": "true"
            }
        ]
    },
    {
        "id": 12,
        "nombre": "EstablecerRotacionDe90Grados",
        nombre_corto: "Rotar 90 grados",
        nombre_corto_ingles: "90 degrees rotation",
        "descripcion": "Habilita o deshabilita la rotación de 90 grados",
        "descripcion_ingles": "Enable or disable 90 degrees rotation",
        "argumentos": [
            {
                "id": 14,
                "nombre": "rotar",
                "tipo": "bool",
                "descripcion": "Habilita o deshabilita rotación de 90 grados",
                "descripcion_ingles": "Enable or disable 90 degres text rotation",
                "ejemplo": "true",
                "ejemplo_ingles": "true"
            }
        ]
    },
    {
        "id": 13,
        "nombre": "EstablecerImpresionBlancoYNegroInversa",
        nombre_corto: "Impresión inversa",
        nombre_corto_ingles: "Inverse mode printing",
        "descripcion": "Habilita o deshabilita la impresión inversa. En modo inverso, el fondo es negro y el texto blanco",
        "descripcion_ingles": "Enable or disable inverse print. In reverse mode, the background is black and the text is white",
        "argumentos": [
            {
                "id": 15,
                "nombre": "invertir",
                "tipo": "bool",
                "descripcion": "Impresión inversa",
                "descripcion_ingles": "Reverse printing",
                "ejemplo": "true",
                "ejemplo_ingles": "true"
            }
        ]
    },
    {
        "id": 14,
        "nombre": "EstablecerFuente",
        nombre_corto: "Establecer fuente",
        nombre_corto_ingles: "Set font",
        "descripcion": "Establece la fuente, que puede ser 0 o 1. En mi caso solo soporta una fuente que es la A. Tener cuidado al cambiar la fuente e intentar imprimir un carácter personalizado, pues por el momento solo funciona con la fuente A",
        "descripcion_ingles": "Set the font, which can be 0 or 1. In my case it only supports a source that is the A. Be careful when changing the font and trying to print a personalized character, because at the moment it only works with the source to",
        "argumentos": [
            {
                "id": 16,
                "nombre": "fuente",
                "tipo": "float64",
                "descripcion": "Fuente (0, 1)",
                "descripcion_ingles": "Font (0, 1)",
                "ejemplo": 0,
                "ejemplo_ingles": 0,
            }
        ]
    },
    {
        "id": 15,
        "nombre": "HabilitarCaracteresPersonalizados",
        nombre_corto: "Habilitar caracteres personalizados",
        nombre_corto_ingles: "Enable custom characters",
        "descripcion": "Habilita los caracteres personalizados. Si está habilitado entonces se va a imprimir el carácter personalizado en lugar del carácter que fue indicado para ser reemplazado",
        "descripcion_ingles": "Enable custom characters. If it is enabled then you will print the custom character instead of the character that was supplied to be replaced",
        "argumentos": []
    },
    {
        "id": 16,
        "nombre": "DeshabilitarCaracteresPersonalizados",
        nombre_corto: "Deshabilitar caracteres personalizados",
        nombre_corto_ingles: "Disable custom characters",
        "descripcion": "Deshabilita los caracteres personalizados",
        "descripcion_ingles": "Disable custom characters",
        "argumentos": []
    },
    {
        "id": 16,
        "nombre": "DeshabilitarElModoDeCaracteresChinos",
        nombre_corto: "Deshabilitar el modo de caracteres chinos",
        nombre_corto_ingles: "Disable chinese character mode",
        "descripcion": "Deshabilitar el modo de caracteres chinos. Útil para imprimir tildes y texto en español en impresoras térmicas chinas. Combínalo con TextoSegunPaginaDeCodigos",
        "descripcion_ingles": "Disable chinese character mode. Use it when printing diacritic text and you have a chinese printer. Use it along with TextoSegunPaginaDeCodigos",
        "argumentos": []
    },
    {
        "id": 16,
        "nombre": "HabilitarElModoDeCaracteresChinos",
        nombre_corto: "Habilitar el modo de caracteres chinos",
        nombre_corto_ingles: "Enable chinese character mode",
        "descripcion": "Habilitar el modo de caracteres chinos",
        "descripcion_ingles": "Enable chinese character mode",
        "argumentos": []
    },
    {
        "id": 17,
        "nombre": "DefinirCaracterPersonalizado",
        nombre_corto: "Definir caracter personalizado",
        nombre_corto_ingles: "Define custom character",
        "descripcion": "Define un carácter personalizado de 24x12. Es útil para imprimir caracteres no soportados por algunas impresoras, ya sea el euro, centavo o lo que puedas dibujar en un cuadro de 24x12. Esta función establece el carácter personalizado pero no lo imprime. Solo hace falta llamarla a una vez, y después cada que se imprima el carácter reemplazado se va a imprimir el personalizado La matrizComoCadena debe ser, como su nombre lo dice, una matriz como cadena. Debe tener exactamente 24 líneas (separadas por un salto de línea) y en cada línea debe haber exactamente 12 dígitos, cada dígito debe ser un 1 o un 0. No debe haber tabulaciones ni espacios extra  Nota: la matriz es de 24x12 porque así es la fuente A. Si fuera la fuente B sería de 17x9, pero esa fuente no funciona en mi impresora así que no he probado. Es decir, no intentes esto si tienes seleccionada la fuente B. Para que esta operación funcione, debiste haber habilitado los caracteres personalizados previamente con HabilitarCaracteresPersonalizados",
        "descripcion_ingles": "Defines a custom 24x12 character. It is useful for printing characters not supported by some printers, either the euro, penny or what you can draw in a 24x12 box. This function establishes the personalized character but does not print it. Only It is necessary to call it once, and then every time the replaced character is printed, the custom character will be printed instead. The  matrix as string must be, as its name says, a matrix as a string. You must have exactly 24 lines (separated by a line jump) and in each line there must be exactly 12 digits, each digit must be a 1 or 0. There should be no tabulations or extra spaces  Note: The matrix is ​​24x12 because this is the source A. If it were the source B would be 17x9, but that source doesn't work in my printer so I haven't tried. So, do not try this if you have source B select. For this operation to work, you need to call HabilitarCaracteresPersonalizados before",
        "argumentos": [
            {
                "id": 17,
                "nombre": "caracterRemplazoComoCadena",
                "tipo": "string",
                "descripcion": "Carácter que será reemplazado",
                "descripcion_ingles": "Character to be replaced",
                "ejemplo": "_",
                "ejemplo_ingles": "_"
            },
            {
                "id": 18,
                "nombre": "matrizComoCadena",
                "tipo": "string",
                "descripcion": "Carácter personalizado",
                "descripcion_ingles": "Custom character as a string matrix",
                "ejemplo": `000001111000
000010000100
000100011110
000100100001
011100100001
010100100001
010100100001
010100011110
010100000010
011100000010
000100111010
000100101010
000111101110
000000000000
000000000000
000000000000
111010101110
100010101000
111010101110
001010100010
111011101110
000000000000
000000000000
000000000000`,
                "ejemplo_ingles": `000001111000
000010000100
000100011110
000100100001
011100100001
010100100001
010100100001
010100011110
010100000010
011100000010
000100111010
000100101010
000111101110
000000000000
000000000000
000000000000
111010101110
100010101000
111010101110
001010100010
111011101110
000000000000
000000000000
000000000000`,
            }
        ]
    },
    {
        "id": 18,
        "nombre": "CargarImagenLocalEImprimir",
        nombre_corto: "Imagen local",
        nombre_corto_ingles: "Filesystem image",
        "descripcion": "Imprime una imagen existente en el sistema de archivos, suponiendo que el plugin tiene permisos de lectura en esa imagen. La imagen será convertida a blanco y negro. Si el ancho de la imagen es mayor que el máximo ancho especificado, la imagen será redimensionada para que coincida. El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Lo recomendable es que el usuario pruebe con los 3 algoritmos para encontrar el más adecuado. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ . El parámetro sobre el dithering indica si se debe aplicar el algoritmo Floyd-Steinberg-Dithering a la imagen antes de ser impresa. Es recomendado aplicarlo en fotografías, así se mantiene la iluminación y los detalles incluso al ser convertida a blanco y negro. Más información sobre dithering: https://parzibyte.me/blog/2024/07/28/algoritmo-floyd-steinberg-dithering-golang/",
        "descripcion_ingles": "Prints an existing image on the file system, provided that the plugin has the permissions to access it. The image will be converted to black and white. If the width of the image is greater than the maximum width specified, the image will be resized to match. Algorithm refers to the algorithm used when printing an image, which can be 0 for using the Raster Bit Image method, 1 for Bit Image Column Format and 2 for NV Graphics. Newer printers support NV Graphics, older ones support Raster Bit Image and Image Column Format. It is recommended that the user tries all 3 algorithms to find the most suitable one. More information about the algorithms: https://parzibyte.me/blog/2024/01/17/methods-for-printing-images-thermal-printers/ . The dithering parameter indicates whether the Floyd-Steinberg-Dithering algorithm should be applied to the image before it is printed. It is recommended to apply it to pictures (and no illustrations), so that the lighting and details are maintained even when converted to black and white. More information about dithering: https://parzibyte.me/blog/2024/07/28/algoritmo-floyd-steinberg-dithering-golang/",
        "argumentos": [
            {
                "id": 19,
                "nombre": "ruta",
                "tipo": "string",
                "descripcion": "Ruta absoluta (o relativa al plugin) de la imagen",
                "descripcion_ingles": "Relative or absolute path to image",
                "ejemplo": "C:\\Users\\tu_usuario\\Desktop\\Panqué_y_grim.png",
                "ejemplo_ingles": "C:\\Users\\your_user\\Desktop\\panque_and_grim.png"
            },
            {
                "id": 20,
                "nombre": "maximoAncho",
                "tipo": "float64",
                "descripcion": "Máximo ancho de la imagen. Si el verdadero ancho es mayor, se reducirá",
                "descripcion_ingles": "Max width for image. If the real width is greater, it will be reduced",
                "ejemplo": 380,
                "ejemplo_ingles": 380
            },
            {
                "id": 21,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)",
                "descripcion_ingles": "Algorithm to convert image to ESC POS bytes (0, 1 o 2)",
                "ejemplo": 0,
                "ejemplo_ingles": 0
            },
            {
                "id": 22,
                "nombre": "aplicarDithering",
                "tipo": "bool",
                "descripcion": "Aplicar algoritmo dithering. Recomendado en fotografías, no ilustraciones",
                "descripcion_ingles": "Apply dithering algorithm. Recommended on photographies, not illustrations",
                "ejemplo": "true",
                "ejemplo_ingles": "true"
            }
        ]
    },
    {
        "id": 19,
        "nombre": "DescargarImagenDeInternetEImprimir",
        nombre_corto: "Imagen de internet",
        nombre_corto_ingles: "Internet image",
        "descripcion": "Descarga una imagen de internet y la imprime. La imagen debe ser accesible públicamente usando solo la URL.  La imagen será convertida a blanco y negro. Si el ancho de la imagen es mayor que el máximo ancho especificado, la imagen será redimensionada para que coincida. El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Lo recomendable es que el usuario pruebe con los 3 algoritmos para encontrar el más adecuado. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ . El parámetro sobre el dithering indica si se debe aplicar el algoritmo Floyd-Steinberg-Dithering a la imagen antes de ser impresa. Es recomendado aplicarlo en fotografías, así se mantiene la iluminación y los detalles incluso al ser convertida a blanco y negro. Más información sobre dithering: https://parzibyte.me/blog/2024/07/28/algoritmo-floyd-steinberg-dithering-golang/",
        "descripcion_ingles": "Download an internet image and print it. The image must be publicly accessible using only the URL.  The image will be converted to black and white. If the width of the image is greater than the maximum width specified, the image will be resized to match. Algorithm refers to the algorithm used when printing an image, which can be 0 for using the Raster Bit Image method, 1 for Bit Image Column Format and 2 for NV Graphics. Newer printers support NV Graphics, older ones support Raster Bit Image and Image Column Format. It is recommended that the user tries all 3 algorithms to find the most suitable one. More information about the algorithms: https://parzibyte.me/blog/2024/01/17/methods-for-printing-images-thermal-printers/ . The dithering parameter indicates whether the Floyd-Steinberg-Dithering algorithm should be applied to the image before it is printed. It is recommended to apply it to pictures (and no illustrations), so that the lighting and details are maintained even when converted to black and white. More information about dithering: https://parzibyte.me/blog/2024/07/28/algoritmo-floyd-steinberg-dithering-golang/",
        "argumentos": [
            {
                "id": 23,
                "nombre": "urlImagen",
                "tipo": "string",
                "descripcion": "URL de imagen",
                "descripcion_ingles": "Image URL",
                "ejemplo": "https://github.com/parzibyte.png",
                "ejemplo_ingles": "https://github.com/parzibyte.png"
            },
            {
                "id": 20,
                "nombre": "maximoAncho",
                "tipo": "float64",
                "descripcion": "Máximo ancho de la imagen. Si el verdadero ancho es mayor, se reducirá",
                "descripcion_ingles": "Max width for image. If the real width is greater, it will be reduced",
                "ejemplo": 380,
                "ejemplo_ingles": 380
            },
            {
                "id": 21,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)",
                "descripcion_ingles": "Algorithm to convert image to ESC POS bytes (0, 1 o 2)",
                "ejemplo": 0,
                "ejemplo_ingles": 0
            },
            {
                "id": 22,
                "nombre": "aplicarDithering",
                "tipo": "bool",
                "descripcion": "Aplicar algoritmo dithering. Recomendado en fotografías, no ilustraciones",
                "descripcion_ingles": "Apply dithering algorithm. Recommended on photographies, not illustrations",
                "ejemplo": "true",
                "ejemplo_ingles": "true"
            }
        ]
    },
    {
        "id": 20,
        "nombre": "GenerarImagenAPartirDeHtmlEImprimir",
        nombre_corto: "HTML",
        nombre_corto_ingles: "HTML",
        "descripcion": "Genera una imagen a partir del html usando el ancho de página como el ancho de la pantalla del navegador web para renderizar la imagen, y después imprime esa imagen generada. La imagen será convertida a blanco y negro. Si el ancho de la imagen es mayor que el máximo ancho especificado, la imagen será redimensionada para que coincida. El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Lo recomendable es que el usuario pruebe con los 3 algoritmos para encontrar el más adecuado. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ . El parámetro sobre el dithering indica si se debe aplicar el algoritmo Floyd-Steinberg-Dithering a la imagen antes de ser impresa. Es recomendado aplicarlo en fotografías, así se mantiene la iluminación y los detalles incluso al ser convertida a blanco y negro. Más información sobre dithering: https://parzibyte.me/blog/2024/07/28/algoritmo-floyd-steinberg-dithering-golang/",
        "descripcion_ingles": "It generates an image from the HTML using the page width as the width of the screen of the web browser to render the image, and then prints the generated image. The image will be converted to black and white. If the width of the image is greater than the maximum width specified, the image will be resized to match. Algorithm refers to the algorithm used when printing an image, which can be 0 for using the Raster Bit Image method, 1 for Bit Image Column Format and 2 for NV Graphics. Newer printers support NV Graphics, older ones support Raster Bit Image and Image Column Format. It is recommended that the user tries all 3 algorithms to find the most suitable one. More information about the algorithms: https://parzibyte.me/blog/2024/01/17/methods-for-printing-images-thermal-printers/ . The dithering parameter indicates whether the Floyd-Steinberg-Dithering algorithm should be applied to the image before it is printed. It is recommended to apply it to pictures (and no illustrations), so that the lighting and details are maintained even when converted to black and white. More information about dithering: https://parzibyte.me/blog/2024/07/28/algoritmo-floyd-steinberg-dithering-golang/",
        "argumentos": [
            {
                "id": 27,
                "nombre": "html",
                "tipo": "string",
                "descripcion": "HTML como cadena",
                "descripcion_ingles": "HTML as string",
                "ejemplo": `<html><meta charset="UTF-8"><p><strong>¡Hola</strong> mundo!</p></html>`,
                "ejemplo_ingles": `<html><meta charset="UTF-8"><p><strong>Hello</strong> world!</p></html>`,
            },
            {
                "id": 28,
                "nombre": "anchoPagina",
                "tipo": "float64",
                "descripcion": "Ancho de página del navegador web",
                "descripcion_ingles": "Browser's page width in pixels",
                "ejemplo": 380,
                "ejemplo_ingles": 380
            },
            {
                "id": 20,
                "nombre": "maximoAncho",
                "tipo": "float64",
                "descripcion": "Máximo ancho de la imagen. Si el verdadero ancho es mayor, se reducirá",
                "descripcion_ingles": "Max width for image. If the real width is greater, it will be reduced",
                "ejemplo": 380,
                "ejemplo_ingles": 380
            },
            {
                "id": 21,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)",
                "descripcion_ingles": "Algorithm to convert image to ESC POS bytes (0, 1 o 2)",
                "ejemplo": 0,
                "ejemplo_ingles": 0
            },
            {
                "id": 22,
                "nombre": "aplicarDithering",
                "tipo": "bool",
                "descripcion": "Aplicar algoritmo dithering. Recomendado en fotografías, no ilustraciones",
                "descripcion_ingles": "Apply dithering algorithm. Recommended on photographies, not illustrations",
                "ejemplo": "false",
                "ejemplo_ingles": "false"
            }
        ]
    },
    {
        "id": 21,
        "nombre": "GenerarImagenAPartirDePaginaWebEImprimir",
        nombre_corto: "Página web",
        nombre_corto_ingles: "Webpage",
        "descripcion": "Genera una imagen a partir del html generado por la página web ubicada en la dirección indicada usando el ancho provisto como el ancho de la pantalla del navegador web para renderizar la imagen. Después, imprime esa imagen generada. Es necesario que wkhtmltoimage se encuentre en la PATH o en el mismo directorio que el plugin. La imagen será convertida a blanco y negro. Si el ancho de la imagen es mayor que el máximo ancho especificado, la imagen será redimensionada para que coincida. El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Lo recomendable es que el usuario pruebe con los 3 algoritmos para encontrar el más adecuado. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ . El parámetro sobre el dithering indica si se debe aplicar el algoritmo Floyd-Steinberg-Dithering a la imagen antes de ser impresa. Es recomendado aplicarlo en fotografías, así se mantiene la iluminación y los detalles incluso al ser convertida a blanco y negro. Más información sobre dithering: https://parzibyte.me/blog/2024/07/28/algoritmo-floyd-steinberg-dithering-golang/",
        "descripcion_ingles": "It generates an image from the HTML generated by the website located in the provided URL using the providad width as the width of the screen of the web browser to render the image. Then, that generated image is printed. You need wkhtmltoimage located on the PATH or in the same directory of the plugin. The image will be converted to black and white. If the width of the image is greater than the maximum width specified, the image will be resized to match. Algorithm refers to the algorithm used when printing an image, which can be 0 for using the Raster Bit Image method, 1 for Bit Image Column Format and 2 for NV Graphics. Newer printers support NV Graphics, older ones support Raster Bit Image and Image Column Format. It is recommended that the user tries all 3 algorithms to find the most suitable one. More information about the algorithms: https://parzibyte.me/blog/2024/01/17/methods-for-printing-images-thermal-printers/ . The dithering parameter indicates whether the Floyd-Steinberg-Dithering algorithm should be applied to the image before it is printed. It is recommended to apply it to pictures (and no illustrations), so that the lighting and details are maintained even when converted to black and white. More information about dithering: https://parzibyte.me/blog/2024/07/28/algoritmo-floyd-steinberg-dithering-golang/",
        "argumentos": [
            {
                "id": 32,
                "nombre": "direccionPagina",
                "tipo": "string",
                "descripcion": "URL de la página públicamente accesible",
                "descripcion_ingles": "Public webpage URL",
                "ejemplo": "https://example.com",
                "ejemplo_ingles": "https://example.com"
            },
            {
                "id": 28,
                "nombre": "anchoPagina",
                "tipo": "float64",
                "descripcion": "Ancho de página del navegador web",
                "descripcion_ingles": "Browser's page width in pixels",
                "ejemplo": 380,
                "ejemplo_ingles": 380
            },
            {
                "id": 20,
                "nombre": "maximoAncho",
                "tipo": "float64",
                "descripcion": "Máximo ancho de la imagen. Si el verdadero ancho es mayor, se reducirá",
                "descripcion_ingles": "Max width for image. If the real width is greater, it will be reduced",
                "ejemplo": 380,
                "ejemplo_ingles": 380
            },
            {
                "id": 21,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)",
                "descripcion_ingles": "Algorithm to convert image to ESC POS bytes (0, 1 o 2)",
                "ejemplo": 0,
                "ejemplo_ingles": 0
            },
            {
                "id": 22,
                "nombre": "aplicarDithering",
                "tipo": "bool",
                "descripcion": "Aplicar algoritmo dithering. Recomendado en fotografías, no ilustraciones",
                "descripcion_ingles": "Apply dithering algorithm. Recommended on photographies, not illustrations",
                "ejemplo": "false",
                "ejemplo_ingles": "false"
            }
        ]
    },
    {
        "id": 22,
        "nombre": "ImprimirImagenEnBase64",
        nombre_corto: "Imagen en base64",
        nombre_corto_ingles: "Base64 image",
        "descripcion": "Convierte el texto en base64 a una imagen. La imagen codificada en base64 puede ser JPG o PNG y puede tener o no tener el \"base64,\". La imagen será convertida a blanco y negro. Si el ancho de la imagen es mayor que el máximo ancho especificado, la imagen será redimensionada para que coincida. El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Lo recomendable es que el usuario pruebe con los 3 algoritmos para encontrar el más adecuado. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ . El parámetro sobre el dithering indica si se debe aplicar el algoritmo Floyd-Steinberg-Dithering a la imagen antes de ser impresa. Es recomendado aplicarlo en fotografías, así se mantiene la iluminación y los detalles incluso al ser convertida a blanco y negro. Más información sobre dithering: https://parzibyte.me/blog/2024/07/28/algoritmo-floyd-steinberg-dithering-golang/",
        "descripcion_ingles": "Convert the base64 string to an image. The encoded image in Base64 can be JPG or PNG and may or may not have the \"base64,\". The image will be converted to black and white. If the width of the image is greater than the maximum width specified, the image will be resized to match. Algorithm refers to the algorithm used when printing an image, which can be 0 for using the Raster Bit Image method, 1 for Bit Image Column Format and 2 for NV Graphics. Newer printers support NV Graphics, older ones support Raster Bit Image and Image Column Format. It is recommended that the user tries all 3 algorithms to find the most suitable one. More information about the algorithms: https://parzibyte.me/blog/2024/01/17/methods-for-printing-images-thermal-printers/ . The dithering parameter indicates whether the Floyd-Steinberg-Dithering algorithm should be applied to the image before it is printed. It is recommended to apply it to pictures (and no illustrations), so that the lighting and details are maintained even when converted to black and white. More information about dithering: https://parzibyte.me/blog/2024/07/28/algoritmo-floyd-steinberg-dithering-golang/",
        "argumentos": [
            {
                "id": 37,
                "nombre": "imagenCodificadaEnBase64",
                "tipo": "string",
                "descripcion": "Imagen codificada en base64",
                "descripcion_ingles": "Base64 encoded image",
                "ejemplo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAAA1CAYAAAD1X//UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAABukSURBVHhe7Z0HuBS1FsflUQQVFRuCotgVxI69PKyg2MUuimJFsCB2BSyIWBALomIviA17Q8WGXcGuiA0VFAt2pci8/y+bXGazmdmdvRfeBff/feebnUwmySTnnJxzkpmdryYxderUNv/88885ou9mzJgxXsc+M2fObG0vV1DBvw8SgA4ShDGi6ZEH0kQfiW5WvgNEi9nbKqhg3oV4f2kx/RU5MSgNyv+VBOQs/Wxii6mggnkLYu5OMLrh+DKge8dLSHayxVVQwdwP8XUdMfagHIvXCPqL/mOLr6CCuRcSjJtzPF1zUJnDbPEVVDB3QmZQd8vPqfjuu++ib7/91p6VBpV9sq2mggrmLoh5CdP+bXk5EU8++WS05JJLRk2aNIk222yz6Oyzz47eeecdezUZKnv6tGnT2trqagy//vrrkmr71qJDLXVJoMNEu4ha2FuDGDVqVD3laSXaT0T0rbWaX89eroLSlxV1FFFuqD7ItEf3/1fHqiiezpfTOW3pyvUSyD3XpqLVRHuJQveS7yDRuqJVVU8nHdPqoO0855ruGXWsr/M2ov1Fh9vrBX2gtPlFa4noI/LtK2qlfOvr2FmUNhZxon17ilYRtRVluZf27646V7TNmj0Q8z6kShLx0ksvRR07dozq1KkTKXse1a1bN9prr72it99+2+YOY8aMGc8pf41AndJObR6pMn+0xZcE3fOb6FXdd5QtykDlNVX6ENGHohk2O/n/Ud6PdbhKeVqIuur3K6JfbZaSoPyTRSNFL4t+s8mZoXun2Z+pUL6p9mdRKC8gHP+wiGedaS8ZcFEg/Vqdbq7j9aLxuauzoLSqfssK3VtUMSdB9/4pektjc7pOa9a/VaHNVfhfuaoKcdVVVxkBUNZUmn/++aPBgwfbuwqhOlTVzDWUt1pQGcdRli22bKiMO3VoqBltI/3+IpeaDOWZYn9WUEuhMRqlQ80tI4jZOuaKLsT9998fFIQ0GjZsmL27EKqrq/KUDd2/jS2qRqDOfEv0vT2tYB6AxnO4ZZfqQ4VdYMvNw99//x2tssoqQQFIo+bNm0fyBWwp+VBdNypPWdDtDWTifJgrqYIKkiEl2t6yTfWgsp7NFZmP0aNHB5m/FHrkkUdsKfmQcOC9l2UX6oHb5EqpoIJ0iM8GWrYpHyqnngoalysyH3fccUeQ8UuhCy+80JaSD9X1k5h8KeXJDEwyW0wFFaRCfDZahzqWdcqDCkA4PjIlerj11lsNoy+11FLR9ttvH3Xt2jU69NBDo/bt20crrLBCgUDE6cwzz7Sl5EN1/SkmX155MkP3DrHF5OGnn36KDjzwwGjPPfeM9t577yDtvPPO0aWXXmrvSAdrOJTXpUsXU3YSXASvU6dOwTpJ33XXXaMnnnjC3jELzKw77rhj8D6fdtttt+jwww+P/vorFzO57bbbog4dOhTko64TTjiBPjb5CKSk1bHHHntEnTt3jr7++muTP45+/fpF7dq1i/r27WtTwjjnnHNMvvPPP9+cy+yNunfvbtoSqtMnnuOmm24y92LGH3300eZ5Q3l94l584hDUBz+Izxa3rFMeVMCSKijokA4dOjRabLHFggt+DNRbb71lBmC//faL1l57beNrLLvsstFCCy0UnXHGGTZnPlQXIcay4tK694ZcKfmgfauvvrqpu2nTptGiiy5aQM2aNYuWXnrp6IILgu5VFSgL4UchsJ7DQP34Yzha/NBDD0WLL754tNxyy5mjXyd9R70rr7xygYBcffXVRon49/hEmylj/fXXj37//Xdzb+/evc29lE/dKCra26BBg2jDDTesEo6ePXuaMlq0aFFQLsTz0V/bbLNNgYAgNPXq1TNjm4b999/f5DvooIPM+bRp06J1113XRC5dPayJ0QbaybPE28BznHbaaebeP//8M9p4441NHj9fiLj3sssuM/f6UB/8It5upjzlQwXsassrwH333WceMsm59vHLL7+YAWzVqlXUp08fm1oI1bmLrT4T9MBDbRF5YMV+vfXWM52PNuzVq1d04oknGoJBOG600UZmgOj0/v37R9OnF+y+rxKMZZZZJmrZsqUhBB4BCc0gjz32mCkTwUSzn3TSSVX18vuYY46JVl11VcPACAj5HZ5//vnoqKOOqsofIpiG2ZA6tthii+iPP/4w9z788MNGw1L+WmutFa200krRPvvsEx133HHGnFX/mnynn366ES4EhvJcX0D0EYxP23jebbfdNvr888/NfeCII46I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",
                "ejemplo_ingles": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAAA1CAYAAAD1X//UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAABukSURBVHhe7Z0HuBS1FsflUQQVFRuCotgVxI69PKyg2MUuimJFsCB2BSyIWBALomIviA17Q8WGXcGuiA0VFAt2pci8/y+bXGazmdmdvRfeBff/feebnUwmySTnnJxzkpmdryYxderUNv/88885ou9mzJgxXsc+M2fObG0vV1DBvw8SgA4ShDGi6ZEH0kQfiW5WvgNEi9nbKqhg3oV4f2kx/RU5MSgNyv+VBOQs/Wxii6mggnkLYu5OMLrh+DKge8dLSHayxVVQwdwP8XUdMfagHIvXCPqL/mOLr6CCuRcSjJtzPF1zUJnDbPEVVDB3QmZQd8vPqfjuu++ib7/91p6VBpV9sq2mggrmLoh5CdP+bXk5EU8++WS05JJLRk2aNIk222yz6Oyzz47eeecdezUZKnv6tGnT2trqagy//vrrkmr71qJDLXVJoMNEu4ha2FuDGDVqVD3laSXaT0T0rbWaX89eroLSlxV1FFFuqD7ItEf3/1fHqiiezpfTOW3pyvUSyD3XpqLVRHuJQveS7yDRuqJVVU8nHdPqoO0855ruGXWsr/M2ov1Fh9vrBX2gtPlFa4noI/LtK2qlfOvr2FmUNhZxon17ilYRtRVluZf27646V7TNmj0Q8z6kShLx0ksvRR07dozq1KkTKXse1a1bN9prr72it99+2+YOY8aMGc8pf41AndJObR6pMn+0xZcE3fOb6FXdd5QtykDlNVX6ENGHohk2O/n/Ud6PdbhKeVqIuur3K6JfbZaSoPyTRSNFL4t+s8mZoXun2Z+pUL6p9mdRKC8gHP+wiGedaS8ZcFEg/Vqdbq7j9aLxuauzoLSqfssK3VtUMSdB9/4pektjc7pOa9a/VaHNVfhfuaoKcdVVVxkBUNZUmn/++aPBgwfbuwqhOlTVzDWUt1pQGcdRli22bKiMO3VoqBltI/3+IpeaDOWZYn9WUEuhMRqlQ80tI4jZOuaKLsT9998fFIQ0GjZsmL27EKqrq/KUDd2/jS2qRqDOfEv0vT2tYB6AxnO4ZZfqQ4VdYMvNw99//x2tssoqQQFIo+bNm0fyBWwp+VBdNypPWdDtDWTifJgrqYIKkiEl2t6yTfWgsp7NFZmP0aNHB5m/FHrkkUdsKfmQcOC9l2UX6oHb5EqpoIJ0iM8GWrYpHyqnngoalysyH3fccUeQ8UuhCy+80JaSD9X1k5h8KeXJDEwyW0wFFaRCfDZahzqWdcqDCkA4PjIlerj11lsNoy+11FLR9ttvH3Xt2jU69NBDo/bt20crrLBCgUDE6cwzz7Sl5EN1/SkmX155MkP3DrHF5OGnn36KDjzwwGjPPfeM9t577yDtvPPO0aWXXmrvSAdrOJTXpUsXU3YSXASvU6dOwTpJ33XXXaMnnnjC3jELzKw77rhj8D6fdtttt+jwww+P/vorFzO57bbbog4dOhTko64TTjiBPjb5CKSk1bHHHntEnTt3jr7++muTP45+/fpF7dq1i/r27WtTwjjnnHNMvvPPP9+cy+yNunfvbtoSqtMnnuOmm24y92LGH3300eZ5Q3l94l584hDUBz+Izxa3rFMeVMCSKijokA4dOjRabLHFggt+DNRbb71lBmC//faL1l57beNrLLvsstFCCy0UnXHGGTZnPlQXIcay4tK694ZcKfmgfauvvrqpu2nTptGiiy5aQM2aNYuWXnrp6IILgu5VFSgL4UchsJ7DQP34Yzha/NBDD0WLL754tNxyy5mjXyd9R70rr7xygYBcffXVRon49/hEmylj/fXXj37//Xdzb+/evc29lE/dKCra26BBg2jDDTesEo6ePXuaMlq0aFFQLsTz0V/bbLNNgYAgNPXq1TNjm4b999/f5DvooIPM+bRp06J1113XRC5dPayJ0QbaybPE28BznHbaaebeP//8M9p4441NHj9fiLj3sssuM/f6UB/8It5upjzlQwXsassrwH333WceMsm59vHLL7+YAWzVqlXUp08fm1oI1bmLrT4T9MBDbRF5YMV+vfXWM52PNuzVq1d04oknGoJBOG600UZmgOj0/v37R9OnF+y+rxKMZZZZJmrZsqUhBB4BCc0gjz32mCkTwUSzn3TSSVX18vuYY46JVl11VcPACAj5HZ5//vnoqKOOqsofIpiG2ZA6tthii+iPP/4w9z788MNGw1L+WmutFa200krRPvvsEx133HHGnFX/mnynn366ES4EhvJcX0D0EYxP23jebbfdNvr888/NfeCII46I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"
            },
            {
                "id": 20,
                "nombre": "maximoAncho",
                "tipo": "float64",
                "descripcion": "Máximo ancho de la imagen. Si el verdadero ancho es mayor, se reducirá",
                "descripcion_ingles": "Max width for image. If the real width is greater, it will be reduced",
                "ejemplo": 380,
                "ejemplo_ingles": 380
            },
            {
                "id": 21,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)",
                "descripcion_ingles": "Algorithm to convert image to ESC POS bytes (0, 1 o 2)",
                "ejemplo": 0,
                "ejemplo_ingles": 0
            },
            {
                "id": 22,
                "nombre": "aplicarDithering",
                "tipo": "bool",
                "descripcion": "Aplicar algoritmo dithering. Recomendado en fotografías, no ilustraciones",
                "descripcion_ingles": "Apply dithering algorithm. Recommended on photographies, not illustrations",
                "ejemplo": "true",
                "ejemplo_ingles": "true"
            }
        ]
    },
    {
        "id": 23,
        "nombre": "ImprimirCodigoDeBarrasCode39",
        nombre_corto: "Código de barras code 39",
        nombre_corto_ingles: "Code 39 barcode",
        "descripcion": "Imprime un código de barras en formato Code39. El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código",
        "descripcion_ingles": "Print a bar code in CODE39 format. The algorithm refers to the algorithm used to print the image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ The other parameters are related to the code generation algorithm",
        "argumentos": [
            {
                "id": 41,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "Contenido del código de barras",
                "descripcion_ingles": "Barcode content",
                "ejemplo": "D387266D",
                "ejemplo_ingles": "D387266D"
            },
            {
                "id": 42,
                "nombre": "incluirSumaDeVerificacion",
                "tipo": "bool",
                "descripcion": "Incluir suma de verificación",
                "descripcion_ingles": "Include checksum",
                "ejemplo": "true",
                "ejemplo_ingles": "true"
            },
            {
                "id": 43,
                "nombre": "modoAsciiCompleto",
                "tipo": "bool",
                "descripcion": "Modo ASCII completo",
                "descripcion_ingles": "Full ASCII mode",
                "ejemplo": "true",
                "ejemplo_ingles": "true"
            },
            {
                "id": 44,
                "nombre": "alto",
                "tipo": "float64",
                "descripcion": "Alto del código de barras",
                "descripcion_ingles": "Barcode height",
                "ejemplo": 80,
                "ejemplo_ingles": 80
            },
            {
                "id": 45,
                "nombre": "ancho",
                "tipo": "float64",
                "descripcion": "Ancho del código de barras",
                "descripcion_ingles": "Barcode width",
                "ejemplo": 380,
                "ejemplo_ingles": 380
            },
            {
                "id": 21,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)",
                "descripcion_ingles": "Algorithm to convert image to ESC POS bytes (0, 1 o 2)",
                "ejemplo": 0,
                "ejemplo_ingles": 0
            },
        ]
    },
    {
        "id": 24,
        "nombre": "ImprimirCodigoDeBarrasCode93",
        nombre_corto: "Código de barras code 93",
        nombre_corto_ingles: "Code 93 barcode",
        "descripcion": "Imprime un código de barras en formato Code93. El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código",
        "descripcion_ingles": "Print a bar code in CODE93 format. The algorithm refers to the algorithm used to print the image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ The other parameters are related to the code generation algorithm",
        "argumentos": [
            {
                "id": 47,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "Contenido del código de barras",
                "descripcion_ingles": "Barcode content",
                "ejemplo": "D387266D",
                "ejemplo_ingles": "D387266D"
            },
            {
                "id": 44,
                "nombre": "alto",
                "tipo": "float64",
                "descripcion": "Alto del código de barras",
                "descripcion_ingles": "Barcode height",
                "ejemplo": 80,
                "ejemplo_ingles": 80
            },
            {
                "id": 45,
                "nombre": "ancho",
                "tipo": "float64",
                "descripcion": "Ancho del código de barras",
                "descripcion_ingles": "Barcode width",
                "ejemplo": 380,
                "ejemplo_ingles": 380
            },
            {
                "id": 21,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)",
                "descripcion_ingles": "Algorithm to convert image to ESC POS bytes (0, 1 o 2)",
                "ejemplo": 0,
                "ejemplo_ingles": 0
            },
        ]
    },
    {
        "id": 25,
        "nombre": "ImprimirCodigoDeBarrasPdf417",
        nombre_corto: "Código de barras PDF 417",
        nombre_corto_ingles: "Pdf 417 barcode",
        "descripcion": "Imprime un código de barras en formato PDF417. El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código Nota: el nivel de seguridad tiene que ver con el propio algoritmo del código de barras, no con el plugin. Debe ser entre 0 y 8",
        "descripcion_ingles": "Print a barcode in PDF417 format. The algorithm refers to the algorithm used to convert the image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ The other parameters are related to the code generation algorithm Note: The security level is related to the barcode generation algorithm itself, not to the plugin. It must be between 0 and 8",
        "argumentos": [
            {
                "id": 51,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "Contenido del código de barras",
                "descripcion_ingles": "Barcode content",
                "ejemplo": "50123452",
                "ejemplo_ingles": "50123452"
            },
            {
                "id": 52,
                "nombre": "nivelSeguridad",
                "tipo": "float64",
                "descripcion": "Nivel de seguridad",
                "descripcion_ingles": "Security level",
                "ejemplo": 1,
                "ejemplo_ingles": 1
            },
            {
                "id": 53,
                "nombre": "alto",
                "tipo": "float64",
                "descripcion": "Altura del código de barras",
                "descripcion_ingles": "Barcode height",
                "ejemplo": 80,
                "ejemplo_ingles": 80
            },
            {
                "id": 44,
                "nombre": "ancho",
                "tipo": "float64",
                "descripcion": "Ancho del código de barras",
                "descripcion_ingles": "Barcode width",
                "ejemplo": 380,
                "ejemplo_ingles": 380
            },
            {
                "id": 21,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)",
                "descripcion_ingles": "Algorithm to convert image to ESC POS bytes (0, 1 o 2)",
                "ejemplo": 0,
                "ejemplo_ingles": 0
            },
        ]
    },
    {
        "id": 26,
        "nombre": "ImprimirCodigoDeBarrasUpcA",
        nombre_corto: "Código de barras UPC A",
        nombre_corto_ingles: "UPC A barcode",
        "descripcion": "Imprime un código de barras en formato UpcA. El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código",
        "descripcion_ingles": "Print a bar code in UPCA format. The algorithm refers to the algorithm used to print the image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ The other parameters are related to the code generation algorithm",
        "argumentos": [
            {
                "id": 56,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "Contenido del código de barras",
                "descripcion_ingles": "Barcode content",
                "ejemplo": "012345678905",
                "ejemplo_ingles": "012345678905"
            },
            {
                "id": 44,
                "nombre": "alto",
                "tipo": "float64",
                "descripcion": "Alto del código de barras",
                "descripcion_ingles": "Barcode height",
                "ejemplo": 80,
                "ejemplo_ingles": 80
            },
            {
                "id": 45,
                "nombre": "ancho",
                "tipo": "float64",
                "descripcion": "Ancho del código de barras",
                "descripcion_ingles": "Barcode width",
                "ejemplo": 380,
                "ejemplo_ingles": 380
            },
            {
                "id": 21,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)",
                "descripcion_ingles": "Algorithm to convert image to ESC POS bytes (0, 1 o 2)",
                "ejemplo": 0,
                "ejemplo_ingles": 0
            },
        ]
    },
    {
        "id": 27,
        "nombre": "ImprimirCodigoDeBarrasUpcE",
        nombre_corto: "Código de barras UPC E",
        nombre_corto_ingles: "UPC E barcode",
        "descripcion": "Imprime un código de barras en formato UPC E. El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código",
        "descripcion_ingles": "Print a bar code in UPC E format. The algorithm refers to the algorithm used to print the image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ The other parameters are related to the code generation algorithm",
        "argumentos": [
            {
                "id": 60,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "Contenido del código de barras",
                "descripcion_ingles": "Barcode content",
                "ejemplo": "02345673",
                "ejemplo_ingles": "02345673"
            },
            {
                "id": 44,
                "nombre": "alto",
                "tipo": "float64",
                "descripcion": "Alto del código de barras",
                "descripcion_ingles": "Barcode height",
                "ejemplo": 80,
                "ejemplo_ingles": 80
            },
            {
                "id": 45,
                "nombre": "ancho",
                "tipo": "float64",
                "descripcion": "Ancho del código de barras",
                "descripcion_ingles": "Barcode width",
                "ejemplo": 380,
                "ejemplo_ingles": 380
            },
            {
                "id": 21,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)",
                "descripcion_ingles": "Algorithm to convert image to ESC POS bytes (0, 1 o 2)",
                "ejemplo": 0,
                "ejemplo_ingles": 0
            },
        ]
    },
    {
        "nombre": "ImprimirCodigoDeBarrasEan",
        nombre_corto: "Código de barras Ean",
        nombre_corto_ingles: "Ean barcode",
        "descripcion": "Imprime un código de barras en formato Ean. El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código",
        "descripcion_ingles": "Print a bar code in EAN format. The algorithm refers to the algorithm used to print the image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ The other parameters are related to the code generation algorithm",
        "argumentos": [
            {
                "id": 64,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "Contenido del código de barras",
                "descripcion_ingles": "Barcode content",
                "ejemplo": "5012345678900",
                "ejemplo_ingles": "5012345678900"
            },
            {
                "id": 44,
                "nombre": "alto",
                "tipo": "float64",
                "descripcion": "Alto del código de barras",
                "descripcion_ingles": "Barcode height",
                "ejemplo": 80,
                "ejemplo_ingles": 80
            },
            {
                "id": 45,
                "nombre": "ancho",
                "tipo": "float64",
                "descripcion": "Ancho del código de barras",
                "descripcion_ingles": "Barcode width",
                "ejemplo": 380,
                "ejemplo_ingles": 380
            },
            {
                "id": 21,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)",
                "descripcion_ingles": "Algorithm to convert image to ESC POS bytes (0, 1 o 2)",
                "ejemplo": 0,
                "ejemplo_ingles": 0
            },
        ]
    },
    {
        "nombre": "ImprimirCodigoDeBarrasEan8",
        nombre_corto: "Código de barras EAN 8",
        nombre_corto_ingles: "EAN 8 barcode",
        "descripcion": "Imprime un código de barras en formato Ean8. El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código",
        "descripcion_ingles": "Print a bar code in EAN8 format. The algorithm refers to the algorithm used to print the image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ The other parameters are related to the code generation algorithm",
        "argumentos": [
            {
                "id": 68,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "Contenido del código de barras",
                "descripcion_ingles": "Barcode content",
                "ejemplo": "50123452",
                "ejemplo_ingles": "50123452"
            },
            {
                "id": 44,
                "nombre": "alto",
                "tipo": "float64",
                "descripcion": "Alto del código de barras",
                "descripcion_ingles": "Barcode height",
                "ejemplo": 80,
                "ejemplo_ingles": 80
            },
            {
                "id": 45,
                "nombre": "ancho",
                "tipo": "float64",
                "descripcion": "Ancho del código de barras",
                "descripcion_ingles": "Barcode width",
                "ejemplo": 380,
                "ejemplo_ingles": 380
            },
            {
                "id": 21,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)",
                "descripcion_ingles": "Algorithm to convert image to ESC POS bytes (0, 1 o 2)",
                "ejemplo": 0,
                "ejemplo_ingles": 0
            },
        ]
    },
    {
        "id": 30,
        "nombre": "ImprimirCodigoDeBarrasTwoOfFiveITF",
        nombre_corto: "Código de barras ITF",
        nombre_corto_ingles: "2of5 ITF barcode",
        "descripcion": "Imprime un código de barras en formato Two of five ITF (Entrelazados 2 de 5). El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código Nota: el parámetro \"intercalado\" es propio del algoritmo del código de barras, no del plugin",
        "descripcion_ingles": "Print a barcode on TWO of Five Itf format (interleaved 2 of 5). The algorithm refers to the algorithm used to print the image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ The other parameters are related to the code generation algorithm Note: The \"interleaved\" parameter is typical of the barcode algorithm, not the plugin",
        "argumentos": [
            {
                "id": 72,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "Contenido del código de barras",
                "descripcion_ingles": "Barcode content",
                "ejemplo": "50123452",
                "ejemplo_ingles": "50123452"
            },
            {
                "id": 73,
                "nombre": "intercalado",
                "tipo": "bool",
                "descripcion": "Intercalado",
                "descripcion_ingles": "Interleaved",
                "ejemplo": "false",
                "ejemplo_ingles": "false"
            },
            {
                "id": 44,
                "nombre": "alto",
                "tipo": "float64",
                "descripcion": "Alto del código de barras",
                "descripcion_ingles": "Barcode height",
                "ejemplo": 80,
                "ejemplo_ingles": 80
            },
            {
                "id": 45,
                "nombre": "ancho",
                "tipo": "float64",
                "descripcion": "Ancho del código de barras",
                "descripcion_ingles": "Barcode width",
                "ejemplo": 380,
                "ejemplo_ingles": 380
            },
            {
                "id": 21,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)",
                "descripcion_ingles": "Algorithm to convert image to ESC POS bytes (0, 1 o 2)",
                "ejemplo": 0,
                "ejemplo_ingles": 0
            },
        ]
    },
    {
        "id": 31,
        "nombre": "ImprimirCodigoDeBarrasCodabar",
        nombre_corto: "Código de barras Codabar",
        nombre_corto_ingles: "Codabar barcode",
        "descripcion": "Imprime un código de barras en formato Codabar. El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código",
        "descripcion_ingles": "Print a barcode in Codabar format. The algorithm refers to the algorithm used to print the image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ The other parameters are related to the code generation algorithm",
        "argumentos": [
            {
                "id": 77,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "Contenido del código de barras",
                "descripcion_ingles": "Barcode content",
                "ejemplo": "D387266D",
                "ejemplo_ingles": "D387266D"
            },
            {
                "id": 44,
                "nombre": "alto",
                "tipo": "float64",
                "descripcion": "Alto del código de barras",
                "descripcion_ingles": "Barcode height",
                "ejemplo": 80,
                "ejemplo_ingles": 80
            },
            {
                "id": 45,
                "nombre": "ancho",
                "tipo": "float64",
                "descripcion": "Ancho del código de barras",
                "descripcion_ingles": "Barcode width",
                "ejemplo": 380,
                "ejemplo_ingles": 380
            },
            {
                "id": 21,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)",
                "descripcion_ingles": "Algorithm to convert image to ESC POS bytes (0, 1 o 2)",
                "ejemplo": 0,
                "ejemplo_ingles": 0
            },
        ]
    },
    {
        "id": 32,
        "nombre": "ImprimirCodigoDeBarrasCode128",
        nombre_corto: "Código de barras Code 128",
        nombre_corto_ingles: "Code 128 barcode",
        "descripcion": "Imprime un código de barras en formato Code128. El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código",
        "descripcion_ingles": "Print a bar code in CODE128 format. The algorithm refers to the algorithm used to print the image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ The other parameters are related to the code generation algorithm",
        "argumentos": [
            {
                "id": 81,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "Contenido del código de barras",
                "descripcion_ingles": "Barcode content",
                "ejemplo": "D387266D",
                "ejemplo_ingles": "D387266D"
            },
            {
                "id": 44,
                "nombre": "alto",
                "tipo": "float64",
                "descripcion": "Alto del código de barras",
                "descripcion_ingles": "Barcode height",
                "ejemplo": 80,
                "ejemplo_ingles": 80
            },
            {
                "id": 45,
                "nombre": "ancho",
                "tipo": "float64",
                "descripcion": "Ancho del código de barras",
                "descripcion_ingles": "Barcode width",
                "ejemplo": 380,
                "ejemplo_ingles": 380
            },
            {
                "id": 21,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)",
                "descripcion_ingles": "Algorithm to convert image to ESC POS bytes (0, 1 o 2)",
                "ejemplo": 0,
                "ejemplo_ingles": 0
            },
        ]
    },
    {
        "id": 33,
        "nombre": "ImprimirCodigoQr",
        nombre_corto: "Código QR",
        nombre_corto_ingles: "QR code",
        "descripcion": "Imprime un código QR. El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código Nota: el nivel de recuperación es propio del algoritmo generador del QR, no del plugin. Puede ser 0 (low), 1 (medium), 2(high) y 3 (highest). Se recomienda medium",
        "descripcion_ingles": "Print a QR code. The algorithm refers to the algorithm used to print the image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ The other parameters are related to the code generation algorithm Note: The error correction is related to the QR generating algorithm, not the plugin. It can be 0 (low), 1 (medium), 2 (high) and 3 (Highest). Medium is recommended",
        "argumentos": [
            {
                "id": 85,
                "nombre": "contenido",
                "tipo": "string",
                "descripcion": "Contenido del código QR",
                "descripcion_ingles": "QR Code content",
                "ejemplo": "https://parzibyte.me/blog/",
                "ejemplo_ingles": "https://parzibyte.me/blog/"
            },
            {
                "id": 20,
                "nombre": "anchoMaximo",
                "tipo": "float64",
                "descripcion": "Máximo ancho de la imagen. Si el verdadero ancho es mayor, se reducirá",
                "descripcion_ingles": "Max width for image. If the real width is greater, it will be reduced",
                "ejemplo": 380,
                "ejemplo_ingles": 380
            },
            {
                "id": 87,
                "nombre": "nivelRecuperacion",
                "tipo": "float64",
                "descripcion": "Nivel de recuperación (0-3)",
                "descripcion_ingles": "Error correction (0-3)",
                "ejemplo": 1,
                "ejemplo_ingles": 1,
            },
            {
                "id": 21,
                "nombre": "algoritmo",
                "tipo": "float64",
                "descripcion": "Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)",
                "descripcion_ingles": "Algorithm to convert image to ESC POS bytes (0, 1 o 2)",
                "ejemplo": 0,
                "ejemplo_ingles": 0
            },
        ]
    }
];