/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function aleatorio(lista) {
    let numAleatorio = Math.floor(Math.random() * lista.length);
    return lista[numAleatorio];
  }

  let picas = ["♦", "♥", "♠", "♣"];
  let numero = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let picascarta = aleatorio(picas);
  let elementpicascarta = document.querySelector("#picascarta");
  elementpicascarta.innerHTML = picascarta;

  let numcarta = aleatorio(numero);
  let elementnumcarta = document.querySelector("#numcarta");
  elementnumcarta.innerHTML = numcarta;

  let elementpicascartaabajo = document.querySelector("#picascartaabajo");
  elementpicascartaabajo.innerHTML = picascarta;

  elementpicascartaabajo.style.transform = "rotate(180deg)";
  if (picascarta == "♥" || picascarta == "♦") {
    elementpicascartaabajo.style.color = "red";
    elementpicascarta.color = "red";
  }
};
