let fadingImg = document.getElementsByClassName('tractorimg');

window.addEventListener('load', () => {
    console.log('loaded');
for (const myElement of fadingImg) {
    myElement.classList.toggle('showImg');
}
});

//goodatSection




//FORM 


// let mySubmit=document.getElementsByClassName('email');
// let myButton=document.getElementById('myButton');

// myButton.addEventListener('click',()=>{
//     for(const email of mySubmit)
//     email.classList.toggle('animateShake');
//     });

//SIMPLE VALIDATION 

// const validate = (form) => {
//     console.log("dette er fra vores form ", form);
  
//     let errors = [];
  
//     console.log(form.email.value);
  
//     if (form.email.value === "") {
//       errors.push("Email er påkrævet\n");
//     }
//     if (errors.length > 0) {
//       console.log("Number of errors are ", errors.length);
//       let msg = "Følgende fejl er fundet:: \n\n";
//       for (let i = 0; i < errors.length; i++) {
//         msg += errors[i];
//       }
//       alert(msg);
//       return false;
//     }
  
//     return true;
//   };

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