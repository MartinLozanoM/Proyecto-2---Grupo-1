// Creo usuarios para comparar si el logueo es correcto o no
const USERS = [
  { user: "Martin", password: "martin" },
  { user: "valentina", password: "valentina" },
];

// obtengo el div modal de inicio sesion
const modal = document.getElementById("loginModal");
// creo el div para contener el modal.
const contenidoModal = document.createElement("div");
// Le poongo clase al contenidoModal creado
contenidoModal.className = "modal-dialog tamañoModal-md";

// inyecto la estructura del contenidoModal de inicio sesion
contenidoModal.innerHTML = `
<div class="modal-content">
<div class="modal-header">
  <img id="img_logoModal" src="./img/logoPeli (2).png" alt="logoModal"/>
  <h6 class="m-0">Rolling Movie</h6>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body p-3" id= "divFormulario"></div>
<div class="modal-footer" id="estadoDeLogueo"></div>
</div>
`;

// agrego al modal del html
modal.appendChild(contenidoModal);

// creo el elemento <form> para que el usuario ingrese sus datos
const form = document.createElement("form");
const divForm = document.createElement("div"); /*contenedor del form*/
// agrego clases a divFor
divForm.className = "mb-3";

// creo modal para login
const login = () => {
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
  // obtengo el id del div del modal
  const modalFormulario = document.getElementById("divFormulario");
  // inserto en 'divFormulario' el form creado.
  modalFormulario.append(form);
};

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
