
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

let position = 0;


function positionInit(){
    document.querySelector("#track").style.left=`0px`;
}

function moveNext(){
    position = position -200;
    debugger;
    track.style.left = `${position}px`;
    debugger;
};

function moveBack() {
    track.style.left = "200px";
};


// positionInit();