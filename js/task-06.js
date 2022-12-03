const textInputElem = document.querySelector("#validation-input");
console.log(textInputElem);
const lengthValule = document.querySelector('input[data-length="6"]');
console.log(lengthValule.dataset.length);
const lengthDefoltRef = Number(lengthValule.dataset.length);
console.log(lengthDefoltRef);

textInputElem.addEventListener("blur", validaionInputOfLength);

function validaionInputOfLength() {
  let textInputLength = textInputElem.value.length;
  //   if (textInputLength === lengthDefoltRef) {
  //     textInputElem.classList.add("valid");
  //     textInputElem.classList.remove("invalid");
  //   }
  //   if (textInputLength !== lengthDefoltRef) {
  //     textInputElem.classList.add("invalid");
  //   }
  //   if (textInputLength === 0) {
  //     textInputElem.classList.remove("invalid");
  //     textInputElem.classList.remove("valid");
  //   }
  switch (textInputLength) {
    case lengthDefoltRef:
      textInputElem.classList.add("valid");
      textInputElem.classList.remove("invalid");
      break;
    case 0:
      textInputElem.classList.remove("valid");
      textInputElem.classList.remove("invalid");
      break;

    default:
      textInputElem.classList.add("invalid");
      break;
  }
  console.log(textInputLength);
}
