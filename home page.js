document.addEventListener('DOMContentLoaded', () => {

    // ===================================
    // 1. MOBILE MENU TOGGLE LOGIC
    // ===================================

    const menuToggle = document.querySelector('.menu-toggle');
    const navLists = document.querySelectorAll('.nav-list');

    if (menuToggle && navLists.length > 0) {
        menuToggle.addEventListener('click', () => {
            // Toggle the 'active' class on both nav lists for proper visibility
            navLists.forEach(list => {
                list.classList.toggle('active');
            });
            menuToggle.classList.toggle('active');
        });
    }

    // ===================================
    // 2. SCROLL ANIMATION (Intersection Observer) LOGIC
    // ===================================

    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null, 
        rootMargin: '0px 0px -100px 0px', // Triggers 100px before the element hits the bottom of the viewport
        threshold: 0.1 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the trigger class and stop observing
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });


    // ===================================
    // 3. DUAL SLIDESHOW LOGIC
    // ===================================

    // Function to handle the manual navigation (Previous/Next buttons)
    function setupManualNavigation(cardId) {
        const card = document.getElementById(cardId);
        if (!card) return;

        const prevBtn = card.querySelector('.prev-btn');
        const nextBtn = card.querySelector('.next-btn');
        const slides = card.querySelectorAll('.slide');
        
        if (slides.length === 0) return;
        
        // Find the index of the currently active slide
        const getActiveIndex = () => Array.from(slides).findIndex(slide => slide.classList.contains('active'));
        
        const changeSlide = (step) => {
            let currentIndex = getActiveIndex();
            // Calculate the next index, ensuring it wraps around (0 to length-1)
            let nextIndex = (currentIndex + step + slides.length) % slides.length;
            
            slides.forEach(slide => slide.classList.remove('active'));
            slides[nextIndex].classList.add('active');
        };

        // Attach listeners to buttons
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            changeSlide(-1);
        });
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            changeSlide(1);
        });
    }

    // Function to handle automatic fading (Auto-Advance)
    function setupAutoSlideshow(cardId) {
        const slides = document.querySelectorAll(`#${cardId} .slide`);
        if (slides.length === 0) return;

        let currentSlide = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
        if (currentSlide === -1) currentSlide = 0; // Fallback

        function showSlide(index) {
            let nextIndex = (index + slides.length) % slides.length;
            currentSlide = nextIndex;

            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === nextIndex) {
                    slide.classList.add('active');
                }
            });
        }
        
        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        // Start the auto-cycle (if you want this feature)
        // If you prefer only manual navigation, comment out the line below.
        setInterval(nextSlide, 5000); // Change image every 5 seconds
    }


    // Initialize both card sections
    setupManualNavigation('card-weddings');
    setupManualNavigation('card-portraits');
    
    setupAutoSlideshow('card-weddings');
    setupAutoSlideshow('card-portraits');

});