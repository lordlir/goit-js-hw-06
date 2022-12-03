const spanRef = document.querySelector(".color");
console.log(spanRef.textContent);

const btnChangeColor = document.querySelector(".change-color");
console.log(btnChangeColor);

btnChangeColor.addEventListener("click", () => {
  document.body.style.background = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
  console.log(spanRef.textContent);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
