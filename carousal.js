let carousel = document.querySelector('.carousel-inner');
let carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
let itemWidth = carouselItems[0].offsetWidth + 20; // Width of item + margin-right

function scrollCarousel(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > carouselItems.length - 3) {
        currentIndex = carouselItems.length - 3;
    }
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}