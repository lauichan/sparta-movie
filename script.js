const genreList = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" }
];

const fetchData = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODI4OWFhMmJlYzAyYmQ3OGFmNjdmODIzNDNkMDhjOCIsInN1YiI6IjY1OTNiNjdkZWJiOTlkNWUxN2EwMTQ1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U9hqR5oF0oqXrbFgqXlC2yY1zj4JGJshGMzZfoGuuLw'
        }
    };

    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const data = await response.json();
        createCard(data);
    } catch (err) {
        console.error(err);
    }
};

function createCard(response) {
    let movies = response.results;
    movies.forEach(movie => {
        document.getElementById("movies").innerHTML += `
            <div id="${movie.id}" class="card" onclick="alert('영화id: ${movie.id}')">
                <img class="poster" src="https://image.tmdb.org/t/p/w300${movie.poster_path}" width=300 height=450/>
                <h2 class="title">${movie.title}</h2>
                <p class="overview">${movie.overview}</p>
                <ul class="genre"></ul>
                <p class="vote"><span class="star">★</span>${(movie.vote_average * 10).toFixed(2)}</p>
            </div>`;
        createGenreList(movie.id, movie.genre_ids);
    });
}

function createGenreList(ele_id, genre_ids) {
    let genreName = genre_ids.map(id => {
        let obj = genreList.find(genre => genre.id === id);
        return obj.name;
    });
    genreName.forEach(genre => {
        document.getElementById(`${ele_id}`).querySelector(".genre").innerHTML += `<li class="${genre.toLowerCase()}">${genre}</li>`
    })
}

function searchMovie(event) {
    event.preventDefault();
    const keyword = document.querySelector("#searchInput").value.toLowerCase();
    [...document.querySelectorAll("#movies > .card")].forEach((card) => {
        card.classList.toggle("hide", !searchBy(keyword, card));
    });
}

function searchBy(keyword, card) {
    const title = card.querySelector("h2").textContent.toLowerCase() + card.querySelector(".genre").textContent.toLowerCase();
    return title.includes(keyword);
}

fetchData();

document.getElementById("searchInput").focus();