const nav = document.querySelector("#nav");
const toggle = document.querySelector("#toggle");
const divLinks = document.querySelector(".menu-1");


toggle.addEventListener("click", () => {
  nav.classList.add("visible");
});



let menu = [
  {
    name: "Home",
    url: "./index.html",
  },
  {
    name: "Gallery",
    url: "./Gallery.html",
  },
  {
    name: "Contact",
    url: "./Contact.html",
  },
];


menu.forEach((item) => {
    divLinks.innerHTML +=`<a href="${item.url}">${item.name}</a`;
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