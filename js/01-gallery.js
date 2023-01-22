import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems)

const galleryListRef = document.querySelector(".gallery");

function createImagesCardsMarkup(images) {
  return images
  .map
  ((image) =>
      `<div class="gallery__item">
       <a class="gallery__link" href="${image.original}">
       <img
         class="gallery__image"
         src="${image.preview}"
         data-source="${image.original}"
         alt="${image.descroption}"
       />
     </a>
   </div>`
  )
  .join(" ")
}

const galaryMarkup = createImagesCardsMarkup(galleryItems)
galleryListRef.insertAdjacentHTML("beforeend", galaryMarkup);

// console.log(galleryListRef)


galleryListRef.addEventListener("click", onImageClick)

function onImageClick(event) {
  event.preventDefault()
  if(event.target.nodeName !== "IMG"){
    return
  }
const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

instance.show()
}

