# Descargar plugin

Para que esto funcione, necesitas
descargar y ejecutar el plugin HTTP a ESC POS de acuerdo 
a tu plataforma.

:::tip
A veces el navegador web o el sistema operativo bloquea la descarga. Si los enlaces directos no funcionan, intenta ir a la [release](https://github.com/parzibyte/plugin-impresora-termica-v3/releases/tag/3.5.0) y elige el archivo correcto en **Assets** o copia el enlace directo. Ninguno de mis archivos contienen virus.
:::

## Windows 64 bits
Funcionando con Windows 8, 8.1, 10 y 11

**Nombre del archivo:** `ESC_POS_3.5.1_W64.zip`

**Descarga**: [Descargar](https://github.com/parzibyte/plugin-impresora-termica-v3/releases/download/3.5.1/ESC_POS_3.5.1_W64.zip)

```plaintext title="Enlace directo"
https://github.com/parzibyte/plugin-impresora-termica-v3/releases/download/3.5.1/ESC_POS_3.5.1_W64.zip
```

:::tip
Si tiene una DLL, mantén dicha DLL junto con el plugin. Extrae el archivo, ejecuta el archivo del plugin. No debería abrir ninguna ventana,
puedes detenerlo desde el administrador de tareas
:::



## Windows 32 bits
Funcionando con Windows 8, 8.1, 10 y 11

**Nombre del archivo:** `ESC_POS_3.5.1_W32.zip`

**Descarga**: [Descargar](https://github.com/parzibyte/plugin-impresora-termica-v3/releases/download/3.5.1/ESC_POS_3.5.1_W32.zip)

```plaintext title="Enlace directo"
https://github.com/parzibyte/plugin-impresora-termica-v3/releases/download/3.5.1/ESC_POS_3.5.1_W32.zip
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

**Nombre del archivo:** `ESC_POS_3.5.0_RPIARMV64.zip`

**Descarga**: [Descargar](https://github.com/parzibyte/plugin-impresora-termica-v3/releases/download/3.5.0/ESC_POS_3.5.0_RPIARMV64.zip)

```plaintext title="Enlace directo"
https://github.com/parzibyte/plugin-impresora-termica-v3/releases/download/3.5.0/ESC_POS_3.5.0_RPIARMV64.zip
```

### Ejecutar plugin
En una terminal, navega hasta la ubicación del plugin. Luego ejecuta `./nombre_plugin`, por ejemplo:
```bash
parzibyte@gigabytepc:~$ ./ESC_POS_3.5.0_RPIARMV64
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

**Nombre del archivo:** `ESC_POS_3.5.0_Linux64.zip`

**Descarga**: [Descargar](https://github.com/parzibyte/plugin-impresora-termica-v3/releases/download/3.5.0/ESC_POS_3.5.0_Linux64.zip)

```plaintext title="Enlace directo"
https://github.com/parzibyte/plugin-impresora-termica-v3/releases/download/3.5.0/ESC_POS_3.5.0_Linux64.zip
```

### Ejecutar plugin
En una terminal, navega hasta la ubicación del plugin. Luego ejecuta `./nombre_plugin`, por ejemplo:
```bash
parzibyte@gigabytepc:~$ ./ESC_POS_3.5.0_Linux64
```