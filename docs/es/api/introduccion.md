# Descripción de la API HTTP

Esta guía asume que el plugin ya está ejecutándose en el puerto 8000.
Puedes cambiar el puerto, pero si lo haces, cambia el entorno de pruebas (playground)
y tu código en consecuencia.

La API se comunica a través de JSON. Aceptará y responderá
con JSON.

## API local, no requiere internet
Este servidor HTTP a ESC POS funciona totalmente fuera
de línea, ejecuta un servidor HTTP en tu propia computadora
y no necesita internet

:::warning
Si usas esta API desde el navegador web, asegúrate de invocarla
desde localhost o desde un sitio con https. De otra manera no funcionará

Para imprimir en red, revisa cómo [usar el plugin como proxy](../api/reenviar.md)

:::

## Lenguajes de programación
Los ejemplos proporcionados están escritos en JavaScript
del lado del cliente, pero puedes llamar al plugin desde cualquier
lenguaje de programación, ya que simplemente se está consumiendo una API.
## Cambiando el puerto del plugin

Puedes especificar la opción de la línea de comandos `puerto`. Normalmente el plugin se ejecuta así:

```bash
plugin.exe
```

Para cambiar el puerto, ejecútalo así:

```bash
plugin.exe --puerto NUEVO_PUERTO
```

Por ejemplo, para ejecutarlo en el puerto `2811`:

```bash
plugin.exe --puerto 2811
```

En Windows puedes crear un acceso directo, ir a las propiedades,
pestaña **Acceso directo**, dentro de **Destino** debe decir algo así:

`C:\Users\tu_usuario\Ubicacion_del_plugin\plugin_v3.5.0.exe`

Cámbialo a:

`C:\Users\tu_usuario\Ubicacion_del_plugin\plugin_v3.5.0.exe --puerto NEW_PORT`

Por ejemplo, para cambiarlo al puerto 2106:

`C:\Users\tu_usuario\Ubicacion_del_plugin\plugin_v3.5.0.exe --puerto 2106`

Y ahora, en lugar de ejecutar el plugin correctamente, ejecútalo desde el acceso directo
