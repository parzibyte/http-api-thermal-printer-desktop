# Set underline

`EstablecerSubrayado`

Enable or disable underlined text mode







[Try it on the Playground](../playground.md?operacion=EstablecerSubrayado)

## Arguments
### Enable underlined text mode (`argumentos[0]`)



**Description:** Enable underlined text mode

**Index:** `0`

**Type:** `bool`

**Example:** `true`

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `EstablecerSubrayado`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



```json
{
  "nombre": "EstablecerSubrayado",
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
[Try it on the Playground](../playground.md?operacion=EstablecerSubrayado)

<Playground urlBase=".." nombreOperacion="EstablecerSubrayado" :ocultarOperacionesDisponibles="true"/>

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
      "nombre": "EstablecerSubrayado",
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
      "nombre": "EstablecerSubrayado",
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
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"EstablecerSubrayado","argumentos":[true]}]}
```
