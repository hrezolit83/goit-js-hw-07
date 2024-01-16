"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userInput = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

createBtn.addEventListener("click", clickOnBtn);
function clickOnBtn() {
  const amount = Number(userInput.value);
  if(amount >= 1 && amount <= 100) {
    createBoxes(amount);
    userInput.value = "";
  }
}

function createBoxes(amount) {
  divBoxes.innerHTML = "";

  let startBoxSize = 30;
  let stepSize =10;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("wrap");
    box.style.width = `${startBoxSize}px`;
    box.style.height = `${startBoxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    divBoxes.appendChild(box);

    startBoxSize += stepSize;
  }
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  divBoxes.innerHTML = "";
}
