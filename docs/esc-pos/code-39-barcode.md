# Code 39 barcode

`ImprimirCodigoDeBarrasCode39`

Print a bar code in CODE39 format. The algorithm refers to the algorithm used to print the image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ The other parameters are related to the code generation algorithm







[Try it on the Playground](../playground.md?operacion=ImprimirCodigoDeBarrasCode39)

## Arguments
### Barcode content (`argumentos[0]`)



**Description:** Barcode content

**Index:** `0`

**Type:** `string`

**Example:** `D387266D`

### Include checksum (`argumentos[1]`)



**Description:** Include checksum

**Index:** `1`

**Type:** `bool`

**Example:** `true`

### Full ASCII mode (`argumentos[2]`)



**Description:** Full ASCII mode

**Index:** `2`

**Type:** `bool`

**Example:** `true`

### Barcode height (`argumentos[3]`)



**Description:** Barcode height

**Index:** `3`

**Type:** `float64`

**Example:** `20`

### Barcode width (`argumentos[4]`)



**Description:** Barcode width

**Index:** `4`

**Type:** `float64`

**Example:** `380`

### Algorithm to convert image to ESC POS bytes (0, 1 o 2) (`argumentos[5]`)



**Description:** Algorithm to convert image to ESC POS bytes (0, 1 o 2)

**Index:** `5`

**Type:** `float64`

**Example:** `0`

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `ImprimirCodigoDeBarrasCode39`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



```json
{
        "nombre": "ImprimirCodigoDeBarrasCode39",
        "argumentos": [
            "D387266D",
            true,
            true,
            20,
            380,
            0
        ]
}
```

::: tip
**Remember:** the operation list (`operaciones`) can contain infinite operations, this is only one of them
:::

## Example (JavaScript client side)

### Playground
[Try it on the Playground](../playground.md?operacion=ImprimirCodigoDeBarrasCode39)

<Playground urlBase=".." nombreOperacion="ImprimirCodigoDeBarrasCode39" :ocultarOperacionesDisponibles="true"/>

### Code example
```js
const payload = {
    "serial": "",
    "nombreImpresora": "Printers_name",
    "operaciones": [
      {
        "nombre": "ImprimirCodigoDeBarrasCode39",
        "argumentos": [
          "D387266D",
          true,
          true,
          20,
          380,
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
        "nombre": "ImprimirCodigoDeBarrasCode39",
        "argumentos": [
          "D387266D",
          true,
          true,
          20,
          380,
          0
        ]
      }
    ]
}
```

## Example JSON (encoded)

Send this JSON string to `http://localhost:8000/imprimir` with POST method

```
{"serial":"","nombreImpresora":"Printers_name","operaciones":[{"nombre":"ImprimirCodigoDeBarrasCode39","argumentos":["D387266D",true,true,20,380,0]}]}
```
