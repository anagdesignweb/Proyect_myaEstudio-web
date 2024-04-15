const nav = document.querySelector("#nav");
const divLinks = document.querySelector("#menu1");
const botoncito = document.querySelector("#toggle-menu");

const trackCarousel = document.getElementById("track");
const BASE_URL_IMG = "https://mdlbiyrwccyoblevhoid.supabase.co/storage/v1/object/public/assets";

let menu = [
  {
    name: "Home",
    url: "../index.html",
  },
  {
    name: "Gallery",
    url: "../pages/Gallery.html",
  },
  {
    name: "Contact",
    url: "../pages/Contact.html",
  },
];

/* -- funcion menu desplegable --  */
botoncito.addEventListener("click", () => {
  nav.classList.toggle("visible");
  nav.classList.toggle("invisible");
});

menu.forEach((item) => {
  divLinks.innerHTML += `<a href="${item.url}"><h6>${item.name}</h6></a>`;
});

/*
  funcion para mostrar las cards en el carrusel de la seccion 3
  Funcion printCard -> pinta una sola card
  funcion printAllCards -> pinta con un bucle todas las cards
*/

function printCard(img, title, description) {
  trackCarousel.innerHTML += `<div class="card-1 carrusel">
                                <div class="card-img">
                                  <img src=${BASE_URL_IMG + img} alt="imagen ${title}" class="imgMiniGallery">
                                </div>
                                <div class="card-text">
                                    <div>
                                        <h5>${title}</h5>
                                        <a href="">${description}</a>
                                    </div>
                                    <i class="material-symbols-outlined i-add">add</i>
                                </div>
                              </div>`;
};

function printAllCards (arr){
  for (let i = 0; i < arr.length; i++) {
    printCard(arr[i].url, arr[i].title, arr[i].description);
  }
};

/* ----------- Funciones para cargar datos desde la API -----------  */
/* ENDPOINT - Mini Galeria ID_ClickUp:86bxrerre */

function formatterGalleryFromAPI(data) {
  let formatterArray = [];
  data.forEach((item) => {
    formatterArray.push({
      title: item.name || "",
      description: item.short_description || "",
      url: item.image || "",
    })
  });
  return formatterArray;
}

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
}).then((response) => {
  if (response.status === 200) {
    response.json().then((data) => {
      let formattedData = formatterGalleryFromAPI(data);
      printAllCards(formattedData);
      })
  } else {
    alert("Ha ocurrido un error, intentelo de nuevo mas tarde");
  }
}).catch(() => {
  alert("Ha ocurrido un error, intentelo de nuevo mas tarde");
});


//funcion para recoger datos del input seccion2 reservar sesion

let btnContact = document.getElementById("btnContactHome");
let emailContact = document.getElementById("emailContactHome");

btnContact.addEventListener("click", () => {
  var valor = emailContact.value;
});


