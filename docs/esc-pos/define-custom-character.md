# Define custom character

`DefinirCaracterPersonalizado`

Defines a custom 24x12 character. It is useful for printing characters not supported by some printers, either the euro, penny or what you can draw in a 24x12 box. This function establishes the personalized character but does not print it. Only It is necessary to call it once, and then every time the replaced character is printed, the custom character will be printed instead. The  matrix as string must be, as its name says, a matrix as a string. You must have exactly 24 lines (separated by a line jump) and in each line there must be exactly 12 digits, each digit must be a 1 or 0. There should be no tabulations or extra spaces  Note: The matrix is ​​24x12 because this is the source A. If it were the source B would be 17x9, but that source doesn't work in my printer so I haven't tried. So, do not try this if you have source B select. For this operation to work, you need to call HabilitarCaracteresPersonalizados before


[Try it on the Playground](../playground.md?operacion=DefinirCaracterPersonalizado)

## Arguments
### Character to be replaced (`argumentos[0]`)



**Description:** Character to be replaced

**Index:** `0`

**Type:** `string`

**Example:** `_`

### Custom character as a string matrix (`argumentos[1]`)



**Description:** Custom character as a string matrix

**Index:** `1`

**Type:** `string`

**Example:** `000001111000
000010000100
000100011110
000100100001
011100100001
010100100001
010100100001
010100011110
010100000010
011100000010
000100111010
000100101010
000111101110
000000000000
000000000000
000000000000
111010101110
100010101000
111010101110
001010100010
111011101110
000000000000
000000000000
000000000000`

## Operation example


Push this operation to the operation list (whose key is `operaciones`) that you will send with the request.

Its name is `DefinirCaracterPersonalizado`, so it goes on the `nombre` key. Then put the arguments in order
inside the `argumentos` array.

Don't forget to check every argument type



```json
{
  "nombre": "DefinirCaracterPersonalizado",
  "argumentos": [
    "_",
    "000001111000\n000010000100\n000100011110\n000100100001\n011100100001\n010100100001\n010100100001\n010100011110\n010100000010\n011100000010\n000100111010\n000100101010\n000111101110\n000000000000\n000000000000\n000000000000\n111010101110\n100010101000\n111010101110\n001010100010\n111011101110\n000000000000\n000000000000\n000000000000"
  ]
}
```

::: tip
**Remember:** the operation list (`operaciones`) can contain infinite operations, this is only one of them
:::

## Example (JavaScript client side)

[Try it on the Playground](../playground.md?operacion=DefinirCaracterPersonalizado)
```js
const httpResponse = await fetch("http://localhost:8000/imprimir",
    {
        method: "POST",
        body: JSON.stringify({
  "serial": "",
  "nombreImpresora": "your_printers_name",
  "operaciones": [
    {
      "nombre": "DefinirCaracterPersonalizado",
      "argumentos": [
        "_",
        "000001111000\n000010000100\n000100011110\n000100100001\n011100100001\n010100100001\n010100100001\n010100011110\n010100000010\n011100000010\n000100111010\n000100101010\n000111101110\n000000000000\n000000000000\n000000000000\n111010101110\n100010101000\n111010101110\n001010100010\n111011101110\n000000000000\n000000000000\n000000000000"
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
      "nombre": "DefinirCaracterPersonalizado",
      "argumentos": [
        "_",
        "000001111000\n000010000100\n000100011110\n000100100001\n011100100001\n010100100001\n010100100001\n010100011110\n010100000010\n011100000010\n000100111010\n000100101010\n000111101110\n000000000000\n000000000000\n000000000000\n111010101110\n100010101000\n111010101110\n001010100010\n111011101110\n000000000000\n000000000000\n000000000000"
      ]
    }
  ]
}
```

## Example JSON (encoded)

Send this JSON string to `http://localhost:8000/imprimir` with POST method

```
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"DefinirCaracterPersonalizado","argumentos":["_","000001111000\n000010000100\n000100011110\n000100100001\n011100100001\n010100100001\n010100100001\n010100011110\n010100000010\n011100000010\n000100111010\n000100101010\n000111101110\n000000000000\n000000000000\n000000000000\n111010101110\n100010101000\n111010101110\n001010100010\n111011101110\n000000000000\n000000000000\n000000000000"]}]}
```
