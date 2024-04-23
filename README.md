# zara-challenge-marvel

Desarrollado por *Hernán Mansilla* para el challenge de Zara. *Postulación*

# Para comenzar:

Para inicializar la aplicación se debe entrar a la carpeta *front* y allí:

### `npm start`

para hacer las pruebas:

### `npm test`

para producción:

### `npm run build`


# Arquitectura del proyecto

# Introducción:

La aplicación se conecta a la API de Marvel para traer datos de personajes y mostrarlos en cards en la home con un límite de 50 de ellos, además tiene un navegador en el que se puede
buscar por nombres. Al hacer click en las cards te lleva al detalle del personaje
en la que se puede ver los comics relacionados por ID. Se puede añadir a favoritos
cada personaje.

# Estructura de carpetas:

    src/
    ├── adapters/
    │   ├── api/
    |   |     |--buildApiUrl.jsx --Funciones URL de Marvel
    |   |     |--fetchData.jsx --Solicitud API, Async & Suspense
    |   |     |--useFetch.jsx   --Solicitud HTTP de personajes
    |   |     |--useFetchComicId.jsx --Solicitud HTTP para comics mediante ID
    │   └── state/
    |         |--FavoritesContext.js --Contexto de personajes Favoritos global
    ├── core/
    │   └── components/
    │       ├── btn/
    |       |     |--BtnFav.jsx --Botón de favoritos & Contador
    |       |     |--BtnFav.scss 
    │       └── card/
    |       |       |--Card.jsx --Componente de Card con btnFav importado
    |       |       |--Card.scss
    |       |__ carousel/
    |       |       |--Carousel.jsx --Carousel para los comics
    |       |       |--Carousel.scss
    |       |__ loader/
    |       |       |--Loader.jsx --Cargador
    |       |       |--Loader.scss
    |       |__navbar/
    |       |       |--NavBar.jsx  --NavBar con logo e importación de BtnFav
    |       |       |--NavBar.scss
    |       |__searcher/
    |               |--Searcher.jsx --Maneja búsqueda de personajes + contador
    |               |-Searcher.scss
    |
    ├── resources/
    │   └── img/
    |        |--Examples-&-logo
    ├── test/
    │   |__ unit/
    │       ├── adapters/
    |       |    |-api/
    |       |       |--buildApiUrl.test.js --Prueba URL correcta
    │       └── ui/
    |           |--App.test.jsx --Prueba funcionamiento de renderizado home y CaDt.
    └── ui/
        ├── pages/
        │   ├── cardDetail/
        |   |    |--CardDetail.jsx --Muestra el detalle de la card según ID & Carousel
        |   |    |--CardDetail.scss
        │   └── home/
        |        |--Home.jsx --Importa search, & card
        |        |--Home.scss
        └── app.jsx --Muestra home y cardDetail
        |__ app.scss

index.js --Renderiza app.jsx dentro del contexto por FavoriteProvider



# Principios de Diseño:

    Para diseño se utilizó BEM, variables de diseño en *app.scss*:

# variables:

    // variables para fuentes
$Roboto: "Roboto Condensed", sans-serif;
$font-weight-bold: 700;
$font-weight-normal: 400;
$font-weight-medium: 500;

// estilos del texto
h1, h2, h3, h4, p {
  font-family: $Roboto;
  
  // peso de cada fuente
  & {
    &:not(h3):not(p) {
      font-weight: $font-weight-bold;
    }

    &:not(h1):not(h2):not(h4) {
      font-weight: $font-weight-normal;
    }

    & h4 {
      font-weight: $font-weight-medium;
    }
  }
}

//variables para colores

$black-panther: #000000;
$marvel-red: #EC1D24; 
$white-queen: #FFF;












