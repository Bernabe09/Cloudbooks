document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const modal = document.getElementById('modal');
    const closeModalButton = document.querySelector('.close');

    searchInput.addEventListener('input', () => { // Cambio aquí
        let query = searchInput.value.trim(); 
        if (query !== '') {
            query = encodeURIComponent(query); 
            fetchBooks(query);
        }
    });

    function fetchBooks(query) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo obtener la información de los libros');
                }
                return response.json();
            })
            .then(data => {
                displayResults(data.items);
                showModal();
            })
            .catch(error => {
                console.error('Error al obtener los libros:', error);
            });
    }

    function displayResults(books) {
        const librosContainer = document.querySelector('.libros-container-search');
        librosContainer.innerHTML = '';
        books.forEach(book => {
            const divLibro = document.createElement('div');
            divLibro.classList.add('libro');
            const imagen = document.createElement('img');
            imagen.src = book.volumeInfo.imageLinks.thumbnail;
            imagen.alt = book.volumeInfo.title;
            const parrafo = document.createElement('p');
            parrafo.textContent = `${book.volumeInfo.title} - ${book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Autor desconocido'}`;
            divLibro.appendChild(imagen);
            divLibro.appendChild(parrafo);
            librosContainer.appendChild(divLibro);
        });
    }

    function showModal() {
        modal.style.display = 'block';
    }

    function displayResults(books) {
        const librosContainer = document.querySelector('.libros-container-search');
        librosContainer.innerHTML = '';
        books.forEach(book => {
            const divLibro = document.createElement('div');
            divLibro.classList.add('libro');
            const imagen = document.createElement('img');
            imagen.src = book.volumeInfo.imageLinks.thumbnail;
            imagen.alt = book.volumeInfo.title;
            const parrafo = document.createElement('p');
            parrafo.textContent = `${book.volumeInfo.title} - ${book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Autor desconocido'}`;
            divLibro.appendChild(imagen);
            divLibro.appendChild(parrafo);
            divLibro.addEventListener('click', function() {
                abrirPaginaDetalle(book.volumeInfo.previewLink);
            });
            librosContainer.appendChild(divLibro);
        });
    }

    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', event => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    window.addEventListener('keydown', event => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});
