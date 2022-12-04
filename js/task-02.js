const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listIndreds = document.querySelector("#ingredients");
// console.log(listIndreds);

// for (const inred of ingredients) {
//   const ingredItem = document.createElement("li");
//   ingredItem.classList.add("item");
//   ingredItem.textContent = inred;
//   console.log(ingredItem);
//   listIndreds.appendChild(ingredItem);
//}
const Elements = ingredients.map((ingred) => {
  const ingredItem = document.createElement("li");
  ingredItem.classList.add("item");
  ingredItem.textContent = ingred;
  return ingredItem;
});
listIndreds.append(...Elements);
