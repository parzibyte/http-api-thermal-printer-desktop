# Código QR

`ImprimirCodigoQr`

Imprime un código QR. El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código Nota: el nivel de recuperación es propio del algoritmo generador del QR, no del plugin. Puede ser 0 (low), 1 (medium), 2(high) y 3 (highest). Se recomienda medium




[Pruébalo en el área de pruebas](../playground.md?operacion=ImprimirCodigoQr)

## Argumentos
### Contenido del código QR (`argumentos[0]`)



**Descripción:** Contenido del código QR

**Índice:** `0`

**Tipo:** `string`

**Ejemplo:** `https://parzibyte.me/blog/`

### Máximo ancho de la imagen. Si el verdadero ancho es mayor, se reducirá (`argumentos[1]`)



**Descripción:** Máximo ancho de la imagen. Si el verdadero ancho es mayor, se reducirá

**Índice:** `1`

**Tipo:** `float64`

**Ejemplo:** `380`

### Nivel de recuperación (0-3) (`argumentos[2]`)



**Descripción:** Nivel de recuperación (0-3)

**Índice:** `2`

**Tipo:** `float64`

**Ejemplo:** `1`

### Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2) (`argumentos[3]`)



**Descripción:** Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)

**Índice:** `3`

**Tipo:** `float64`

**Ejemplo:** `0`

## Ejemplo

Agrega esta operación a la lista de operaciones que enviarás en la clave `operaciones`.

Su nombre es `ImprimirCodigoQr`, así que ese valor va en la clave `nombre`. Después coloca los argumentos en el arreglo `argumentos`

No olvides revisar el tipo de dato de cada argumento


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
**Recuerda:** la lista de operaciones (`operaciones`) puede tener infinitas operaciones, esta es solo una de ellas
:::

## Ejemplo (JavaScript lado del cliente)

### Área de pruebas
[Pruébalo en el área de pruebas](../playground.md?operacion=ImprimirCodigoQr)
<Playground nombreOperacion="ImprimirCodigoQr" :ocultarOperacionesDisponibles="true"/>

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
      "nombre": "ImprimirCodigoQr",
      "argumentos": [
        "https://parzibyte.me/blog/",
        380,
        1,
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

## JSON de ejemplo codificado

Envía esta cadena JSON ya codificada a `http://localhost:8000/imprimir` con el método POST

```
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"ImprimirCodigoQr","argumentos":["https://parzibyte.me/blog/",380,1,0]}]}
```
