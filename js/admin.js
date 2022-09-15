// Inicializo la lista de PELICULAS
const PELICULAS = JSON.parse(localStorage.getItem("peliculas")) || [];

// // INYECCION DE PELICULAS

// OBTENGO DIV PARA LOS CAROUSELES
const contenedorCarouselRecomendadas = document.getElementById(
  "contenedor-recomendadas"
);
const contenedorCarouselTerror = document.getElementById("contenedor-terror");
const contenedorCarouselComedia = document.getElementById("contenedor-comedia");

// Creo contenedor para corousel.
const divCarouselRecomendadas = document.createElement("div");
const divCarouselTerror = document.createElement("div");
const divCarouselComedia = document.createElement("div");

// Asigno clases a contenedor del carousel.
divCarouselRecomendadas.className = "m-carousel";
divCarouselTerror.className = "m-carousel";
divCarouselComedia.className = "m-carousel";

const cargar_PelisDestacadas = () => {
  let peliculas_Recomendadas = PELICULAS.filter((p) => p.categoria === "Todos");

  for (let i = 0; i < peliculas_Recomendadas.length; i++) {
    let pelicula = peliculas_Recomendadas[i];
    let divPelicula_r = document.createElement("div");
    divPelicula_r.className = "m-pelicula";
    divPelicula_r.innerHTML = `
  <a href="./error404.html"><img src="./img/imagenesSlider/${pelicula.urlDeImagen}" alt="pelicula"></a>`;
    divCarouselRecomendadas.append(divPelicula_r);
  }
  contenedorCarouselRecomendadas.appendChild(divCarouselRecomendadas);
};

const cargar_PelisTerror = () => {
  let peliculas_Terror = PELICULAS.filter((p) => p.categoria === "Terror");

  for (let i = 0; i < peliculas_Terror.length; i++) {
    let pelicula = peliculas_Terror[i];
    let divPelicula_t = document.createElement("div");
    divPelicula_t.className = "m-pelicula";
    divPelicula_t.innerHTML = `
    <a href="./error404.html"><img src="./img/terror/${pelicula.urlDeImagen}" alt="pelicula"></a>`;
    divCarouselTerror.append(divPelicula_t);
  }
  contenedorCarouselTerror.appendChild(divCarouselTerror);
};

const cargar_PelisComedia = () => {
  let peliculas_Comedia = PELICULAS.filter((p) => p.categoria === "Comedia");

  for (let i = 0; i < peliculas_Comedia.length; i++) {
    let pelicula = peliculas_Comedia[i];
    let divPelicula_c = document.createElement("div");
    divPelicula_c.className = "m-pelicula";
    divPelicula_c.innerHTML = `
    <a href="./error404.html"><img src="./img/comedia/${pelicula.urlDeImagen}" alt="pelicula"></a>`;
    divCarouselComedia.append(divPelicula_c);
  }
  contenedorCarouselComedia.appendChild(divCarouselComedia);
};

const actualizarCatalogo = () => {
  cargar_PelisDestacadas();
  cargar_PelisTerror();
  cargar_PelisComedia();
};

// // Plantilla de objeto pelicula
// const peli = {
//   id: 2,
//   nombre: "",
//   categoria: "",
//   descripcion: "",
//   urlDeImagen: "",
//   esDestacada: false,
// };

// obtengo contenedor main
const contenedor = document.getElementById("contenedor_admin");

// creo elementos para la grilla
const divFlexible = document.createElement("div");
const contenedorGrilla = document.createElement("div");
const grilla = document.createElement("table");
const encabezado_grilla = document.createElement("thead");
const cuerpo_grilla = document.createElement("tbody");

// const div_titulo = document.createElement("div");
// div_titulo.innerHTML = `<h2 id="titulo_admin">Adminitración de Peliculas</h2>`;

