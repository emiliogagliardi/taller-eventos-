const btn = document.querySelector("button");

function alerta()
{
    alert("Hola! Soy el div");
}

btn.addEventListener("click",alerta); //no anda con esto, anda con el onclick del html y la funcion alerta (No pude encontrar el porque no anda con esto)
