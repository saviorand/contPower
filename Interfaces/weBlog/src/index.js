import "./styles.css";
import Berg from './images/berg.jpg';
import pic01 from './images/pic01.jpg'
import pic02 from './images/pic02.jpg'
import pic03 from './images/pic03.jpg'
import pic04 from './images/pic04.jpg'
import pic05 from './images/pic05.jpg'


for (let i = 0; i < 1; i++){

  loadImages(('0' + i));

}

function loadImages(number){

   function theImage(){

	const cardImage = document.createElement('span');
    
    cardImage.className = "opacity-25";

	const myImage = new Image();
	myImage.src = pic01;
	myImage.className = "block"

	cardImage.appendChild(myImage);

	return cardImage;
}

let aHref = document.getElementById("SecondHref");
let hrefParent = aHref.parentNode;

hrefParent.insertBefore(theImage(), aHref)

}




/*function card1(){

	const cardFirst = document.createElement('span');
    
    cardFirst.className = "opacity-25";

	const myBerg = new Image();
	myBerg.src = Berg;
	myBerg.className = "block"

	cardFirst.appendChild(myBerg);

	return cardFirst;
}

let aHref = document.getElementById("FirstHref");
let hrefParent = aHref.parentNode;

hrefParent.insertBefore(card1(), aHref)*/