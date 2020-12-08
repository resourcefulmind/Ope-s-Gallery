const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
// to grab all the images, use queryselectorall
const galleryImgs = document.querySelectorAll('.gallery-img');
let currentlySelected = 0;

prevBtn.addEventListener('click', function() {
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected--; // currentlySelected = currentlySelected - 1

    galleryImgs[currentlySelected].classList.add("active");
    nextBtn.disabled = false;

    if (currentlySelected === 0) {
        prevBtn.disabled = true;
    }
});

// the below code is to remove the prvious picture when the user clicks next
nextBtn.addEventListener('click', function() {
    galleryImgs[currentlySelected].classList.remove("active");
  currentlySelected++;  // currentlySelected++ = currentlySelected + 1
  galleryImgs[currentlySelected].classList.add("active");
//   after clicking next, the below enables the previous button to light up
  prevBtn.disabled = false;
});

// this would disable the next button when the user gets to the end of the images
if (galleryImgs.length === currentlySelected + 1) {
    nextBtn.disabled = true;
}