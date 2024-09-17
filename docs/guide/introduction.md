# Introduction

## Thermal printer ESC POS plugin
This plugin allows you to print on any thermal printer
connected via USB on Windows, Linux and Raspbian.

The HTTP REST API is compatible with any language that can communicate over HTTP, making it compatible with C, C++, C#, Java, JavaScript (both client and server side), PHP, Python, Ruby, Go, Rust, Swift, Kotlin, Perl, and web frameworks like Vue, React, Angular, as well as desktop technologies such as Electron, Qt, and Flutter, to name a few.

You can also try the PDF plugin and the Android plugin

## HTTP to ESC POS
Its unified API allows you to use it from anywhere by using
your favorite programming language to send operations that
got translated into ESC POS commands.


The plugin includes everything you need to work with thermal
printers such as image printing supporting algorithms, barcodes,
qr codes, dithering, text and even HTML.


You can design any receipt with the Ticket designer or print
programatically

## How it works

When you run this plugin it starts a HTTP server which
you can call from anywhere. The HTTP API allows you to
get the printer list, forward the ESC POS operations and
print on any USB-connected printer by sending a JSON object
describing the operations and the previously-shared printer name

## Web browser first
The main reason this plugin exists is to allow to
print silently from JavaScript client-side by using
the web browser, but it also works with any other programming
languages that can speak HTTP (including cURL, Postman and so on)