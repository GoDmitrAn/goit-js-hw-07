import { galleryItems } from './gallery-items.js';
// Change code below this line
const mainGalleryTask2 = document.querySelector('.gallery');
function createItemTemplateTask2({preview, original,description}) {
    
    const template = `<li><a class="gallery__item" href="${original}">
                            <img class="gallery__image"
                                src="${preview}" 
                                alt="${description}" 
                                
                            />
                            </a>
                        </li>` ;
    return template;
}
function renderGalleryItemsTask2() {
    const fullTemplate = galleryItems.reduce((acc, item) => `${acc} ${createItemTemplateTask2(item)}`, '')
    mainGalleryTask2.insertAdjacentHTML('beforeend', fullTemplate);
}
renderGalleryItemsTask2();
let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt" , 
    captionDelay: 250,
});
console.log(galleryItems);
