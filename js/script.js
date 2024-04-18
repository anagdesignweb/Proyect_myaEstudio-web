const nav = document.querySelector("#nav");
const divLinks = document.querySelector("#menu1");
const btnToggle = document.querySelector("#toggle-menu");
let pagesUrl= window.location.pathname;


let menu = [
  {
    name: "Home",
    url: "index.html",
  },
  {
    name: "Gallery",
    url: "./pages/Gallery.html",
  },
  {
    name: "Contact",
    url: "./pages/Contact.html",
  },
];

function pathChangeURL() {
  if (pagesUrl === "/pages/Gallery.html" || pagesUrl === "/pages/Contact.html"){
    menu[0].url = "../index.html";
    menu[1].url = "Gallery.html";
    menu[2].url = "Contact.html";
  }
  menu.forEach((item) => {
    divLinks.innerHTML += `<a href="${item.url}"><h6>${item.name}</h6></a>`;
  });
};


pathChangeURL();

/* -- funcion menu desplegable --  */
btnToggle.addEventListener("click", () => {
  nav.classList.toggle("visible");
  nav.classList.toggle("invisible");
});



