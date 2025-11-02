const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let current = 0;

function showSlide(index) {
    if (index < 0) {
        current = slides.length - 1;
    } else if (index >= slides.length) {
        current = 0;
    } else {
        current = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === current) {
            slide.classList.add('active');
        }
    });
}

prevBtn.addEventListener('click', () => {
    showSlide(current - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(current + 1);
});

// شروع با اولین اسلاید فعال
showSlide(current);