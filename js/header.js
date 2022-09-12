// MODAL
// Modal del login
// const modal = document.createElement("div");
// modal.className = "modal fade";
// modal.setAttribute("id", "loginModal");
// modal.setAttribute("data-bs-backdrop", "static");
// modal.setAttribute("data-bs-keyboard", "false");
// modal.setAttribute("tabindex", "-1");
// modal.setAttribute("aria-labelledby", "staticBackdropLabel");
// modal.setAttribute("aria-hidden", "true");

// obtengo al header
const header = document.getElementById("header");
// creo los elementos necesarios para el navBar

const navBar = document.createElement("nav");
const divLogo = document.createElement("div");

const divMenu_Oculto = document.createElement("div");
const cont_Menu_Oculto = document.createElement("div");
const navBar_Menu_Oculto = document.createElement("nav");

// Opciones del menu oculto
const opcionA = document.createElement("a");
const opcionB = document.createElement("a");
const opcionC = document.createElement("a");
const opcionD = document.createElement("a");

// agrego clase a los elementos creados.
navBar.className = "navBar";
divLogo.className = "contenedor-logoDeMenu";

divMenu_Oculto.setAttribute("id", "container-menu");
cont_Menu_Oculto.className = "cont-menu";

divLogo.innerHTML = `
<label for="btn_menu">
<img id="img_logo" src="./img/botonHam.png" alt="logo" />
<img id="img_logoOculto" class="d-none" src="./img/camara.png" alt="logo" />
</label>
<input id="btn_menu" type="checkbox"></input>`;

opcionA.innerHTML = "Inicio";
opcionB.innerHTML = "Peliculas";
opcionC.innerHTML = "Series";
opcionD.innerHTML = "Ingresar al Sistema";

opcionA.setAttribute("href", "#");
opcionB.setAttribute("href", "#");
opcionC.setAttribute("href", "#");

opcionD.setAttribute("type", "button");
opcionD.setAttribute("data-bs-toggle", "modal");
opcionD.setAttribute("data-bs-target", "#loginModal");
opcionD.setAttribute("onClick", "login()");

opcionD.addEventListener("click", () => ocultarMenu());

const ocultarMenu = () => {
  divMenu_Oculto.className = "d-none";
};

// Unir todo
navBar.appendChild(divLogo);

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
// navBar.appendChild(modal);
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

divLogo.addEventListener("click", () => {
  const logo = document.getElementById("img_logo");
  const logoOculto = document.getElementById("img_logoOculto");
  const inputCheck = document.getElementById("btn_menu");

  if (inputCheck.checked) {
    divMenu_Oculto.className = "d-block";
    logo.className = "d-none";
    logoOculto.className = "d-block";
  } else {
    divMenu_Oculto.className = "d-none";
    logo.className = "d-block";
    logoOculto.className = "d-none";
  }
});
