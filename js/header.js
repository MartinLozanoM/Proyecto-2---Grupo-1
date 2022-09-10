// MODAL
// Modal del login
const modal = document.createElement("div");
modal.className = "modal fade";
modal.setAttribute("id", "loginModal");
modal.setAttribute("data-bs-backdrop", "static");
modal.setAttribute("data-bs-keyboard", "false");
modal.setAttribute("tabindex", "-1");
modal.setAttribute("aria-labelledby", "staticBackdropLabel");
modal.setAttribute("aria-hidden", "true");

// obtengo al header
const header = document.getElementById("header");
// creo los elementos necesarios para el navBar

const navBar = document.createElement("nav");
const divLogo = document.createElement("div");
const divMenu = document.createElement("div");
const divMenu_Oculto = document.createElement("div");
const cont_Menu_Oculto = document.createElement("div");
const navBar_Menu_Oculto = document.createElement("nav");
// Opciones del menu oculto
const opcionA = document.createElement("a");
const opcionB = document.createElement("a");
const opcionC = document.createElement("a");
const opcionD = document.createElement("a");

const label_boton = document.createElement("label");
label_boton.setAttribute("for", "btn_menu");
// asocio el label y el input check
const inputCheck = document.createElement("input");
inputCheck.type = "checkbox";
inputCheck.setAttribute("id", "btn_menu");

// agrego clase a los elementos creados.
navBar.className = "navBar";
divLogo.className = "divLogo";
divMenu.setAttribute("id", "div_BotonMenu");
divMenu_Oculto.setAttribute("id", "container-menu");
cont_Menu_Oculto.className = "cont-menu";

// Inyecto còdigo a los elementos creados.
label_boton.innerHTML = `<img id="img_menu" src="./img/botonHam.png" alt="logo"
/>`;

divLogo.innerHTML = `<h4></h4>`;
opcionA.innerHTML = "Inicio";
opcionB.innerHTML = "Peliculas";
opcionC.innerHTML = "Series";
opcionD.innerHTML = "Ingresar al Sistema";

opcionA.setAttribute("href", "#");
opcionB.setAttribute("href", "#");
opcionC.setAttribute("href", "#");
opcionD.setAttribute("href", "./administracion.html");
// opcionD.setAttribute("type", "button");
// opcionD.setAttribute("data-bs-toggle", "modal");
// opcionD.setAttribute("data-bs-target", "loginModal");
// opcionD.setAttribute("onClick", "login()");

// Unir todo
divMenu.appendChild(inputCheck);
divMenu.appendChild(label_boton);
navBar.appendChild(divLogo);
navBar.appendChild(divMenu);

// union del menu oculto

navBar_Menu_Oculto.appendChild(opcionA);
navBar_Menu_Oculto.appendChild(opcionB);
navBar_Menu_Oculto.appendChild(opcionC);
navBar_Menu_Oculto.appendChild(opcionD);

cont_Menu_Oculto.appendChild(navBar_Menu_Oculto);
divMenu_Oculto.appendChild(cont_Menu_Oculto);

//
// unir al header
navBar.appendChild(divMenu_Oculto);
navBar.appendChild(modal);
header.appendChild(navBar);
// header.appendChild(divMenu_Oculto);

// cuando hace scroll, el header cambia de color
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navBar.className = "navBar color_Header";
  } else {
    navBar.className = "navBar";
  }
});

divMenu.addEventListener("click", () => {
  if (inputCheck.checked) {
    divMenu_Oculto.className = "d-block";
  } else {
    divMenu_Oculto.className = "d-none";
  }
});
