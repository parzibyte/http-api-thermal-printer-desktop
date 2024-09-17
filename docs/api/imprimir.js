try {
    const operations = [
        {
            nombre: "EscribirTexto",
            argumentos: ["Hello\nPrinter"],
        }
    ];
    const printerName = "Printer_name";
    const payload = {
        serial: "",
        operaciones: operations,
        nombreImpresora: printerName,
    };
    const httpResponse = await fetch("http://localhost:8000/imprimir", {
        method: "POST",
        body: JSON.stringify(payload),
    });
    const response = await httpResponse.json();
    if (response.ok) {
        console.log("Printed successfully");
    } else {
        console.error(response.message);
    }
} catch (e) {
    console.log(e)
}