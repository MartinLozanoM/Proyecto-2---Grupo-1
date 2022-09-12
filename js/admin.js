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
    nombre: "Los fockers: la familia de mi novio",
    categoria: "Comedia",
    descripcion:
      "Un hombre teme lo peor cuando acompaña a los conservadores padres de su prometida a que conozcan a sus liberales padres.",
    urlDeImagen: "./img/comedia/32.jpg",
    esDestacada: false,
  },
  {
    id: 3,
    nombre: "Escuela de Rock",
    categoria: "Comedia",
    descripcion:
      "Despedido por su banda y en problemas económicos, un guitarrista desempleado se hace pasar por maestro en una escuela.",
    urlDeImagen: "./img/comedia/33.jpg",
    esDestacada: false,
  },
  {
    id: 4,
    nombre: "Ace Ventura, un detective diferente",
    categoria: "Comedia",
    descripcion:
      "Un detective torpe descubre algo más que un simple secuestro cuando busca a la mascota desaparecida de los Miami Dolphins.",
    urlDeImagen: "./img/comedia/34.jpg",
    esDestacada: false,
  },
  {
    id: 5,
    nombre: "La gran aventura de Pee Wee",
    categoria: "Comedia",
    descripcion:
      "Para recuperar su bicicleta, Pee-wee Herman emprende una odisea que lo lleva desde San Antonio a Burbank.",
    urlDeImagen: "./img/comedia/35.jpg",
    esDestacada: false,
  },
  {
    id: 6,
    nombre: "El mundo segun Wayne",
    categoria: "Comedia",
    descripcion:
      "Wayne y Garth son dos alocados amigos que tienen su propio programa de televisión. Un día, un importante productor les ofrece un contrato para que trabajen en su cadena. Sin embargo, el camino hacia el éxito está lleno de peligros.",
    urlDeImagen: "./img/comedia/36.jpg",
    esDestacada: false,
  },
  {
    id: 7,
    nombre: "Papa por siempre",
    categoria: "Comedia",
    descripcion:
      "Luego de divorciarse, un actor sin trabajo se disfraza de niñera anciana para pasar más tiempo con su familia.",
    urlDeImagen: "./img/comedia/37.jpg",
    esDestacada: false,
  },
  {
    id: 8,
    nombre: "El rey de la comedia",
    categoria: "Comedia",
    descripcion:
      "Un aspirante a cómico busca la ayuda del mejor presentador de los Estados Unidos. Sin embargo, cuando la estrella no coopera, decide secuestrarlo.",
    urlDeImagen: "./img/comedia/38.jpg",
    esDestacada: false,
  },
  {
    id: 9,
    nombre: "Austin Powers",
    categoria: "Comedia",
    descripcion:
      "El agente secreto viaja en el tiempo a los años sesenta para rescatar el mojo que le robó el doctor Evil.",
    urlDeImagen: "./img/comedia/39.jpg",
    esDestacada: false,
  },
  {
    id: 10,
    nombre: "Napoleon dinamita",
    categoria: "Comedia",
    descripcion:
      "Napoleon es un adolescente excéntrico que apenas tiene amigos. Su vida empeora aún más cuando su abuelo tiene un accidente y su tío acude para cuidarlo.",
    urlDeImagen: "./img/comedia/40.jpg",
    esDestacada: false,
  },
  {
    id: 11,
    nombre: "Un principe en New York",
    categoria: "Comedia",
    descripcion:
      "Un príncipe africano viaja a Nueva York y elige el condado llamado Queens como lugar ideal para conseguir una esposa.",
    urlDeImagen: "./img/comedia/41.jpg",
    esDestacada: false,
  },
  {
    id: 12,
    nombre: "Zoolander",
    categoria: "Comedia",
    descripcion:
      "Un desafortunado modelo masculino se vuelve el objetivo de un malvado complot para asesinar a un líder del mundo.",
    urlDeImagen: "./img/comedia/42.jpg",
    esDestacada: false,
  },
  {
    id: 13,
    nombre: "Damas en guerra",
    categoria: "Comedia",
    descripcion:
      "Annie es una mujer soltera cuya vida es un desastre, pero cuando ella descubre que su mejor amiga, Lillian, está comprometida, no tiene otra elección que ser su dama de honor",
    urlDeImagen: "./img/comedia/43.jpg",
    esDestacada: false,
  },
  {
    id: 14,
    nombre: "Tonto y Retonto",
    categoria: "Comedia",
    descripcion:
      "La vida de Lloyd y Harry, dos amigos de una estupidez supina, es un auténtico desastre. Cuando Lloyd se enamora de una chica que olvida un maletín en una limusina, los dos amigos emprenden un viaje por todo el país para devolvérselo.",
    urlDeImagen: "./img/comedia/44.jpg",
    esDestacada: false,
  },
  {
    id: 15,
    nombre: "Borat",
    categoria: "Comedia",
    descripcion:
      "Situaciones atroces ocurren cuando Borat, un popular reportero de Kazajistán, llega a los Estados Unidos para filmar un documental sobre por qué América es una gran nación.",
    urlDeImagen: "./img/comedia/45.jpg",
    esDestacada: false,
  },
  // FIN PELICULAS DE COMEDIA
  // INICIO PELICULAS SLIDER
  {
    id: 16,
    nombre: "Venom",
    categoria: "Todos",
    descripcion:
      "El periodista Eddie Brock está investigando a Carlton Drake, el célebre fundador de Life Foundation. Brock establece una simbiosis con un ente alienígena que le ofrece superpoderes, pero el ser se apodera de su personalidad y lo vuelve perverso.",
    urlDeImagen: "./img/imagenes slider/1.jpg",
    esDestacada: false,
  },
  {
    id: 17,
    nombre: "Batman, el caballero de la noche",
    categoria: "Todos",
    descripcion:
      "Batman tiene que mantener el equilibrio entre el heroísmo y el vigilantismo para pelear contra un vil criminal conocido como el Guasón, que pretende sumir Ciudad Gótica en la anarquía.",
    urlDeImagen: "./img/imagenes slider/2.jpg",
    esDestacada: false,
  },
  {
    id: 18,
    nombre: "Terminator",
    categoria: "Todos",
    descripcion:
      "Año 2029. Las máquinas dominan el mundo y solo John Connor, el líder de todos los seres humanos, puede acabar con ellas. Para evitar su derrota las máquinas han enviado a un robot llamado Terminator al pasado y así evitar que este ser humano nazca",
    urlDeImagen: "./img/imagenes slider/3.jpg",
    esDestacada: false,
  },
  {
    id: 19,
    nombre: "Escalofrios",
    categoria: "Todos",
    descripcion:
      "Zach llega a un pequeño y aburrido pueblo, donde pronto hace amistad con la vecina. Descubre que su padre es el escritor R. L. Stine, autor de los libros de terror Escalofríos, y que todos los monstruos que Stine describió en sus obras son reales",
    urlDeImagen: "./img/imagenes slider/4.jpg",
    esDestacada: false,
  },
  {
    id: 20,
    nombre: "Deadpool",
    categoria: "Todos",
    descripcion:
      "Un exmercenario quien, tras haber sido sometido a un cruel experimento, adquiere el superpoder de sanar rápidamente y pretende vengarse del hombre que destrozó su vida.",
    urlDeImagen: "./img/imagenes slider/5.jpg",
    esDestacada: false,
  },
  {
    id: 21,
    nombre: "Power Rangers",
    categoria: "Todos",
    descripcion:
      "Cinco adolescentes ordinarios deben convertirse en superhéroes cuando se enteran de que su pequeña ciudad de Angel Grove, y el mundo entero, están a punto de ser borrados por una amenaza alienígena.",
    urlDeImagen: "./img/imagenes slider/6.jpg",
    esDestacada: false,
  },
  {
    id: 22,
    nombre: "La gran muralla",
    categoria: "Todos",
    descripcion:
      "Encarcelado dentro de la Gran Muralla china, un guerrero mercenario une fuerzas con un ejército de élite para luchar contra un ataque de monstruos saqueadores.",
    urlDeImagen: "./img/imagenes slider/7.jpg",
    esDestacada: false,
  },
  {
    id: 23,
    nombre: "Wall-E",
    categoria: "Todos",
    descripcion:
      "Luego de pasar años limpiando la Tierra desierta, el robot Wall-E conoce a EVA y la sigue por toda la galaxia.",
    urlDeImagen: "./img/imagenes slider/8.jpg",
    esDestacada: false,
  },
  {
    id: 24,
    nombre: "Abraham Lincoln: cazador de vampiros",
    categoria: "Todos",
    descripcion:
      "Lincoln se compromete a salvar a Estados Unidos del ataque de los muertos vivientes.",
    urlDeImagen: "./img/imagenes slider/9.jpg",
    esDestacada: false,
  },
  {
    id: 25,
    nombre: "Los vengadores",
    categoria: "Todos",
    descripcion:
      "El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.",
    urlDeImagen: "./img/imagenes slider/10.jpg",
    esDestacada: false,
  },
  {
    id: 26,
    nombre: "Batman: El caballero de la noche asciende",
    categoria: "Todos",
    descripcion:
      "Ocho años después de asumir la culpa por la muerte de Harvey Dent y desaparecer en la noche, Batman se ve obligado a salir del exilio autoimpuesto gracias a una ladrona astuta y a un terrorista despiadado.",
    urlDeImagen: "./img/imagenes slider/11.jpg",
    esDestacada: false,
  },
  {
    id: 27,
    nombre: "La Liga de la Justicia de Zack Snyder",
    categoria: "Todos",
    descripcion:
      "Impulsado por su restaurada fe en la humanidad e inspirado por el acto desinteresado de Superman, Batman y su nueva aliada la Mujer Maravilla reclutan a Aquaman, Cyborg y Flash para que los ayuden a salvar el planeta de un enemigo recién despertado.",
    urlDeImagen: "./img/imagenes slider/12.jpg",
    esDestacada: false,
  },
  {
    id: 28,
    nombre: "300",
    categoria: "Todos",
    descripcion:
      "En el año 480 antes de Cristo, existe un estado de guerra entre Persia y Grecia. En la Batalla de Thermopylae, Leonidas rey de Esparta, encabeza a sus autonombrados guerreros en contra del numeroso ejército persa.",
    urlDeImagen: "./img/imagenes slider/13.jpg",
    esDestacada: false,
  },
  {
    id: 29,
    nombre: "T-34",
    categoria: "Todos",
    descripcion:
      "Un tanque semidestruido sirve a un grupo de soldados rusos prisioneros a escapar del cautiverio alemán.",
    urlDeImagen: "./img/imagenes slider/14.jpg",
    esDestacada: false,
  },
  {
    id: 30,
    nombre: "Hellboy",
    categoria: "Todos",
    descripcion:
      "Los nazis recurren a la magia negra para sobrevivir tras la Segunda Guerra Mundial. En una ceremonia, crean al hijo del diablo: Hellboy.",
    urlDeImagen: "./img/imagenes slider/15.jpg",
    esDestacada: false,
  },
  // FIN PELICULAS SLIDER
  // INICIO PELICULAS DE TERROR
  {
    id: 31,
    nombre: "Esta vivo!",
    categoria: "Terror",
    descripcion:
      "Una pareja de Los Ángeles se aterroriza al descubrir que su bebé recién nacido es un demonio violento que intenta matar a cualquier persona que se cruce en su camino.",
    urlDeImagen: "./img/terror/16.jpg",
    esDestacada: false,
  },
  {
    id: 32,
    nombre: "La maldicion de Blackwood",
    categoria: "Terror",
    descripcion:
      "Luego de intentar provocar un incendio en su antigua escuela, Kit debe asistir al internado Blackwood contra su voluntad. Las fuerzas sombrías que habitan la mansión le harán la vida imposible a todas las estudiantes.",
    urlDeImagen: "./img/terror/17.jpg",
    esDestacada: false,
  },
  {
    id: 33,
    nombre: "El hijo del demonio",
    categoria: "Terror",
    descripcion:
      "En busca de su hermana desaparecida, una joven acepta un trabajo como enfermera para un niño en coma y busca pistas en la siniestra casa de su familia.",
    urlDeImagen: "./img/terror/18.jpg",
    esDestacada: false,
  },
  {
    id: 34,
    nombre: "La Bruja",
    categoria: "Terror",
    descripcion:
      "Nueva Inglaterra, 1630. Una familia de colonos cristianos vive cerca de un bosque demoníaco. La convivencia estalla y la familia se desgarra al sospechar que su hija mayor practica la brujería, debido a que las cosechas no crecen y su bebé ha desaparecido.",
    urlDeImagen: "./img/terror/19.jpg",
    esDestacada: false,
  },
  {
    id: 35,
    nombre: "La mujer con dos cabezas",
    categoria: "Terror",
    descripcion:
      "Anne, de 18 años, explora las cuestiones de la imagen corporal, la autopercepción y su propia comprensión de lo que es ser una mujer en el siglo XXI en dos mundos altamente contrastados el de su madre tradicionalmente femenina y el mundo del gimnasio donde entrena.",
    urlDeImagen: "./img/terror/20.jpg",
    esDestacada: false,
  },
  {
    id: 36,
    nombre: "El circo del terror",
    categoria: "Terror",
    descripcion:
      "Cirujano plástico inético huye al circo con la enfermera de un paciente deforme.",
    urlDeImagen: "./img/terror/21.jpg",
    esDestacada: false,
  },
  {
    id: 37,
    nombre: "Gonjiam: hospital maldito",
    categoria: "Terror",
    descripcion:
      "Un grupo de personas se adentra en un manicomio abandonado para grabar un espectáculo que se transmite a través de internet. La diversión inicial se convierte en una pesadilla cuando las entidades malignas del lugar empiezan a atacarlos.",
    urlDeImagen: "./img/terror/22.jpg",
    esDestacada: false,
  },
  {
    id: 38,
    nombre: "La novia",
    categoria: "Terror",
    descripcion:
      "Una mujer recién casada viaja con su nuevo esposo a su antigua casa y descubre verdades aterradoras sobre sus antepasados.",
    urlDeImagen: "./img/terror/23.jpg",
    esDestacada: false,
  },
  {
    id: 39,
    nombre: "Melanie, apocalipsis zombie",
    categoria: "Terror",
    descripcion:
      "En un futuro cercano, la sociedad está asediada por un virus que convierte a las víctimas en insaciables zombis. La única oportunidad de la humanidad reside en un grupo de niños que son inmunes a los efectos de la pandemia.",
    urlDeImagen: "./img/terror/24.jpg",
    esDestacada: false,
  },
  {
    id: 40,
    nombre: "La calle del terror",
    categoria: "Terror",
    descripcion:
      "Después de una serie de asesinatos, una adolescente y sus amigos se enfrentan a una fuerza maligna que ha asolado su pueblo durante siglos.",
    urlDeImagen: "./img/terror/25.jpg",
    esDestacada: false,
  },
  {
    id: 41,
    nombre: "Eso",
    categoria: "Terror",
    descripcion:
      "Varios niños de una pequeña ciudad del estado de Maine se alían para combatir a una entidad diabólica que adopta la forma de un payaso y desde hace mucho tiempo emerge cada 27 años para saciarse de sangre infantil.",
    urlDeImagen: "./img/terror/26.jpg",
    esDestacada: false,
  },
  {
    id: 42,
    nombre: "La casa maldita",
    categoria: "Terror",
    descripcion:
      "Traviesos chicos viven sucesos sobrenaturales cuando realizan una fiesta en una mansión inglesa supuestamente embrujada.",
    urlDeImagen: "./img/terror/27.jpg",
    esDestacada: false,
  },
  {
    id: 43,
    nombre: "El conjuro",
    categoria: "Terror",
    descripcion:
      "A principios de los años 70, Ed y Lorrain Warren, reputados investigadores de fenómenos paranormales, se enfrentan a una entidad demoníaca al intentar ayudar a una familia que está siendo aterrorizada por una presencia oscura en su aislada granja.",
    urlDeImagen: "./img/terror/28.jpg",
    esDestacada: false,
  },
  {
    id: 44,
    nombre: "La parada de los monstruos",
    categoria: "Terror",
    descripcion:
      "Un hombre intenta castigar a la acróbata Cleopatra (Olga Baclanova) por humillar a su pequeño amigo Hans.",
    urlDeImagen: "./img/terror/29.jpg",
    esDestacada: false,
  },
  {
    id: 45,
    nombre: "El proyecto de la Bruja de Blair",
    categoria: "Terror",
    descripcion:
      "Tres estudiantes de cine se pierden en un bosque durante su investigación de la leyenda de una bruja. Cosas extrañas comienzan a pasar en el bosque y los estudiantes no puede encontrar el camino a casa.",
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

const div_titulo = document.createElement("div");
div_titulo.innerHTML = `<h2 id="titulo_admin">Adminitración de Peliculas</h2>`;

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
contenedor.append(div_titulo);
contenedor.append(divFlexible);
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
