import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListRef = document.querySelector(".gallery");

function createImagesCardsMarkup(images) {
  return images
  .map
  ((image) =>
      `<a class="gallery__item" href="${image.original}">
       <img
         class="gallery__image"
         src="${image.preview}"
         alt="${image.description}"
       />
     </a>`
  )
  .join(" ")
}

const galaryMarkup = createImagesCardsMarkup(galleryItems)
galleryListRef.insertAdjacentHTML("beforeend", galaryMarkup);

new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
})

console.log(galleryListRef)