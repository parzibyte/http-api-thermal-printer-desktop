# Enable custom characters

`HabilitarCaracteresPersonalizados`

Enable custom characters. If it is enabled then you will print the custom character instead of the character that was supplied to be replaced







[Try it on the Playground](../playground.md?operacion=HabilitarCaracteresPersonalizados)

## Arguments
This operation does not have arguments. Just send the `argumentos` array empty

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `HabilitarCaracteresPersonalizados`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



```json
{
        "nombre": "HabilitarCaracteresPersonalizados",
        "argumentos": []
}
```

::: tip
**Remember:** the operation list (`operaciones`) can contain infinite operations, this is only one of them
:::

## Example (JavaScript client side)

### Playground
[Try it on the Playground](../playground.md?operacion=HabilitarCaracteresPersonalizados)

<Playground urlBase=".." nombreOperacion="HabilitarCaracteresPersonalizados" :ocultarOperacionesDisponibles="true"/>

### Code example
```js
const payload = {
    "serial": "",
    "nombreImpresora": "Printers_name",
    "operaciones": [
      {
        "nombre": "HabilitarCaracteresPersonalizados",
        "argumentos": []
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
        "nombre": "HabilitarCaracteresPersonalizados",
        "argumentos": []
      }
    ]
}
```

## Example JSON (encoded)

Send this JSON string to `http://localhost:8000/imprimir` with POST method

```
{"serial":"","nombreImpresora":"Printers_name","operaciones":[{"nombre":"HabilitarCaracteresPersonalizados","argumentos":[]}]}
```
