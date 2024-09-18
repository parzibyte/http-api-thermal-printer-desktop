try {
    const respuestaHttp = await fetch("http://localhost:8000/version");
    const detallesDelPlugin = await respuestaHttp.json();
    console.log(detallesDelPlugin);
} catch (e) {
    // El plugin no respondió
    console.log(e)
}