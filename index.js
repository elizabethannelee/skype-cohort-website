"use strict";
<!--The list of images we want to user for our slide show-->
var images= [
  "assets/astrid ultrasound.jpg",
  "assets/skyguide.PNG",
  "assets/eve trends.jpg",
	"assets/customer service.jpg",
  "assets/selfie.jpg",
  "assets/strava.jpg",
  "assets/temperature.jpg",
  "assets/shared memory.PNG",
  "assets/weather prediction.PNG"
];

// A value to store the index of the image we're currently want to show
var currentImage = 0;

function changeImage(offset) {
  currentImage += offset;
  if (currentImage < 0) {
    currentImage = images.length -1;
  }
  else if (currentImage >= images.length) {
    currentImage = 0;
  }
  viewerImg.src = images[currentImage];
}

// This function is run when the page loads (see slideshow.html)
function main() {
  // Calling the function with 0 is a trick to get it to update the image without changing the idnex
  changeImage(0);
}

// Called when we click the next button
function next() {
// Change to the image with the index on higher than the current one
    changeImage(1);
  }

// Called when we click the previous button
function previous() {
	// Change the image with the index one lower than the current one
	changeImage(-1);
	}
