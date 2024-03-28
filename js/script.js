const nav = document.querySelector("#nav");
const divLinks = document.querySelector("#menu1");
const botoncito = document.querySelector("#toggle-menu");

const trackCarousel = document.getElementById("track");



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
*/

/*
funcion para mostrar las cards en el carrusel de la seccion 3
Funcion printCard -> pinta una sola card
funcion printAllCards -> pinta con un bucle todas las cards
*/

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
};


function printAllCards (arr){
  for (let i = 0; i < arr.length; i++) {
    debugger;
    console.log(arr[i].title);
    console.log(arr.length);
    printCard(arr[i].title, arr[i].title, arr[i].title);
    debugger;
  }
};

/*
Ejercicios:
1. funcion de formateo de datos.
function formatter / parser

2. funcion de informacion al usuario segun el status.
*/

/* Funciones para cargar datos desde la API */

let arrayApi = [];

function formatter (ar, x){
  ar.push({
    title: x.name || "",
    description:x.short_description || "",
    url: x.image || "",
  })
};


fetch("https://mdlbiyrwccyoblevhoid.supabase.co/rest/v1/sections?select=*", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kbGJpeXJ3Y2N5b2JsZXZob2lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5NjA3MDgsImV4cCI6MjAyNjUzNjcwOH0.RNheTQLsl5dmh4406McR8ttAmwzfoxnEiDo4gutMCbA",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kbGJpeXJ3Y2N5b2JsZXZob2lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5NjA3MDgsImV4cCI6MjAyNjUzNjcwOH0.RNheTQLsl5dmh4406McR8ttAmwzfoxnEiDo4gutMCbA",
  },
  mode: "cors",
}).then((res) => {
  if (res.status === 200) {
    console.log("status de mas de 200");
    alert("status de mas de 200");
    res
      .json()
      .then((r) => {
        r.forEach((i) => {
          formatter (arrayApi, i)
        });
        console.log(arrayApi);
        printAllCards(arrayApi);
      })
      .catch((e) => {
      });
  } if (res.status >= 400) {
    console.log("status de mas de 400");
  }
});



// creo que no funciona el print porque los datos del array cuando llega a esta liniea no los tiene aun porque el fecch es una funcion asincrona, entonces tendre o que llamarla dentro del fech o darle un away al fech.SOLUCIONADOOO!! JEJE

