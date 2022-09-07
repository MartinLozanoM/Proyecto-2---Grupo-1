// obtengo al header
const header = document.getElementById("header");
// creo los elementos necesarios para el navBar

const navBar = document.createElement("nav");
const divLogo = document.createElement("div");
const divMenu = document.createElement("div");

// Modal del login
// let modal = document.createElement("div");
// modal.className("modal fade");
// modal.setAttribute("id", "loginModal");
// modal.setAttribute("data-bs-backdrop", "static");
// modal.setAttribute("data-bs-keyboard", "false");
// modal.setAttribute("tabindex", "-1");
// modal.setAttribute("aria-labelledby", "staticBackdropLabel");
// modal.setAttribute("aria-hidden", "true");

// agrego clase a los elementos creados.
navBar.className = "navBar";
divLogo.className = "divLogo";
divMenu.className = "divMenu";

// Inyecto còdigo a los elementos creados.
divLogo.innerHTML = `<h4></h4>`;
divMenu.innerHTML = `<img id="img_menu" src="./img/botonHam.png" alt="logo"
/>`;

navBar.appendChild(divLogo);
navBar.appendChild(divMenu);
header.appendChild(navBar);

// cuando hace scroll, el header cambia de color
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navBar.className = "navBar color_Header";
  } else {
    navBar.className = "navBar";
  }
});
