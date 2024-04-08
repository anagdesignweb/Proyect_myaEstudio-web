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

/*  
  Ejercicios:
      1. funcion de formateo de datos.
        function formatter / parser
      2. funcion de informacion al usuario segun el status.
*/ 

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
      // debugger;
      let formattedData = formatterGalleryFromAPI(data);
      // debugger;
      // console.log(formattedData);
      printAllCards(formattedData);
      })
      .catch((e) => {
      });
  } else if (response.status >= 400) {
    console.log("status de mas de 400");
    alert("ERRORRRRR")
  }
});



/*  codigo ANTIGUO
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
    //console.log("status de mas de 200");
    //alert("status de mas de 200");
    res
      .json()
      .then((r) => {
        r.forEach((i) => {
          formatter (arrayApi, i)
        });
        //console.log(arrayApi);
        printAllCards(arrayApi);
      })
      .catch((e) => {
      });
  } if (res.status >= 400) {
    console.log("status de mas de 400");
  }
});
*/


// creo que no funciona el print porque los datos del array cuando llega a esta linea no los tiene aun porque el fetch es una funcion asincrona, entonces tendre o que llamarla dentro del fech o darle un away al fech. SOLUCIONADOOO!! JEJE


/* ENDPOINT - Usuario contacta ID_ClickUp:86by8fyax */

/*
  EJERCICIOS:
    1) necesito recoger los datos del input cuando le den al boton enviar.
    2) necesito enviar a la api dichos datos. Para esto voy a usar Amazon SES.
*/

//funcion para recoger datos del input

let btnContact = document.getElementById("btnContactHome");
let emailContact = document.getElementById("emailContactHome");

btnContact.addEventListener("click", () => {

  debugger;
  alert("el boton funciona");
  var valor = emailContact.value;
  debugger;
  alert("el valor es:"+ valor);

});


