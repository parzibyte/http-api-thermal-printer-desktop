# Establecer fuente

`EstablecerFuente`

Establece la fuente, que puede ser 0 o 1. En mi caso solo soporta una fuente que es la A. Tener cuidado al cambiar la fuente e intentar imprimir un carácter personalizado, pues por el momento solo funciona con la fuente A


[Pruébalo en el área de pruebas](../playground.md?operacion=EstablecerFuente)

<Playground nombreOperacion="EstablecerFuente"/>

## Argumentos
### Fuente (0, 1) (`argumentos[0]`)



**Descripción:** Fuente (0, 1)

**Índice:** `0`

**Tipo:** `float64`

**Ejemplo:** `0`

## Ejemplo

Agrega esta operación a la lista de operaciones que enviarás en la clave `operaciones`.

Su nombre es `EstablecerFuente`, así que ese valor va en la clave `nombre`. Después coloca los argumentos en el arreglo `argumentos`

No olvides revisar el tipo de dato de cada argumento


```json
{
  "nombre": "EstablecerFuente",
  "argumentos": [
    0
  ]
}
```



::: tip
**Recuerda:** la lista de operaciones (`operaciones`) puede tener infinitas operaciones, esta es solo una de ellas
:::

## Ejemplo (JavaScript lado del cliente)

### Área de pruebas
[Pruébalo en el área de pruebas](../playground.md?operacion=EstablecerFuente)
<Playground nombreOperacion="EstablecerFuente"/>

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
      "nombre": "EstablecerFuente",
      "argumentos": [
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
      "nombre": "EstablecerFuente",
      "argumentos": [
        0
      ]
    }
  ]
}
```

## JSON de ejemplo codificado

Envía esta cadena JSON ya codificada a `http://localhost:8000/imprimir` con el método POST

```
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"EstablecerFuente","argumentos":[0]}]}
```
