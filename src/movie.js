let genreList;

async function loadJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const loadGenre = async () => {
    const response = await loadJSON(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=d8289aa2bec02bd78af67f82343d08c8&language=en"
    );
    genreList = response.genres;
};

export const loadPage = async (page) => {
    const data = await loadJSON(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=d8289aa2bec02bd78af67f82343d08c8&language=en&page=${page}`
    );
    await loadGenre();
    createCard(data);
};

function createCard(response) {
    const movies = response.results;
    let cardList = document.getElementById("movies");

    movies.forEach((movie) => {
        cardList.appendChild(cardHTML(movie));
        createGenreList(movie.id, movie.genre_ids);
    });

    cardList.addEventListener("click", handleClickCard);

    function handleClickCard(event) {
        if (event.target === cardList) return;
        let target = event.target.matches(".card") ? event.target : event.target.parentNode;
        alert(`영화 id: ${target.id}`);
        target.classList.toggle("click");
    }
}

function cardHTML(movie) {
    const cardDiv = document.createElement("div");
    cardDiv.id = movie.id;

    const imgElement = document.createElement("img");
    imgElement.classList.add("poster");
    imgElement.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    imgElement.title = movie.id;

    const titleElement = document.createElement("h2");
    titleElement.classList.add("title");
    titleElement.textContent = movie.title;

    const overviewElement = document.createElement("p");
    overviewElement.classList.add("overview");
    overviewElement.textContent = movie.overview;

    const genreElement = document.createElement("ul");
    genreElement.classList.add("genre");

    const voteElement = document.createElement("p");
    voteElement.classList.add("vote");

    voteElement.textContent = `${(movie.vote_average * 10).toFixed(1)}%`;

    cardDiv.appendChild(imgElement);
    cardDiv.appendChild(titleElement);
    cardDiv.appendChild(overviewElement);
    cardDiv.appendChild(genreElement);
    cardDiv.appendChild(voteElement);

    return cardDiv;
}

function createGenreList(ele_id, genre_ids) {
    const genreName = genreList.filter((genre) => genre_ids.includes(genre.id));
    const genreListElement = document.getElementById(`${ele_id}`).querySelector(".genre");

    genreName.forEach((genre) => {
        const liElement = document.createElement("li");
        liElement.classList.add(`${genre.name.toLowerCase().replace(" ", "")}`);
        liElement.textContent = genre.name;
        genreListElement.appendChild(liElement);
    });
}
