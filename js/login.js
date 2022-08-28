// obtengo el div para crear modal
const modal = document.getElementById("modal_login");
const contenidoModal = document.createElement("div");

// obtengo el boton "inicio sesion" para capturar el click
// const botonLogin = document
//   .getElementById("login")
//   .addEventListener("click", () => login());

// inyecto el modal
contenidoModal.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      ...
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>`;

// creo modal para login
const login = () => {
  console.log("login");
};
