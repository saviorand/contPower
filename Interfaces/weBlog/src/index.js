import "./styles.css";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import pic01 from './images/berg.jpg';
import pic02 from './images/pic01.jpg';
import pic03 from './images/pic02.jpg';
import pic04 from './images/pic03.jpg';
import pic05 from './images/pic04.jpg';
import pic06 from './images/pic05.jpg';

import pic13 from './images/pic13.jpg';


// Loading images for post gallery

const picArray = [pic01, pic02, pic03, pic04, pic05, pic06];

function loadImages(number){

   function theImage(){

	const cardImage = document.createElement('span');
    
    cardImage.className = "opacity-25";

	const myImage = new Image();
	myImage.src = picArray[number - 1];
	myImage.className = "block"

	cardImage.appendChild(myImage);

	return cardImage;
}

let aHref = document.getElementById(("Href0" + number));
let hrefParent = aHref.parentNode;

hrefParent.insertBefore(theImage(), aHref)

}



for (let i = 1; i < 7; i++){

  loadImages(i);

}


/* Loading post cover image


function appendCover() {

	const homebtn = document.createElement('button');

	homebtn.innerHTML = 'Home';
	homebtn.onclick =  window.location.href = './'

} */

         