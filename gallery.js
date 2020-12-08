const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
// to grab all the images, use queryselectorall
const galleryImgs = document.querySelectorAll('.gallery-img');
let currentlySelected = 0;

prevBtn.addEventListener('click', function() {
    // coming back to you soon
});

nextBtn.addEventListener('click', function() {
    galleryImgs[currentlySelected].classList.remove("active");
});