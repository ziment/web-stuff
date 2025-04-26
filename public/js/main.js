(function () {
    window.addEventListener("load", () => {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        const footer = document.getElementById("footer-elapsed-time");

        if (footer) {
            footer.textContent = footer.textContent.replace("??", `${loadTime}`);
        } else {
            console.warn("Footer element not found");
        }
    });
})();