# Set justification

`EstablecerAlineacion`

Set text, images, barcodes and QR codes justification according to the alignment providad. Left is 0, center 1 and right 2


[Try it on the Playground](../playground.md?operacion=EstablecerAlineacion)

## Arguments
### Justification (0, 1 or 2) (`argumentos[0]`)



**Description:** Justification (0, 1 or 2)

**Index:** `0`

**Type:** `float64`

**Example:** `1`

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `EstablecerAlineacion`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



```json
{
  "nombre": "EstablecerAlineacion",
  "argumentos": [
    1
  ]
}
```

::: tip
**Remember:** the operation list (`operaciones`) can contain infinite operations, this is only one of them
:::

## Example (JavaScript client side)

[Try it on the Playground](../playground.md?operacion=EstablecerAlineacion)
```js
const httpResponse = await fetch("http://localhost:8000/imprimir",
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
      "nombre": "EstablecerAlineacion",
      "argumentos": [
        1
      ]
    }
  ]
}
```

## Example JSON (encoded)

Send this JSON string to `http://localhost:8000/imprimir` with POST method

```
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"EstablecerAlineacion","argumentos":[1]}]}
```
