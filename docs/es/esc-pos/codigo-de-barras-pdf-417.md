# Código de barras PDF 417

`ImprimirCodigoDeBarrasPdf417`

Imprime un código de barras en formato PDF417. El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código Nota: el nivel de seguridad tiene que ver con el propio algoritmo del código de barras, no con el plugin. Debe ser entre 0 y 8




[Pruébalo en el área de pruebas](../area-pruebas.md?operacion=ImprimirCodigoDeBarrasPdf417)

## Argumentos
### Contenido del código de barras (`argumentos[0]`)



**Descripción:** Contenido del código de barras

**Índice:** `0`

**Tipo:** `string`

**Ejemplo:** `50123452`

### Nivel de seguridad (`argumentos[1]`)



**Descripción:** Nivel de seguridad

**Índice:** `1`

**Tipo:** `float64`

**Ejemplo:** `1`

### Altura del código de barras (`argumentos[2]`)



**Descripción:** Altura del código de barras

**Índice:** `2`

**Tipo:** `float64`

**Ejemplo:** `80`

### Alto del código de barras (`argumentos[3]`)



**Descripción:** Alto del código de barras

**Índice:** `3`

**Tipo:** `float64`

**Ejemplo:** `20`

### Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2) (`argumentos[4]`)



**Descripción:** Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)

**Índice:** `4`

**Tipo:** `float64`

**Ejemplo:** `0`

## Ejemplo

Agrega esta operación a la lista de operaciones que enviarás en la clave `operaciones`.

Su nombre es `ImprimirCodigoDeBarrasPdf417`, así que ese valor va en la clave `nombre`. Después coloca los argumentos en el arreglo `argumentos`

No olvides revisar el tipo de dato de cada argumento


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
**Recuerda:** la lista de operaciones (`operaciones`) puede tener infinitas operaciones, esta es solo una de ellas
:::

## Ejemplo (JavaScript lado del cliente)

### Área de pruebas
[Pruébalo en el área de pruebas](../area-pruebas.md?operacion=ImprimirCodigoDeBarrasPdf417)
<Playground urlBase="../.." nombreOperacion="ImprimirCodigoDeBarrasPdf417" :ocultarOperacionesDisponibles="true"/>

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

## JSON de ejemplo codificado

Envía esta cadena JSON ya codificada a `http://localhost:8000/imprimir` con el método POST

```
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"ImprimirCodigoDeBarrasPdf417","argumentos":["50123452",1,80,20,0]}]}
```
