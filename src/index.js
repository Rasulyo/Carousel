import './index.less';

const carousel = document.querySelector('.carousel');
const carouselImages = document.querySelectorAll('.carousel-item img');


const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

let counter = 0;
let size = carouselImages[0].clientWidth;


nextBtn.addEventListener('click', () => {
    if (counter === 2) {
        counter = -1
    }
    carousel.style.transition = 'transform 0.1s ease-in-out';
    counter++;
    console.log(counter)
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';

})

prevBtn.addEventListener('click', () => {
    if (counter === 0) {
        counter = 3
    }
    carousel.style.transition = 'transform 0.1s ease-in-out';
    counter--;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
})
