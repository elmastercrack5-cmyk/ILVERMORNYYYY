document.addEventListener("DOMContentLoaded", () => {

const slides = document.querySelectorAll(".slide2");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0; // 🔥 SOLO esta variable

function updateCarousel() {

    slides.forEach(slide => {
        slide.classList.remove("pos-2","pos-1","pos-0","pos1","pos2");
    });

    slides.forEach((slide, i) => {

        let offset = (i - current + slides.length) % slides.length;

        if(offset === 0) slide.classList.add("pos-0");
        if(offset === 1) slide.classList.add("pos1");
        if(offset === 2) slide.classList.add("pos2");
        if(offset === slides.length - 1) slide.classList.add("pos-1");
        if(offset === slides.length - 2) slide.classList.add("pos-2");

    });
}

function nextSlide(){
    current = (current + 1) % slides.length;
    updateCarousel();
}

function prevSlide(){
    current = (current - 1 + slides.length) % slides.length;
    updateCarousel();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

updateCarousel();

// autoplay 🔥
setInterval(nextSlide, 3000);

});