import { galleryItems } from './gallery-items.js';
// Change code below this line

// {/* <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div> */}
console.log(galleryItems)
const galleryListRef = document.querySelector(".gallery");
// const galleryMarkup = galleryItems(items);

const createGalleryMarkup = (preview) => {
    galleryItems.map(item =>{
        return 
       `<div class="gallery__item">
       <a class="gallery__link" href="large-image.jpg">
         <img
           class="gallery__image"
           src="small-image.jpg"
           data-source="large-image.jpg"
           alt="Image description"
         />
       </a>
     </div>`
    })
    console.log(galleryMarkup)
}


// const markup = galleryItems
//   .map((galleryItem) => `<li class="list-item"><img class="image" src=${galleryItem.preview}, alt=${galleryItem.description}></li>`)
//   .join("");

//   galleryListRef.insertAdjacentHTML("beforeend", markup);

// console.log(galleryItems);
