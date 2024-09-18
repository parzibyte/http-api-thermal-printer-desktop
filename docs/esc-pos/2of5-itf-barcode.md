# 2of5 ITF barcode

`ImprimirCodigoDeBarrasTwoOfFiveITF`

Print a barcode on TWO of Five Itf format (interleaved 2 of 5). The algorithm refers to the algorithm used to print the image, which can be 0 to use the Raster Bit Image method, 1 for BIT Image Column Format and 2 for NV Graphics. The most recent printers support NV Graphics, the old support Raster Bit Image and Image Column Format. More information about algorithms: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ The other parameters are related to the code generation algorithm Note: The "interleaved" parameter is typical of the barcode algorithm, not the plugin







[Try it on the Playground](../playground.md?operacion=ImprimirCodigoDeBarrasTwoOfFiveITF)

## Arguments
### Barcode content (`argumentos[0]`)



**Description:** Barcode content

**Index:** `0`

**Type:** `string`

**Example:** `50123452`

### Interleaved (`argumentos[1]`)



**Description:** Interleaved

**Index:** `1`

**Type:** `bool`

**Example:** `false`

### Barcode height (`argumentos[2]`)



**Description:** Barcode height

**Index:** `2`

**Type:** `float64`

**Example:** `20`

### Barcode width (`argumentos[3]`)



**Description:** Barcode width

**Index:** `3`

**Type:** `float64`

**Example:** `380`

### Algorithm to convert image to ESC POS bytes (0, 1 o 2) (`argumentos[4]`)



**Description:** Algorithm to convert image to ESC POS bytes (0, 1 o 2)

**Index:** `4`

**Type:** `float64`

**Example:** `0`

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `ImprimirCodigoDeBarrasTwoOfFiveITF`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



```json
{
  "nombre": "ImprimirCodigoDeBarrasTwoOfFiveITF",
  "argumentos": [
    "50123452",
    false,
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
[Try it on the Playground](../playground.md?operacion=ImprimirCodigoDeBarrasTwoOfFiveITF)

<Playground urlBase=".." nombreOperacion="ImprimirCodigoDeBarrasTwoOfFiveITF" :ocultarOperacionesDisponibles="true"/>

### Code example
```js
const httpResponse = await fetch("http://localhost:8000/imprimir",
    {
        method: "POST",
        body: JSON.stringify({
  "serial": "",
  "nombreImpresora": "your_printers_name",
  "operaciones": [
    {
      "nombre": "ImprimirCodigoDeBarrasTwoOfFiveITF",
      "argumentos": [
        "50123452",
        false,
        20,
        380,
        0
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
      "nombre": "ImprimirCodigoDeBarrasTwoOfFiveITF",
      "argumentos": [
        "50123452",
        false,
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
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"ImprimirCodigoDeBarrasTwoOfFiveITF","argumentos":["50123452",false,20,380,0]}]}
```
