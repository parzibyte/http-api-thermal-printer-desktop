# Instalar y compartir tu impresora

## Controladores

Se recomienda instalar tu impresora como genérica, incluso si tienes los controladores.

Algunos usuarios han reportado que el plugin funciona incluso con impresoras instaladas con controladores, pero la única forma en la que lo he probado es de manera genérica.

:::warning
Si ya has instalado tu impresora con los controladores, desinstálala antes de seguir esta guía.
:::

## Linux y Raspberry Pi OS
Enciende tu impresora y conéctala a un puerto USB. Luego ejecuta:

```bash
ls /dev/usb/
```

Tu impresora debe aparecer en la salida. Por ejemplo, la mía es `lp1`

```
hiddev0 lp1
```

Ahora ejecuta

```bash
stat /dev/usb/lp1
```
Donde `lp1` es el nombre de tu impresora que obtuviste
cuando ejecutaste `ls /dev/usb`

Una vez que ejecutes el comando mira la salida y busca
algo como `Gid: (7/    lp)`

En mi caso, `lp` es el grupo al que pertenece mi impresora. Agrega el usuario
que ejecutará el plugin a ese grupo.
Mi usuario es `parzibyte` y el grupo es `lp` así que el comando es:

```bash
sudo usermod -a -G lp parzibyte
```

Ahora reinicia:

```bash
sudo reboot
```

Una vez que la computadora se reinicie, imprime una página de prueba:
```bash
echo -e "Hola\nImpresora\n" >> /dev/usb/lp1
```

Revisa tu impresora, debería haber impreso el texto. Ahora está lista para
ser usada por el plugin

:::tip
En este conjunto de comandos mi impresora siempre fue
`lp1` y mi usuario fue `parzibyte`. En tu caso eso podría cambiar,
así que acmbia los comandos de acuerdo al nombre de tu impresora y
de tu usuario
:::


## Windows
Esta guía funciona en Windows 8, 8.1, 10 y 11. Algunas etiquetas de texto podrían cambiar

Enciende tu impresora y conéctala a un puerto USB. Luego ve a **Impresoras y Escáneres**, haz clic en **Agregar dispositivo**, espera hasta que aparezca la opción **La impresora que deseada no está en la lista**, haz clic en **Agregar manualmente**, y luego elige **Agregar una impresora local o de red con configuración manual**.


Ahora es el momento de elegir un puerto. Elige el primero cuyo nombre comience con `USB`
por ejemplo `USB002`

:::warning
Si, más adelante, la impresión de prueba no funciona, desinstala
la impresora y vuelve a seguir esta guía pero ahora **elige un puerto distinto**
:::

En la siguiente ventana elige **Generic** y **Generic / Text Only**


:::danger
Nombra tu impresora usando solo letras minúsculas y asegúrate
de compartirla usando el mismo nombre
:::

Finalmente asígnale un nombre a tu impresora e imprime una página de prueba.
Si funciona, entonces estás listo para usar el plugin. Si no, elige otro puerto
y asegúrate de compartir tu impresora.