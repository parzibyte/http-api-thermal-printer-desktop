# Cambiar alineación

`EstablecerAlineacion`

Establece la alineación del texto e imágenes (incluyendo códigos de barras y QR) según la alineacion. Izquierda es 0, Centro 1 y Derecha 2


[Pruébalo en el área de pruebas](../playground.md?operacion=EstablecerAlineacion)

## Argumentos
### Alineación (0, 1 o 2) (`argumentos[0]`)



**Descripción:** Alineación (0, 1 o 2)

**Índice:** `0`

**Tipo:** `float64`

**Ejemplo:** `1`

## Ejemplo

Agrega esta operación a la lista de operaciones que enviarás en la clave `operaciones`.

Su nombre es `EstablecerAlineacion`, así que ese valor va en la clave `nombre`. Después coloca los argumentos en el arreglo `argumentos`

No olvides revisar el tipo de dato de cada argumento


```json
{
  "nombre": "EstablecerAlineacion",
  "argumentos": [
    1
  ]
}
```



::: tip
**Recuerda:** la lista de operaciones (`operaciones`) puede tener infinitas operaciones, esta es solo una de ellas
:::

## Ejemplo (JavaScript lado del cliente)

[Pruébalo en el área de pruebas](../playground.md?operacion=EstablecerAlineacion)
```js
const respuestaHttp = await fetch("http://localhost:8000/imprimir",
    {
        method: "POST",
        body: JSON.stringify({
  "serial": "",
  "nombreImpresora": "your_printers_name",
  "operaciones": [
    {
      "nombre": "EstablecerAlineacion",
      "argumentos": [
        1
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
      "nombre": "EstablecerAlineacion",
      "argumentos": [
        1
      ]
    }
  ]
}
```

## JSON de ejemplo codificado

Envía esta cadena JSON ya codificada a `http://localhost:8000/imprimir` con el método POST

```
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"EstablecerAlineacion","argumentos":[1]}]}
```
