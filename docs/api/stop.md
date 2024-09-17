# Stop plugin

Call this endpoint to stop and kill the plugin programatically. This will
stop the plugin as soon as it responds to the request, so don't wait for a
response, because if the plugin answers then there was an error turning it off

You can double check if the plugin is not running by making a request
to get the [version](./version-ping.md)


**Method:** `GET`

**Relative URL:** `/apagar`

**Example response:** It shoud not answer the request

## Example (JavaScript client side)

@[code](./stop.js)