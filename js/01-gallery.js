import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const createMarkup = galleryItems
  .map(
    (item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", createMarkup);
galleryContainer.addEventListener("click", onClickGalleryElement);

function onClickGalleryElement(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  event.preventDefault();

  const instance = basicLightbox.create(
  `<img src="${event.target.dataset.source}" width="900" height="600">`,
)

instance.show() ;

galleryContainer.addEventListener("keydown", (event) => {
    if(event.code === "Escape"){
        instance.close();
    }
})
};









