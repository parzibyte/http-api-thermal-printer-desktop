# Inverse mode printing

`EstablecerImpresionBlancoYNegroInversa`

Enable or disable inverse print. In reverse mode, the background is black and the text is white







[Try it on the Playground](../playground.md?operacion=EstablecerImpresionBlancoYNegroInversa)

## Arguments
### Reverse printing (`argumentos[0]`)



**Description:** Reverse printing

**Index:** `0`

**Type:** `bool`

**Example:** `true`

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `EstablecerImpresionBlancoYNegroInversa`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



```json
{
        "nombre": "EstablecerImpresionBlancoYNegroInversa",
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
[Try it on the Playground](../playground.md?operacion=EstablecerImpresionBlancoYNegroInversa)

<Playground urlBase=".." nombreOperacion="EstablecerImpresionBlancoYNegroInversa" :ocultarOperacionesDisponibles="true"/>

### Code example
```js
const payload = {
    "serial": "",
    "nombreImpresora": "Printers_name",
    "operaciones": [
      {
        "nombre": "EstablecerImpresionBlancoYNegroInversa",
        "argumentos": [
          true
        ]
      }
    ]
};
const httpResponse = await fetch("http://localhost:8000/imprimir",
    {
        method: "POST",
        body: JSON.stringify(payload),
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
    "nombreImpresora": "Printers_name",
    "operaciones": [
      {
        "nombre": "EstablecerImpresionBlancoYNegroInversa",
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
{"serial":"","nombreImpresora":"Printers_name","operaciones":[{"nombre":"EstablecerImpresionBlancoYNegroInversa","argumentos":[true]}]}
```
