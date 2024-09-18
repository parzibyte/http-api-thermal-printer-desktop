# Obtener impresoras

Usa este método para obtener la lista de impresoras compatibles. Esto abrirá una ventana temporal en Windows, porque
necesita ejecutar un script de Powershell y no es posible ocultarla.

Debes llamar a este método solo cuando se le proporcione al usuario una lista
para que elija su impresora preferida.

**Método:** `GET`

**URL relativa:** `/impresoras`

**Ejemplo de respuesta:**
@[code](./respuesta_impresoras.json)

Este endpoint devuelve un arreglo JSON, que contiene solo
cadenas de texto. Cada cadena representa una impresora.

## Ejemplo (JavaScript del lado del cliente)

@[code](./impresoras.js)
