// Importamos .scss (vite)
import './sass/app.scss'
// Referenciasmos a todos los elementos del DOM necesarios

const menuIconElement = document.querySelector(".header__main-menu-icon")
const menuElement = document.querySelector(".header__main-menu")

// Cuando hacemos click al botón mostramos el menú

menuIconElement.addEventListener("click", (e) => {
    menuElement.classList.toggle("active")
})

