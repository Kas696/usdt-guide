(() => {
    const y = new Date().getFullYear();
    const a = document.getElementById("year");
    const b = document.getElementById("year2");
    if (a) a.textContent = y;
    if (b) b.textContent = y;
})();
