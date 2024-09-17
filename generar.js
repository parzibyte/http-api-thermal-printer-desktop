import { operacionesDisponibles } from "./listaCompletaDeOperaciones.js";
import fs from 'node:fs';
const carpetaIngles = "esc-pos";
const carpetaEspañol = "es/esc-pos";

const operacionNecesitaWkhtmlToImage = (operacion)=>{
    if (["GenerarImagenAPartirDeHtmlEImprimir", "GenerarImagenAPartirDePaginaWebEImprimir"].includes(operacion.nombre)) {
        return true;
    }
    return false;
}

const avisoHtmlEspañol = (operacion) => {
    if (operacionNecesitaWkhtmlToImage(operacion)) {
        return `
::: warning
**wkhtmltoimage debe existir en la PATH** para que esta operación funcione, necesitas
[wkhtmltoimage](https://wkhtmltopdf.org/downloads.html) en la PATH o en el mismo directorio
donde el plugin se ejecuta
:::
`;
    }
    return "";
}



const avisoHtmlIngles = (operacion) => {
    if (operacionNecesitaWkhtmlToImage(operacion)) {
        return `
::: warning
**You need wkhtmltoimage on the PATH:** in order for this to work, you need the executable
[wkhtmltoimage](https://wkhtmltopdf.org/downloads.html) on the PATH or in the same
directory where the plugin is being executed
:::
`;
    }
    return "";
}

const normalizarNombre = (nombre) => {
    const mapaAcentos = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
        'Á': 'a', 'É': 'e', 'Í': 'i', 'Ó': 'o', 'Ú': 'u',
        'ñ': 'n', 'Ñ': 'n'
    };

    return nombre
        .toLowerCase()
        .replace(/[áéíóúñÁÉÍÓÚÑ]/g, (letra) => mapaAcentos[letra])
        .replaceAll(" ", "-");
}



const generarEnEspañol = () => {
    const rutas = [];
    for (const operacion of operacionesDisponibles) {
        let texto = `# ${operacion.nombre_corto}

\`${operacion.nombre}\`

${operacion.descripcion}

${avisoHtmlEspañol(operacion)}


[Pruébalo en el área de pruebas](../playground.md?operacion=${operacion.nombre})

## Argumentos
`;
        if (operacion.argumentos.length === 0) {
            texto += "Esta operación no tiene argumentos. Simplemente envía el arreglo `argumentos` vacío\n\n";
        }
        let indice = 0;
        for (const argumento of operacion.argumentos) {
            texto += `### ${argumento.descripcion} (\`argumentos[${indice}]\`)



**Descripción:** ${argumento.descripcion}

**Índice:** \`${indice}\`

**Tipo:** \`${argumento.tipo}\`

**Ejemplo:** \`${argumento.ejemplo}\`

`;
            indice++;
        }
        texto += `## Ejemplo

Agrega esta operación a la lista de operaciones que enviarás en la clave \`operaciones\`.

Su nombre es \`${operacion.nombre}\`, así que ese valor va en la clave \`nombre\`. Después coloca los argumentos en el arreglo \`argumentos\`

No olvides revisar el tipo de dato de cada argumento


\`\`\`json
${JSON.stringify(obtenerParaUnaOperacion(operacion), null, 2)}
\`\`\`



::: tip
**Recuerda:** la lista de operaciones (\`operaciones\`) puede tener infinitas operaciones, esta es solo una de ellas
:::

## Ejemplo (JavaScript lado del cliente)

### Área de pruebas
[Pruébalo en el área de pruebas](../playground.md?operacion=${operacion.nombre})
<Playground nombreOperacion="${operacion.nombre}" :ocultarOperacionesDisponibles="true"/>

### Ejemplo de código
\`\`\`js
const respuestaHttp = await fetch("http://localhost:8000/imprimir",
    {
        method: "POST",
        body: JSON.stringify(${JSON.stringify(obtenerObjeto(operacion), null, 2)}),
        headers: {
            "Content-Type": "application/json",
        },
    });

const respuestaComoJson = await respuestaHttp.json();
if (respuestaComoJson.ok) {
    // Todo bien
    console.log("Impreso correctamente");
} else {
    // El error está en la propiedad message
    console.error(respuestaComoJson.message)
}
\`\`\`

## JSON de ejemplo sin codificar

Codifica el siguiente JSON y envíalo a \`http://localhost:8000/imprimir\` con el método POST

\`\`\`json
${JSON.stringify(obtenerObjeto(operacion), null, 2)}
\`\`\`

## JSON de ejemplo codificado

Envía esta cadena JSON ya codificada a \`http://localhost:8000/imprimir\` con el método POST

\`\`\`
${JSON.stringify(obtenerObjeto(operacion))}
\`\`\`
`;
        const relativa = carpetaEspañol + "/" + normalizarNombre(operacion.nombre_corto) + ".md";
        const ruta = "./docs/" + relativa;

        rutas.push("/" + relativa);
        fs.writeFile(ruta, texto, err => {
            if (err) {
                console.error(err);
            } else {
            }
        });
    }

    console.log(rutas);
}

