# Pulso (abrir cajón)

`Pulso`

Genera un pulso eléctrico (sirve para abrir el cajón de dinero) tomando en cuenta el tiempo encendido que son los milisegundos para encender y los milisegundos para apagar según el tiempo de apagado. El pin puede ser 48 o 49. Lo recomendado es el pin 48, tiempo encendido de 60 y tiempoApagado de 120




[Pruébalo en el área de pruebas](../area-pruebas.md?operacion=Pulso)

## Argumentos
### Número de pin (48 o 49) (`argumentos[0]`)



**Descripción:** Número de pin (48 o 49)

**Índice:** `0`

**Tipo:** `float64`

**Ejemplo:** `48`

### Tiempo encendido del pulso en milisegundos (`argumentos[1]`)



**Descripción:** Tiempo encendido del pulso en milisegundos

**Índice:** `1`

**Tipo:** `float64`

**Ejemplo:** `60`

### Tiempo apagado del pulso en milisegundos (`argumentos[2]`)



**Descripción:** Tiempo apagado del pulso en milisegundos

**Índice:** `2`

**Tipo:** `float64`

**Ejemplo:** `120`

## Ejemplo

Agrega esta operación a la lista de operaciones que enviarás en la clave `operaciones`.

Su nombre es `Pulso`, así que ese valor va en la clave `nombre`. Después coloca los argumentos en el arreglo `argumentos`

No olvides revisar el tipo de dato de cada argumento


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
**Recuerda:** la lista de operaciones (`operaciones`) puede tener infinitas operaciones, esta es solo una de ellas
:::

## Ejemplo (JavaScript lado del cliente)

### Área de pruebas
[Pruébalo en el área de pruebas](../area-pruebas.md?operacion=Pulso)
<Playground urlBase="../.." nombreOperacion="Pulso" :ocultarOperacionesDisponibles="true"/>

### Ejemplo de código
```js
const cargaUtil = {
    "serial": "",
    "nombreImpresora": "Nombre_impresora",
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

## JSON de ejemplo codificado

Envía esta cadena JSON ya codificada a `http://localhost:8000/imprimir` con el método POST

```
{"serial":"","nombreImpresora":"Nombre_impresora","operaciones":[{"nombre":"Pulso","argumentos":[48,60,120]}]}
```
