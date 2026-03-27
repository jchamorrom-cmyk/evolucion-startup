//  MODO OSCURO
const modoBtn = document.getElementById("modoOscuro");

modoBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


// MENÚ MÓVIL
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});