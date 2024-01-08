function searchMovie(event) {
    event.preventDefault();
    const keyword = document.querySelector("#searchInput").value.toLowerCase();
    const cards = [...document.querySelectorAll("#movies > .card")];

    let noresult = true;

    cards.forEach((card) => {
        const text = card.textContent.toLowerCase().includes(keyword);
        card.classList.toggle("hide", !text);
        if (text) noresult = false;
    });

    if (noresult) alert("검색 결과가 없습니다.");
}

function newPage() {
    currentPage++;
    fetchData(currentPage);
    document.getElementById("searchInput").setAttribute("placeholder", `검색어를 입력해주세요.`);
}

document.getElementById("search").addEventListener("submit", searchMovie);
document.getElementById("searchInput").focus();
