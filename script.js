const genreList = [
    { id: 28, en: "action", ko: "액션" },
    { id: 12, en: "adventure", ko: "모험" },
    { id: 16, en: "animation", ko: "애니메이션" },
    { id: 35, en: "comedy", ko: "코미디" },
    { id: 80, en: "crime", ko: "범죄" },
    { id: 99, en: "documentary", ko: "다큐멘터리" },
    { id: 18, en: "drama", ko: "드라마" },
    { id: 10751, en: "family", ko: "가족" },
    { id: 14, en: "fantasy", ko: "판타지" },
    { id: 36, en: "history", ko: "역사" },
    { id: 27, en: "horror", ko: "공포" },
    { id: 10402, en: "music", ko: "음악" },
    { id: 9648, en: "mystery", ko: "미스터리" },
    { id: 10749, en: "romance", ko: "로맨스" },
    { id: 878, en: "science Fiction", ko: "SF" },
    { id: 10770, en: "tv_movie", ko: "TV 영화" },
    { id: 53, en: "thriller", ko: "스릴러" },
    { id: 10752, en: "war", ko: "전쟁" },
    { id: 37, en: "western", ko: "서부" }
];

let currentPage = 1;

const fetchData = async (page) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODI4OWFhMmJlYzAyYmQ3OGFmNjdmODIzNDNkMDhjOCIsInN1YiI6IjY1OTNiNjdkZWJiOTlkNWUxN2EwMTQ1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U9hqR5oF0oqXrbFgqXlC2yY1zj4JGJshGMzZfoGuuLw'
        }
    };

    try {
        response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=${page}`, options);
        data = await response.json();
    } catch (err) {
        console.error(err);
    }
    createCard(data);
};

function createCard(response) {
    const movies = response.results;
    movies.forEach(movie => {
        document.getElementById("movies").innerHTML += cardHTML(movie);
        createGenreList(movie.id, movie.genre_ids);
    });
}

function cardHTML(movie) {
    return `<div id="${movie.id}" class="card" onclick="alert('영화id: ${movie.id}')">
                <img class="poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" title="${movie.id}"/>
                <h2 class="title">${movie.title}</h2>
                <p class="overview">${movie.overview}</p>
                <ul class="genre"></ul>
                <p class="vote"><span class="star">★</span>${(movie.vote_average * 10).toFixed(1)}%</p>
            </div>`
}

function createGenreList(ele_id, genre_ids) {
    const genreName = genre_ids.map(id => obj = genreList.find(genre => genre.id === id));
    genreName.forEach(genre => {
        document.getElementById(`${ele_id}`).querySelector(".genre").innerHTML += `<li class="${genre.en}">${genre.ko}</li>`
    })
}

function searchMovie(event) {
    event.preventDefault();
    const keyword = document.querySelector("#searchInput").value.toLowerCase();
    const cards = [...document.querySelectorAll("#movies > .card")];
    cards.forEach((card) => {
        card.classList.toggle("hide", !searchBy(keyword, card));
    });
}

function searchBy(keyword, card) {
    const text = card.textContent.toLowerCase();
    return text.includes(keyword);
}

function newPage() {
    currentPage++;
    fetchData(currentPage);
    document.getElementById("searchInput").setAttribute("placeholder", `검색어를 입력해주세요. (TOP ${currentPage * 20} 영화 중)`)
}

fetchData(currentPage);

document.getElementById("searchInput").focus();