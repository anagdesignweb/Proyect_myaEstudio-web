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

botoncito.addEventListener("click", () => {
  nav.classList.toggle("visible");
  nav.classList.toggle("invisible");
});

menu.forEach((item) => {
  divLinks.innerHTML += `<a href="${item.url}">${item.name}</a>`;
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

/*
funcion para mostrar las cards en el carrusel de la seccion 3
Funcion printCard -> pinta una sola card
funcion printAllCards -> pinta con un bucle todas las cards
*/

const trackCarousel = document.getElementById("track");


function printCard(img, title, description) {

  trackCarousel.innerHTML += `<div class="card-1 carrusel">
                                <div class="card-img">${img}
                                </div>
                                <div class="card-text">
                                    <div>
                                        <h5>${title}</h5>
                                        <a href="">${description}</a>
                                    </div>
                                    <i class="material-symbols-outlined i-add">add</i>
                                </div>
                              </div>'`;
}


printCard("imagen", "titulillo", "blablabla");

let arrayPrueba = [2,4,7,5,3];


function printAllCards (){

  for (let i = 0; i < arrayPrueba.length; i++) {
    console.log(arrayPrueba[i]);
    printCard(arrayPrueba[i], arrayPrueba[i], arrayPrueba[i])
  }

}
printAllCards();

/*
Ejercicios:
1. funcion de formateo de datos.
function formatter / parser

2. funcion de informacion al usuario segun el status.
*/



/* Funciones para cargar datos desde la API */

let array = [];

fetch("https://gkfibffviwvmphzqvuqe.supabase.co/rest/v1/stories?select=*", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrZmliZmZ2aXd2bXBoenF2dXFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5ODQ5NTgsImV4cCI6MjAyNjU2MDk1OH0.M--1JO0f0zos59CcBc8oCPKZmz2su3qx0Z2hOqQK9c0",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrZmliZmZ2aXd2bXBoenF2dXFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5ODQ5NTgsImV4cCI6MjAyNjU2MDk1OH0.M--1JO0f0zos59CcBc8oCPKZmz2su3qx0Z2hOqQK9c0",
  },
  mode: "cors",
})
  .then((res) => {
    if (res.status === 200) {
      res
        .json()
        .then((r) => {
          debugger;
          array = [...r];
          console.log(array.length);
          console.log(array[0]);
        })
        .catch((e) => {
          debugger;
        });
    }
  })
  .catch((err) => {
    debugger;
  });



