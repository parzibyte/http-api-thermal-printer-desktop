# Pulse (Open cash drawer)

`Pulso`

It generates an electric pulse (used to open the cash drawer) taking into account the on time which are the milliseconds to turn on and the milliseconds to turn off according to the off time. The pin can be 48 or 49. The recommended pin is 48, on time of 60 and off time of 120.







[Try it on the Playground](../playground.md?operacion=Pulso)

## Arguments
### Pin number (48 or 49) (`argumentos[0]`)



**Description:** Pin number (48 or 49)

**Index:** `0`

**Type:** `float64`

**Example:** `48`

### Pulse on time in ms (`argumentos[1]`)



**Description:** Pulse on time in ms

**Index:** `1`

**Type:** `float64`

**Example:** `60`

### Off time pulse in ms (`argumentos[2]`)



**Description:** Off time pulse in ms

**Index:** `2`

**Type:** `float64`

**Example:** `120`

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `Pulso`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



```json
{
  "nombre": "Pulso",
  "argumentos": [
    48,
    60,
    120
  ]
}
```

::: tip
**Remember:** the operation list (`operaciones`) can contain infinite operations, this is only one of them
:::

## Example (JavaScript client side)

### Playground
[Try it on the Playground](../playground.md?operacion=Pulso)

<Playground nombreOperacion="Pulso" :ocultarOperacionesDisponibles="true"/>

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
      "nombre": "Pulso",
      "argumentos": [
        48,
        60,
        120
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
      "nombre": "Pulso",
      "argumentos": [
        48,
        60,
        120
      ]
    }
  ]
}
```

## Example JSON (encoded)

Send this JSON string to `http://localhost:8000/imprimir` with POST method

```
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"Pulso","argumentos":[48,60,120]}]}
```
