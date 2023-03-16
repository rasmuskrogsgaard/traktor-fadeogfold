let fadingImg = document.getElementsByClassName('tractorimg');

window.addEventListener('load', () => {
    console.log('loaded');
for (const myElement of fadingImg) {
    myElement.classList.toggle('showImg');
}
});


//fadeIn bottom
let myTrigger = document.getElementById('myFoldOutTrigger');
let myTriggerElement = document.getElementById('myFoldOutText');


myTrigger.addEventListener('click',()=>{
    myTriggerElement.classList.toggle('fadeIn');
})