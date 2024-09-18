try {
    // Computadora remota donde el plugin
    // se está ejecutando y la impresora está conectada
    const hostRemoto = "http://192.168.0.24:8000/imprimir";
    const listaDeOperaciones = [
        {
            nombre: "EscribirTexto",
            argumentos: ["Hola\nImpresora"],
        }
    ];
    const nombreImpresora = "Nombre_impresora";
    const payload = {
        serial: "",
        operaciones: listaDeOperaciones,
        nombreImpresora: nombreImpresora,
    };
    const respuestaHttp = await fetch("http://localhost:8000/reenviar?host=" + hostRemoto, {
        method: "POST",
        body: JSON.stringify(payload),
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