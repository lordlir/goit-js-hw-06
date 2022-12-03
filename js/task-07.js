const rengeRef = document.querySelector("#font-size-control");
console.log(rengeRef);

let textRef = document.querySelector("#text");
console.log(textRef.textContent);

textRef.style.fontSize = `${rengeRef.value}px`;

rengeRef.addEventListener("input", changeFontSize);

function changeFontSize() {
  let rengeNumb = Number(rengeRef.value);
  console.log(rengeNumb);

  textRef.style.fontSize = `${rengeNumb}px`;
  console.log(textRef.style.fontSize);
}
