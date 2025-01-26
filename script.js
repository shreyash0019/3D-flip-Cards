let currentSlide = 5;
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');

function changeSlide(index) {
    currentSlide = index;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide === 0) ? items.length - 1 : currentSlide - 1;
    updateSlider();
}

function nextSlide() {
    currentSlide = (currentSlide === items.length - 1) ? 0 : currentSlide + 1;
    updateSlider();
}

function updateSlider() {
    const offset = -currentSlide * 100; // Adjust for the width of the items + gap
    document.querySelector('.list').style.transform = `translateX(${offset}px)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}
