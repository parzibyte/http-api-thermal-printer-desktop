# Print

Use this method to print a receipt or, sometimes,
to open the cash drawer.
Send a list of operations that will get
translated into ESC POS Commands.

You can specify the printer name and an infinite operation list

**Method:** `POST`

**Relative URL:** `/imprimir`

**Request body example:**
@[code](./peticion_imprimir.json)

Send a JSON object with the following properties:

| Property | Type | Description| Example | 
| ------------ | ------------ | ------------ | -- |
| `serial` | String | Optional plugin serial to support development| `""`
| `nombreImpresora` | String | Printer name where the ESC POS operations will be made. You can call the method to [get the printers](./get-printers.md) or you can specify it manually| `"POS58"`
| `operaciones` | Array | Array of objects. Each object inside `operaciones` must have a `nombre` property and a `argumentos` property | ```[{"nombre": "EscribirTexto", "argumentos": ["Hello\nPrinter"]}]```
| `nombre` (Object property inside the `operaciones` Array) | String |  Operation name that you can get in Available ESC POS operations | `"EscribirTexto"`
| `argumentos` (Object property inside the `operaciones` Array) | Array |  Arguments in the order they appear in Available ESC POS operations | `["Hello\nPrinter"]`


**Response example:**
@[code](./respuesta_imprimir.json)


This endpoint returns a JSON object, which contains two properties:

|Property| Type | Description | Example| 
|--| -- | -- | -- |
|`ok`| Boolean | Indicates wether the operation list was executed successfully| `true` |
|`message`| String | If `ok` is not `true`, then the error message will be in `message`| `"open \\\\PC\\Printer_name: The network name cannot be found."` |



:::tip
Even if the plugin returns `true` in the `ok` property,
that does not mean that the print was successfully.
The plugin does not have a way to tell if the printer
was connected or turned on.
An `ok` with a `true` value
means that the print job was added to the print queue and
that the operation list was executed without syntax errors
:::
## Example (JavaScript client side)

@[code](./imprimir.js)

