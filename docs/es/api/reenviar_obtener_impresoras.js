try {
    // Computadora remota donde el plugin
    // se está ejecutando y la impresora está conectada
    const hostRemoto = "http://192.168.0.24:8000/impresoras";
    const respuestaHttp = await fetch("http://localhost:8000/reenviar?host=" + hostRemoto);
    const listaDeImpresoras = await respuestaHttp.json();
    console.log(listaDeImpresoras);
} catch (e) {
    // El plugin no respondió o no pudo reenviar la petición
    console.log(e)
}