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

   	// Wrapper 

    const postWrapper = document.createElement('article');

    const postHref = document.createElement('a');

    postWrapper.appendChild(postHref)


    // Post preview


    const postPreview = document.createElement('div');

    const previewHeading = document.createElement('h2');

    const previewParagraph = document.createElement('p');

    previewParagraph.setIn


    postPreview.appendChild(previewHeading);
    postPreview.appendChild(previewParagraph);

    postHref.appendChild(postPreview);



   	// Image span

	const cardImage = document.createElement('span');
    
    cardImage.className = "opacity-25";

	const myImage = new Image();
	myImage.src = pic01;
	myImage.className = "block"

	cardImage.appendChild(myImage);

	postHref.appendChild(cardImage);





	return postArticle;


}



}


/*<article class="second relative" id="SecondCard">
              <a href="#" id="SecondHref">
                <div class="absolute top-0 my-16 mx-2">
                <h2>Second post</h2>
                <div class="content">
                </div>
              </div>
              </a>
            </article>*/















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