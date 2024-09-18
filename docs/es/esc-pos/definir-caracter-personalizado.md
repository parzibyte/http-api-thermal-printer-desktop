# Definir caracter personalizado

`DefinirCaracterPersonalizado`

Define un carácter personalizado de 24x12. Es útil para imprimir caracteres no soportados por algunas impresoras, ya sea el euro, centavo o lo que puedas dibujar en un cuadro de 24x12. Esta función establece el carácter personalizado pero no lo imprime. Solo hace falta llamarla a una vez, y después cada que se imprima el carácter reemplazado se va a imprimir el personalizado La matrizComoCadena debe ser, como su nombre lo dice, una matriz como cadena. Debe tener exactamente 24 líneas (separadas por un salto de línea) y en cada línea debe haber exactamente 12 dígitos, cada dígito debe ser un 1 o un 0. No debe haber tabulaciones ni espacios extra  Nota: la matriz es de 24x12 porque así es la fuente A. Si fuera la fuente B sería de 17x9, pero esa fuente no funciona en mi impresora así que no he probado. Es decir, no intentes esto si tienes seleccionada la fuente B. Para que esta operación funcione, debiste haber habilitado los caracteres personalizados previamente con HabilitarCaracteresPersonalizados




[Pruébalo en el área de pruebas](../area-pruebas.md?operacion=DefinirCaracterPersonalizado)

## Argumentos
### Carácter que será reemplazado (`argumentos[0]`)



**Descripción:** Carácter que será reemplazado

**Índice:** `0`

**Tipo:** `string`

**Ejemplo:** `_`

### Carácter personalizado (`argumentos[1]`)



**Descripción:** Carácter personalizado

**Índice:** `1`

**Tipo:** `string`

**Ejemplo:** `000001111000
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

## Ejemplo

Agrega esta operación a la lista de operaciones que enviarás en la clave `operaciones`.

Su nombre es `DefinirCaracterPersonalizado`, así que ese valor va en la clave `nombre`. Después coloca los argumentos en el arreglo `argumentos`

No olvides revisar el tipo de dato de cada argumento


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
**Recuerda:** la lista de operaciones (`operaciones`) puede tener infinitas operaciones, esta es solo una de ellas
:::

## Ejemplo (JavaScript lado del cliente)

### Área de pruebas
[Pruébalo en el área de pruebas](../area-pruebas.md?operacion=DefinirCaracterPersonalizado)
<Playground urlBase="../.." nombreOperacion="DefinirCaracterPersonalizado" :ocultarOperacionesDisponibles="true"/>

### Ejemplo de código
```js
const respuestaHttp = await fetch("http://localhost:8000/imprimir",
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

const respuestaComoJson = await respuestaHttp.json();
if (respuestaComoJson.ok) {
    // Todo bien
    console.log("Impreso correctamente");
} else {
    // El error está en la propiedad message
    console.error(respuestaComoJson.message)
}
```

## JSON de ejemplo sin codificar

Codifica el siguiente JSON y envíalo a `http://localhost:8000/imprimir` con el método POST

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

## JSON de ejemplo codificado

Envía esta cadena JSON ya codificada a `http://localhost:8000/imprimir` con el método POST

```
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"DefinirCaracterPersonalizado","argumentos":["_","000001111000\n000010000100\n000100011110\n000100100001\n011100100001\n010100100001\n010100100001\n010100011110\n010100000010\n011100000010\n000100111010\n000100101010\n000111101110\n000000000000\n000000000000\n000000000000\n111010101110\n100010101000\n111010101110\n001010100010\n111011101110\n000000000000\n000000000000\n000000000000"]}]}
```
