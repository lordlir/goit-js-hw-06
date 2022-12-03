const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listGallRef = document.querySelector(".gallery");
console.log(listGallRef);

// for (const { url, alt } of images) {
// const itemGallRef = document.createElement("li");
// itemGallRef.classList.add("gallery__item");
// listGallRef.appendChild(itemGallRef);

// const imgGallRef = document.createElement("img");
// imgGallRef.src = url;
// imgGallRef.atl = alt;
// imgGallRef.width = 200;

//   itemGallRef.appendChild(imgGallRef);
// }
const itemElement = images.map(({ url, alt }) => {
  const itemGallRef = document.createElement("li");
  itemGallRef.classList.add("gallery__item");

  const imgGallRef = document.createElement("img");
  imgGallRef.src = url;
  imgGallRef.atl = alt;
  imgGallRef.width = 200;
  itemGallRef.append(imgGallRef);
  return itemGallRef;
});
listGallRef.append(...itemElement);