// creo el contenedor de botones y el  boton de insert
const contenedorBotonera = document.createElement("div");
const btn_new = document.createElement("button");
const btn_update = document.createElement("button");
const btn_delete = document.createElement("button");
const btn_destacada = document.createElement("button");
// Agrego clases a la botonera
contenedorBotonera.className = "d-flex justify-content-end contenedorBotonera";
btn_new.className = "botonNew";

//  <i class="bi bi-plus"></i> ICONS DE INSERT
btn_new.innerHTML = `AGREGAR`;

// Agrego clases a la grilla
grilla.className =
  "table grilla table-striped table-hover table-bordered border-dark table-sm";
divFlexible.className = "contenedorFlexilla_grilla";
encabezado_grilla.className = "encabezado_grilla";
cuerpo_grilla.className = "cuerpo_grilla";
contenedorGrilla.className = "contenedorGrilla";

// inserto en los nodos creados:
// El encabezado siempre es fijo
encabezado_grilla.innerHTML = `
<tr>
<th scope="col">Pelicula</th>
<th scope="col">Categoria</th>
<th scope="col"></th>
</tr>`;

// MODAL PARA INSERTAR PELI
const divModalAdmin_new = document.createElement("div");
divModalAdmin_new.className = "modal fade";
divModalAdmin_new.setAttribute("id", "modal_BtnNew");
divModalAdmin_new.setAttribute("data-bs-backdrop", "static");
divModalAdmin_new.setAttribute("data-bs-keyboard", "false");
divModalAdmin_new.setAttribute("tabindex", "-1");
divModalAdmin_new.setAttribute("aria-labelledby", "staticBackdropLabel");
divModalAdmin_new.setAttribute("aria-hidden", "true");

// le agrego los att para modal a el boton nuevo
btn_new.setAttribute("data-bs-toggle", "modal");
btn_new.setAttribute("data-bs-target", "#modal_BtnNew");
// modal de insert
divModalAdmin_new.innerHTML = `
<div class="modal-dialog">
<div class="modal-content content_modal">
  <div id="header_modal" class="modal-header">
    <img id="img_logoModal" src="./img/logoPeli (2).png" alt="logoModal"/>
    <h5 class="modal-title" id="staticBackdropLabel_2">Agregar Pelicula</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body body_Peliculas">
  <form class="row g-3  form_Admin needs-validation" novalidate>
      <div class="col-12 col-md-4">
        <label for="id_new" class="form-label">Id</label>
        <input type="number" id="id_new" class="form-control" placeholder="Id de pelicula" required>
        <div class="invalid-feedback">
          Por favor, eliga ID.
        </div>
        </div>
      <div class="col-12 col-md-8">
        <label for="nombre_new" class="form-label">Pelicula</label>
        <input type="text" class="form-control" id="nombre_new" placeholder="Ingresá nombre de la pelicula" required>
        <div class="invalid-feedback">
          Por favor, ingrese nombre.
        </div>
        </div>
      <div class="col-12 col-md-6">
        <label for="categoria_new" class="form-label">Categoria</label>
        <select class="form-select form-select-sm" id="categoria_new" required>
          <option selected>Ingrese categoria</option>
          <option value="Comedia">Comedia</option>
          <option value="Terror">Terror</option>
          <option value="Todos">Todos</option>
        </select>
        <div class="invalid-feedback">
          Por favor, ingrese una categoria válida.
        </div>
      </div>
      <div class="col-12 col-md-6 destacada">
        <label for="destacar_new" class="form-check-label">Pelicula destacada
        <input type="checkbox" class="form-check-input" id="destacar_new">
        </label>
      </div>
      <div class="col-12">
        <label for="descripcion_new" class="form-label">Descripción</label>
        <textarea class="form-control" id="descripcion_new" rows="3" placeholder="Ingresá descripción"
        required>
        </textarea>
        <div class="invalid-feedback">
          Por favor, ingrese una descripción.
        </div>
      </div>
      <div class="col-12">
        <label for="url_imagen_edit_new" class="form-label">Url de Imagen</label>
        <input type="text" class="form-control" id="url_imagen_edit_new" placeholder="Ingresá url de imagen" required>
        <div class="invalid-feedback">
          Por favor, ingrese URL de Imagén.
        </div>
      </div>
    </form>
  </div>
  <div class="modal-footer">
    <button onClick="agregarPelicula()" type="submit" class="btn_modal_admin">Confirmar</button>
    <button type="button" class="btn_modal_admin" data-bs-dismiss="modal">Cancelar</button>
  </div>
</div>
</div>
`;

