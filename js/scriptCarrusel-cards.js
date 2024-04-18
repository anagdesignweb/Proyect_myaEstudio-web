
const rightBtn = document.querySelector("#button-back");
const leftBtn = document.querySelector("#button-prev");
const content = document.querySelector(".carrusel-track");

const trackCarousel = document.getElementById("track");
const BASE_URL_IMG = "https://mdlbiyrwccyoblevhoid.supabase.co/storage/v1/object/public/assets";


rightBtn.addEventListener("click", ()=> {
    content.scrollLeft -= 380;
});

leftBtn.addEventListener("click", ()=> {
    content.scrollLeft += 380;
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
                                          <a href="./pages/Gallery.html">${description}</a>
                                      </div>
                                      <a href="./pages/Gallery.html">
                                        <i class="material-symbols-outlined i-add">add</i>
                                      </a>
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
      debugger;
      console.log(response.status);
      alert("Ha ocurrido un error, intentelo de nuevo mas tarde");
    }
  }).catch(() => {
    alert("Ha ocurrido un error, intentelo de nuevo mas tarde");
  });
  
  