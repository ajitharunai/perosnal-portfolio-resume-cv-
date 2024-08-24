// Scroll-to-Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Typewriter Effect
const typewriterTextName = 'Ajithkumar M';
const typewriterTextIntro = 'Hello! I am Ajithkumar M, a passionate Software Developer.';
let nameIndex = 0;
let introIndex = 0;

function typeWriterName() {
    if (nameIndex < typewriterTextName.length) {
        document.getElementById('name').innerHTML += typewriterTextName.charAt(nameIndex);
        nameIndex++;
        setTimeout(typeWriterName, 100);
    }
}

function typeWriterIntro() {
    if (introIndex < typewriterTextIntro.length) {
        document.getElementById('intro').innerHTML += typewriterTextIntro.charAt(introIndex);
        introIndex++;
        setTimeout(typeWriterIntro, 100);
    }
}

// Trigger the typewriter effect when scrolling to the top of the page
window.addEventListener('scroll', function() {
    if (window.pageYOffset < 50) {
        typeWriterName();
        typeWriterIntro();
    }
});

// Carousel Functionality
const carousel = document.querySelector('.carousel');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});
carousel.addEventListener('mouseleave', () => {
    isDown = false;
});
carousel.addEventListener('mouseup', () => {
    isDown = false;
});
carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    carousel.scrollLeft = scrollLeft - walk;
});
