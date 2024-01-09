import { fetchData } from "./movie.js";
import { searchMovie } from "./search.js";

let currentPage = 1;

fetchData(currentPage);

function morePage() {
    currentPage++;
    fetchData(currentPage);
}

document.getElementById("morePage").addEventListener("click", morePage);
document.getElementById("search").addEventListener("submit", searchMovie);
document.getElementById("searchInput").focus();
