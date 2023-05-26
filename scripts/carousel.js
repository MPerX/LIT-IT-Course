var carousel = document.querySelector('.carousel');
var carouselInner = carousel.querySelector('.carousel-inner');
var prevButton = carousel.querySelector('.carousel-prev');
var nextButton = carousel.querySelector('.carousel-next');
var slideWidth = carouselInner.querySelector('img').offsetWidth;
var slideCount = carouselInner.childElementCount;
var currentPosition = 0;

prevButton.addEventListener('click', function() {
  if (currentPosition > 0) {
    currentPosition--;
    carouselInner.style.transform = 'translateX(' + (-currentPosition * slideWidth) + 'px)';
  }
});

nextButton.addEventListener('click', function() {
  if (currentPosition < slideCount - 1) {
    currentPosition++;
    carouselInner.style.transform = 'translateX(' + (-currentPosition * slideWidth) + 'px)';
  }
});