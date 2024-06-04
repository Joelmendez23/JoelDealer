let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Cambiar diapositiva automáticamente cada 4 segundos
let autoSlide = setInterval(() => changeSlide(1), 4000);

// Detener cambio automático al pasar el mouse sobre el slider
document.querySelector('.slider').addEventListener('mouseover', () => {
    clearInterval(autoSlide);
});

// Reiniciar cambio automático al quitar el mouse del slider
document.querySelector('.slider').addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => changeSlide(1), 4000);
});
