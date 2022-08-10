import { galleryItems } from './gallery-items.js';
// Change code below this line

const mainGallery = document.querySelector('.gallery');
const bodyEl = document.querySelector('body');
function createItemTemplate({preview, original,description}) {
    
    const template = `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    return template;
    
}
function renderGalleryItems() {
    const fullTemplate = galleryItems.reduce((acc, item) => `${acc} ${createItemTemplate(item)}`, '')
    mainGallery.insertAdjacentHTML('beforeend', fullTemplate);
}
renderGalleryItems();

mainGallery.addEventListener('click', (evt) => {
    evt.preventDefault();
    const itemImage = evt.target;
    if (itemImage.tagName !== 'IMG') { return }
    
    const instance = basicLightbox.create(`
    <div class="modal">
        <img
    class="gallery__image"
    src="${itemImage.dataset.source}"
    data-source="${itemImage.dataset.source}"
    alt="${itemImage.alt}"
    />
    </div>`, {
        onClose: (instance) => {
           return true;
    }})
    instance.show()
    // bodyEl.classList.add('noscroll')
    // console.log("🚀", itemImage.attributes)
    // console.log("🚀", itemImage.alt)
    closeOnEscape();

})
// function closeOnEscape() {
//     const modalEL = document.querySelector('.modal');
//     modalEL.addEventListener('keydown', (evt) => {
//         console.log(evt);
//     })
// }    
console.log(galleryItems);
