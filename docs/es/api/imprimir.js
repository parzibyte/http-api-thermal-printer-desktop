try {
    const listaDeOperaciones = [
        {
            nombre: "EscribirTexto",
            argumentos: ["Hola\nImpresora"],
        }
    ];
    const nombreImpresora = "Nombre_impresora";
    const cargaUtil = {
        serial: "",
        operaciones: listaDeOperaciones,
        nombreImpresora: nombreImpresora,
    };
    const respuestaHttp = await fetch("http://localhost:8000/imprimir", {
        method: "POST",
        body: JSON.stringify(cargaUtil),
    });
    const respuesta = await respuestaHttp.json();
    if (respuesta.ok) {
        console.log("Impreso correctamente");
    } else {
        console.error(respuesta.message);
    }
} catch (e) {
    console.log(e)
}