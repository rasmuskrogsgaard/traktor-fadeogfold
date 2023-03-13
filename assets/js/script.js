let fadingImg = document.getElementsByClassName('tractorimg');

window.addEventListener('load', () => {
    console.log('loaded');
for (const myElement of fadingImg) {
    myElement.classList.toggle('showImg');
}
});

// foldOut

myFoldOutTrigger.addEventListener('click', () => {


    myFoldOutText.classList.toggle('showFoldOut');



    if (myFoldOutTrigger.innerText == 'Vis mindre') {

        myFoldOutTrigger.innerText = 'Vis mere';
    }
    else {
        myFoldOutTrigger.innerText = 'Vis mindre';
    }



});