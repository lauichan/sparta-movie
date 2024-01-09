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
    { id: 878, en: "sf", ko: "SF" },
    { id: 10770, en: "tv_movie", ko: "TV 영화" },
    { id: 53, en: "thriller", ko: "스릴러" },
    { id: 10752, en: "war", ko: "전쟁" },
    { id: 37, en: "western", ko: "서부" }
]; //https://api.themoviedb.org/3/genre/movie/list?language=ko 영어버전 + 한글버전

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
        response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=${page}`, options);
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
        liElement.classList.add(genre.en);
        liElement.textContent = genre.ko;
        genreListElement.appendChild(liElement);
    });
}
