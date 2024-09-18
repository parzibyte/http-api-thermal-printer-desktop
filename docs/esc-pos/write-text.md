# Write text

`EscribirTexto`

Write text in the printer. The text will not be printed until a line jump (\n) is found or Feed is invoked







[Try it on the Playground](../playground.md?operacion=EscribirTexto)

## Arguments
### Text to be printed (`argumentos[0]`)



**Description:** Text to be printed

**Index:** `0`

**Type:** `string`

**Example:** `Hello printer
`

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `EscribirTexto`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



```json
{
  "nombre": "EscribirTexto",
  "argumentos": [
    "Hello printer\n"
  ]
}
```

::: tip
**Remember:** the operation list (`operaciones`) can contain infinite operations, this is only one of them
:::

## Example (JavaScript client side)

### Playground
[Try it on the Playground](../playground.md?operacion=EscribirTexto)

<Playground urlBase=".." nombreOperacion="EscribirTexto" :ocultarOperacionesDisponibles="true"/>

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
      "nombre": "EscribirTexto",
      "argumentos": [
        "Hello printer\n"
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
      "nombre": "EscribirTexto",
      "argumentos": [
        "Hello printer\n"
      ]
    }
  ]
}
```

## Example JSON (encoded)

Send this JSON string to `http://localhost:8000/imprimir` with POST method

```
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"EscribirTexto","argumentos":["Hello printer\n"]}]}
```
