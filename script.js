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
            <li onclick="alert('영화id: ${movie.id}')">
                <img class="poster" src="https://image.tmdb.org/t/p/w300${movie.poster_path}" width=300 height=450/>
                <h2 class="title">${movie.title}</h2>
                <p class="overview">${movie.overview}</p>
                <p class="vote_average"><span class="star">★</span> ${(movie.vote_average * 10).toFixed(2)}</p>
            </li>`;
    });
}

function searchMovie(event) {
    event.preventDefault();
    const keyword = document.querySelector("#searchInput").value.toLowerCase();
    [...document.querySelectorAll("#movies > li")].filter((li) => {
        const title = li.querySelector("h2").textContent.toLowerCase();
        (!title.includes(keyword)) ? li.classList.add("hide") : li.classList.remove("hide");
    });
}

fetchData();

document.getElementById("searchInput").focus();