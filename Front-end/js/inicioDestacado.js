const librosDestacadoContainer = document.querySelector('#libros-destacado .libro-container-destacado');
const librosNovedadContainer = document.querySelector('#libros-novedades .libro-container-novedades');
const librosAutoresContainer = document.querySelector('#libros-autores .libro-container-autores');


//Funcion para obtener los libros destacados del modulo de Inicio
async function obtenerLibrosDestacado() {
    try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=guadalajara&maxResults=5');
        if (!response.ok) {
            throw new Error('No se pudo obtener la información de los libros');
        }
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error al obtener los libros de terror:', error);
        return [];
    }
}

//Funcion para obtener los libros de novedad del modulo de Inicio
async function obtenerLibrosNovedad() {
    try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=guadalajara&maxResults=5&orderBy=newest');
        if (!response.ok) {
            throw new Error('No se pudo obtener la información de los libros');
        }
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error al obtener los libros de terror:', error);
        return [];
    }
}

//Funcion para obtener los libros de autores del modulo de Inicio
async function obtenerLibrosAutores() {
    try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=author:mexican&maxResults=5')
        if (!response.ok) {
            throw new Error('No se pudo obtener la información de los libros');
        }
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error al obtener los libros de terror:', error);
        return [];
    }
}

function abrirPaginaDetalle(url) {
    window.open(url, '_blank');
}

function mostrarLibros(libros, container) {
    container.innerHTML = '';
    libros.forEach((libro, index) => {
        const divLibro = document.createElement('div');
        divLibro.classList.add('libro');
        const imagen = document.createElement('img');
        imagen.src = libro.volumeInfo.imageLinks.thumbnail;
        imagen.alt = libro.volumeInfo.title;
        imagen.addEventListener('click', function() {
            abrirPaginaDetalle(libro.volumeInfo.previewLink);
        });
        const parrafo = document.createElement('p');
        parrafo.textContent = `${libro.volumeInfo.title} - ${libro.volumeInfo.authors ? libro.volumeInfo.authors.join(', ') : 'Autor desconocido'}`;
        divLibro.appendChild(imagen);
        divLibro.appendChild(parrafo);
        container.appendChild(divLibro);
    });
}

async function iniciar() {
    const librosDestacados = await obtenerLibrosDestacado();
    mostrarLibros(librosDestacados, librosDestacadoContainer);

    const librosNovedad = await obtenerLibrosNovedad();
    mostrarLibros(librosNovedad, librosNovedadContainer);

    const librosAutores = await obtenerLibrosAutores();
    mostrarLibros(librosAutores, librosAutoresContainer);
}

iniciar();
