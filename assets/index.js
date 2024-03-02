let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slider-image');
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function changeSlide() {
    console.log("i got called")
    slideIndex++;
    if (slideIndex >= document.querySelectorAll('.slider-image').length) {
        slideIndex = 0;
    }
    showSlides();
}

showSlides();
