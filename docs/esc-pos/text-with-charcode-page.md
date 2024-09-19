# Text with charcode page

`TextoSegunPaginaDeCodigos`

Allows you to write diacritic text. You have to specify the page number (according to the printer) and the Character Code Page for ICONV. It is suggested to try every combination if it does not work at first. This function has no effect if the used plugin version is the version that has no iconv







[Try it on the Playground](../playground.md?operacion=TextoSegunPaginaDeCodigos)

## Arguments
### Page number according to yout printer (`argumentos[0]`)



**Description:** Page number according to yout printer

**Index:** `0`

**Type:** `float64`

**Example:** `2`

### Character code page for iconv (`argumentos[1]`)



**Description:** Character code page for iconv

**Index:** `1`

**Type:** `string`

**Example:** `cp850`

### Text to convert and print (`argumentos[2]`)



**Description:** Text to convert and print

**Index:** `2`

**Type:** `string`

**Example:** `Grim, Guayaba, Maggie y Panqué toman el té con la cigüeña de María José`

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `TextoSegunPaginaDeCodigos`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



```json
{
        "nombre": "TextoSegunPaginaDeCodigos",
        "argumentos": [
            2,
            "cp850",
            "Grim, Guayaba, Maggie y Panqué toman el té con la cigüeña de María José"
        ]
}
```

::: tip
**Remember:** the operation list (`operaciones`) can contain infinite operations, this is only one of them
:::

## Example (JavaScript client side)

### Playground
[Try it on the Playground](../playground.md?operacion=TextoSegunPaginaDeCodigos)

<Playground urlBase=".." nombreOperacion="TextoSegunPaginaDeCodigos" :ocultarOperacionesDisponibles="true"/>

### Code example
```js
const payload = {
    "serial": "",
    "nombreImpresora": "Printers_name",
    "operaciones": [
      {
        "nombre": "TextoSegunPaginaDeCodigos",
        "argumentos": [
          2,
          "cp850",
          "Grim, Guayaba, Maggie y Panqué toman el té con la cigüeña de María José"
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
        "nombre": "TextoSegunPaginaDeCodigos",
        "argumentos": [
          2,
          "cp850",
          "Grim, Guayaba, Maggie y Panqué toman el té con la cigüeña de María José"
        ]
      }
    ]
}
```

## Example JSON (encoded)

Send this JSON string to `http://localhost:8000/imprimir` with POST method

```
{"serial":"","nombreImpresora":"Printers_name","operaciones":[{"nombre":"TextoSegunPaginaDeCodigos","argumentos":[2,"cp850","Grim, Guayaba, Maggie y Panqué toman el té con la cigüeña de María José"]}]}
```