// MODAL PARA ACTUALIZAR PELI
const divModalAdmin_upd = document.createElement("div");
divModalAdmin_upd.className = "modal fade";
divModalAdmin_upd.setAttribute("id", "modal_BtnUpdate");
divModalAdmin_upd.setAttribute("data-bs-backdrop", "static");
divModalAdmin_upd.setAttribute("data-bs-keyboard", "false");
divModalAdmin_upd.setAttribute("tabindex", "-1");
divModalAdmin_upd.setAttribute("aria-labelledby", "staticBackdropLabel_2");
divModalAdmin_upd.setAttribute("aria-hidden", "true");

// modal de update
divModalAdmin_upd.innerHTML = `
<div class="modal-dialog">
<div class="modal-content content_modal">
  <div id="header_modal" class="modal-header">
    <img id="img_logoModal" src="./img/logoPeli (2).png" alt="logoModal"/>
    <h5 class="modal-title" id="staticBackdropLabel">Editar Pelicula</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body body_Peliculas">
  <form class="row g-3 needs-validation form_Admin" novalidate>
      <div class="col-12 col-md-4">
        <label for="id_edit" class="form-label">ID</label>
        <input type="number" id="id_edit" class="form-control" placeholder="Id de pelicula" required>
          <div class="invalid-feedback">
          Por favor, eliga un ID.
          </div>
        </div>
      <div class="col-12 col-md-8">
        <label for="pelicula_edit" class="form-label">Pelicula</label>
        <input type="text" class="form-control" id="pelicula_edit" placeholder="Ingresá nombre de la pelicula" required>
          <div class="invalid-feedback">
          Por favor, ingrese un nombre.
          </div>
      </div>
      <div class="col-12 col-md-6">
        <label for="categoria_edit" class="form-label">Categoria</label>
        <select class="form-select form-select-sm" id="categoria_edit" required>
        <option selected>Ingrese categoria</option>
        <option value="Comedia">Comedia</option>
        <option value="Terror">Terror</option>
        <option value="Todos">Todos</option>
        </select>
          <div class="invalid-feedback">
          Por favor, eliga un categoria válida.
          </div>
      </div>
      <div class="col-12 col-md-6 destacada">
        <label for="destacar_edit" class="form-check-label">Pelicula destacada
        <input type="checkbox" class="form-check-input" id="destacar_edit">
        </label>
      </div>
      <div class="col-12">
        <label for="descripcion_edit" class="form-label">Descripción</label>
        <textarea class="form-control" id="descripcion_edit" rows="3" placeholder="Ingresá descripción"
        required>
        </textarea>
          <div class="invalid-feedback">
          Por favor, ingrese un descripción.
          </div>
      </div>
      <div class="col-12">
      <label for="url_imagen_edit" class="form-label">Url de Imagen</label>
      <input type="text" class="form-control" id="url_imagen_edit" placeholder="Ingresá url de imagen" required>
        <div class="invalid-feedback">
        Por favor, ingrese URL de imagén.
        </div>
      </div>
    </form>
  </div>
  <div class="modal-footer">
    <button type="submit" id="guardarCambios_upd" class="btn_modal_admin">Guardar</button>
    <button type="button" class="btn_modal_admin" data-bs-dismiss="modal">Cancelar</button>
  </div>
</div>
</div>
`;

