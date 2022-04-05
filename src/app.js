/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var top = document.querySelector(".topBox");
  var numb = document.querySelector(".number");
  var bottom = document.querySelector(".bottomBox");
  var button = document.querySelector(".btn");
  const sign = ["♦", "♥", "♠", "♣"];
  const value = [
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
  const color = ["black", "red"];
  let currentSign = sign[Math.floor(Math.random() * sign.length)];
  let currentValue = value[Math.floor(Math.random() * value.length)];

  if (currentSign === "♦" || currentSign === "♥") {
    top.style.color = color[1];
    bottom.style.color = color[1];
  } else {
    top.style.color = color[0];
    bottom.style.color = color[0];
  }
  numb.innerHTML = currentValue;
  top.innerHTML = currentSign;
  bottom.innerHTML = currentSign;
  button.addEventListener("click", function() {
    var top = document.querySelector(".topBox");
    var numb = document.querySelector(".number");
    var bottom = document.querySelector(".bottomBox");
    var button = document.querySelector(".btn");
    let currentSign = sign[Math.floor(Math.random() * sign.length)];
    let currentValue = value[Math.floor(Math.random() * value.length)];

    if (currentSign === "♦" || currentSign === "♥") {
      top.style.color = color[1];
      bottom.style.color = color[1];
    } else {
      top.style.color = color[0];
      bottom.style.color = color[0];
    }
    numb.innerHTML = currentValue;
    top.innerHTML = currentSign;
    bottom.innerHTML = currentSign;
  });
};
