let currentIndex = 0; 
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;


const firstClone = items[0].cloneNode(true);
const lastClone = items[totalItems - 1].cloneNode(true);


carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, items[0]);


const newTotalItems = totalItems + 2;

function moveSlide(direction) {
    
    currentIndex += direction;

   
    if (currentIndex === -1) {
        currentIndex = totalItems - 1; 
        setTimeout(() => {
            carousel.style.transition = 'none'; 
            carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
        }, 500); 
    } else if (currentIndex === newTotalItems) {
        currentIndex = 1; 
        setTimeout(() => {
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
        }, 500); 
    } else {
        const offset = -currentIndex * 100; 
        carousel.style.transition = 'transform 0.5s ease'; 
        carousel.style.transform = `translateX(${offset}%)`;
    }
}