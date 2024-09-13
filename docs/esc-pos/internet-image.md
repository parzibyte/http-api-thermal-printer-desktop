# Internet image

`DescargarImagenDeInternetEImprimir`

Download an internet image and print it. The image must be publicly accessible using only the URL.  The image will be converted to black and white. If the width of the image is greater than the maximum width specified, the image will be resized to match. Algorithm refers to the algorithm used when printing an image, which can be 0 for using the Raster Bit Image method, 1 for Bit Image Column Format and 2 for NV Graphics. Newer printers support NV Graphics, older ones support Raster Bit Image and Image Column Format. It is recommended that the user tries all 3 algorithms to find the most suitable one. More information about the algorithms: https://parzibyte.me/blog/2024/01/17/methods-for-printing-images-thermal-printers/ . The dithering parameter indicates whether the Floyd-Steinberg-Dithering algorithm should be applied to the image before it is printed. It is recommended to apply it to pictures (and no illustrations), so that the lighting and details are maintained even when converted to black and white. More information about dithering: https://parzibyte.me/blog/2024/07/28/algoritmo-floyd-steinberg-dithering-golang/


[Try it on the Playground](../playground.md?operacion=DescargarImagenDeInternetEImprimir)

## Arguments
### Image URL (`argumentos[0]`)



**Description:** Image URL

**Index:** `0`

**Type:** `string`

**Example:** `https://github.com/parzibyte.png`

### Max width for image. If the real width is greater, it will be reduced (`argumentos[1]`)



**Description:** Max width for image. If the real width is greater, it will be reduced

**Index:** `1`

**Type:** `float64`

**Example:** `380`

### Algorithm to convert image to ESC POS bytes (0, 1 o 2) (`argumentos[2]`)



**Description:** Algorithm to convert image to ESC POS bytes (0, 1 o 2)

**Index:** `2`

**Type:** `float64`

**Example:** `0`

### Apply dithering algorithm. Recommended on photographies, not illustrations (`argumentos[3]`)



**Description:** Apply dithering algorithm. Recommended on photographies, not illustrations

**Index:** `3`

**Type:** `bool`

**Example:** `true`

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `DescargarImagenDeInternetEImprimir`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



```json
{
  "nombre": "DescargarImagenDeInternetEImprimir",
  "argumentos": [
    "https://github.com/parzibyte.png",
    380,
    0,
    true
  ]
}
```

::: tip
**Remember:** the operation list (`operaciones`) can contain infinite operations, this is only one of them
:::

## Example (JavaScript client side)

[Try it on the Playground](../playground.md?operacion=DescargarImagenDeInternetEImprimir)
```js
const httpResponse = await fetch("http://localhost:8000/imprimir",
    {
        method: "POST",
        body: JSON.stringify({
  "serial": "",
  "nombreImpresora": "your_printers_name",
  "operaciones": [
    {
      "nombre": "DescargarImagenDeInternetEImprimir",
      "argumentos": [
        "https://github.com/parzibyte.png",
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

const jsonResponse = await httpResponse.json();
if (jsonResponse.ok) {
    // Everything is ok
    console.log("Printed successfully");
} else {
    // Error message is on message property
    console.error(jsonResponse.message)
}
```

## Example JSON (not encoded)

Encode this JSON and send it to `http://localhost:8000/imprimir` with POST method

```json
{
  "serial": "",
  "nombreImpresora": "your_printers_name",
  "operaciones": [
    {
      "nombre": "DescargarImagenDeInternetEImprimir",
      "argumentos": [
        "https://github.com/parzibyte.png",
        380,
        0,
        true
      ]
    }
  ]
}
```

## Example JSON (encoded)

Send this JSON string to `http://localhost:8000/imprimir` with POST method

```
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"DescargarImagenDeInternetEImprimir","argumentos":["https://github.com/parzibyte.png",380,0,true]}]}
```
