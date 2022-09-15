// ! --------------- Recomendadas ------------------------
// ? --------------- Obtenemos el contenedor -----------------
const contenedorCarouselRecomendadas = document.getElementById(
  "contenedor-recomendadas"
);
// ? --------------- Creamos los elementos -----------------
const divCarouselRecomendadas = document.createElement("div");

// ? --------------- Agrego clases -----------------
divCarouselRecomendadas.className = "m-carousel";

for (let i = 1; i < 16; i++) {
  const divPelicula = document.createElement("div");
  divPelicula.className = "m-pelicula";
  divPelicula.innerHTML = `<a href="./error404.html"><img src="./img/imagenes slider/${i}.jpg" alt="pelicula"></a>`;
  divCarouselRecomendadas.appendChild(divPelicula);
}

contenedorCarouselRecomendadas.appendChild(divCarouselRecomendadas);

// ! --------------- Terror ------------------------
// ? --------------- Obtenemos el contenedor -----------------
const contenedorCarouselTerror = document.getElementById("contenedor-terror");
// ? --------------- Creamos los elementos -----------------
const divCarouselTerror = document.createElement("div");

// ? --------------- Agrego clases -----------------
divCarouselTerror.className = "m-carousel";

for (let i = 16; i < 31; i++) {
  const divPelicula = document.createElement("div");
  divPelicula.className = "m-pelicula";
  divPelicula.innerHTML = `<a href="./error404.html"><img src="./img/terror/${i}.jpg" alt="pelicula"></a>`;
  divCarouselTerror.appendChild(divPelicula);
}

contenedorCarouselTerror.appendChild(divCarouselTerror);

// ! --------------- Comedia ------------------------
// ? --------------- Obtenemos el contenedor -----------------
const contenedorCarouselComedia = document.getElementById("contenedor-comedia");
// ? --------------- Creamos los elementos -----------------
const divCarouselComedia = document.createElement("div");

// ? --------------- Agrego clases -----------------
divCarouselComedia.className = "m-carousel";

for (let i = 31; i < 46; i++) {
  const divPelicula = document.createElement("div");
  divPelicula.className = "m-pelicula";
  divPelicula.innerHTML = `<a href="./error404.html"><img src="./img/comedia/${i}.jpg" alt="pelicula"></a>`;
  divCarouselComedia.appendChild(divPelicula);
}

