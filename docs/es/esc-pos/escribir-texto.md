# Escribir texto

`EscribirTexto`

Escribe texto en la impresora. El texto no será impreso hasta que se encuentre un salto de línea (\n) o se invoque a Feed


[Pruébalo en el área de pruebas](../playground.md?operacion=EscribirTexto)

## Argumentos
### Texto que se imprime (`argumentos[0]`)



**Descripción:** Texto que se imprime

**Índice:** `0`

**Tipo:** `string`

**Ejemplo:** `Hola impresora
`

## Ejemplo

Agrega esta operación a la lista de operaciones que enviarás en la clave `operaciones`.

Su nombre es `EscribirTexto`, así que ese valor va en la clave `nombre`. Después coloca los argumentos en el arreglo `argumentos`

No olvides revisar el tipo de dato de cada argumento


```json
{
  "nombre": "EscribirTexto",
  "argumentos": [
    "Hello printer\n"
  ]
}
```



::: tip
**Recuerda:** la lista de operaciones (`operaciones`) puede tener infinitas operaciones, esta es solo una de ellas
:::

## Ejemplo (JavaScript lado del cliente)

[Pruébalo en el área de pruebas](../playground.md?operacion=EscribirTexto)
```js
const respuestaHttp = await fetch("http://localhost:8000/imprimir",
    {
        method: "POST",
        body: JSON.stringify({
  "serial": "",
  "nombreImpresora": "your_printers_name",
  "operaciones": [
    {
      "nombre": "EscribirTexto",
      "argumentos": [
        "Hello printer\n"
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
      "nombre": "EscribirTexto",
      "argumentos": [
        "Hello printer\n"
      ]
    }
  ]
}
```

## JSON de ejemplo codificado

Envía esta cadena JSON ya codificada a `http://localhost:8000/imprimir` con el método POST

```
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"EscribirTexto","argumentos":["Hello printer\n"]}]}
```
