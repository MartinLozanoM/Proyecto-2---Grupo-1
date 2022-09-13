// Creo usuarios para comparar si el logueo es correcto o no
const USERS = [
  { user: "Martin", password: "martin" },
  { user: "valentina", password: "valentina" },
];

// Obtengo el id del header
const modalHeader = document.getElementById("modal");

// CREO EL MODAL PARA LOGIN
const divModal = document.createElement("div");
divModal.className = "modal fade";
divModal.setAttribute("id", "loginModal");
divModal.setAttribute("data-bs-backdrop", "static");
divModal.setAttribute("data-bs-keyboard", "false");
divModal.setAttribute("tabindex", "-1");
divModal.setAttribute("aria-labelledby", "staticBackdropLabel");
divModal.setAttribute("aria-hidden", "true");

// inyecto la estructura del modal de inicio sesion
divModal.innerHTML = `
<div class="modal-dialog tamañoModal-md">
  <div class="modal-content">
  <div class="modal-header">
    <img id="img_logoModal" src="./img/logoPeli (2).png" alt="logoModal"/>
    <h6 class="m-0">Rolling Movie</h6>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body p-3" id="divFormulario"></div>
  <div class="modal-footer" id="estadoDeLogueo"></div>
  </div>
</div>
`;

// inyecto el modal en el header
modalHeader.appendChild(divModal);

// creo el elemento <form> para que el usuario ingrese sus datos
const form = document.createElement("form");
const divForm = document.createElement("div"); /*contenedor del form*/
// agrego clases a divFor
divForm.className = "mb-3";

// creo modal para login
const cargarModalFormulario = () => {
  // obtengo el id del div body del modal
  const modalFormulario = document.getElementById("divFormulario");

  // inserto código al contenedor del form
  divForm.innerHTML = `<label for="usuario" class="form-label">Usuario</label>
  <input type="text" required maxlength="20" class="form-control" id="input_usuario">
  <div class="mb-3">
    <label for="password_Usuario" class="form-label">Contraseña</label>
    <input type="password" required maxlength="20" class="form-control" id="input_password" aria-describedby="infoAUsuario">
    </div>
    <div id="infoAUsuario" class="infoUsuario-login">Recuperar contraseña</div>
    </div>
    <div class="mt-2">
    <button type="button" id="botonEntrar" onClick="entrarAdmin()" class="btn-entrar w-100">Entrar</button>
    </div>
    `;
  // Inserto el contenedor al formulario.
  form.append(divForm);
  // inserto en 'divFormulario' el form creado.
  modalFormulario.append(form);
};
cargarModalFormulario();
// // LOGICA DEL BOTON ENTRAR del login (validacion de ingreso)

const entrarAdmin = () => {
  // capturo los input y mensaje para usuario
  const inputUsuario = document.getElementById("input_usuario");
  const inputPassword = document.getElementById("input_password");
  const mensajeDeLogin = document.getElementById("estadoDeLogueo");

  mensajeDeLogin.style = "";
  // le indico al usuario que estamos validando su ingreso.
  mensajeDeLogin.innerHTML = "Validando ...";

  setTimeout(() => {
    // Creo un flag o bandera para que controle si muestro el error o redireccion en caso de validar
    let validationOk = false;

    for (let i = 0; i < USERS.length; i++) {
      // Version clasica con for
      if (
        USERS[i].user === inputUsuario.value &&
        USERS[i].password === inputPassword.value
      ) {
        validationOk = true;
        sessionStorage.setItem("usuario", "true");
      }
    }
    if (validationOk) {
      console.log("usuario habilitado");
      window.location = "./administracion.html";
    } else {
      mensajeDeLogin.style = "color:red ;font-weight:bold";
      mensajeDeLogin.innerHTML = "Usuario o contraseña incorrectos!";
      form.reset();
    }
  }, 2000);
};
