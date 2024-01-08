export function searchMovie(event) {
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
