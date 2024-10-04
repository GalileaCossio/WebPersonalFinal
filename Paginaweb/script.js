const wrapper = document.querySelector('.wrapper');
const carrusel = document.querySelector('.carrusel');
const images = document.querySelectorAll('.carrusel img');
const leftArrow = document.querySelector('.fa-angle-left');
const rightArrow = document.querySelector('.fa-angle-right');

let index = 0;
const imgWidth = images[0].clientWidth; // Ancho de una imagen sin márgenes

// Función para mover el carrusel
const moveCarrusel = () => {
  carrusel.style.transform = `translateX(${-index * imgWidth}px)`;
};

// Cambiar a la siguiente imagen automáticamente cada 5 segundos
let autoSlide = setInterval(() => {
  if (index < images.length - 1) {
    index++;
  } else {
    index = 0;
  }
  moveCarrusel();
}, 5000);

// Evento para flecha derecha
rightArrow.addEventListener('click', () => {
  clearInterval(autoSlide); // Detener el auto slide temporalmente al usar flechas
  if (index < images.length - 1) {
    index++;
  } else {
    index = 0;
  }
  moveCarrusel();
  autoSlide = setInterval(() => { // Reiniciar el auto slide
    if (index < images.length - 1) {
      index++;
    } else {
      index = 0;
    }
    moveCarrusel();
  }, 5000);
});

// Evento para flecha izquierda
leftArrow.addEventListener('click', () => {
  clearInterval(autoSlide); // Detener el auto slide temporalmente al usar flechas
  if (index > 0) {
    index--;
  } else {
    index = images.length - 1;
  }
  moveCarrusel();
  autoSlide = setInterval(() => { // Reiniciar el auto slide
    if (index < images.length - 1) {
      index++;
    } else {
      index = 0;
    }
    moveCarrusel();
  }, 5000);
});
