try {
    const httpResponse = await fetch("http://localhost:8000/version");
    const pluginDetails = await httpResponse.json();
    console.log(pluginDetails);
} catch (e) {
    // The plugin did not answer
    console.log(e)
}