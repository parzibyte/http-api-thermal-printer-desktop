try {
    const httpResponse = await fetch("http://localhost:8000/impresoras");
    const printerList = await httpResponse.json();
    console.log(printerList);
} catch (e) {
    // The plugin did not answer
    console.log(e)
}