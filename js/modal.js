//----------------------- Artworks display page -----------------------------------//
// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modal-img");

// Get the caption element
var captionText = document.getElementById("caption");

// Get the images
var images = document.getElementsByClassName("modal-image");

// Loop through images and add click event listeners
Array.from(images).forEach(function(img) {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.textContent = this.alt;
    });
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Modal Slides
var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("modal-image");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    modalImg.src = slides[slideIndex - 1].src;
    captionText.textContent = slides[slideIndex - 1].alt;
}