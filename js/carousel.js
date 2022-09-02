const fila = document.querySelector('.m-contenedor-carousel');
const peliculas = document.querySelectorAll('.m-pelicula');
const flechaIzquierda = document.getElementById('m-flecha-izq');
const flechaDerecha = document.getElementById('m-flecha-der');
const flechaIzquierda2 = document.getElementById('flecha-izq2');
const flechaDerecha2 = document.getElementById('flecha-der2');
// ? --------------- Event Listener para la flecha derecha -----------------
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.m-indicadores . activo');
    if (indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
}); 
// ? --------------- Event Listener para la flecha izquierda -----------------
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.m-indicadores . activo');
    if (indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});
// ? --------------- Paginacion -----------------
const numeroPaginas = Math.ceil(peliculas.length / 10);

for (let i = 0; i < numeroPaginas; i++) {
    const indicador = document.createElement('button');

    if (i === 0){
        indicador.classList.add('activo');
    }

    document.querySelector('.m-indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.m-indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo;')
    })
    }
// const mql1 = matchMedia('(min-width: 768px)')
// const mql2 = matchMedia('(min-width: 1024px)')
// const mql3 = matchMedia('(min-width: 1440px)')
//     if (mql1.matches) {
//         let numeroPaginas1 = Math.ceil(peliculas.length / 4);
//         } else if (mql2.matches) {
//         let numeroPaginas2 = Math.ceil(peliculas.length / 5);
//         } else if (mql3.matches) {
//         let numeroPaginas3 = Math.ceil(peliculas.length / 10);
//         }
//         else {
//             let numeroPaginas4 = Math.ceil(peliculas.length / 2);
//         }
// console.log(numeroPaginas1)
// ? --------------- Hover -----------------

peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    })
})

fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
})

// // ? --------------- Event Listener para la flecha derecha -----------------
// flechaDerecha2.addEventListener('click', () => {
//     fila.scrollLeft += fila.offsetWidth;

//     const indicadorActivo = document.querySelector('.m-indicadores . activo');
//     if (indicadorActivo.nextSibling){
//         indicadorActivo.nextSibling.classList.add('activo');
//         indicadorActivo.classList.remove('activo');
//     }
// }); 
// // ? --------------- Event Listener para la flecha izquierda -----------------
// flechaIzquierda2.addEventListener('click', () => {
//     fila.scrollLeft -= fila.offsetWidth;

//     const indicadorActivo = document.querySelector('.m-indicadores . activo');
//     if (indicadorActivo.previousSibling){
//         indicadorActivo.previousSibling.classList.add('activo');
//         indicadorActivo.classList.remove('activo');
//     }
// });