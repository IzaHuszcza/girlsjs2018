let carousel = document.querySelector('.carousel');
let stage = document.querySelector('.carousel-stage');
let prev = document.querySelector('.carousel-prev');
let next = document.querySelector('.carousel-next');
let slide = document.querySelectorAll('.single-slide');
      
var slideWidth = slide.clientWidth;
console.log(slideWidth);

var slideWidth = slide[0].clientWidth;
console.log(slideWidth);

var currentIndex = 0;

var slidesNumber = slide.length - 1; 

function goToSlide(index){
    carousel.style.left = index * (-slideWidth) + "px";
    currentIndex = index;
}

console.log(goToSlide(currentIndex));

function slideToNext(){
    goToSlide(currentIndex + 1);   
}

function slideToPrev(){
    goToSlide(currentIndex - 1);
}

function bindEvents() {
    prev.addEventListener('click', slideToPrev);
    next.addEventListener('click', slideToNext);
}

bindEvents();

function goToSlide(index) {
    if (index < 0) {
        index = slidesNumber;
    } else if (index > slidesNumber) {
        index = 0;
    }

    carousel.style.left = index * (-slideWidth);
    currentIndex = index;
}

function autorotate() {
    setInterval(slideToNext, "4000");
}

autorotate();

let person = {   
    name: 'Natalia',
    age: 27,
    hobby: ['swimming', 'cycling', 'fantasy books'],
    city: 'Poznan',
    family: {
        mom: 'Anna',
        dad: 'Paweł',
        sister: 'Karolina'
    }
}

console.log(person.family.sister);
