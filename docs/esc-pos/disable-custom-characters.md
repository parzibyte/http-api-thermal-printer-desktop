# Disable custom characters

`DeshabilitarCaracteresPersonalizados`

Disable custom characters







[Try it on the Playground](../playground.md?operacion=DeshabilitarCaracteresPersonalizados)

## Arguments
This operation does not have arguments. Just send the `argumentos` array empty

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `DeshabilitarCaracteresPersonalizados`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



```json
{
  "nombre": "DeshabilitarCaracteresPersonalizados",
  "argumentos": []
}
```

::: tip
**Remember:** the operation list (`operaciones`) can contain infinite operations, this is only one of them
:::

## Example (JavaScript client side)

### Playground
[Try it on the Playground](../playground.md?operacion=DeshabilitarCaracteresPersonalizados)

<Playground urlBase=".." nombreOperacion="DeshabilitarCaracteresPersonalizados" :ocultarOperacionesDisponibles="true"/>

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
      "nombre": "DeshabilitarCaracteresPersonalizados",
      "argumentos": []
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
      "nombre": "DeshabilitarCaracteresPersonalizados",
      "argumentos": []
    }
  ]
}
```

## Example JSON (encoded)

Send this JSON string to `http://localhost:8000/imprimir` with POST method

```
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"DeshabilitarCaracteresPersonalizados","argumentos":[]}]}
```
