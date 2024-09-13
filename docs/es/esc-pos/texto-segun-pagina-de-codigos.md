# Texto según página de códigos

`TextoSegunPaginaDeCodigos`

Permite escribir texto con acentos. Hay que especificar el número de página (según la impresora) y el character code page para iconv. Recomiendo probar con varias combinaciones. Esta función no tiene ningún efecto si la versión del plugin usada es la versión que no tiene iconv


[Pruébalo en el área de pruebas](../playground.md?operacion=TextoSegunPaginaDeCodigos)

## Argumentos
### Número de página según tu impresora (`argumentos[0]`)



**Descripción:** Número de página según tu impresora

**Índice:** `0`

**Tipo:** `float64`

**Ejemplo:** `2`

### Código de página de caracteres para iconv (`argumentos[1]`)



**Descripción:** Código de página de caracteres para iconv

**Índice:** `1`

**Tipo:** `string`

**Ejemplo:** `cp850`

### Texto para convertir e imprimir (`argumentos[2]`)



**Descripción:** Texto para convertir e imprimir

**Índice:** `2`

**Tipo:** `string`

**Ejemplo:** `Grim, Guayaba, Maggie y Panqué toman el té con la cigüeña de María José`

## Ejemplo

Agrega esta operación a la lista de operaciones que enviarás en la clave `operaciones`.

Su nombre es `TextoSegunPaginaDeCodigos`, así que ese valor va en la clave `nombre`. Después coloca los argumentos en el arreglo `argumentos`

No olvides revisar el tipo de dato de cada argumento


```json
{
  "nombre": "TextoSegunPaginaDeCodigos",
  "argumentos": [
    2,
    "cp850",
    "Grim, Guayaba, Maggie y Panqué toman el té con la cigüeña de María José"
  ]
}
```



::: tip
**Recuerda:** la lista de operaciones (`operaciones`) puede tener infinitas operaciones, esta es solo una de ellas
:::

## Ejemplo (JavaScript lado del cliente)

[Pruébalo en el área de pruebas](../playground.md?operacion=TextoSegunPaginaDeCodigos)
```js
const respuestaHttp = await fetch("http://localhost:8000/imprimir",
    {
        method: "POST",
        body: JSON.stringify({
  "serial": "",
  "nombreImpresora": "your_printers_name",
  "operaciones": [
    {
      "nombre": "TextoSegunPaginaDeCodigos",
      "argumentos": [
        2,
        "cp850",
        "Grim, Guayaba, Maggie y Panqué toman el té con la cigüeña de María José"
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
      "nombre": "TextoSegunPaginaDeCodigos",
      "argumentos": [
        2,
        "cp850",
        "Grim, Guayaba, Maggie y Panqué toman el té con la cigüeña de María José"
      ]
    }
  ]
}
```

## JSON de ejemplo codificado

Envía esta cadena JSON ya codificada a `http://localhost:8000/imprimir` con el método POST

```
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"TextoSegunPaginaDeCodigos","argumentos":[2,"cp850","Grim, Guayaba, Maggie y Panqué toman el té con la cigüeña de María José"]}]}
```
