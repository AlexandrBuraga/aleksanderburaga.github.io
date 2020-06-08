let myImage = document.querySelector('img')

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/like_heaven_and_earth_1.jpg') { myImage.setAttribute ('src', 'images/Planets_lined_up_in_a_row.jpg');}
	else{
		myImage.setAttribute ('src', 'images/like_heaven_and_earth_1.jpg')
	}
}

let  myButton = document.querySelector('button');
let  myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'This site is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'This site is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}