// Agrego los nodos creados a la grilla
grilla.append(encabezado_grilla);
grilla.append(cuerpo_grilla);
contenedorBotonera.append(btn_new); //agrego 'boton insert' en div botonera
contenedorGrilla.append(divModalAdmin_new);
contenedorGrilla.append(divModalAdmin_upd);
contenedorGrilla.append(contenedorBotonera); //inserto div botonera
contenedorGrilla.append(grilla); //inserto la grilla en su contenedor
divFlexible.append(contenedorGrilla); //inserto el contenedor de grilla en el div flex
// contenedor.append(div_titulo);
contenedor.append(divFlexible);

// LOGICA PARA LA GRILLA
const cargarGrilla = () => {
  cuerpo_grilla.innerHTML = "";
  PELICULAS.forEach((p) => {
    let fila = document.createElement("tr");
    fila.innerHTML = `
    <td>${p.nombre}</td>
    <td>${p.categoria}</td>
    <td>
      <div class="actions">
      <a id="editar${p.id}"type="button"
        data-bs-toggle="modal" data-bs-target="#modal_BtnUpdate" >
        <i class="bi bi-pencil-square"></i>
      </a>
      <a id="eliminar${p.id}" type="button">
        <i class="bi bi-trash-fill"></i>
      </a>
      <i class="bi bi-bookmark-star"></i>
      </div>
    </td>
    `;
    cuerpo_grilla.appendChild(fila);
    let buttonEliminar = document
      .getElementById(`eliminar${p.id}`)
      .addEventListener("click", () => eliminarPelicula(p));
    let buttonActualizar = document
      .getElementById(`editar${p.id}`)
      .addEventListener("click", () => editarPelicula(p));
  });
  actualizarCatalogo();
};

cargarGrilla();

const editarPelicula = (pelicula) => {
  // Selecciono los input del modal de update
  const editId = document.getElementById("id_edit");
  const editName = document.getElementById("pelicula_edit");
  const editCategoria = document.getElementById("categoria_edit");
  const editDestacada = document.getElementById("destacar_edit");
  const editDescripcion = document.getElementById("descripcion_edit");
  const editUrl = document.getElementById("url_imagen_edit");
  // Completo el modal
  editId.value = pelicula.id;
  editName.value = pelicula.nombre;
  editCategoria.value = pelicula.categoria;
  editDestacada.value = pelicula.esDestacada;
  editDescripcion.value = pelicula.descripcion;
  editUrl.value = pelicula.urlDeImagen;

  let botonGuardar = document.getElementById("guardarCambios_upd");
  botonGuardar.addEventListener("click", () => {
    let peli = {
      id: editId.value,
      nombre: editName.value,
      categoria: editCategoria.value,
      descripcion: editDescripcion.value,
      urlDeImagen: url_imagen_edit_new.value,
      esDestacada: editUrl.value,
    };
    // Elimino la pelicula con datos viejos
    eliminarPelicula(pelicula);
    // Agrego pelicula actualizada a la lista
    PELICULAS.push(peli);
    // Agrego lista actualizada al local storage
    localStorage.setItem("peliculas", JSON.stringify(PELICULAS));

    cargarGrilla(); //actualizo la grilla
  });
};

const agregarPelicula = () => {
  // capturar datos de los input y crear objeto de pelicula
  let peli = {
    id: id_new.value,
    nombre: nombre_new.value,
    categoria: categoria_new.value,
    descripcion: descripcion_new.value,
    urlDeImagen: url_imagen_edit_new.value,
    esDestacada: destacar_new.value,
  };

  PELICULAS.push(peli);
  localStorage.setItem("peliculas", JSON.stringify(PELICULAS));

  // seteo los input.
  id_new.value = "";
  nombre_new.value = "";
  categoria_new.value = "";
  descripcion_new.value = "";
  url_imagen_edit_new.value = "";
  destacar_new.value = "";

  // actualizar grilla
  cargarGrilla();

  // cerrar el modal y tirar mensaje de error
};

const eliminarPelicula = (pelicula) => {
  const index = PELICULAS.indexOf(pelicula);
  PELICULAS.splice(index, 1);
  localStorage.setItem("peliculas", JSON.stringify(PELICULAS));
  cargarGrilla();
};
