const listItem = document.querySelectorAll(".item");
console.log(`number of categories `, listItem.length);
listItem.forEach((item) => {
  const textValue = item.querySelector("h2");
  const itemNumber = item.querySelectorAll(`li`);
  console.log(`Category: ${textValue.textContent}`);
  console.log(`Elements: `, itemNumber.length);
});

//--------------------------------------------------
