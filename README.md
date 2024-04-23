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

# Estructura de carpetas y vistazo a la funcionalidad:

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

# Variables de tipografía:
  
    $Roboto: "Roboto Condensed", sans-serif;
    $font-weight-bold: 700;
    $font-weight-normal: 400;
    $font-weight-medium: 500;

    h1, h2, h3, h4, p {
        font-family: $Roboto;
    
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


## Variables de color:

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| $black-panther | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |
| $marvel-red | ![#EC1D24](https://via.placeholder.com/10/EC1D24?text=+) #EC1D24 |
| $white-queen | ![#FFF](https://via.placeholder.com/10/FFF?text=+) #FFF |


# Componentes principales:

## BtnFav
El componente BtnFav recibe las siguientes propiedades:

- size: Tamaño del botón (small, medium o large).

- hideCounter: Booleano que indica si se debe ocultar el contador de favoritos.

- character: Objeto que representa al personaje al que se aplica el botón de avoritos.

- hasFavorites: Booleano que indica si hay favoritos en la lista.

**Lógica del componente:**

Utiliza el hook **useFavorites** para obtener el estado de los favoritos y la función **toggleFavorite**.
Determina si el personaje actual está marcado como favorito mediante la función **isFavorited()**.
Define la función **handleToggleFavorite**, que se activa cuando se hace clic en el botón de favoritos y llama a **toggleFavorite** con el personaje actual como argumento.

**Renderizado:**

Renderiza un botón con una imagen de corazón lleno o vacío, dependiendo del estado de favorito del personaje.

El tamaño del corazón (size) se determina dinámicamente según la prop proporcionada.

Si **hasFavorites es verdadero**, el botón muestra el corazón lleno si hay al menos un favorito, de lo contrario, **muestra el corazón vacío**.
Si **hideCounter es falso, muestra un contador de favoritos junto al botón.**


## Card

El componente Card recibe las siguientes propiedades:

  - name: Nombre del personaje.
  - imageUrl: URL de la imagen del personaje.
  - id: ID del personaje.
  - onClick: Función de manejo de clic para la tarjeta.

**Lógica del componente:**

Utiliza el hook **useFavorites** para obtener el estado de los favoritos.
Verifica si el personaje actual está marcado como favorito mediante la función **isCharacterFavorited**, que comprueba si el ID del personaje está presente en la lista de favoritos.

**Renderizado:**

Renderiza un componente Link que envuelve la tarjeta y establece la URL de destino para la página de detalles del personaje.

Dentro del enlace, renderiza la estructura de la tarjeta con la imagen del personaje y su nombre.

También renderiza el componente BtnFav para permitir al usuario marcar o desmarcar el personaje como favorito.

El tamaño del botón de favoritos se establece en "small" y se oculta el contador de favoritos.

La propiedad hasFavorites se establece según si el personaje está marcado como favorito.

## Carousel

El componente Carousel recibe la siguiente propiedad:

  - characterId: ID del personaje de Marvel para el que se mostrarán los cómics en el carrusel.

**Inicialización del estado y referencias:**

Utiliza **useRef** para crear una referencia al elemento del carrusel.

Utiliza **useState** para gestionar el estado del índice del carrusel y el ancho de la imagen.

Utiliza **useFetchDataComicId** para obtener **datos de cómics relacionados** con el personaje.

Utiliza **useEffect** para **calcular el ancho de la imagen del primer elemento** del carrusel cuando se actualizan los cómics.

**Renderizado:**

Renderiza un contenedor de carrusel con la clase "carousel" y la referencia al elemento del carrusel.

Muestra el componente Loader mientras se cargan los datos.

Muestra los cómics en el carrusel cuando no hay cargas ni errores.

Para cada cómic, renderiza un elemento de carrusel con la clase "carousel__item".

Aplica la clase "carousel__item--active" al cómic actualmente visible.

Aplica una transformación SCSS para desplazar los elementos del carrusel.

Muestra un mensaje de error si hay un error al obtener los datos.

Muestra un mensaje si no hay cómics disponibles.

## Searcher

El componente Searcher recibe la siguiente propiedad:

  - onSearch: Función de retorno de llamada para manejar la búsqueda.

**Inicialización del estado:**

Utiliza useState para manejar el estado del término de búsqueda **(searchQuery)**, el estado de carga **(loading)** y el número total de resultados **(totalResults)**.

**Efecto para buscar resultados:**

Utiliza **useEffect** para realizar una **solicitud a la API cuando el término de búsqueda cambia**.

La **solicitud** se realiza utilizando fetch a la URL **construida con buildApiUrl**.

Los resultados se actualizan en el estado y se muestra el número total de resultados encontrados.

**Función de manejo de cambios:**

Define la función handleChange para manejar cambios en el campo de búsqueda.

Actualiza el estado del término de búsqueda y llama a la función onSearch proporcionada.

**Renderizado:**

Renderiza un contenedor de búsqueda con la clase "container-searcher".
Dentro del contenedor, muestra un campo de entrada de búsqueda con un icono de búsqueda.
Muestra el número total de resultados encontrados si hay un término de búsqueda ingresado.
Utiliza Suspense para mostrar un mensaje de carga mientras se obtienen los resultados de la búsqueda.



## Contexto de la Aplicación y Gestión del Estado con Context API de React

Utilicé la Context API de React para gestionar el estado global de manera eficiente y accesible en toda la aplicación. Esto **permite compartir datos importantes**, como **los favoritos de los usuarios o los resultados de las búsquedas**, entre componentes **sin tener que pasar props manualmente** a través de múltiples niveles de jerarquía.

**Estructura del Contexto**
En el directorio **adapters/state/FavoritesContext.jsx**, definí un contexto para diferentes aspectos del estado global:

**FavoritesContext.jsx**: Este contexto gestiona el estado de los favoritos de los usuarios. Proporciona funciones para agregar o quitar elementos de la lista de favoritos y hace que esta información esté disponible en toda la aplicación.

**Proveedor de contexto**

En el archivo **index.js**:

      createRoot(document.getElementById('root')).render( 
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    );

De esta manera, todos los componentes dentro de nuestra aplicación tienen acceso al estado global y a las funciones proporcionadas por el contexto de favoritos.

**Consumir el Contexto en Componentes**

      import { useFavorites }

      const { toggleFavorite } = useFavorites();


## Funcionamiento de la Función fetchData

La función fetchData se encarga de realizar solicitudes a una URL utilizando la API fetch de JavaScript. Esta función implementa un enfoque de suspensión para manejar las promesas de manera asíncrona y proporcionar una interfaz de lectura reactiva.

**getSuspender**
La función getSuspender es responsable de crear un objeto que contiene dos métodos: **read** y **then**.

**read:** Permite acceder al resultado de la promesa. Si la promesa está pendiente, read arrojará la propia promesa, lo que resultará en la suspensión del componente que lo está utilizando. Una vez que la promesa se resuelve o se rechaza, read devuelve el resultado o lanza un error, respectivamente.

**then:** Proporciona una interfaz para encadenar operaciones después de que la promesa se resuelve o se rechaza. Toma dos argumentos: onFulfilled para el caso de éxito y onRejected para el caso de error, y devuelve una nueva promesa que representa el resultado de la operación.

**Implementación de fetchData**
La función fetchData utiliza la API fetch para realizar una solicitud a la URL especificada. Una vez que la respuesta se recibe y se convierte en formato JSON, se realiza una validación de la estructura del objeto JSON. Si la estructura no es la esperada, se lanza un error. Finalmente, la función devuelve un objeto creado por getSuspender, que permite leer el resultado de la promesa y encadenar operaciones adicionales utilizando then.

## Ventajas del Enfoque de Suspensión en fetchData

El enfoque de suspensión utilizado en la función fetchData ofrece varias ventajas significativas en comparación con el manejo tradicional de promesas. Aquí detallo algunas de las razones por las que este enfoque es preferible:

1. **Mejora de la Experiencia del Usuario**
Al utilizar la suspensión, podemos mostrar interfaces de usuario más responsivas y amigables. En lugar de mostrar un indicador de carga estática o un mensaje de espera, podemos **suspender la renderización del componente hasta que la promesa se resuelva,** lo que proporciona una experiencia de usuario más fluida y sin interrupciones.

2. **Código más Limpio y Legible**
El enfoque de suspensión **simplifica el código al evitar el anidamiento excesivo de promesas y el manejo manual de estados de carga.** Esto conduce a un código más **claro y fácil de entender,** lo que facilita el mantenimiento y la depuración en el futuro.

3. **Mejor Gestión de Errores**
La suspensión facilita la **gestión de errores** al permitirnos **capturar y manejar errores de manera más efectiva en un solo lugar**, en lugar de tener que lidiar con errores dispersos en múltiples niveles de la aplicación. Esto mejora la robustez y la confiabilidad de nuestra aplicación.

4. **Integración con React Suspense**
El enfoque de suspensión se integra de manera natural con React Suspense, una característica de React diseñada específicamente para manejar la carga de datos de manera eficiente. Esto **permite aprovechar las capacidades de suspensión de React y mejorar aún más el rendimiento y la experiencia del usuario.**


## Versión de react
  18.2.0


















