/*
Necesito:
1. mover la caja de las cards.
Para ello tengo que tener :
-variables para los botones.
-funciones una para mover la caja hacia la derecha y otra hacia la izquierda.
-variable que cargue las fotos *cuando consiga que funcionen los botones
*/


let back = document.querySelector("#button-back").onclick=moveBack;
let next = document.querySelector("#button-prev").onclick=moveNext;
let track = document.querySelector("#track");
let parent = document.querySelector(".section-3");
let position = 0;
let positionParent = parent.offsetLeft;
let positionChild = track.offsetLeft;
/*
let positionParent = window.getComputedStyle(parent).left;
let positionChild = window.getComputedStyle(track).left; 
*/

// function positionInit(){
//     track.style.left = `${-300}px`;
//     console.log(track.style.left);
// };// EL PROBLEMA ESTA EN LA POSICION DE LA CAJA ROJA DESDE CSS PERO NO HAYYY MANERRRRRRRRRRA

function moveNext(){
    position -= 200;
    track.style.left = `${position}px`;
    //verPosicion();
    console.log(position);
};

function moveBack() {
    position += 200;
    track.style.left = `${position}px`;
   // verPosicion();
};

function verPosicion(){
    console.log(positionParent);
    console.log(positionChild);
}


// positionInit();
verPosicion();
/* Ahora quiero ponerle topes a la caja,
-si la caja esta en el borde de su izquierda que no siga saliendose de la caja, y
-si la caja llega a su tope de la derecha que no siga aumentando 
para ello tengo que comprobar la posicion actual de la caja y comparar*/

