# http-api-thermal-printer-desktop
 ESC POS HTTP API desktop plugin docs

# Tailwind

Modo desarrollo:

`npx tailwindcss -i ./docs/.vuepress/styles/entrada.css -o ./docs/.vuepress/styles/estilos.css  --watch`

Modo producción:


`npx tailwindcss -i ./docs/.vuepress/styles/entrada.css -o ./docs/.vuepress/styles/estilos.css  --minify`

# Después de clonar

Versión de Node probada:
```
C:\Windows\system32>node -v
v20.15.1
```

1. `npm install`
2. `npm run docs:dev`

En otra terminal ejecutar Tailwind


# Compilando
1. Compila el CSS y minifícalo:

```bash
npx tailwindcss -i ./docs/.vuepress/styles/entrada.css -o ./docs/.vuepress/styles/estilos.css  --minify
```

2. Ejecuta:
```bash
npm run docs:build
```

3. Distribuye el contenido `docs\.vuepress\dist`. Recuerda que la base
path se encuentra en `config.js`

# Generando operaciones

`node generar.js`

La primera salida es en inglés, la segunda en español. Van en config.js
en el sidebar y en el navbar respectivamente