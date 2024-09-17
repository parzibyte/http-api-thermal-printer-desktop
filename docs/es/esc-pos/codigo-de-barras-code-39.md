# Código de barras code 39

`ImprimirCodigoDeBarrasCode39`

Imprime un código de barras en formato Code39. El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código




[Pruébalo en el área de pruebas](../playground.md?operacion=ImprimirCodigoDeBarrasCode39)

## Argumentos
### Contenido del código de barras (`argumentos[0]`)



**Descripción:** Contenido del código de barras

**Índice:** `0`

**Tipo:** `string`

**Ejemplo:** `D387266D`

### Incluir suma de verificación (`argumentos[1]`)



**Descripción:** Incluir suma de verificación

**Índice:** `1`

**Tipo:** `bool`

**Ejemplo:** `true`

### Modo ASCII completo (`argumentos[2]`)



**Descripción:** Modo ASCII completo

**Índice:** `2`

**Tipo:** `bool`

**Ejemplo:** `true`

### Alto del código de barras (`argumentos[3]`)



**Descripción:** Alto del código de barras

**Índice:** `3`

**Tipo:** `float64`

**Ejemplo:** `20`

### Barcode width (`argumentos[4]`)



**Descripción:** Barcode width

**Índice:** `4`

**Tipo:** `float64`

**Ejemplo:** `380`

### Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2) (`argumentos[5]`)



**Descripción:** Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)

**Índice:** `5`

**Tipo:** `float64`

**Ejemplo:** `0`

## Ejemplo

Agrega esta operación a la lista de operaciones que enviarás en la clave `operaciones`.

Su nombre es `ImprimirCodigoDeBarrasCode39`, así que ese valor va en la clave `nombre`. Después coloca los argumentos en el arreglo `argumentos`

No olvides revisar el tipo de dato de cada argumento


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
**Recuerda:** la lista de operaciones (`operaciones`) puede tener infinitas operaciones, esta es solo una de ellas
:::

## Ejemplo (JavaScript lado del cliente)

### Área de pruebas
[Pruébalo en el área de pruebas](../playground.md?operacion=ImprimirCodigoDeBarrasCode39)
<Playground nombreOperacion="ImprimirCodigoDeBarrasCode39" :ocultarOperacionesDisponibles="true"/>

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

## JSON de ejemplo codificado

Envía esta cadena JSON ya codificada a `http://localhost:8000/imprimir` con el método POST

```
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"ImprimirCodigoDeBarrasCode39","argumentos":["D387266D",true,true,20,380,0]}]}
```
