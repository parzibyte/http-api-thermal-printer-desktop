# Detener plugin

Llama a este endpoint para detener y finalizar el plugin de forma programática. Esto
detendrá el plugin tan pronto como reciba la solicitud, así que no esperes una
respuesta, porque si el plugin responde, entonces hubo un error al apagarlo.

Puedes verificar si el plugin no está en ejecución haciendo una solicitud
para obtener la [versión](./version-ping.md).

**Método:** `GET`

**URL relativa:** `/apagar`

**Ejemplo de respuesta:** No debería responder a la solicitud.

## Ejemplo (JavaScript del lado del cliente)

@[code](./stop.js)
