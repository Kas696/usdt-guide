(() => {
    const y = new Date().getFullYear();
    const a = document.getElementById("year");
    const b = document.getElementById("year2");
    if (a) a.textContent = y;
    if (b) b.textContent = y;
})();
function copyCode() {
    const code = document.getElementById('promoCode').innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert('Промокод скопирован!');
    });
}