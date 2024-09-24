# Deshabilitar el modo de caracteres chinos

`DeshabilitarElModoDeCaracteresChinos`

Deshabilitar el modo de caracteres chinos. Útil para imprimir tildes y texto en español en impresoras térmicas chinas. Combínalo con TextoSegunPaginaDeCodigos




[Pruébalo en el área de pruebas](../area-pruebas.md?operacion=DeshabilitarElModoDeCaracteresChinos)

## Argumentos
Esta operación no tiene argumentos. Simplemente envía el arreglo `argumentos` vacío

## Ejemplo

Agrega esta operación a la lista de operaciones que enviarás en la clave `operaciones`.

Su nombre es `DeshabilitarElModoDeCaracteresChinos`, así que ese valor va en la clave `nombre`. Después coloca los argumentos en el arreglo `argumentos`

No olvides revisar el tipo de dato de cada argumento


```json
{
    "nombre": "DeshabilitarElModoDeCaracteresChinos",
    "argumentos": []
}
```



::: tip
**Recuerda:** la lista de operaciones (`operaciones`) puede tener infinitas operaciones, esta es solo una de ellas
:::

## Ejemplo (JavaScript lado del cliente)

### Área de pruebas
[Pruébalo en el área de pruebas](../area-pruebas.md?operacion=DeshabilitarElModoDeCaracteresChinos)
<Playground urlBase="../.." nombreOperacion="DeshabilitarElModoDeCaracteresChinos" :ocultarOperacionesDisponibles="true"/>

### Ejemplo de código
```js
const cargaUtil = {
    "serial": "",
    "nombreImpresora": "Nombre_impresora",
    "operaciones": [
      {
        "nombre": "DeshabilitarElModoDeCaracteresChinos",
        "argumentos": []
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
        "nombre": "DeshabilitarElModoDeCaracteresChinos",
        "argumentos": []
      }
    ]
}
```

## JSON de ejemplo codificado

Envía esta cadena JSON ya codificada a `http://localhost:8000/imprimir` con el método POST

```
{"serial":"","nombreImpresora":"Nombre_impresora","operaciones":[{"nombre":"DeshabilitarElModoDeCaracteresChinos","argumentos":[]}]}
```
