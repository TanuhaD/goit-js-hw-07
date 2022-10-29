import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");
function makeMarkup() {
  let markup = "";
  for (const item of galleryItems) {
    const { preview, original, description } = item;
    markup += `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </div>`;
  }
  return markup;
}

let instance = {};

function showModalWindow(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const srcImage = event.target.dataset.source;
  instance = basicLightbox.create(`<img src="${srcImage}">`, {
    onShow: function () {
        document.addEventListener("keydown", modalOnEscapeClose);
      },
    onClose: function () {
        document.removeEventListener("keydown", modalOnEscapeClose);
      },
  });
  instance.show();
}

function modalOnEscapeClose(e) {
  console.log(e);
  if (e.code === "Escape") {
    instance.close();
  }
}

const markup = makeMarkup();
gallery.innerHTML = markup;
gallery.addEventListener("click", showModalWindow);









