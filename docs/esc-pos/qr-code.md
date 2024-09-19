# QR code

`ImprimirCodigoQr`

Print a QR code. The algorithm refers to the algorithm used to print the image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ The other parameters are related to the code generation algorithm Note: The error correction is related to the QR generating algorithm, not the plugin. It can be 0 (low), 1 (medium), 2 (high) and 3 (Highest). Medium is recommended







[Try it on the Playground](../playground.md?operacion=ImprimirCodigoQr)

## Arguments
### QR Code content (`argumentos[0]`)



**Description:** QR Code content

**Index:** `0`

**Type:** `string`

**Example:** `https://parzibyte.me/blog/`

### Max width for image. If the real width is greater, it will be reduced (`argumentos[1]`)



**Description:** Max width for image. If the real width is greater, it will be reduced

**Index:** `1`

**Type:** `float64`

**Example:** `380`

### Error correction (0-3) (`argumentos[2]`)



**Description:** Error correction (0-3)

**Index:** `2`

**Type:** `float64`

**Example:** `1`

### Algorithm to convert image to ESC POS bytes (0, 1 o 2) (`argumentos[3]`)



**Description:** Algorithm to convert image to ESC POS bytes (0, 1 o 2)

**Index:** `3`

**Type:** `float64`

**Example:** `0`

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `ImprimirCodigoQr`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



```json
{
        "nombre": "ImprimirCodigoQr",
        "argumentos": [
            "https://parzibyte.me/blog/",
            380,
            1,
            0
        ]
}
```

::: tip
**Remember:** the operation list (`operaciones`) can contain infinite operations, this is only one of them
:::

## Example (JavaScript client side)

### Playground
[Try it on the Playground](../playground.md?operacion=ImprimirCodigoQr)

<Playground urlBase=".." nombreOperacion="ImprimirCodigoQr" :ocultarOperacionesDisponibles="true"/>

### Code example
```js
const payload = {
    "serial": "",
    "nombreImpresora": "Printers_name",
    "operaciones": [
      {
        "nombre": "ImprimirCodigoQr",
        "argumentos": [
          "https://parzibyte.me/blog/",
          380,
          1,
          0
        ]
      }
    ]
};
const httpResponse = await fetch("http://localhost:8000/imprimir",
    {
        method: "POST",
        body: JSON.stringify(payload),
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
    "nombreImpresora": "Printers_name",
    "operaciones": [
      {
        "nombre": "ImprimirCodigoQr",
        "argumentos": [
          "https://parzibyte.me/blog/",
          380,
          1,
          0
        ]
      }
    ]
}
```

## Example JSON (encoded)

Send this JSON string to `http://localhost:8000/imprimir` with POST method

```
{"serial":"","nombreImpresora":"Printers_name","operaciones":[{"nombre":"ImprimirCodigoQr","argumentos":["https://parzibyte.me/blog/",380,1,0]}]}
```
