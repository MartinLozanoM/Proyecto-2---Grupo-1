// // ! --------------- Recomendadas ------------------------
// // ? --------------- Obtenemos el contenedor -----------------
// const contenedorCarouselRecomendadas = document.getElementById(
//   "contenedor-recomendadas"
// );
// // ? --------------- Creamos los elementos -----------------
// const divCarouselRecomendadas = document.createElement("div");

// // ? --------------- Agrego clases -----------------
// divCarouselRecomendadas.className = "m-carousel";

// // obtengo array de las peliculas recomendadas -'Todos'
// const listaPeliculas = JSON.parse(localStorage.getItem("peliculas"));

// const peliculas_Recomendadas = listaPeliculas.filter(
//   (p) => (p.categoria = "Todos")
// );

// peliculas_Recomendadas.forEach((peli) => {
//   const divPelicula = document.createElement("div");
//   divPelicula.className = "m-pelicula";
//   divPelicula.innerHTML = `<a href="./error404.html"><img src="${peli.urlDeImagen}" alt="pelicula_${peli.nombre}"></a>`;
//   divCarouselRecomendadas.appendChild(divPelicula);
// });

// contenedorCarouselRecomendadas.appendChild(divCarouselRecomendadas);

// // for (let i = 1; i < 16; i++) {
// //   const divPelicula = document.createElement("div");
// //   divPelicula.className = "m-pelicula";
// //   divPelicula.innerHTML = `<a href="./error404.html"><img src="./img/imagenes slider/${i}.jpg" alt="pelicula"></a>`;
// //   divCarouselRecomendadas.appendChild(divPelicula);
// // }

// // ! --------------- Terror ------------------------
// // ? --------------- Obtenemos el contenedor -----------------
// const contenedorCarouselTerror = document.getElementById("contenedor-terror");
// // ? --------------- Creamos los elementos -----------------
// const divCarouselTerror = document.createElement("div");

// // ? --------------- Agrego clases -----------------
// // Obtengo lista de peliculas de terror que tengo
// const peliculas_Terror = listaPeliculas.filter((p) => (p.categoria = "Terror"));

// divCarouselTerror.className = "m-carousel";

// peliculas_Terror.forEach((peli) => {
//   const divPelicula = document.createElement("div");
//   divPelicula.className = "m-pelicula";
//   divPelicula.innerHTML = `<a href="./error404.html"><img src="${peli.urlDeImagen}" alt="pelicula_${peli.nombre}"></a>`;
//   divCarouselRecomendadas.appendChild(divPelicula);
// });

// contenedorCarouselTerror.appendChild(divCarouselTerror);

// for (let i = 16; i < 31; i++) {
//   const divPelicula = document.createElement("div");
//   divPelicula.className = "m-pelicula";
//   divPelicula.innerHTML = `<a href="./error404.html"><img src="./img/terror/${i}.jpg" alt="pelicula"></a>`;
//   divCarouselTerror.appendChild(divPelicula);
// }

// // ! --------------- Comedia ------------------------
// // ? --------------- Obtenemos el contenedor -----------------
// const contenedorCarouselComedia = document.getElementById("contenedor-comedia");
// // ? --------------- Creamos los elementos -----------------
// const divCarouselComedia = document.createElement("div");

// // ? --------------- Agrego clases -----------------
// // Obtengo lista de peliculas de comedia que tengo.
// const peliculas_Comedia = listaPeliculas.filter(
//   (p) => (p.categoria = "Comedia")
// );

// divCarouselComedia.className = "m-carousel";

// peliculas_Comedia.forEach((peli) => {
//   const divPelicula = document.createElement("div");
//   divPelicula.className = "m-pelicula";
//   divPelicula.innerHTML = `<a href="./error404.html"><img src="${peli.urlDeImagen}" alt="pelicula_${peli.nombre}"></a>`;
//   divCarouselRecomendadas.appendChild(divPelicula);
// });

// contenedorCarouselComedia.appendChild(divCarouselComedia);

