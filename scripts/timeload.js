(() => {
    const start_time = Date.now();
    window.addEventListener("load", () => {
        const end_time = Date.now();
        document.getElementById("time_load").innerText = `Load time - ${end_time - start_time} ms`;
    });
})();