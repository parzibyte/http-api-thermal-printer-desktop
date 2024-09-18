# Versión del plugin (ping)

Usa este método para saber si el plugin está en ejecución, sirve como un ping y como una forma de obtener la versión del plugin.

**Método:** `GET`

**URL relativa:** `/version`

**Ejemplo de respuesta:**
@[code](./respuesta_version.json)

- `version`: `string` que indica la versión del plugin
- `plataforma`: `string` que indica la plataforma actual para saber si es el plugin de escritorio o el [plugin de Android](#)
- `sistemaOperativo`: `string` Sistema operativo

## Ejemplo (JavaScript del lado del cliente)

@[code](./version.js)
