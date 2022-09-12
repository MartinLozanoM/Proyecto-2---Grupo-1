// Inicializo la lista de PELICULAS
const PELICULAS = JSON.parse(localStorage.getItem("peliculas")) || [];

// Plantilla de objeto pelicula
const peli = {
  id: 2,
  nombre: "",
  categoria: "",
  descripcion: "",
  urlDeImagen: "",
  esDestacada: false,
};

const listaPeliculas = [
  // INICIO PELICULAS DE COMEDIA
  {
    id: 1,
    nombre: "La Mascara",
    categoria: "Comedia",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/comedia/31.jpg",
    esDestacada: false,
  },
  {
    id: 2,
    nombre: "La Mascara",
    categoria: "Comedia",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/comedia/32.jpg",
    esDestacada: false,
  },
  {
    id: 3,
    nombre: "La Mascara",
    categoria: "Comedia",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/comedia/33.jpg",
    esDestacada: false,
  },
  {
    id: 4,
    nombre: "La Mascara",
    categoria: "Comedia",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/comedia/34.jpg",
    esDestacada: false,
  },
  {
    id: 5,
    nombre: "La Mascara",
    categoria: "Comedia",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/comedia/35.jpg",
    esDestacada: false,
  },
  {
    id: 6,
    nombre: "La Mascara",
    categoria: "Comedia",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/comedia/36.jpg",
    esDestacada: false,
  },
  {
    id: 7,
    nombre: "La Mascara",
    categoria: "Comedia",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/comedia/37.jpg",
    esDestacada: false,
  },
  {
    id: 8,
    nombre: "La Mascara",
    categoria: "Comedia",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/comedia/38.jpg",
    esDestacada: false,
  },
  {
    id: 9,
    nombre: "La Mascara",
    categoria: "Comedia",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/comedia/39.jpg",
    esDestacada: false,
  },
  {
    id: 10,
    nombre: "La Mascara",
    categoria: "Comedia",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/comedia/40.jpg",
    esDestacada: false,
  },
  {
    id: 11,
    nombre: "La Mascara",
    categoria: "Comedia",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/comedia/41.jpg",
    esDestacada: false,
  },
  {
    id: 12,
    nombre: "La Mascara",
    categoria: "Comedia",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/comedia/42.jpg",
    esDestacada: false,
  },
  {
    id: 13,
    nombre: "La Mascara",
    categoria: "Comedia",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/comedia/43.jpg",
    esDestacada: false,
  },
  {
    id: 14,
    nombre: "La Mascara",
    categoria: "Comedia",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/comedia/44.jpg",
    esDestacada: false,
  },
  {
    id: 15,
    nombre: "La Mascara",
    categoria: "Comedia",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/comedia/45.jpg",
    esDestacada: false,
  },
  // FIN PELICULAS DE COMEDIA
  // INICIO PELICULAS SLIDER
  {
    id: 16,
    nombre: "La Mascara",
    categoria: "Todos",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/imagenes slider/1.jpg",
    esDestacada: false,
  },
  {
    id: 17,
    nombre: "La Mascara",
    categoria: "Todos",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/imagenes slider/2.jpg",
    esDestacada: false,
  },
  {
    id: 18,
    nombre: "La Mascara",
    categoria: "Todos",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/imagenes slider/3.jpg",
    esDestacada: false,
  },
  {
    id: 19,
    nombre: "La Mascara",
    categoria: "Todos",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/imagenes slider/4.jpg",
    esDestacada: false,
  },
  {
    id: 20,
    nombre: "La Mascara",
    categoria: "Todos",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/imagenes slider/5.jpg",
    esDestacada: false,
  },
  {
    id: 21,
    nombre: "La Mascara",
    categoria: "Todos",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/imagenes slider/6.jpg",
    esDestacada: false,
  },
  {
    id: 22,
    nombre: "La Mascara",
    categoria: "Todos",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/imagenes slider/7.jpg",
    esDestacada: false,
  },
  {
    id: 23,
    nombre: "La Mascara",
    categoria: "Todos",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/imagenes slider/8.jpg",
    esDestacada: false,
  },
  {
    id: 24,
    nombre: "La Mascara",
    categoria: "Todos",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/imagenes slider/9.jpg",
    esDestacada: false,
  },
  {
    id: 25,
    nombre: "La Mascara",
    categoria: "Todos",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/imagenes slider/10.jpg",
    esDestacada: false,
  },
  {
    id: 26,
    nombre: "La Mascara",
    categoria: "Todos",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/imagenes slider/11.jpg",
    esDestacada: false,
  },
  {
    id: 27,
    nombre: "La Mascara",
    categoria: "Todos",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/imagenes slider/12.jpg",
    esDestacada: false,
  },
  {
    id: 28,
    nombre: "La Mascara",
    categoria: "Todos",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/imagenes slider/13.jpg",
    esDestacada: false,
  },
  {
    id: 29,
    nombre: "La Mascara",
    categoria: "Todos",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/imagenes slider/14.jpg",
    esDestacada: false,
  },
  {
    id: 30,
    nombre: "La Mascara",
    categoria: "Todos",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/imagenes slider/15.jpg",
    esDestacada: false,
  },
  // FIN PELICULAS SLIDER
  // INICIO PELICULAS DE TERROR
  {
    id: 31,
    nombre: "La Mascara",
    categoria: "Terror",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/terror/16.jpg",
    esDestacada: false,
  },
  {
    id: 32,
    nombre: "La Mascara",
    categoria: "Terror",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/terror/17.jpg",
    esDestacada: false,
  },
  {
    id: 33,
    nombre: "La Mascara",
    categoria: "Terror",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/terror/18.jpg",
    esDestacada: false,
  },
  {
    id: 34,
    nombre: "La Mascara",
    categoria: "Terror",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/terror/19.jpg",
    esDestacada: false,
  },
  {
    id: 35,
    nombre: "La Mascara",
    categoria: "Terror",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/terror/20.jpg",
    esDestacada: false,
  },
  {
    id: 36,
    nombre: "La Mascara",
    categoria: "Terror",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/terror/21.jpg",
    esDestacada: false,
  },
  {
    id: 37,
    nombre: "La Mascara",
    categoria: "Terror",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/terror/22.jpg",
    esDestacada: false,
  },
  {
    id: 38,
    nombre: "La Mascara",
    categoria: "Terror",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/terror/23.jpg",
    esDestacada: false,
  },
  {
    id: 39,
    nombre: "La Mascara",
    categoria: "Terror",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/terror/24.jpg",
    esDestacada: false,
  },
  {
    id: 40,
    nombre: "La Mascara",
    categoria: "Terror",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/terror/25.jpg",
    esDestacada: false,
  },
  {
    id: 41,
    nombre: "La Mascara",
    categoria: "Terror",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/terror/26.jpg",
    esDestacada: false,
  },
  {
    id: 42,
    nombre: "La Mascara",
    categoria: "Terror",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/terror/27.jpg",
    esDestacada: false,
  },
  {
    id: 43,
    nombre: "La Mascara",
    categoria: "Terror",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/terror/28.jpg",
    esDestacada: false,
  },
  {
    id: 44,
    nombre: "La Mascara",
    categoria: "Terror",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/terror/29.jpg",
    esDestacada: false,
  },
  {
    id: 45,
    nombre: "La Mascara",
    categoria: "Terror",
    descripcion:
      "Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
    urlDeImagen: "./img/terror/30.jpg",
    esDestacada: false,
  },
  // FIN PELICULAS DE TERROR
];

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
</tr>`;

/* <th scope="col">Publicado</th>
<th scope="col">Acciones</th> */

// Agrego los nodos creados a la grilla
grilla.append(encabezado_grilla);
grilla.append(cuerpo_grilla);
contenedorBotonera.append(btn_nuevo); //agrego 'boton insert' en div botonera
contenedorGrilla.append(contenedorBotonera); //inserto div botonera
contenedorGrilla.append(grilla); //inserto la grilla en su contenedor
divFlexible.append(contenedorGrilla); //inserto el contenedor de grilla en el div flex
contenedor.appendChild(divFlexible);
// document.body.appendChild(contenedor);

// LOGICA PARA LA GRILLA
const cargarGrilla = () => {
  listaPeliculas.forEach((p) => {
    let fila = document.createElement("tr");
    fila.innerHTML = `
    <th scope="row">${p.id}</th>
    <td>${p.nombre}</td>
    <td>${p.categoria}</td>
    `;
    cuerpo_grilla.appendChild(fila);
  });
};

cargarGrilla();
