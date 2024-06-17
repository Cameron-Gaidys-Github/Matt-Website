document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = Array.from(document.querySelectorAll('.banner-slide'));
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index < 0) {
            currentSlide = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        for (let i = 0; i < totalSlides; i++) {
            slides[i].style.opacity = '0'; // Hide all slides
        }

        slides[currentSlide].style.opacity = '1'; // Show the current slide
    }

    document.getElementById('prev-slide').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    document.getElementById('next-slide').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    // Auto advance slides every 15 seconds
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 15000);

    window.addEventListener('scroll', function() {
        var header = document.getElementById('header');
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 0) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    showSlide(currentSlide);
});
