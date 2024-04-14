
const rightBtn = document.querySelector("#button-back");
const leftBtn = document.querySelector("#button-prev");

const content = document.querySelector(".carrusel-track");

rightBtn.addEventListener("click", ()=> {
    content.scrollLeft -= 380;
});

leftBtn.addEventListener("click", ()=> {
    content.scrollLeft += 380;
});