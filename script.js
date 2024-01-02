const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODI4OWFhMmJlYzAyYmQ3OGFmNjdmODIzNDNkMDhjOCIsInN1YiI6IjY1OTNiNjdkZWJiOTlkNWUxN2EwMTQ1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U9hqR5oF0oqXrbFgqXlC2yY1zj4JGJshGMzZfoGuuLw'
    }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => getMovies(response))
    .catch(err => console.error(err));

const getMovies = function (response) {
    let movies = response.results;
    movies.forEach(movie => {
        console.log(movie)
        document.getElementById("movies").innerHTML += `
        <li>
            <h2 class="title">${movie.title}</h2>
            <img class="poster" src="http://image.tmdb.org/t/p/w300${movie.poster_path}"/>
            <p class="overview">${movie.overview}</p>
            <p class="vote_average">${movie.vote_average}</p>
        </li>`
    });
}