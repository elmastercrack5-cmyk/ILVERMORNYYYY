document.addEventListener("DOMContentLoaded", () => {

let index = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function mostrarSlide(i){
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
}

// BOTONES
nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide(index);
});

// AUTOMÁTICO
setInterval(() => {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
}, 4000);

});