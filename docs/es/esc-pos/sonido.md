# Sonido

`Beep`

Emite un sonido usando el buzzer (zumbador) de la impresora térmica. Hace un pitido. Mira también BeepAndSound




[Pruébalo en el área de pruebas](../area-pruebas.md?operacion=Beep)

## Argumentos
### Cantidad de sonidos (cuántas veces hacer beep) (`argumentos[0]`)



**Descripción:** Cantidad de sonidos (cuántas veces hacer beep)

**Índice:** `0`

**Tipo:** `float64`

**Ejemplo:** `3`

### Duración de cada sonido. La documentación no deja claro si es la duración entre cada sonido o la duración de cada sonido, y al parecer este parámetro no tiene efecto en mi impresora térmica (GOOJPRT PT-210). Se supone que esta duración será multiplicada por 50 ms (`argumentos[1]`)



**Descripción:** Duración de cada sonido. La documentación no deja claro si es la duración entre cada sonido o la duración de cada sonido, y al parecer este parámetro no tiene efecto en mi impresora térmica (GOOJPRT PT-210). Se supone que esta duración será multiplicada por 50 ms

**Índice:** `1`

**Tipo:** `float64`

**Ejemplo:** `2`

## Ejemplo

Agrega esta operación a la lista de operaciones que enviarás en la clave `operaciones`.

Su nombre es `Beep`, así que ese valor va en la clave `nombre`. Después coloca los argumentos en el arreglo `argumentos`

No olvides revisar el tipo de dato de cada argumento


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
**Recuerda:** la lista de operaciones (`operaciones`) puede tener infinitas operaciones, esta es solo una de ellas
:::

## Ejemplo (JavaScript lado del cliente)

### Área de pruebas
[Pruébalo en el área de pruebas](../area-pruebas.md?operacion=Beep)
<Playground urlBase="../.." nombreOperacion="Beep" :ocultarOperacionesDisponibles="true"/>

### Ejemplo de código
```js
const cargaUtil = {
    "serial": "",
    "nombreImpresora": "Nombre_impresora",
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
const respuestaHttp = await fetch("http://localhost:8000/imprimir",
    {
        method: "POST",
        body: JSON.stringify(cargaUtil),
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
    "nombreImpresora": "Nombre_impresora",
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

## JSON de ejemplo codificado

Envía esta cadena JSON ya codificada a `http://localhost:8000/imprimir` con el método POST

```
{"serial":"","nombreImpresora":"Nombre_impresora","operaciones":[{"nombre":"Beep","argumentos":[3,2]}]}
```
