export function searchMovie(event) {
    event.preventDefault();
    const keyword = document.querySelector("#searchInput").value.toLowerCase();
    const cards = document.querySelectorAll("#movies > div");

    let result = [...cards].filter((card) => {
        const text = (card.querySelector(".title").textContent + card.querySelector("ul").textContent)
            .toLowerCase()
            .includes(keyword);
        card.classList.toggle("hide", !text);
        return text;
    });

    if (result.length === 0) alert("검색 결과가 없습니다.");
}
