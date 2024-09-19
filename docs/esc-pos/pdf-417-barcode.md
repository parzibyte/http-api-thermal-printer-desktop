# Pdf 417 barcode

`ImprimirCodigoDeBarrasPdf417`

Print a barcode in PDF417 format. The algorithm refers to the algorithm used to convert the image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ The other parameters are related to the code generation algorithm Note: The security level is related to the barcode generation algorithm itself, not to the plugin. It must be between 0 and 8







[Try it on the Playground](../playground.md?operacion=ImprimirCodigoDeBarrasPdf417)

## Arguments
### Barcode content (`argumentos[0]`)



**Description:** Barcode content

**Index:** `0`

**Type:** `string`

**Example:** `50123452`

### Security level (`argumentos[1]`)



**Description:** Security level

**Index:** `1`

**Type:** `float64`

**Example:** `1`

### Barcode height (`argumentos[2]`)



**Description:** Barcode height

**Index:** `2`

**Type:** `float64`

**Example:** `80`

### Barcode height (`argumentos[3]`)



**Description:** Barcode height

**Index:** `3`

**Type:** `float64`

**Example:** `20`

### Algorithm to convert image to ESC POS bytes (0, 1 o 2) (`argumentos[4]`)



**Description:** Algorithm to convert image to ESC POS bytes (0, 1 o 2)

**Index:** `4`

**Type:** `float64`

**Example:** `0`

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `ImprimirCodigoDeBarrasPdf417`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



```json
{
        "nombre": "ImprimirCodigoDeBarrasPdf417",
        "argumentos": [
            "50123452",
            1,
            80,
            20,
            0
        ]
}
```

::: tip
**Remember:** the operation list (`operaciones`) can contain infinite operations, this is only one of them
:::

## Example (JavaScript client side)

### Playground
[Try it on the Playground](../playground.md?operacion=ImprimirCodigoDeBarrasPdf417)

<Playground urlBase=".." nombreOperacion="ImprimirCodigoDeBarrasPdf417" :ocultarOperacionesDisponibles="true"/>

### Code example
```js
const payload = {
    "serial": "",
    "nombreImpresora": "Printers_name",
    "operaciones": [
      {
        "nombre": "ImprimirCodigoDeBarrasPdf417",
        "argumentos": [
          "50123452",
          1,
          80,
          20,
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
        "nombre": "ImprimirCodigoDeBarrasPdf417",
        "argumentos": [
          "50123452",
          1,
          80,
          20,
          0
        ]
      }
    ]
}
```

## Example JSON (encoded)

Send this JSON string to `http://localhost:8000/imprimir` with POST method

```
{"serial":"","nombreImpresora":"Printers_name","operaciones":[{"nombre":"ImprimirCodigoDeBarrasPdf417","argumentos":["50123452",1,80,20,0]}]}
```