const generarEnIngles = () => {
    const rutas = [];
    for (const operacion of operacionesDisponibles) {
        let texto = `# ${operacion.nombre_corto_ingles}

\`${operacion.nombre}\`

${operacion.descripcion_ingles}



${avisoHtmlIngles(operacion)}



[Try it on the Playground](../playground.md?operacion=${operacion.nombre})

## Arguments
`;
        if (operacion.argumentos.length === 0) {
            texto += "This operation does not have arguments. Just send the `argumentos` array empty";
        }
        let indice = 0;
        for (const argumento of operacion.argumentos) {
            texto += `### ${argumento.descripcion_ingles} (\`argumentos[${indice}]\`)



**Description:** ${argumento.descripcion_ingles}

**Index:** \`${indice}\`

**Type:** \`${argumento.tipo}\`

**Example:** \`${argumento.ejemplo_ingles}\`

`;
            indice++;
        }
        texto += `## Operation example


Push this operation to the operation list (whose key is \`operaciones\`) that you will send with the request.

Its name is \`${operacion.nombre}\`, so it goes on the \`nombre\` key. Then put the arguments in order
inside the \`argumentos\` array.

Don't forget to check every argument type



\`\`\`json
${JSON.stringify(obtenerParaUnaOperacion(operacion), null, 2)}
\`\`\`

::: tip
**Remember:** the operation list (\`operaciones\`) can contain infinite operations, this is only one of them
:::

## Example (JavaScript client side)

### Playground
[Try it on the Playground](../playground.md?operacion=${operacion.nombre})

<Playground nombreOperacion="${operacion.nombre}" :ocultarOperacionesDisponibles="true"/>

### Code example
\`\`\`js
const httpResponse = await fetch("http://localhost:8000/imprimir",
    {
        method: "POST",
        body: JSON.stringify(${JSON.stringify(obtenerObjeto(operacion), null, 2)}),
        headers: {
            "Content-Type": "application/json",
        },
    });

const jsonResponse = await httpResponse.json();
if (jsonResponse.ok) {
    // Everything is ok
    console.log("Printed successfully");
} else {
    // Error message is on message property
    console.error(jsonResponse.message)
}
\`\`\`

## Example JSON (not encoded)

Encode this JSON and send it to \`http://localhost:8000/imprimir\` with POST method

\`\`\`json
${JSON.stringify(obtenerObjeto(operacion), null, 2)}
\`\`\`

## Example JSON (encoded)

Send this JSON string to \`http://localhost:8000/imprimir\` with POST method

\`\`\`
${JSON.stringify(obtenerObjeto(operacion))}
\`\`\`
`;
        const relativa = carpetaIngles + "/" + normalizarNombre(operacion.nombre_corto_ingles) + ".md";
        const ruta = "./docs/" + relativa;

        rutas.push("/" + relativa);
        fs.writeFile(ruta, texto, err => {
            if (err) {
                console.error(err);
            } else {
            }
        });
    }

    console.log(rutas);
}


const obtenerArgumentos = (operacion) => {
    return operacion.argumentos.map((argumento) => {
        if (argumento.tipo === "bool") {
            if (argumento.ejemplo_ingles === "false") {
                return false;
            }
            return true;
        }
        return argumento.ejemplo_ingles;
    })
}

const obtenerParaUnaOperacion = operacion => {
    return {
        nombre: operacion.nombre,
        argumentos: obtenerArgumentos(operacion),
    }
}

const obtenerObjeto = operacion => {
    return {
        "serial": "",
        "nombreImpresora": "your_printers_name",
        "operaciones": [
            obtenerParaUnaOperacion(operacion)
        ]
    }
}


generarEnIngles();
generarEnEspañol();