export function searchMovie(event) {
    event.preventDefault();
    const keyword = document.querySelector("#searchInput").value.toLowerCase();
    const cards = document.querySelector("#movies");

    let result = [...cards].some((card) => {
        const text = card.textContent.toLowerCase().includes(keyword);
        card.classList.toggle("hide", !text);
        return text;
    });

    if (!result) alert("검색 결과가 없습니다.");
}
