# Get printers

Use this method to get the compatible printers list. This will open a temporal window on Windows, because
it needs to execute some Powershell script and it is not possible to hide it.

You should call this method only when giving the user a list
to choose they prefered printer


**Method:** `GET`

**Relative URL:** `/impresoras`

**Example response:**
@[code](./respuesta_impresoras.json)

This endpoint returns a JSON array, which contains only
strings. Each string represents a printer

## Example (JavaScript client side)

@[code](./impresoras.js)