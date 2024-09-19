# 90 degrees rotation

`EstablecerRotacionDe90Grados`

Enable or disable 90 degrees rotation







[Try it on the Playground](../playground.md?operacion=EstablecerRotacionDe90Grados)

## Arguments
### Enable or disable 90 degres text rotation (`argumentos[0]`)



**Description:** Enable or disable 90 degres text rotation

**Index:** `0`

**Type:** `bool`

**Example:** `true`

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `EstablecerRotacionDe90Grados`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



```json
{
  "nombre": "EstablecerRotacionDe90Grados",
  "argumentos": [
    true
  ]
}
```

::: tip
**Remember:** the operation list (`operaciones`) can contain infinite operations, this is only one of them
:::

## Example (JavaScript client side)

### Playground
[Try it on the Playground](../playground.md?operacion=EstablecerRotacionDe90Grados)

<Playground urlBase=".." nombreOperacion="EstablecerRotacionDe90Grados" :ocultarOperacionesDisponibles="true"/>

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
      "nombre": "EstablecerRotacionDe90Grados",
      "argumentos": [
        true
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
      "nombre": "EstablecerRotacionDe90Grados",
      "argumentos": [
        true
      ]
    }
  ]
}
```

## Example JSON (encoded)

Send this JSON string to `http://localhost:8000/imprimir` with POST method

```
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"EstablecerRotacionDe90Grados","argumentos":[true]}]}
```
