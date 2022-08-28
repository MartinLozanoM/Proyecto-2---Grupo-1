// obtengo el div modal
const modal = document.getElementById("loginModal");
// creo el div para contener el modal.
const contenidoModal = document.createElement("div");
// Le poongo clase al contenidoModal creado
contenidoModal.className = "modal-dialog tamañoModal-md";

// inyecto la estructura del contenidoModal
contenidoModal.innerHTML = `
<div class="modal-content">
<div class="modal-header">
  <img id="img_logoModal" src="./img/logoPeli (2).png" alt="logoModal"/>
  <h6 class="m-0">Rolling Movie</h6>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body" id= "divFormulario">
</div>
<div class="modal-footer">
<button type="button" id="botonEntrar" class="btn-entrar w-100">Entrar</button>
</div>
</div>
`;

// agrego al modal del html
modal.append(contenidoModal);

// creo el elemento <form> para que el usuario ingrese sus datos
const form = document.createElement("form");
const divForm = document.createElement("div"); /*contenedor del form*/
// agrego clases a divFor
divForm.className = "mb-3";

// creo modal para login
const login = () => {
  // inserto código al contenedor del form
  divForm.innerHTML = `<label for="usuario" class="form-label">Usuario</label>
  <input type="text" maxlength="20" class="form-control" id="usuario">
  <div class="mb-3">
    <label for="password_Usuario" class="form-label">Contraseña</label>
    <input type="password" maxlength="20" class="form-control" id="password_Usuario" aria-describedby="infoAUsuario">
    </div>
    <div id="infoAUsuario" class="infoUsuario-login">Recuperar contraseña</div>
  </div>
  `;
  // Inserto el contenedor al formulario.
  form.append(divForm);

  // obtengo el id del div del modal
  const modalFormulario = document.getElementById("divFormulario");
  // inserto en 'divFormulario' el form creado.
  modalFormulario.append(form);
};
