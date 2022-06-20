const on = document.getElementById('on');
const off = document.getElementById('off');
const lampada = document.getElementById('lampada');

function lampadaOn () {
    lampada.src = "./img/ligada.jpg";
}

function lampadaOff () {
    lampada.src = "./img/desligada.jpg";
}

function lampadaBroken () {
    lampada.src = "./img/quebrada.jpg";
}

on.addEventListener ('click', lampadaOn);
off.addEventListener ('click', lampadaOff);
lampada.addEventListener('mouseover', lampadaOn);
lampada.addEventListener('mouseleave', lampadaOff);
lampada.addEventListener('dblclick', lampadaBroken);
