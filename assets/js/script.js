let fadingImg = document.getElementsByClassName('tractorimg');

window.addEventListener('load', () => {
    console.log('loaded');
for (const myElement of fadingImg) {
    myElement.classList.toggle('showImg');
}
});