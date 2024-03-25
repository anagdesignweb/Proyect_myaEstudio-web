const nav = document.querySelector("#nav");
const divLinks = document.querySelector("#menu1");
const botoncito = document.querySelector("#toggle-menu");

let menu = [
  {
    name: "Home",
    url: "pages/index.html",
  },
  {
    name: "Gallery",
    url: "pages/Gallery.html",
  },
  {
    name: "Contact",
    url: "pages/Contact.html",
  },
];


//funcion menu desplegable

botoncito.addEventListener("click",  () => {
    nav.classList.toggle("visible");
    nav.classList.toggle("invisible");
  })


menu.forEach((item) => {
    divLinks.innerHTML +=`<a href="${item.url}">${item.name}</a>`;
});











/*
----Esta funcion es la basica, utilizando el bucle for y llamando a la funcion despues para que se muestre.
pero la he sustituido por un forEach----

function mostrarMenu() {

  for (let g = 0; g < menu.length; g++) {
    divLinks.insertAdjacentHTML(
      "beforeend",
      `
        <a href="${menu[g].url}">${menu[g].name}</a>
      `
    );
  }

}
mostrarMenu();


for (let i = 0; i < menu.length; i++) {
  console.log(menu[i].name);
}
*/