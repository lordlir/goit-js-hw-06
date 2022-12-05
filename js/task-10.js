function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxGallery = document.querySelector("#boxes");

const inputElem = document.querySelector("#controls input");

const btnCreate = document.querySelector("button[data-create]");

btnCreate.addEventListener("click", function creteNewArr() {
  const elements = [];
  for (let i = 1; i <= inputElem.value; i++) {
    const newDiv = document.createElement("div");
    const parametr = `${20 + i * 10}px`;
    newDiv.style.width = parametr;
    newDiv.style.height = parametr;
    newDiv.style.background = getRandomHexColor();
    newDiv.style.border = " 1px solid black";
    elements.push(newDiv);
  }
  console.log(elements);
  boxGallery.append(...elements);
  console.log(boxGallery.innerHTML);
});

const btnDestroy = document.querySelector("button[data-destroy]");

btnDestroy.addEventListener("click", () => {
  boxGallery.innerHTML = "";
});
