try {
    const respuestaHttp = await fetch("http://localhost:8000/impresoras");
    const listaDeImpresoras = await respuestaHttp.json();
    console.log(listaDeImpresoras);
} catch (e) {
    // El plugin no respondió
    console.log(e)
}