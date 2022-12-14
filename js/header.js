// obtengo al header
const header = document.getElementById("header");
// creo los elementos necesarios para el navBar
const navBar = document.createElement("nav");
const divLogo = document.createElement("div");

const divMenu_Oculto = document.createElement("div");
const cont_Menu_Oculto = document.createElement("div");
const navBar_Menu_Oculto = document.createElement("nav");
const label = document.createElement("label");

// Opciones del menu oculto
const opcionA = document.createElement("a");
const opcionB = document.createElement("a");
const opcionC = document.createElement("a");
const opcionD = document.createElement("a");

label.setAttribute("for", "btn_menu");
label.className = "bi bi-x-lg";

// agrego clase a los elementos creados.
navBar.className = "navBar";
divLogo.className = "contenedor-logoDeMenu";

// divMenu_Oculto.setAttribute("id", "container-menu");
divMenu_Oculto.className = "container-menu";
cont_Menu_Oculto.className = "cont-menu";

divLogo.innerHTML = `
<label for="btn_menu">
<img id="img_logo" src="./img/botonHam.png" alt="logo" />
</label>
<input id="btn_menu" type="checkbox"></input>`;

opcionA.innerHTML = "Inicio";
opcionB.innerHTML = "Peliculas";
opcionC.innerHTML = "Series";
opcionD.innerHTML = "Ingresar al Sistema";

opcionA.setAttribute("href", "./index.html");
opcionB.setAttribute("href", "./error404.html");
opcionC.setAttribute("href", "./error404.html");
opcionD.setAttribute("href", "./error404.html");
opcionD.setAttribute("data-bs-toggle", "modal");
opcionD.setAttribute("data-bs-target", "#login");

// Unir todo
navBar.appendChild(divLogo);

// union del menu oculto

navBar_Menu_Oculto.appendChild(opcionA);
navBar_Menu_Oculto.appendChild(opcionB);
navBar_Menu_Oculto.appendChild(opcionC);
navBar_Menu_Oculto.appendChild(opcionD);

cont_Menu_Oculto.appendChild(navBar_Menu_Oculto);
cont_Menu_Oculto.appendChild(label);

divMenu_Oculto.appendChild(cont_Menu_Oculto);

// unir al header
navBar.appendChild(divMenu_Oculto);
// navBar.appendChild(modal);
header.append(navBar);
// header.appendChild(divMenu_Oculto);

// cuando hace scroll, el header cambia de color
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navBar.className = "navBar color_Header";
  } else {
    navBar.className = "navBar";
  }
});

// Cambio clases si el usuario toca el boton hamburguesa,
// muestro o oculto segun corresponda
divLogo.addEventListener("click", () => {
  const inputCheck = document.getElementById("btn_menu");

  if (inputCheck.checked) {
    divMenu_Oculto.classList = "container-menu container-menu-click";
    cont_Menu_Oculto.classList = "cont-menu cont-menu-click";
  } else {
    divMenu_Oculto.classList = "container-menu";
    cont_Menu_Oculto.classList = "cont-menu";
  }
});

// MODAL PARA LOGIN en opcion D 'Ingresar al sistema'

// // Obtengo el id del header
// const modalHeader = document.getElementById("modal");

// CREO EL MODAL PARA LOGIN
const divModal = document.createElement("div");
divModal.className = "modal fade";
divModal.setAttribute("id", "login");
divModal.setAttribute("data-bs-backdrop", "static");
divModal.setAttribute("data-bs-keyboard", "false");
divModal.setAttribute("tabindex", "-1");
divModal.setAttribute("aria-labelledby", "staticBackdropLabel");
divModal.setAttribute("aria-hidden", "true");

// inyecto la estructura del modal de inicio sesion
divModal.innerHTML = `
<div class="modal-dialog tama??oModal-md">
  <div class="modal-content">
  <div class="modal-header">
    <img id="img_logoModal" src="./img/logoPeli (2).png" alt="logoModal"/>
    <h6 class="m-0">Rolling Movie</h6>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body p-3" id="divFormulario">
  <form>
  <div class="mb-3">
  <label for="usuario" class="form-label">Usuario</label>
  <input type="text" required maxlength="20" class="form-control" id="input_usuario">
    <div class="mb-3">
    <label for="password_Usuario" class="form-label">Contrase??a</label>
    <input type="password" required maxlength="20" class="form-control" id="input_password" aria-describedby="infoAUsuario">
    </div>
    <div id="infoAUsuario" class="infoUsuario-login"><a href="#">Recuperar contrase??a</a></div>
    </div>
    <div class="mt-2">
    <button type="button" id="botonEntrar" onClick="entrarAdmin()" class="btn-entrar w-100">Entrar</button>
    </div>
  </div>
  </form>
  <div class="modal-footer" id="estadoDeLogueo"></div>
  </div>
  </div>
</div>
`;

// inyecto el modal en el header
header.append(divModal);

// Configuro el modal en la opcionD

opcionD.setAttribute("data-bs-toggle", "modal");
opcionD.setAttribute("data-bs-target", "#login");

opcionD.addEventListener("click", () => ocultarMenu());

const ocultarMenu = () => {
  divMenu_Oculto.className = "d-none";
};
