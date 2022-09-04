// ? --------------- Variables para posicionarse -----------------

const fila = document.querySelector('.m-contenedor-carousel');

const filaTerror = document.getElementById('contenedor-terror');

const peliculas = document.querySelectorAll('.m-pelicula');

const flechaIzquierda = document.getElementById('flecha-izq');

const flechaDerecha = document.getElementById('flecha-der');

const flechaIzquierdaTerror = document.getElementById('flecha-izquierda');

const flechaDerechaTerror = document.getElementById('flecha-derecha');

// ? --------------- Event Listener para la flecha derecha RECOMENDADAS -----------------
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
}); 
// ? --------------- Event Listener para la flecha izquierda RECOMENDADAS-----------------
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
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


// ? --------------- Event Listener para la flecha derecha TERROR -----------------
flechaDerechaTerror.addEventListener('click', () => {
    filaTerror.scrollLeft += filaTerror.offsetWidth;
}); 

//  ? --------------- Event Listener para la flecha izquierda TERROR -----------------
flechaIzquierdaTerror.addEventListener('click', () => {
    filaTerror.scrollLeft -= filaTerror.offsetWidth;
});