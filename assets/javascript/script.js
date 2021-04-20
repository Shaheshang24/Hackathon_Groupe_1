const gallery = document.querySelector('.gallery');
const getVal = (elem, style) => parseInt(window.getComputedStyle(elem).getPropertyValue(style));
const getHeight = (item) => item.querySelector('.content').getBoundingClientRect().height;

const resizeAll = () => {
    const altura = getVal(gallery, 'grid-auto-rows');
    const separacion = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(item => {
        item.style.gridRowEnd = `span ${Math.ceil((getHeight(item) + separacion) / (altura + separacion))}`;
    });
}

window.addEventListener('load', resizeAll);
window.addEventListener('resize', resizeAll);

gallery.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function () {
        gallery.removeChild(item);
    })
});
