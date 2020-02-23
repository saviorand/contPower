import "./styles.css";
import pic13 from './images/pic13.jpg';

function getCover(){


	const coverImage = document.createElement('span');
    
    coverImage.className = "";

	const myCover = new Image();
	myCover.src = pic13;
	myCover.className = "block"

	coverImage.appendChild(myCover);

	document.getElementById("cover").appendChild(coverImage);
}

getCover()