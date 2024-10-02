# Sonido y notificación

`BeepAndAlarm`

Emite un sonido usando el buzzer (zumbador) de la impresora térmica (hace un pitido) y también enciende el LED integrado (alarma). Sirve para emitir un sonido y notificar algo. En mi impresora, Beep no respeta la duración del sonido, pero BeepAndAlarm sí lo hace. Con esta operación puedes únicamente emitir un sonido, encender el LED silenciosamente, ambos o ninguno




[Pruébalo en el área de pruebas](../area-pruebas.md?operacion=BeepAndAlarm)

## Argumentos
### Cantidad de sonidos y alarmas (cuántas veces hacer beep y encender y apagar el LED) (`argumentos[0]`)



**Descripción:** Cantidad de sonidos y alarmas (cuántas veces hacer beep y encender y apagar el LED)

**Índice:** `0`

**Tipo:** `float64`

**Ejemplo:** `3`

### Duración de cada sonido y/o alarma. Este parámetro será multiplicado por 50ms (`argumentos[1]`)



**Descripción:** Duración de cada sonido y/o alarma. Este parámetro será multiplicado por 50ms

**Índice:** `1`

**Tipo:** `float64`

**Ejemplo:** `2`

### Modo de notificación. 0 para no usar sonido ni alarma (LED). 1 para solamente emitir sonido, sin alarma (LED). 2 para solamente notificar a través de la alarma (LED) sin sonido. 3 para notificar con sonido (beep usando el buzzer o zumbador) y con alarma (LED) (`argumentos[2]`)



**Descripción:** Modo de notificación. 0 para no usar sonido ni alarma (LED). 1 para solamente emitir sonido, sin alarma (LED). 2 para solamente notificar a través de la alarma (LED) sin sonido. 3 para notificar con sonido (beep usando el buzzer o zumbador) y con alarma (LED)

**Índice:** `2`

**Tipo:** `float64`

**Ejemplo:** `3`

## Ejemplo

Agrega esta operación a la lista de operaciones que enviarás en la clave `operaciones`.

Su nombre es `BeepAndAlarm`, así que ese valor va en la clave `nombre`. Después coloca los argumentos en el arreglo `argumentos`

No olvides revisar el tipo de dato de cada argumento


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
**Recuerda:** la lista de operaciones (`operaciones`) puede tener infinitas operaciones, esta es solo una de ellas
:::

## Ejemplo (JavaScript lado del cliente)

### Área de pruebas
[Pruébalo en el área de pruebas](../area-pruebas.md?operacion=BeepAndAlarm)
<Playground urlBase="../.." nombreOperacion="BeepAndAlarm" :ocultarOperacionesDisponibles="true"/>

### Ejemplo de código
```js
const cargaUtil = {
    "serial": "",
    "nombreImpresora": "Nombre_impresora",
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

## JSON de ejemplo codificado

Envía esta cadena JSON ya codificada a `http://localhost:8000/imprimir` con el método POST

```
{"serial":"","nombreImpresora":"Nombre_impresora","operaciones":[{"nombre":"BeepAndAlarm","argumentos":[3,2,3]}]}
```
