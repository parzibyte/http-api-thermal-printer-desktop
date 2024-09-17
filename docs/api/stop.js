try {
    await fetch("http://localhost:8000/apagar");
    // Error stopping plugin, it should not answer the call
} catch (e) {
    // The plugin did not answer, likely it is turned off
    console.log(e)
}