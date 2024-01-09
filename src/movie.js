const genreList = [
    {
        id: 28,
        name: "Action"
    },
    {
        id: 12,
        name: "Adventure"
    },
    {
        id: 16,
        name: "Animation"
    },
    {
        id: 35,
        name: "Comedy"
    },
    {
        id: 80,
        name: "Crime"
    },
    {
        id: 99,
        name: "Documentary"
    },
    {
        id: 18,
        name: "Drama"
    },
    {
        id: 10751,
        name: "Family"
    },
    {
        id: 14,
        name: "Fantasy"
    },
    {
        id: 36,
        name: "History"
    },
    {
        id: 27,
        name: "Horror"
    },
    {
        id: 10402,
        name: "Music"
    },
    {
        id: 9648,
        name: "Mystery"
    },
    {
        id: 10749,
        name: "Romance"
    },
    {
        id: 878,
        name: "Science Fiction"
    },
    {
        id: 10770,
        name: "TV Movie"
    },
    {
        id: 53,
        name: "Thriller"
    },
    {
        id: 10752,
        name: "War"
    },
    {
        id: 37,
        name: "Western"
    }
]; //https://api.themoviedb.org/3/genre/movie/list?language=en 영어버전 + 한글버전

export const fetchData = async (page) => {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODI4OWFhMmJlYzAyYmQ3OGFmNjdmODIzNDNkMDhjOCIsInN1YiI6IjY1OTNiNjdkZWJiOTlkNWUxN2EwMTQ1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U9hqR5oF0oqXrbFgqXlC2yY1zj4JGJshGMzZfoGuuLw"
        }
    };

    let response, data;

    try {
        response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en&page=${page}`, options);
        data = await response.json();
    } catch (err) {
        console.error(err);
    }
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
        let className = genre.name.toLowerCase();
        liElement.classList.add(className);
        liElement.textContent = genre.name;
        genreListElement.appendChild(liElement);
    });
}
