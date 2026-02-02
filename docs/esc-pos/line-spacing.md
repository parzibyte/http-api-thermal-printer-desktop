# Line spacing

`EstablecerInterlineado`

Allows to change the spacing between lines (vertical line spacing)







[Try it on the Playground](../playground.md?operacion=EstablecerInterlineado)

## Arguments
### Line spacing. Must be between 0 and 255. The larger the value, the more vertical space between lines. (`argumentos[0]`)



**Description:** Line spacing. Must be between 0 and 255. The larger the value, the more vertical space between lines.

**Index:** `0`

**Type:** `float64`

**Example:** `0`

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `EstablecerInterlineado`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



```json
{
        "nombre": "EstablecerInterlineado",
        "argumentos": [
            0
        ]
}
```

::: tip
**Remember:** the operation list (`operaciones`) can contain infinite operations, this is only one of them
:::

## Example (JavaScript client side)

### Playground
[Try it on the Playground](../playground.md?operacion=EstablecerInterlineado)

<Playground urlBase=".." nombreOperacion="EstablecerInterlineado" :ocultarOperacionesDisponibles="true"/>

### Code example
```js
const payload = {
    "serial": "",
    "nombreImpresora": "Printers_name",
    "operaciones": [
      {
        "nombre": "EstablecerInterlineado",
        "argumentos": [
          0
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
        "nombre": "EstablecerInterlineado",
        "argumentos": [
          0
        ]
      }
    ]
}
```

## Example JSON (encoded)

Send this JSON string to `http://localhost:8000/imprimir` with POST method

```
{"serial":"","nombreImpresora":"Printers_name","operaciones":[{"nombre":"EstablecerInterlineado","argumentos":[0]}]}
```
