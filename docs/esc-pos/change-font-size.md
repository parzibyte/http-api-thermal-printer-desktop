# Change font size

`EstablecerTamañoFuente`

Set the font size according to the width and height multiplier. Both values ​​can range from 1 to 8. It also affects personalized characters







[Try it on the Playground](../playground.md?operacion=EstablecerTamañoFuente)

## Arguments
### Width multiplier (1-8) (`argumentos[0]`)



**Description:** Width multiplier (1-8)

**Index:** `0`

**Type:** `float64`

**Example:** `2`

### Height multiplier (1-8) (`argumentos[1]`)



**Description:** Height multiplier (1-8)

**Index:** `1`

**Type:** `float64`

**Example:** `2`

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `EstablecerTamañoFuente`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



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
**Remember:** the operation list (`operaciones`) can contain infinite operations, this is only one of them
:::

## Example (JavaScript client side)

### Playground
[Try it on the Playground](../playground.md?operacion=EstablecerTamañoFuente)

<Playground urlBase=".." nombreOperacion="EstablecerTamañoFuente" :ocultarOperacionesDisponibles="true"/>

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
      "nombre": "EstablecerTamañoFuente",
      "argumentos": [
        2,
        2
      ]
    }
  ]
}
```

## Example JSON (encoded)

Send this JSON string to `http://localhost:8000/imprimir` with POST method

```
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"EstablecerTamañoFuente","argumentos":[2,2]}]}
```
