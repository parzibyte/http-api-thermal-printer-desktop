# Cambiar tamaño de fuente

`EstablecerTamañoFuente`

Establece el tamaño de la fuente según el multiplicador de ancho y el multiplicador del alto. Ambos valores pueden ir desde el 1 hasta el 8. También afecta a los caracteres personalizados




[Pruébalo en el área de pruebas](../area-pruebas.md?operacion=EstablecerTamañoFuente)

## Argumentos
### Multiplicador de ancho (1-8) (`argumentos[0]`)



**Descripción:** Multiplicador de ancho (1-8)

**Índice:** `0`

**Tipo:** `float64`

**Ejemplo:** `2`

### Multiplicador de alto (1-8) (`argumentos[1]`)



**Descripción:** Multiplicador de alto (1-8)

**Índice:** `1`

**Tipo:** `float64`

**Ejemplo:** `2`

## Ejemplo

Agrega esta operación a la lista de operaciones que enviarás en la clave `operaciones`.

Su nombre es `EstablecerTamañoFuente`, así que ese valor va en la clave `nombre`. Después coloca los argumentos en el arreglo `argumentos`

No olvides revisar el tipo de dato de cada argumento


```json
{
  "nombre": "EstablecerTamañoFuente",
  "argumentos": [
    2,
    2
  ]
}
```



::: tip
**Recuerda:** la lista de operaciones (`operaciones`) puede tener infinitas operaciones, esta es solo una de ellas
:::

## Ejemplo (JavaScript lado del cliente)

### Área de pruebas
[Pruébalo en el área de pruebas](../area-pruebas.md?operacion=EstablecerTamañoFuente)
<Playground urlBase="../.." nombreOperacion="EstablecerTamañoFuente" :ocultarOperacionesDisponibles="true"/>

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
      "nombre": "EstablecerTamañoFuente",
      "argumentos": [
        2,
        2
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
      "nombre": "EstablecerTamañoFuente",
      "argumentos": [
        2,
        2
      ]
    }
  ]
}
```

## JSON de ejemplo codificado

Envía esta cadena JSON ya codificada a `http://localhost:8000/imprimir` con el método POST

```
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"EstablecerTamañoFuente","argumentos":[2,2]}]}
```
