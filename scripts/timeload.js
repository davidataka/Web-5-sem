(() => {
    const startTime = Date.now();
    window.addEventListener("load", () => {
        const endTime = Date.now();
        document.getElementById("time_load").innerText = `Load time - ${endTime - startTime} ms`;
    });
})();