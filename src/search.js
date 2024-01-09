export function searchMovie(event) {
    event.preventDefault();
    const keyword = document.querySelector("#searchInput").value.toLowerCase();
<<<<<<< HEAD
    const cards = [...document.querySelectorAll("#movies > .card")];
=======
    const cards = document.querySelectorAll("#movies > div");
>>>>>>> be6c133 (검색기능 고침)

    let noresult = true;

    cards.forEach((card) => {
        const text = card.textContent.toLowerCase().includes(keyword);
        card.classList.toggle("hide", !text);
        if (text) noresult = false;
    });

    if (noresult) alert("검색 결과가 없습니다.");
}
