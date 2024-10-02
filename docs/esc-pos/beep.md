# Beep

`Beep`

Beeps the buzzer. Produces a sound in the thermal printer. Also take a look at BeepAndSound







[Try it on the Playground](../playground.md?operacion=Beep)

## Arguments
### Beep count (how many times beep) (`argumentos[0]`)



**Description:** Beep count (how many times beep)

**Index:** `0`

**Type:** `float64`

**Example:** `3`

### Beep time. Docs does not specify if this parameter indicates time between each beep or duration of each beep. It looks like this parameter does not have effect on my thermal printer (GOOJPRT PT-210). This parameter will be multiplied by 50ms (`argumentos[1]`)



**Description:** Beep time. Docs does not specify if this parameter indicates time between each beep or duration of each beep. It looks like this parameter does not have effect on my thermal printer (GOOJPRT PT-210). This parameter will be multiplied by 50ms

**Index:** `1`

**Type:** `float64`

**Example:** `2`

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `Beep`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



```json
{
        "nombre": "Beep",
        "argumentos": [
            3,
            2
        ]
}
```

::: tip
**Remember:** the operation list (`operaciones`) can contain infinite operations, this is only one of them
:::

## Example (JavaScript client side)

### Playground
[Try it on the Playground](../playground.md?operacion=Beep)

<Playground urlBase=".." nombreOperacion="Beep" :ocultarOperacionesDisponibles="true"/>

### Code example
```js
const payload = {
    "serial": "",
    "nombreImpresora": "Printers_name",
    "operaciones": [
      {
        "nombre": "Beep",
        "argumentos": [
          3,
          2
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
        "nombre": "Beep",
        "argumentos": [
          3,
          2
        ]
      }
    ]
}
```

## Example JSON (encoded)

Send this JSON string to `http://localhost:8000/imprimir` with POST method

```
{"serial":"","nombreImpresora":"Printers_name","operaciones":[{"nombre":"Beep","argumentos":[3,2]}]}
```
