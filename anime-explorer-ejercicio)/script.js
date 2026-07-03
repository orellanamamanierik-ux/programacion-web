function crearCard(anime) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${anime.imagen}" alt="${anime.titulo}">
        <div class="card-content">
            <span class="genero">${anime.genero}</span>
            <h3>${anime.titulo}</h3>
            <p>${anime.sinopsis}</p>
            <div class="rating">⭐ ${anime.rating}</div>
        </div>
    `;

    card.addEventListener('click', () => {
        alert(`Anime: ${anime.titulo}\nRating: ⭐ ${anime.rating}`);
    });

    return card;
}

function renderGrilla(lista) {
    const grilla = document.querySelector('#grilla');
    const contador = document.querySelector('#contador');

    grilla.innerHTML = "";

    if (lista.length === 0) {
        grilla.innerHTML = `<p class="no-resultados">No se encontraron resultados.</p>`;
        if (contador) {
            contador.innerText = "0 animes encontrados";
        }
        return;
    }

    lista.forEach(anime => {
        const nuevaCard = crearCard(anime);
        grilla.appendChild(nuevaCard);
    });

    if (contador) {
        contador.innerText = lista.length + " animes encontrados";
    }
}

function buscar(lista, termino) {
    return lista.filter(anime => 
        anime.titulo.toLowerCase().includes(termino.toLowerCase())
    );
}

function filtrarPorGenero(lista, genero) {
    if (genero === "") {
        return lista;
    }
    return lista.filter(anime => anime.genero === genero);
}

function buscarYFiltrar() {
    const termino = document.querySelector("#busqueda").value;
    const genero = document.querySelector("#genero").value;

    let resultado = buscar(animes, termino);
    resultado = filtrarPorGenero(resultado, genero);
    renderGrilla(resultado);
}

document.addEventListener("DOMContentLoaded", () => {
    renderGrilla(animes);

    document.querySelector("#busqueda").addEventListener("input", buscarYFiltrar);
    document.querySelector("#genero").addEventListener("change", buscarYFiltrar);

    const btnLimpiar = document.querySelector("#btn-limpiar");
    if (btnLimpiar) {
        btnLimpiar.addEventListener("click", () => {
            document.querySelector("#busqueda").value = "";
            document.querySelector("#genero").value = "";
            renderGrilla(animes);
        });
    }
});