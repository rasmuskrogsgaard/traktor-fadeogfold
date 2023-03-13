//SCRIPT FOR TRAKTOR

let myFadeImages = document.getElementsByClassName('fadeImages');

let myFoldOutElement = document.getElementById('myFoldOut');
let myFoldOutTrigger = document.getElementById('myFoldOutTrigger');
let myFoldOutText = document.getElementById('myFoldOutText');

myFoldOutTrigger.innerText = 'Vis mere';


window.addEventListener('load', () => {
    console.log('loaded');
    // image fadeIns



    /*   for (const myElement in myFadeImages) {
          console.log(myElement);
          //myElement.classList.toggle('showImage');
      } */

    // for of giver os dom elementer !!!
    for (const myElement of myFadeImages) {
        //console.log(myElement);
        myElement.classList.toggle('showImage');
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