# Imprimir

Usa este método para imprimir un recibo o, a veces, abrir la caja registradora.
Envía una lista de operaciones que se traducirán en comandos ESC POS.

Puedes especificar el nombre de la impresora y una lista infinita de operaciones.

**Método:** `POST`

**URL relativa:** `/imprimir`

**Ejemplo de cuerpo de la solicitud:**
@[code](./peticion_imprimir.json)

Envía un objeto JSON con las siguientes propiedades:

| Propiedad | Tipo | Descripción | Ejemplo |
| ------------ | ------------ | ------------ | -- |
| `serial` | String | Serial opcional del plugin para apoyar al desarrollo | `""`
| `nombreImpresora` | String | Nombre de la impresora donde se realizarán las operaciones ESC POS. Puedes llamar al método para [obtener las impresoras](./get-printers.md) o puedes especificarlo manualmente | `"POS58"`
| `operaciones` | Array | Arreglo de objetos. Cada objeto dentro de `operaciones` debe tener una propiedad `nombre` y una propiedad `argumentos` | ```[{"nombre": "EscribirTexto", "argumentos": ["Hola\nImpresora"]}]```
| `nombre` (Propiedad del objeto dentro del arreglo `operaciones`) | String | Nombre de la operación que puedes obtener en Operaciones ESC POS disponibles | `"EscribirTexto"`
| `argumentos` (Propiedad del objeto dentro del arreglo `operaciones`) | Array | Argumentos en el orden en que aparecen en las Operaciones ESC POS disponibles | `["Hola\nImpresora"]`

**Ejemplo de respuesta:**
@[code](./respuesta_imprimir.json)

Este endpoint devuelve un objeto JSON, que contiene dos propiedades:

| Propiedad | Tipo | Descripción | Ejemplo |
|--| -- | -- | -- |
| `ok` | Boolean | Indica si la lista de operaciones se ejecutó con éxito | `true` |
| `message` | String | Si `ok` no es `true`, entonces el mensaje de error estará en `message` | `"open \\\\PC\\Nombre_impresora: El nombre de la red no se puede encontrar."` |

:::tip
Incluso si el plugin devuelve `true` en la propiedad `ok`,
eso no significa que la impresión fue exitosa.
El plugin no tiene forma de saber si la impresora
estaba conectada o encendida.
Un valor `true` en `ok`
significa que el trabajo de impresión se agregó a la cola de impresión y
que la lista de operaciones se ejecutó sin errores de sintaxis.
:::

## Ejemplo (JavaScript del lado del cliente)

@[code](./imprimir.js)
