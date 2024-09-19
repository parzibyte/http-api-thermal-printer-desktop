# Init

`Iniciar`

Initialize printer.Clean the data in the buffer and restart the printer to the state it was when it was turned on. In some printers it is recommended to invoke this function before and after printing images.







[Try it on the Playground](../playground.md?operacion=Iniciar)

## Arguments
This operation does not have arguments. Just send the `argumentos` array empty

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `Iniciar`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



```json
{
        "nombre": "Iniciar",
        "argumentos": []
}
```

::: tip
**Remember:** the operation list (`operaciones`) can contain infinite operations, this is only one of them
:::

## Example (JavaScript client side)

### Playground
[Try it on the Playground](../playground.md?operacion=Iniciar)

<Playground urlBase=".." nombreOperacion="Iniciar" :ocultarOperacionesDisponibles="true"/>

### Code example
```js
const payload = {
    "serial": "",
    "nombreImpresora": "Printers_name",
    "operaciones": [
      {
        "nombre": "Iniciar",
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
        "nombre": "Iniciar",
        "argumentos": []
      }
    ]
}
```

## Example JSON (encoded)

Send this JSON string to `http://localhost:8000/imprimir` with POST method

```
{"serial":"","nombreImpresora":"Printers_name","operaciones":[{"nombre":"Iniciar","argumentos":[]}]}
```
