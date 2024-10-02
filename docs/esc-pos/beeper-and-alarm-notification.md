# Beeper and alarm notification

`BeepAndAlarm`

Beeps the buzzer (Produces a sound in the thermal printer) and turns on the integrated LED (alarm). It is useful for making a beep and notify something. In my printer, Beep ignores the duration of the sound, but BeepAndAlarm takes it into account. With this operation, you can either emit a sound, silently turn on the LED, both, or neither.







[Try it on the Playground](../playground.md?operacion=BeepAndAlarm)

## Arguments
### Beep and alarm count (how many times beep and toggle LED) (`argumentos[0]`)



**Description:** Beep and alarm count (how many times beep and toggle LED)

**Index:** `0`

**Type:** `float64`

**Example:** `3`

### Duration of each beep and/or alarm. This parameter will be multiplied by 50ms. (`argumentos[1]`)



**Description:** Duration of each beep and/or alarm. This parameter will be multiplied by 50ms.

**Index:** `1`

**Type:** `float64`

**Example:** `2`

### Notification mode. 0 for no sound or alarm (LED). 1 for sound only, no alarm (LED). 2 for alarm (LED) only, no sound. 3 for both sound (beep using the buzzer) and alarm (LED). (`argumentos[2]`)



**Description:** Notification mode. 0 for no sound or alarm (LED). 1 for sound only, no alarm (LED). 2 for alarm (LED) only, no sound. 3 for both sound (beep using the buzzer) and alarm (LED).

**Index:** `2`

**Type:** `float64`

**Example:** `3`

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `BeepAndAlarm`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



```json
{
        "nombre": "BeepAndAlarm",
        "argumentos": [
            3,
            2,
            3
        ]
}
```

::: tip
**Remember:** the operation list (`operaciones`) can contain infinite operations, this is only one of them
:::

## Example (JavaScript client side)

### Playground
[Try it on the Playground](../playground.md?operacion=BeepAndAlarm)

<Playground urlBase=".." nombreOperacion="BeepAndAlarm" :ocultarOperacionesDisponibles="true"/>

### Code example
```js
const payload = {
    "serial": "",
    "nombreImpresora": "Printers_name",
    "operaciones": [
      {
        "nombre": "BeepAndAlarm",
        "argumentos": [
          3,
          2,
          3
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
        "nombre": "BeepAndAlarm",
        "argumentos": [
          3,
          2,
          3
        ]
      }
    ]
}
```

## Example JSON (encoded)

Send this JSON string to `http://localhost:8000/imprimir` with POST method

```
{"serial":"","nombreImpresora":"Printers_name","operaciones":[{"nombre":"BeepAndAlarm","argumentos":[3,2,3]}]}
```
