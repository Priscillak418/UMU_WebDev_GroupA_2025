// Function to handle slideshow logic
function initSlideshow(cardId) {
    const card = document.getElementById(cardId);
    if (!card) return;

    const slides = card.querySelectorAll('.slide');
    const prevBtn = card.querySelector('.prev-btn');
    const nextBtn = card.querySelector('.next-btn');
    let currentIndex = 0;

    // Function to show a specific slide
    function showSlide(index) {
        // Handle wrapping (if end of list, go to start, and vice versa)
        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        // Remove 'active' class from all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Add 'active' class to current slide
        slides[currentIndex].classList.add('active');
    }

    // Event Listeners for buttons
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Stop any default button behavior
        showSlide(currentIndex + 1);
    });

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(currentIndex - 1);
    });

    // Optional: Auto-advance slides every 5 seconds
    // setInterval(() => { showSlide(currentIndex + 1); }, 5000);
}

// Initialize both cards when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // We call the existing mobile menu code here if it exists...
    
    // Initialize the new slideshows
    initSlideshow('card-weddings');
    initSlideshow('card-portraits');
});

// testimonial section
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const slideInterval = 6000; // Change slide every 6 seconds

    function showSlide(index) {
        // Remove 'active' class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add 'active' class to the target slide and dot
        if (slides[index]) {
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }
    }

    function nextSlide() {
        // Calculate the index for the next slide, looping back to 0 if at the end
        let nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    // Set up click listeners for dots
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            showSlide(index);
            // Reset interval timer when manually navigating
            clearInterval(sliderTimer);
            sliderTimer = setInterval(nextSlide, slideInterval);
        });
    });

    // Start the automatic slider timer
    let sliderTimer = setInterval(nextSlide, slideInterval);

    // Initialize the slider by showing the first slide (which should already be set via HTML/CSS)
    showSlide(currentSlide);
});