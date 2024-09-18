try {
    await fetch("http://localhost:8000/apagar");
    // Error deteniendo plugin, ya que no debería responder la petición
} catch (e) {
    // El plugin no respondió. Seguramente es porque ya no está en ejecución
    console.log(e)
}