const btnRandom = document.querySelector("#random-boton")

function moverAleatoriamente (boton){
    boton.style.fontWeight = "bolder"
    boton.style.position = "absolute"
    boton.style.top = Math.floor(Math.random() * 90 +5) + "%";
    boton.style.left = Math.floor(Math.random() * 90 +5) + "%";


}

btnRandom.addEventListener("mouseenter", function (e){
    moverAleatoriamente (e.target)
})
