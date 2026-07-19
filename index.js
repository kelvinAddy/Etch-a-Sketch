import { colors } from "./colors.js";

const userInputEl = document.getElementById("user-input");
const submitBtn = document.getElementById("submit-btn");
const gridContainerEL = document.querySelector("main");

let gridNumber = userInputEl.value;

submitBtn.addEventListener("click", () => {
  gridContainerEL.innerHTML = "";
  gridNumber = userInputEl.value;
  createGrid(gridNumber);
});

document.addEventListener("mouseover", (e) => {
  if (e.target.className === "grid") {
    e.target.style.backgroundColor = getRandomColor();
    let brightness = e.target.dataset.brightness;
    e.target.dataset.brightness = brightness - 0.1 > 0 ? brightness - 0.1 : 0;
    e.target.style.filter = `brightness(${e.target.dataset.brightness})`;
  }
});

function getRandomColor() {
  return colors[Math.trunc(Math.random() * colors.length + 1)];
}

function createGrid(gridNumber) {
  let divHtml = "";
  let divContainer = "";
  for (let i = 0; i < gridNumber; i++) {
    divHtml = "";
    for (let j = 0; j < gridNumber; j++) {
      divHtml += `<div data-brightness = "1" class = "grid"></div>`;
    }
    divContainer += `<div>${divHtml}</div>`;
  }

  gridContainerEL.innerHTML = divContainer;
}

createGrid(gridNumber);
