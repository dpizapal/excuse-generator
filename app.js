/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};
let generateExcuse = () => {
  let who = [
    "The dog",
    "My granma",
    "A vulture",
    "My bird",
    "My little brother",
    "A comedian"
  ];

  let action = ["ate", "pissed", "crushed", "broked", "took", "stole"];

  let posseion = [
    "my homework",
    "the car",
    "my keys",
    "the computer",
    "my umbrella"
  ];

  let where = [
    "during my breakfast",
    "in my house",
    "lastnight",
    "on the street",
    "at work"
  ];

  let whoindx = Math.floor(Math.random() * who.length);
  let actionindx = Math.floor(Math.random() * action.length);
  let possindx = Math.floor(Math.random() * posseion.length);
  let whereindx = Math.floor(Math.random() * where.length);

  return (
    who[whoindx] +
    " " +
    action[actionindx] +
    " " +
    posseion[possindx] +
    " " +
    where[whereindx]
  );
};
console.log(generateExcuse);
