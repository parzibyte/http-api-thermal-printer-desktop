# Reenvío

Puedes usar este plugin para reenviar solicitudes de un plugin a otro.
La principal razón por la que existe es para proporcionar
impresión en red local (LAN).

Si tienes una computadora con una impresora conectada y
el plugin ejecutándose en ella, puedes imprimir llamando a localhost, pero
cuando quieres llamar al plugin desde otra computadora (es decir, llamando a una IP en lugar de localhost),
esto no es posible con JavaScript del lado del cliente.

## Reenvío de impresión

**Método:** `POST` o `GET`. El método debe ser el mismo que usarías si llamaras al endpoint sin reenviarlo. Usa `POST` para [imprimir](./imprimir.md) y `GET` para [versión](./version-ping.md), [apagar](./detener.md) u [obtener impresoras](./obtener-impresoras.md).

En otras palabras: realiza exactamente la misma solicitud que harías localmente, pero hazla a `http://localhost:8000/reenviar` y
especifica la URL que especificarías en el parámetro `host`.

**URL relativa:** `/reenviar?host=host_remoto`

### Respuesta

Si el reenvío es exitoso, la respuesta será la misma como si hubieras llamado al método localmente. De lo contrario, el servidor no responderá y recibirás una respuesta vacía.

### Parámetros GET

Necesitas llamar a este endpoint de la API indicando
el host al que se reenviará la solicitud.

| Parámetro GET | Tipo  | Ejemplo |
| ------------- | ----- | ------- |
| `host`        | String| `http://localhost:8000/imprimir` para [imprimir](./imprimir.md), `http://localhost:8000/impresoras` para [obtener las impresoras](./obtener-impresoras.md) |

## Reenviar e imprimir (ejemplo de código)
Aquí tienes un ejemplo para reenviar e [imprimir](./imprimir.md)

@[code](./reenviar_e_imprimir.js)

Para [imprimir](./imprimir.md), normalmente llamarías a `http://localhost:8000/imprimir`
con el método `POST`,
llamando al endpoint relativo `/imprimir`, pero en este caso
debes llamar a `/reenviar` y especificar la URL del host remoto
con `imprimir`, cambiando localhost por la IP del host remoto.

Si el reenvío es exitoso, la respuesta será la misma que el método [imprimir](./imprimir.md).

## Reenviar y obtener impresoras (ejemplo de código)
Aquí tienes un ejemplo para reenviar y [obtener la lista de impresoras](./obtener-impresoras.md)

@[code](./reenviar_obtener_impresoras.js)

Para [obtener las impresoras](./obtener-impresoras.md), normalmente llamarías a `http://localhost:8000/impresoras`
con el método `GET`,
llamando al endpoint relativo `/impresoras`, pero en este caso
debes llamar a `/reenviar` y especificar la URL del host remoto
con `impresoras`, cambiando localhost por la IP del host remoto.

Si el reenvío es exitoso, la respuesta será la misma que el método [obtener impresoras](./obtener-impresoras.md).

## Más métodos

El endpoint `/reenviar` actúa como un proxy, puedes
reenviar cualquier solicitud incluyendo [versión](./version-ping.md) y [apagar](./detener.md).