contenedorCarouselComedia.appendChild(divCarouselComedia);

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

  const indicadorActivo = document.querySelector(".m-indicadores .activo");
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add("activo");
    indicadorActivo.classList.remove("activo");
  }
});
// ? --------------- Event Listener para la flecha izquierda RECOMENDADAS-----------------
flechaIzquierda.addEventListener("click", () => {
  fila.scrollLeft -= fila.offsetWidth;

  const indicadorActivo = document.querySelector(".m-indicadores .activo");
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add("activo");
    indicadorActivo.classList.remove("activo");
  }
});
// ! --------------- Terror ------------------------
// ? --------------- Event Listener para la flecha derecha TERROR -----------------
flechaDerechaTerror.addEventListener("click", () => {
  filaTerror.scrollLeft += filaTerror.offsetWidth;

  const indicadorActivo = document.querySelector(
    ".m-indicadores-terror .activo"
  );
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add("activo");
    indicadorActivo.classList.remove("activo");
  }
});
//  ? --------------- Event Listener para la flecha izquierda TERROR -----------------
flechaIzquierdaTerror.addEventListener("click", () => {
  filaTerror.scrollLeft -= filaTerror.offsetWidth;

  const indicadorActivo = document.querySelector(
    ".m-indicadores-terror .activo"
  );
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add("activo");
    indicadorActivo.classList.remove("activo");
  }
});
// ! --------------- Comedia ------------------------
// ? --------------- Event Listener para la flecha derecha COMEDIA -----------------
flechaDerechaComedia.addEventListener("click", () => {
  filaComedia.scrollLeft += filaComedia.offsetWidth;

  const indicadorActivo = document.querySelector(
    ".m-indicadores-comedia .activo"
  );
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add("activo");
    indicadorActivo.classList.remove("activo");
  }
});
//  ? --------------- Event Listener para la flecha izquierda COMEDIA -----------------
flechaIzquierdaComedia.addEventListener("click", () => {
  filaComedia.scrollLeft -= filaComedia.offsetWidth;

  const indicadorActivo = document.querySelector(
    ".m-indicadores-comedia .activo"
  );
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add("activo");
    indicadorActivo.classList.remove("activo");
  }
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

function calcularPaginas() {
  let pag = 0;
  if (window.screen.availWidth <= 420) {
    pag = Math.ceil(peliculas.length / 2);
  } else if (window.screen.availWidth <= 820) {
    pag = Math.ceil(peliculas.length / 4);
  } else if (window.screen.availWidth <= 1600) {
    pag = Math.ceil(peliculas.length / 5);
  }

  const reiniciarBotones = document.querySelector(".m-indicadores");
  reiniciarBotones.innerHTML = "";

  for (let i = 0; i < pag; i++) {
    const indicador = document.createElement("button");

    if (i === 0) {
      indicador.classList.add("activo");
    }

    reiniciarBotones.appendChild(indicador);
    indicador.addEventListener("click", (e) => {
      fila.scrollLeft = i * fila.offsetWidth;

      document
        .querySelector(".m-indicadores .activo")
        .classList.remove("activo");
      e.target.classList.add("activo");
    });
  }
}

calcularPaginas();

// ! --------------- Terror ------------------------
function calcularPaginasTerror() {
  let pagTerror = 0;
  if (window.screen.availWidth <= 420) {
    pagTerror = Math.ceil(peliculasTerror.length / 2);
  } else if (window.screen.availWidth <= 820) {
    pagTerror = Math.ceil(peliculasTerror.length / 4);
  } else if (window.screen.availWidth <= 1600) {
    pagTerror = Math.ceil(peliculasTerror.length / 5);
  }

  const reiniciarBotones = document.querySelector(".m-indicadores-terror");
  reiniciarBotones.innerHTML = "";

  for (let i = 0; i < pagTerror; i++) {
    const indicador = document.createElement("button");

    if (i === 0) {
      indicador.classList.add("activo");
    }

    reiniciarBotones.appendChild(indicador);
    indicador.addEventListener("click", (e) => {
      filaTerror.scrollLeft = i * filaTerror.offsetWidth;

      document
        .querySelector(".m-indicadores-terror .activo")
        .classList.remove("activo");
      e.target.classList.add("activo");
    });
  }
}
calcularPaginasTerror();
// ! --------------- Comedia ------------------------
function calcularPaginasComedia() {
  let pagComedia = 0;
  if (window.screen.availWidth <= 420) {
    pagComedia = Math.ceil(peliculasComedia.length / 2);
  } else if (window.screen.availWidth <= 820) {
    pagComedia = Math.ceil(peliculasComedia.length / 4);
  } else if (window.screen.availWidth <= 1600) {
    pagComedia = Math.ceil(peliculasComedia.length / 5);
  }

  const reiniciarBotones = document.querySelector(".m-indicadores-comedia");
  reiniciarBotones.innerHTML = "";

  for (let i = 0; i < pagComedia; i++) {
    const indicador = document.createElement("button");

    if (i === 0) {
      indicador.classList.add("activo");
    }

    reiniciarBotones.appendChild(indicador);
    indicador.addEventListener("click", (e) => {
      filaComedia.scrollLeft = i * filaComedia.offsetWidth;

      document
        .querySelector(".m-indicadores-comedia .activo")
        .classList.remove("activo");
      e.target.classList.add("activo");
    });
  }
}
calcularPaginasComedia();
