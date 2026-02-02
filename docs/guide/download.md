# Download plugin

To use the HTTP to ESC POS API you need to download and start
the server according to your platform.


:::tip
Sometimes web browser or OS block the download. If direct links do not
work, try going to the [release](https://github.com/parzibyte/plugin-impresora-termica-v3/releases/tag/3.5.1) 
and choose the right file on the **Assets** section, or copy the direct link. None of my files contain virus.
:::

## Windows 64 bits
Working with Windows 8, 8.1, 10 and 11

**Filename:** `ESC_POS_3.5.3_W64.zip`

**Download:** [Download](https://parzibyte.me/static/ESC_POS_3.5.3_W64.zip)

```plaintext title="Direct link"
https://parzibyte.me/static/ESC_POS_3.5.3_W64.zip
```

:::tip
Once extracted, if you find a DLL, keep that DLL in the same dir as the plugin. Extract the zip and execute the plugin. It does
not open any window and you can close it from the task manager
:::



## Windows 32 bits
Working with Windows 8, 8.1, 10 and 11

**Filename:** `ESC_POS_3.5.3_W32.zip`

**Download:** [Download](https://parzibyte.me/static/ESC_POS_3.5.3_W32.zip)

```plaintext title="Direct link"
https://parzibyte.me/static/ESC_POS_3.5.3_W32.zip
```

:::tip
Once extracted, if you find a DLL, keep that DLL in the same dir as the plugin. Extract the zip and execute the plugin. It does
not open any window and you can close it from the task manager
:::

## Rasbperry Pi

Compiled under following environment:

```bash
parzibyte@raspberrypi:~/escposv3-main $ uname -a
Linux raspberrypi 6.1.0-rpi7-rpi-v8 #1 SMP PREEMPT Debian 1:6.1.63-1+rpt1 (2023-11-24) aarch64 GNU/Linux
parzibyte@raspberrypi:~ $ getconf LONG_BIT
64
```

**Filename:** `ESC_POS_3.5.1_RPIARMV64.zip`

**Download**: [Download](https://github.com/parzibyte/plugin-impresora-termica-v3/releases/download/3.5.1/ESC_POS_3.5.1_RPIARMV64.zip)

```plaintext title="Direct link"
https://github.com/parzibyte/plugin-impresora-termica-v3/releases/download/3.5.1/ESC_POS_3.5.1_RPIARMV64.zip
```

### Running plugin
On a terminal navigate to the plugin dir. Then run `./plugin_name`, for example:
```bash
parzibyte@gigabytepc:~$ ./ESC_POS_3.5.1_RPIARMV64
```


Sometimes it may be necessary to give the plugin
execution permission with `sudo chmod +x ./plugin_name`

## Linux (Debian based)

Compiled under following environment:
```bash
parzibyte@gigabytepc:~$ uname -a
Linux gigabytepc 5.4.0-150-generic #167~18.04.1-Ubuntu SMP Wed May 24 00:51:42 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux
parzibyte@gigabytepc:~$ getconf LONG_BIT
64
```

Sometimes it may be necessary to give the plugin
execution permission with `sudo chmod +x ./plugin_name`

**Filename:** `ESC_POS_3.5.1_Linux64.zip`

**Download**: [Download](https://github.com/parzibyte/plugin-impresora-termica-v3/releases/download/3.5.1/ESC_POS_3.5.1_Linux64.zip)

```plaintext title="Direct link"
https://github.com/parzibyte/plugin-impresora-termica-v3/releases/download/3.5.1/ESC_POS_3.5.1_Linux64.zip
```

### Running plugin
On a terminal navigate to the plugin dir. Then run `./plugin_name`, for example:
```bash
parzibyte@gigabytepc:~$ ./ESC_POS_3.5.1_Linux64
```