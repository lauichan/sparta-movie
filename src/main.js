import { loadPage } from "./movie.js";
import { searchMovie } from "./search.js";

let currentPage = 1;

loadPage(currentPage);

function morePage() {
    currentPage++;
    loadPage(currentPage);
}

document.getElementById("morePage").addEventListener("click", morePage);
document.getElementById("search").addEventListener("submit", searchMovie);
document.getElementById("searchInput").focus();
