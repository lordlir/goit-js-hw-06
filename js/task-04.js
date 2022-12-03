const plusBtn = document.querySelector('button[data-action="increment"]');
console.log(plusBtn.dataset.action);

const minusBtn = document.querySelector('button[data-action="decrement"]');
console.log(minusBtn.dataset.action);

const counter = document.querySelector("#value");

let counterValue = 0;

plusBtn.addEventListener("click", () => {
  counterValue++;
  console.log("click");
  counter.innerHTML = counterValue;
  console.log(counterValue);
});

minusBtn.addEventListener("click", () => {
  counterValue--;
  console.log("click");
  counter.innerHTML = counterValue;
  console.log(counterValue);
});
