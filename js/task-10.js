function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxGallery = document.querySelector("#boxes");

const inputElem = document.querySelector("#controls input");

const btnCreate = document.querySelector("button[data-create]");

btnCreate.addEventListener("click", function creteNewArr() {
  const num = [];
  for (let i = 1; i <= inputElem.value; i++) {
    num.push(i);
  }
  console.log(num);
  num.map((elem) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add(".new-div");
    newDiv.style.width = `${20 + elem * 10}px`;
    newDiv.style.height = `${20 + elem * 10}px`;
    newDiv.style.background = getRandomHexColor();
    boxGallery.append(newDiv);
  });
});

const btnDestroy = document.querySelector("button[data-destroy]");

btnDestroy.addEventListener("click", () => {});
