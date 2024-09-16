# Deshabilitar caracteres personalizados

`DeshabilitarCaracteresPersonalizados`

Deshabilita los caracteres personalizados


[Pruébalo en el área de pruebas](../playground.md?operacion=DeshabilitarCaracteresPersonalizados)

## Argumentos
Esta operación no tiene argumentos. Simplemente envía el arreglo `argumentos` vacío

## Ejemplo

Agrega esta operación a la lista de operaciones que enviarás en la clave `operaciones`.

Su nombre es `DeshabilitarCaracteresPersonalizados`, así que ese valor va en la clave `nombre`. Después coloca los argumentos en el arreglo `argumentos`

No olvides revisar el tipo de dato de cada argumento


```json
{
  "nombre": "DeshabilitarCaracteresPersonalizados",
  "argumentos": []
}
```



::: tip
**Recuerda:** la lista de operaciones (`operaciones`) puede tener infinitas operaciones, esta es solo una de ellas
:::

## Ejemplo (JavaScript lado del cliente)

[Pruébalo en el área de pruebas](../playground.md?operacion=DeshabilitarCaracteresPersonalizados)
```js
const respuestaHttp = await fetch("http://localhost:8000/imprimir",
    {
        method: "POST",
        body: JSON.stringify({
  "serial": "",
  "nombreImpresora": "your_printers_name",
  "operaciones": [
    {
      "nombre": "DeshabilitarCaracteresPersonalizados",
      "argumentos": []
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
      "nombre": "DeshabilitarCaracteresPersonalizados",
      "argumentos": []
    }
  ]
}
```

## JSON de ejemplo codificado

Envía esta cadena JSON ya codificada a `http://localhost:8000/imprimir` con el método POST

```
{"serial":"","nombreImpresora":"your_printers_name","operaciones":[{"nombre":"DeshabilitarCaracteresPersonalizados","argumentos":[]}]}
```