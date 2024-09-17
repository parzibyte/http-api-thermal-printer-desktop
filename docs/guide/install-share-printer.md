# Install and share your printer

## Drivers

It is recommended to install your
printer as generic, even if you
have the drivers.

Some users have reported that the plugin works even
with printers installed with drivers, but the only
way I have tested is with the generic way

:::warning
If you have already installed your printer with the drivers, uninstall it
before following this guide
:::
## Linux and Raspberry Pi OS
Power on your printer and connect it to a USB port. Then run:

```bash
ls /dev/usb/
```

Your printer must be listed. For example, mine is lp1:

```
hiddev0 lp1
```

Now execute:

```bash
stat /dev/usb/lp1
```
Where `lp1` is your printer's name
that you get when executed `ls /dev/usb`

Once the command is executed look at the output and
search for something like `Gid: (7/    lp)`

In my case, `lp` is the group the printer belongs to. Add
the user that will run the plugin to that group.
My user is `parzibyte` and the group is `lp`, so the command is:

```bash
sudo usermod -a -G lp parzibyte
```

Now reboot:

```bash
sudo reboot
```

Once the computer restarts, print a test page:
```bash
echo -e "Hello\nPrinter\n" >> /dev/usb/lp1
```

Check your printer. It should have printed the
text. Now it is ready for being used with the plugin

:::tip
In this command set, my printer was always `lp1` and my user
was `parzibyte`. In your case, that may change, so write the
commands according to your printer name and user name
:::


## Windows
This guide works on Windows 8, 8.1, 10 and 11. Some labels may
change.


Power on your printer and connect it to a USB port. Then go to **Printers & Scanners**, click **Add device**,
wait until **The printer that I want is not listed**, click on **Add manually**, then choose **Add a local printer or network printer with manual settings**

Now it's time to choose a port. Choose the first that starts with `USB` for example `USB002`

:::warning
If later the printer test page does not work, uninstall and
follow this guide again but choosing a different port
:::

In the next window choose **Generic** and **Generic / Text Only**


:::danger
Name your printer by using only lowercase letters and
make sure to share it with the same name
:::

Finally, assign a name to your printer and print a test page. If it
works, then you are ready to use the plugin. If it does not, choose another port
and make sure you share your printer
