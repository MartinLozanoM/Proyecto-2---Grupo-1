// Inicializo la lista de PELICULAS
const PELICULAS = JSON.parse(localStorage.getItem("peliculas")) || [];

// obtengo contenedor main
const contenedor = document.getElementById("contenedor_admin");

// creo elementos para la grilla
const divFlexible = document.createElement("div");
const contenedorGrilla = document.createElement("div");
const grilla = document.createElement("table");
const encabezado_grilla = document.createElement("thead");
const cuerpo_grilla = document.createElement("tbody");

// creo el contenedor de botones y el  boton de insert
const contenedorBotonera = document.createElement("div");
const btn_nuevo = document.createElement("button");
// Agrego clases a la botonera
contenedorBotonera.className = "d-flex justify-content-end contenedorBotonera";
btn_nuevo.className = "botonNuevo";
btn_nuevo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>`;

// Agrego clases a la grilla
grilla.className =
  "table grilla table-striped table-hover table-bordered table-sm";
divFlexible.className = "contenedorFlexilla_grilla";
encabezado_grilla.className = "encabezado_grilla";
cuerpo_grilla.className = "cuerpo_grilla";
contenedorGrilla.className = "contenedorGrilla";

// inserto en los nodos creados:
// El encabezado siempre es fijo
encabezado_grilla.innerHTML = `    
<tr>
<th scope="col">Id</th>
<th scope="col">Pelicula</th>
<th scope="col">Categoria</th>
<th scope="col">Descripción</th>
<th scope="col"></th>
</tr>`;

/* <th scope="col">Publicado</th>
<th scope="col">Acciones</th> */

// Aquí inserto el cuerpo de la grilla con la información de las peliculas.
cuerpo_grilla.innerHTML = `
<tr>
<th scope="row"></th>
<td></td>
<td></td>
<td></td>
<td>
    <svg xmlns="http://www.w3.org/2000/svg" width="3" viewBox="0 0 128 512">
    <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
    <path d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"/>
    </svg>
</td>

</tr>
`;

// Agrego los nodos creados a la grilla
grilla.append(encabezado_grilla);
grilla.append(cuerpo_grilla);
contenedorBotonera.append(btn_nuevo); //agrego 'boton insert' en div botonera
contenedorGrilla.append(contenedorBotonera); //inserto div botonera
contenedorGrilla.append(grilla); //inserto la grilla en su contenedor
divFlexible.append(contenedorGrilla); //inserto el contenedor de grilla en el div flex
contenedor.append(divFlexible);
document.body.appendChild(contenedor);

// LOGICA PARA LA GRILLA
const cargarGrilla = () => {};