// for (let i = 31; i < 45; i++) {
//   const divPelicula = document.createElement("div");
//   divPelicula.className = "m-pelicula";
//   divPelicula.innerHTML = `<a href="./error404.html"><img src="./img/comedia/${i}.jpg" alt="pelicula"></a>`;
//   divCarouselComedia.appendChild(divPelicula);
// }

// ? --------------- Variables para posicionarse -----------------

const fila = document.getElementById("contenedor-recomendadas");

const filaTerror = document.getElementById("contenedor-terror");

const filaComedia = document.getElementById("contenedor-comedia");

const peliculas = document.querySelectorAll(".recomendadas .m-pelicula");

const peliculasTerror = document.querySelectorAll(".terror .m-pelicula");

const peliculasComedia = document.querySelectorAll(".comedia .m-pelicula");

const flechaIzquierda = document.getElementById("flecha-izq");

const flechaDerecha = document.getElementById("flecha-der");

const flechaIzquierdaTerror = document.getElementById("flecha-izq-terror");

const flechaDerechaTerror = document.getElementById("flecha-der-terror");

const flechaIzquierdaComedia = document.getElementById("flecha-izq-comedia");

const flechaDerechaComedia = document.getElementById("flecha-der-comedia");

// ! --------------- Recomendadas ------------------------
// ? --------------- Event Listener para la flecha derecha RECOMENDADAS -----------------
flechaDerecha.addEventListener("click", () => {
  fila.scrollLeft += fila.offsetWidth;
});
// ? --------------- Event Listener para la flecha izquierda RECOMENDADAS-----------------
flechaIzquierda.addEventListener("click", () => {
  fila.scrollLeft -= fila.offsetWidth;
});
// ! --------------- Terror ------------------------
// ? --------------- Event Listener para la flecha derecha TERROR -----------------
flechaDerechaTerror.addEventListener("click", () => {
  filaTerror.scrollLeft += filaTerror.offsetWidth;
});
//  ? --------------- Event Listener para la flecha izquierda TERROR -----------------
flechaIzquierdaTerror.addEventListener("click", () => {
  filaTerror.scrollLeft -= filaTerror.offsetWidth;
});
// ! --------------- Comedia ------------------------
// ? --------------- Event Listener para la flecha derecha COMEDIA -----------------
flechaDerechaComedia.addEventListener("click", () => {
  filaComedia.scrollLeft += filaComedia.offsetWidth;
});
//  ? --------------- Event Listener para la flecha izquierda COMEDIA -----------------
flechaIzquierdaComedia.addEventListener("click", () => {
  filaComedia.scrollLeft -= filaComedia.offsetWidth;
});

// ? --------------- Paginacion -----------------

// let calcularPagina = () => {
//   const numeroPaginasPrueba = 0;
//   if (window.screen.width === 320) {
//     numeroPaginasPrueba = Math.ceil(peliculas.length / 2);
//   } else if (window.screen.width === 768) {
//     numeroPaginasPrueba = Math.ceil(peliculas.length / 4);
//   } else if (window.screen.width === 1024) {
//     numeroPaginasPrueba = Math.ceil(peliculas.length / 10);
//   }

//   for (let i = 0; i < numeroPaginasPrueba; i++) {
//     const indicador = document.createElement("button");

//     if (i === 0) {
//       indicador.classList.add("activo");
//     }

//     document.querySelector(".m-indicadores").appendChild(indicador);
//     indicador.addEventListener("click", (e) => {
//       fila.scrollLeft = i * fila.offsetWidth;

//       document
//         .querySelector(".m-indicadores .activo")
//         .classList.remove("activo");
//       e.target.classList.add("activo");
//     });
//   }
//   return numeroPaginasPrueba;
// };
// ! --------------- Recomendadas ------------------------
let numeroPaginasRecomendadas = 0;
if (window.screen.availWidth === 320) {
  numeroPaginasRecomendadas = Math.ceil(peliculas.length / 2);
} else if (window.screen.availWidth === 768) {
  numeroPaginasRecomendadas = Math.ceil(peliculas.length / 4);
} else if (window.screen.availWidth === 1024) {
  numeroPaginasRecomendadas = Math.ceil(peliculas.length / 5);
}

