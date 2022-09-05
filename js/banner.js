// obtengo div del banner
const banner = document.getElementById("contenedor-banner");

// creo los elementos necesarios
const titulo = document.createElement("div");
const descripcion = document.createElement("div");
const botonera = document.createElement("div");
const botonReproducir = document.createElement("div");
const botonVerMas = document.createElement("div");
// le doy estilos
titulo.className = "banner-titulo";
descripcion.className = "banner-descripcion desc-corta";
botonera.className = "banner-botonera";
botonReproducir.className = "botones";
botonVerMas.className = "botones btn-VerMas";
botonera.append(botonReproducir);
botonera.append(botonVerMas);

banner.append(titulo);
banner.append(descripcion);
banner.append(botonera);

// inyeccion de còdigo va a hacer con el array de peliculas,
// la destacada tendra que estar aqui

titulo.innerHTML = `LA DESPEDIDA`;
descripcion.innerHTML = `La pareja de Henry y Ana, viajan a una excursión pero no sabian que ese viaje tendria que ver por la sorpresiva despedida.
Habra cruces entre ex parejas, ¿Coincidencia o Planificado?`;
botonReproducir.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg> Reproducir`;

botonVerMas.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg> Mas Informaciòn`;
