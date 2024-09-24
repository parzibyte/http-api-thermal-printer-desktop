# HTTP API description

This guide assumes the plugin is already running on port 8000.
You may change the port, but if you do, change the playground and
your code accordingly

The API communicates through JSON. It will accept and answer
with JSON

## Local API, no internet required
This HTTP to ESC POS API works offline, it executes
a HTTP server in your own computer, does not require
internet access.

:::warning
If you call this API from the browser, make sure you
call it from localhost or a site with https, otherwise
it won't work.

To print on LAN, check [Lan printing](../api/forward.md)
:::

## Programming languages
The examples provided are written with JavaScript
client-side, but you can call the plugin from any
programming language, it's just consuming an API

## Changing plugin port

You can specify the `puerto` command line option. Normally, you run the plugin with:

```bash
plugin.exe
```

Now run it this way:

```bash
plugin.exe --puerto NEW_PORT
```

For example, to run it on `2811` port:

```bash
plugin.exe --puerto 2811
```

On Windows, you can create a shortcut, then go to properties
and in **Shortcut** tab in **Target** which says something like:

`C:\Users\your_user\Location_to_plugin\plugin_v3.5.0.exe`

Change to:

`C:\Users\your_user\Location_to_plugin\plugin_v3.5.0.exe --puerto NEW_PORT`

For example, to change it to port 2106:

`C:\Users\your_user\Location_to_plugin\plugin_v3.5.0.exe --puerto 2106`

And now, instead of running the plugin directly, run it from the shortcut