for (let i = 0; i < numeroPaginasRecomendadas; i++) {
  const indicador = document.createElement("button");

  if (i === 0) {
    indicador.classList.add("activo");
  }

  document.querySelector(".m-indicadores").appendChild(indicador);
  indicador.addEventListener("click", (e) => {
    fila.scrollLeft = i * fila.offsetWidth;

    document.querySelector(".m-indicadores .activo").classList.remove("activo");
    e.target.classList.add("activo");
  });
}
// ! --------------- Terror ------------------------
let numeroPaginasTerror = 0;

if (window.screen.availWidth === 320) {
  numeroPaginasTerror = Math.ceil(peliculasTerror.length / 2);
} else if (window.screen.availWidth === 768) {
  numeroPaginasTerror = Math.ceil(peliculasTerror.length / 4);
} else if (window.screen.availWidth === 1024) {
  numeroPaginasTerror = Math.ceil(peliculasTerror.length / 5);
}

for (let i = 0; i < numeroPaginasTerror; i++) {
  const indicador = document.createElement("button");

  if (i === 0) {
    indicador.classList.add("activo");
  }

  document.querySelector(".m-indicadores-terror").appendChild(indicador);
  indicador.addEventListener("click", (e) => {
    filaTerror.scrollLeft = i * filaTerror.offsetWidth;

    document
      .querySelector(".m-indicadores-terror .activo")
      .classList.remove("activo");
    e.target.classList.add("activo");
  });
}
// ! --------------- Comedia ------------------------
let numeroPaginasComedia = 0;

if (window.screen.availWidth === 320) {
  numeroPaginasComedia = Math.ceil(peliculasComedia.length / 2);
} else if (window.screen.availWidth === 768) {
  numeroPaginasComedia = Math.ceil(peliculasComedia.length / 4);
} else if (window.screen.availWidth === 1024) {
  numeroPaginasComedia = Math.ceil(peliculasComedia.length / 5);
}

for (let i = 0; i < numeroPaginasComedia; i++) {
  const indicador = document.createElement("button");

  if (i === 0) {
    indicador.classList.add("activo");
  }

  document.querySelector(".m-indicadores-comedia").appendChild(indicador);
  indicador.addEventListener("click", (e) => {
    filaComedia.scrollLeft = i * filaComedia.offsetWidth;

    document
      .querySelector(".m-indicadores-comedia .activo")
      .classList.remove("activo");
    e.target.classList.add("activo");
  });
}
// // ? --------------- Hover -----------------
// // ! --------------- Recomendadas ------------------------
// peliculas.forEach((pelicula) => {
//   pelicula.addEventListener("mouseenter", (e) => {
//     const elemento = e.currentTarget;
//     setTimeout(() => {
//       peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
//       elemento.classList.add("hover");
//     }, 300);
//   });
// });
// fila.addEventListener("mouseleave", () => {
//   peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
// });
// // ! --------------- Terror ------------------------
// peliculasTerror.forEach((pelicula) => {
//   pelicula.addEventListener("mouseenter", (e) => {
//     const elemento = e.currentTarget;
//     setTimeout(() => {
//       peliculasTerror.forEach((pelicula) => pelicula.classList.remove("hover"));
//       elemento.classList.add("hover");
//     }, 300);
//   });
// });
// filaTerror.addEventListener("mouseleave", () => {
//   peliculasTerror.forEach((pelicula) => pelicula.classList.remove("hover"));
// });
// // ! --------------- Comedia ------------------------
// peliculasComedia.forEach((pelicula) => {
//   pelicula.addEventListener("mouseenter", (e) => {
//     const elemento = e.currentTarget;
//     setTimeout(() => {
//       peliculasComedia.forEach((pelicula) =>
//         pelicula.classList.remove("hover")
//       );
//       elemento.classList.add("hover");
//     }, 300);
//   });
// });
// filaComedia.addEventListener("mouseleave", () => {
//   peliculasComedia.forEach((pelicula) => pelicula.classList.remove("hover"));
// });
