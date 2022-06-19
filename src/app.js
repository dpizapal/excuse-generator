/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here

let generateExcuse = () => {
  let who = [
    "The stupid Paladin",
    "My granma",
    "An ancient red dragon",
    "Innocent Raz",
    "My little brother",
    "Great Cthulhu"
  ];

  let action = ["ate", "pissed", "lost", "broked", "took", "stole"];

  let posseion = [
    "my sword",
    "the treasure",
    "my keys",
    "the horse",
    "my +2 ring"
  ];

  let where = [
    "during my guard",
    "in my house",
    "lastnight",
    "in the dungeons",
    "in Varovia"
  ];

  let whoindx = Math.floor(Math.random() * who.length);
  let actionindx = Math.floor(Math.random() * action.length);
  let possindx = Math.floor(Math.random() * posseion.length);
  let whereindx = Math.floor(Math.random() * where.length);

  let excuse =
    who[whoindx] +
    " " +
    action[actionindx] +
    " " +
    posseion[possindx] +
    " " +
    where[whereindx];
  document.querySelector("#the-excuse").innerHTML = excuse;
};

document
  .querySelector("#btn")
  .addEventListener("click", () => generateExcuse());
console.log(generateExcuse);

window.onload = generateExcuse;
