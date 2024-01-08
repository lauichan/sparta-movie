import { fetchData, newPage } from "./movie.js";
import { searchMovie } from "./search.js";

let currentPage = 1;

fetchData(currentPage);

document.getElementById("new_page").addEventListener("click", newPage);
document.getElementById("search").addEventListener("submit", searchMovie);
document.getElementById("searchInput").focus();
