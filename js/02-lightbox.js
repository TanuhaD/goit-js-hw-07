import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector(".gallery");
function makeMarkup() {
  let markup = "";
  for (const item of galleryItems) {
    const { preview, original, description } = item;
    markup += `<div class="gallery"><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a></div>`
  }
  return markup;
}
const markup = makeMarkup();
gallery.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery a', { 
  captionsData: 'alt',
  captionDelay: 250, 
  alertError: false 
});
console.log(lightbox);