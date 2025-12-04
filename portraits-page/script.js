// Select elements
const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightboxImg");
const closeBtn = document.querySelector("#closeBtn");

// Open Lightbox
galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.classList.remove("hidden");
    });
});

// Close Lightbox
closeBtn.addEventListener("click", () => {
    lightbox.classList.add("hidden");
});

// Close on click outside image
lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.add("hidden");
    }
});
// Smooth scroll to gallery
document.querySelector("#viewGalleryBtn").addEventListener("click", () => {
    document.querySelector("#gallerySection").scrollIntoView({
        behavior: "smooth"
    });
});

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});