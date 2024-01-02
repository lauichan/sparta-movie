const fetchData = () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODI4OWFhMmJlYzAyYmQ3OGFmNjdmODIzNDNkMDhjOCIsInN1YiI6IjY1OTNiNjdkZWJiOTlkNWUxN2EwMTQ1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U9hqR5oF0oqXrbFgqXlC2yY1zj4JGJshGMzZfoGuuLw'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => createCard(response))
        .catch(err => console.error(err));
};

function createCard(response) {
    let movies = response.results;
    movies.forEach(movie => {
        document.getElementById("movies").innerHTML += `
            <li onclick="alert('영화id: ${movie.id}')">
                <img class="poster" src="http://image.tmdb.org/t/p/w300${movie.poster_path}"/>
                <h2 class="title">${movie.title}</h2>
                <p class="overview">${movie.overview}</p>
                <p class="vote_average">${movie.vote_average}</p>
            </li>`
    });
}

function searchMovie(event) {
    event.preventDefault();
    const keyword = document.querySelector("#searchInput").value.toLowerCase();
    [...document.querySelectorAll("#movies > li")].filter((li) => {
        const title = li.querySelector("h2").textContent.toLowerCase();
        title.includes(keyword) ? li.style.display = "block" : li.style.display = "none";
    });
}

fetchData();

document.getElementById("searchInput").focus();