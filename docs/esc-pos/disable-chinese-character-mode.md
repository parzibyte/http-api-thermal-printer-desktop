# Disable chinese character mode

`DeshabilitarElModoDeCaracteresChinos`

Disable chinese character mode. Use it when printing diacritic text and you have a chinese printer. Use it along with TextoSegunPaginaDeCodigos







[Try it on the Playground](../playground.md?operacion=DeshabilitarElModoDeCaracteresChinos)

## Arguments
This operation does not have arguments. Just send the `argumentos` array empty

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `DeshabilitarElModoDeCaracteresChinos`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



```json
{
        "nombre": "DeshabilitarElModoDeCaracteresChinos",
        "argumentos": []
}
```

::: tip
**Remember:** the operation list (`operaciones`) can contain infinite operations, this is only one of them
:::

## Example (JavaScript client side)

### Playground
[Try it on the Playground](../playground.md?operacion=DeshabilitarElModoDeCaracteresChinos)

<Playground urlBase=".." nombreOperacion="DeshabilitarElModoDeCaracteresChinos" :ocultarOperacionesDisponibles="true"/>

### Code example
```js
const payload = {
    "serial": "",
    "nombreImpresora": "Printers_name",
    "operaciones": [
      {
        "nombre": "DeshabilitarElModoDeCaracteresChinos",
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
        "nombre": "DeshabilitarElModoDeCaracteresChinos",
        "argumentos": []
      }
    ]
}
```

## Example JSON (encoded)

Send this JSON string to `http://localhost:8000/imprimir` with POST method

```
{"serial":"","nombreImpresora":"Printers_name","operaciones":[{"nombre":"DeshabilitarElModoDeCaracteresChinos","argumentos":[]}]}
```