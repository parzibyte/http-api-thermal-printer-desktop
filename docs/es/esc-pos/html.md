# HTML

`GenerarImagenAPartirDeHtmlEImprimir`

Genera una imagen a partir del html usando el ancho de página como el ancho de la pantalla del navegador web para renderizar la imagen, y después imprime esa imagen generada. La imagen será convertida a blanco y negro. Si el ancho de la imagen es mayor que el máximo ancho especificado, la imagen será redimensionada para que coincida. El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Lo recomendable es que el usuario pruebe con los 3 algoritmos para encontrar el más adecuado. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ . El parámetro sobre el dithering indica si se debe aplicar el algoritmo Floyd-Steinberg-Dithering a la imagen antes de ser impresa. Es recomendado aplicarlo en fotografías, así se mantiene la iluminación y los detalles incluso al ser convertida a blanco y negro. Más información sobre dithering: https://parzibyte.me/blog/2024/07/28/algoritmo-floyd-steinberg-dithering-golang/


::: warning
**wkhtmltoimage debe existir en la PATH** para que esta operación funcione, necesitas
[wkhtmltoimage](https://wkhtmltopdf.org/downloads.html) en la PATH o en el mismo directorio
donde el plugin se ejecuta
:::



[Pruébalo en el área de pruebas](../playground.md?operacion=GenerarImagenAPartirDeHtmlEImprimir)

## Argumentos
### HTML como cadena (`argumentos[0]`)



**Descripción:** HTML como cadena

**Índice:** `0`

**Tipo:** `string`

**Ejemplo:** `<p><strong>¡Hola</strong> mundo!</p>`

### Ancho de página del navegador web (`argumentos[1]`)



**Descripción:** Ancho de página del navegador web

**Índice:** `1`

**Tipo:** `float64`

**Ejemplo:** `380`

### Máximo ancho de la imagen. Si el verdadero ancho es mayor, se reducirá (`argumentos[2]`)



**Descripción:** Máximo ancho de la imagen. Si el verdadero ancho es mayor, se reducirá

**Índice:** `2`

**Tipo:** `float64`

**Ejemplo:** `380`

### Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2) (`argumentos[3]`)



**Descripción:** Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)

**Índice:** `3`

**Tipo:** `float64`

**Ejemplo:** `0`

### Aplicar algoritmo dithering. Recomendado en fotografías, no ilustraciones (`argumentos[4]`)



**Descripción:** Aplicar algoritmo dithering. Recomendado en fotografías, no ilustraciones

**Índice:** `4`

**Tipo:** `bool`

**Ejemplo:** `true`

## Ejemplo

Agrega esta operación a la lista de operaciones que enviarás en la clave `operaciones`.

Su nombre es `GenerarImagenAPartirDeHtmlEImprimir`, así que ese valor va en la clave `nombre`. Después coloca los argumentos en el arreglo `argumentos`

No olvides revisar el tipo de dato de cada argumento


```json
{
  "nombre": "GenerarImagenAPartirDeHtmlEImprimir",
  "argumentos": [
    "<p><strong>Hello</strong> world!</p>",
    380,
    380,
    0,
    true
  ]
}
```



::: tip
**Recuerda:** la lista de operaciones (`operaciones`) puede tener infinitas operaciones, esta es solo una de ellas
:::

## Ejemplo (JavaScript lado del cliente)

### Área de pruebas
[Pruébalo en el área de pruebas](../playground.md?operacion=GenerarImagenAPartirDeHtmlEImprimir)
<Playground nombreOperacion="GenerarImagenAPartirDeHtmlEImprimir" :ocultarOperacionesDisponibles="true"/>

### Ejemplo de código
```js
const respuestaHttp = await fetch("http://localhost:8000/imprimir",
    {
        method: "POST",
        body: JSON.stringify({
  "serial": "",
  "nombreImpresora": "your_printers_name",
  "operaciones": [
    {
      "nombre": "GenerarImagenAPartirDeHtmlEImprimir",
      "argumentos": [
        "<p><strong>Hello</strong> world!</p>",
        380,
        380,
        0,
        true
      ]
    }
  ]
}),
        headers: {
            "Content-Type": "application/json",
        },
    });

const respuestaComoJson = await respuestaHttp.json();
if (respuestaComoJson.ok) {
    // Todo bien
    console.log("Impreso correctamente");
} else {
    // El error está en la propiedad message
    console.error(respuestaComoJson.message)
}
```

## JSON de ejemplo sin codificar

Codifica el siguiente JSON y envíalo a `http://localhost:8000/imprimir` con el método POST

```json
{
  "serial": "",
  "nombreImpresora": "your_printers_name",
  "operaciones": [
    {
      "nombre": "GenerarImagenAPartirDeHtmlEImprimir",
      "argumentos": [
        "<p><strong>Hello</strong> world!</p>",
        380,
        380,
        0,
        true
      ]
    }
  ]
}
```

## JSON de ejemplo codificado

Envía esta cadena JSON ya codificada a `http://localhost:8000/imprimir` con el método POST

```
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"GenerarImagenAPartirDeHtmlEImprimir","argumentos":["<p><strong>Hello</strong> world!</p>",380,380,0,true]}]}
```
