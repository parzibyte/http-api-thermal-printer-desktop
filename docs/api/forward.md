# Forward
You can use this plugin to forward requests from plugin to plugin.
The main reason this exists is to provide
LAN printing.

If you have a computer with a printer connected to it and
the plugin running on it, you can print inside it calling localhost, but
when you want to call the plugin from another computer (say, call a IP instead of
localhost) then it is not possible with JavaScript client-side

## Forward printing

**Method:** `POST` or `GET`. The method must be the same that you would use if calling the endpoint without forwarding it. Use `POST`
for [printing](./print.md) and `GET` for [version](./version-ping.md), [stop](./stop.md)
or [getting printers](./get-printers.md)

In other words: make exactly the same request that you
would make locally, but make it to `http://localhost:8000/reenviar` and
specify the URL you would specify in the `host` param

**Relative URL:** `/reenviar?host=remote_host`

### Response

If forward is successfull, the response will be the same as if
you would have called the method locally. Otherwise, the server will
not respond and you will get an empty response

### GET params

You need to call this API endpoint indicating
the host to that the request will be forwarded

| GET param | Type | Example |
| -----     | ---- | ------- |
| `host` | String | `http://localhost:8000/imprimir` to [print](./print.md), `http://localhost:8000/impresoras` to [get printers](./get-printers.md) |

## Forward and print (code example)
Here's an example to forward and [print](./print.md)

@[code](./reenviar_e_imprimir.js)

To [print](./print.md), you would call `http://localhost:8000/imprimir`
with `POST` method,
calling the relative `/imprimir` endpoint, but in this case
you must call `/reenviar` and specify the remote host
URL with `imprimir` changing localhost to the remote host IP.

If forward is successfull, the response will be the same as the [print](./print.md) method.


## Forward and get printers (code example)
Here's an example to forward and [get printer list](./get-printers.md)

@[code](./reenviar_obtener_impresoras.js)

To [get printers](./get-printers.md), you would call `http://localhost:8000/impresoras`
with `GET` method,
calling the relative `/impresoras` endpoint, but in this case
you must call `/reenviar` and specify the remote host
URL with `impresoras` changing localhost to the remote host IP.

If forward is successfull, the response will be the same as the [get printers](./get-printers.md) method.

## More methods

The `/reenviar` endpoint serves like a proxy, you can
forward any request including [version](./version-ping.md) and [stop](./stop.md)