# Código de barras UPC A

`ImprimirCodigoDeBarrasUpcA`

Imprime un código de barras en formato UpcA. El algoritmo se refiere al algoritmo utilizado al imprimir la imagen, que puede ser 0 para usar el método Raster Bit Image, 1 para Bit Image Column Format y 2 para NV Graphics. Las impresoras más recientes soportan NV Graphics, las antiguas soportan Raster Bit Image e Image Column Format. Más información sobre los algoritmos: https://parzibyte.me/blog/2024/01/17/metodos-imprimir-imagenes-impresoras-termicas/ Los demás parámetros son propios del algoritmo de generación del código




[Pruébalo en el área de pruebas](../area-pruebas.md?operacion=ImprimirCodigoDeBarrasUpcA)

## Argumentos
### Contenido del código de barras (`argumentos[0]`)



**Descripción:** Contenido del código de barras

**Índice:** `0`

**Tipo:** `string`

**Ejemplo:** `012345678905`

### Alto del código de barras (`argumentos[1]`)



**Descripción:** Alto del código de barras

**Índice:** `1`

**Tipo:** `float64`

**Ejemplo:** `20`

### Barcode width (`argumentos[2]`)



**Descripción:** Barcode width

**Índice:** `2`

**Tipo:** `float64`

**Ejemplo:** `380`

### Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2) (`argumentos[3]`)



**Descripción:** Algoritmo para convertir imagen a bytes ESC POS (0, 1 o 2)

**Índice:** `3`

**Tipo:** `float64`

**Ejemplo:** `0`

## Ejemplo

Agrega esta operación a la lista de operaciones que enviarás en la clave `operaciones`.

Su nombre es `ImprimirCodigoDeBarrasUpcA`, así que ese valor va en la clave `nombre`. Después coloca los argumentos en el arreglo `argumentos`

No olvides revisar el tipo de dato de cada argumento


```json
{
    "nombre": "ImprimirCodigoDeBarrasUpcA",
    "argumentos": [
      "012345678905",
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
[Pruébalo en el área de pruebas](../area-pruebas.md?operacion=ImprimirCodigoDeBarrasUpcA)
<Playground urlBase="../.." nombreOperacion="ImprimirCodigoDeBarrasUpcA" :ocultarOperacionesDisponibles="true"/>

### Ejemplo de código
```js
const cargaUtil = {
    "serial": "",
    "nombreImpresora": "Nombre_impresora",
    "operaciones": [
      {
        "nombre": "ImprimirCodigoDeBarrasUpcA",
        "argumentos": [
          "012345678905",
          20,
          380,
          0
        ]
      }
    ]
};
const respuestaHttp = await fetch("http://localhost:8000/imprimir",
    {
        method: "POST",
        body: JSON.stringify(cargaUtil),
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
    "nombreImpresora": "Nombre_impresora",
    "operaciones": [
      {
        "nombre": "ImprimirCodigoDeBarrasUpcA",
        "argumentos": [
          "012345678905",
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
{"serial":"","nombreImpresora":"Nombre_impresora","operaciones":[{"nombre":"ImprimirCodigoDeBarrasUpcA","argumentos":["012345678905",20,380,0]}]}
```
