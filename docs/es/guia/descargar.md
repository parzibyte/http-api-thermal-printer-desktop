# Descargar plugin

Para que esto funcione, necesitas
descargar y ejecutar el plugin HTTP a ESC POS de acuerdo 
a tu plataforma.

:::tip
A veces el navegador web o el sistema operativo bloquea la descarga. Si los enlaces directos no funcionan, intenta 
copiar el enlace y pegarlo en la barra de direcciones. Es tu obligacion forzar al navegador. Ninguno de mis archivos contienen virus.
:::

## Windows 64 bits
Funcionando con Windows 8, 8.1, 10 y 11

**Nombre del archivo:** `ESCPOSV3.5.4_W64.zip`

**Descarga**: [Descargar](https://parzibyte.me/compartir-archivos-app/#/descargar/d1561dac59c9b6624295b20fa2747d8fe668f9f44a8d2fd017dd2227ce426122)

```plaintext title="Enlace directo"
https://parzibyte.me/compartir-archivos-app/#/descargar/d1561dac59c9b6624295b20fa2747d8fe668f9f44a8d2fd017dd2227ce426122
```

:::tip
Si tiene una DLL, mantén dicha DLL junto con el plugin. Extrae el archivo, ejecuta el archivo del plugin. No debería abrir ninguna ventana,
puedes detenerlo desde el administrador de tareas
:::


## Android
Requiere al menos Android 5.0 Lollipop. Probado en Android 12, 13 y 16.

**Nombre del archivo:** `HTTP2ESCPOSBT2.1.apk`

**Descarga**: [Descargar](https://parzibyte.me/compartir-archivos-app/#/descargar/9eda7d1c255d247f8174c52c21978a4d1772011ff310d2a3883f050528b2b3b1)

```plaintext title="Enlace directo"
https://parzibyte.me/compartir-archivos-app/#/descargar/9eda7d1c255d247f8174c52c21978a4d1772011ff310d2a3883f050528b2b3b1
```
## Windows 32 bits
Funcionando con Windows 8, 8.1, 10 y 11

**Nombre del archivo:** `ESCPOSV3.5.4_W32.zip`

**Descarga**: [Descargar](https://parzibyte.me/compartir-archivos-app/#/descargar/951b02260119e6ea8aba8285d3cdcf80734d6bfc30cd12a5c1ee5b98c73032b7)

```plaintext title="Enlace directo"
https://parzibyte.me/compartir-archivos-app/#/descargar/951b02260119e6ea8aba8285d3cdcf80734d6bfc30cd12a5c1ee5b98c73032b7
```
:::tip
Si tiene una DLL, mantén dicha DLL junto con el plugin. Extrae el archivo, ejecuta el archivo del plugin. No debería abrir ninguna ventana,
puedes detenerlo desde el administrador de tareas
:::

## Rasbperry Pi

Compilado bajo el siguiente entorno:

```bash
parzibyte@raspberrypi:~/escposv3-main $ uname -a
Linux raspberrypi 6.1.0-rpi7-rpi-v8 #1 SMP PREEMPT Debian 1:6.1.63-1+rpt1 (2023-11-24) aarch64 GNU/Linux
parzibyte@raspberrypi:~ $ getconf LONG_BIT
64
```

**Nombre del archivo:** `ESC_POS_3.5.1_RPIARMV64.zip`

**Descarga**: [Descargar](https://github.com/parzibyte/plugin-impresora-termica-v3/releases/download/3.5.1/ESC_POS_3.5.1_RPIARMV64.zip)

```plaintext title="Enlace directo"
https://github.com/parzibyte/plugin-impresora-termica-v3/releases/download/3.5.1/ESC_POS_3.5.1_RPIARMV64.zip
```

### Ejecutar plugin
En una terminal, navega hasta la ubicación del plugin. Luego ejecuta `./nombre_plugin`, por ejemplo:
```bash
parzibyte@gigabytepc:~$ ./ESC_POS_3.5.1_RPIARMV64
```

En ocasiones puede que sea necesario que le des permiso de ejecución
con `sudo chmod +x ./nombre_plugin`

## Linux basado en Debian

Compilado bajo el siguiente entorno:
```bash
parzibyte@gigabytepc:~$ uname -a
Linux gigabytepc 5.4.0-150-generic #167~18.04.1-Ubuntu SMP Wed May 24 00:51:42 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux
parzibyte@gigabytepc:~$ getconf LONG_BIT
64
```

En ocasiones puede que sea necesario que le des permiso de ejecución
con `sudo chmod +x ./nombre_plugin`

**Nombre del archivo:** `ESC_POS_3.5.1_Linux64.zip`

**Descarga**: [Descargar](https://github.com/parzibyte/plugin-impresora-termica-v3/releases/download/3.5.1/ESC_POS_3.5.1_Linux64.zip)

```plaintext title="Enlace directo"
https://github.com/parzibyte/plugin-impresora-termica-v3/releases/download/3.5.1/ESC_POS_3.5.1_Linux64.zip
```

### Ejecutar plugin
En una terminal, navega hasta la ubicación del plugin. Luego ejecuta `./nombre_plugin`, por ejemplo:
```bash
parzibyte@gigabytepc:~$ ./ESC_POS_3.5.1_Linux64
```