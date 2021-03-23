import './index.less';

const carousel = document.querySelector('.carousel');
const carouselImages = document.querySelectorAll('.carousel-item img');
const f_circle = document.querySelector('.first_circle')
const s_circle = document.querySelector('.second_circle')
const t_circle = document.querySelector('.third_circle')


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

function goToFirst(){
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    return counter = 0
}

f_circle.addEventListener('click', goToFirst)

s_circle.addEventListener('click', () => {
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    return counter = 1

})
t_circle.addEventListener('click', () => {
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    return counter = 2
})
    
