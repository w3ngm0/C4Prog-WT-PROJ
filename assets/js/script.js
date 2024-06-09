// script.js

let currentImageIndex = 1; // Start with the second image
const images = [
    'assets/img/intro_image1.png',
    'assets/img/intro_image2.png' // Second image
    // Add more image paths as needed
];

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    document.getElementById('intro-image').src = images[currentImageIndex];
}

// Set the initial image source on page load
window.onload = function() {
    document.getElementById('intro-image').src = images[currentImageIndex];
};
