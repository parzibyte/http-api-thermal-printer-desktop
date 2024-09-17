# Plugin version (ping)

Use this method to tell if the plugin is
running, it serves as a ping and as a way
to get plugin version


**Method:** `GET`

**Relative URL:** `/version`

**Example response:**
@[code](./respuesta_version.json)

- `version`: `string` indicating the plugin version
- `plataforma`: `string` current platform to tell if it's the desktop plugin or the [Android plugin](#)
- `sistemaOperativo`: `string` Operating system

## Example (JavaScript client side)

@[code](./version.js)