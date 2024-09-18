# Introducción

## Plugin para impresoras térmicas ESC POS
Este plugin te permite imprimir en cualquier impresora térmica conectada vía USB en Windows, Linux y Raspbian.

La API REST HTTP es compatible con cualquier lenguaje que pueda comunicarse a través de HTTP, lo que la hace compatible con C, C++, C#, Java, JavaScript (tanto del lado del cliente como del servidor), PHP, Python, Ruby, Go, Rust, Swift, Kotlin, Perl, y frameworks web como Vue, React, Angular, así como tecnologías de escritorio como Electron, Qt, y Flutter, por mencionar algunos.

También puedes probar el plugin para PDF y el plugin para Android.

## HTTP a ESC POS
Su API unificada te permite usarlo desde cualquier lugar utilizando tu lenguaje de programación favorito para enviar operaciones que se traducen en comandos ESC POS.

El plugin incluye todo lo que necesitas para trabajar con impresoras térmicas, como soporte para impresión de imágenes con algoritmos de procesamiento, códigos de barras, códigos QR, dithering, texto e incluso HTML.

Puedes diseñar cualquier recibo con el [Diseñador de Tickets](https://parzibyte.me/apps/ticket-designer/#/) o imprimir tickets de manera programada.

## Cómo funciona

Cuando ejecutas este plugin, se inicia un servidor HTTP que puedes llamar desde cualquier lugar. La [API HTTP](../api/introduccion.md) te permite obtener la lista de impresoras, reenviar operaciones ESC POS e imprimir en cualquier impresora conectada por USB enviando un objeto JSON que describe las operaciones y el nombre de la impresora previamente compartida.

## Enfocado en el navegador web
La principal razón por la que este plugin existe es para permitir imprimir de manera silenciosa desde JavaScript del lado del cliente usando el navegador web, aunque también funciona con cualquier otro lenguaje de programación que pueda usar HTTP (incluyendo cURL, Postman, entre otros).
