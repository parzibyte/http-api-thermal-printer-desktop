try {
    // Remote computer where plugin is executed
    // and printer is connected
    const remoteHost = "http://192.168.0.24:8000/impresoras";
    const httpResponse = await fetch("http://localhost:8000/reenviar?host=" + remoteHost);
    const printerList = await httpResponse.json();
    console.log(printerList);
} catch (e) {
    // The plugin did not answer or was not able to forward the request
    console.log(e)
}