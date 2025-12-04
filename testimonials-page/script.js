// Testimonials data with images
const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        service: "wedding",
        rating: 5,
        text: "Absolutely incredible work! Our wedding photos are more beautiful than we could have ever imagined. They perfectly captured every special moment and emotion of our big day.",
        date: "2023-10-15",
        image: "lady1.jpg",
    },
    {
        id: 2,
        name: "Michael Chen",
        service: "portrait",
        rating: 5,
        text: "The portrait session was so much fun! The photographer made us feel completely at ease and the results were stunning. We'll cherish these photos forever.",
        date: "2024-09-22",
        image: "male2.jpg"
    },
    {
        id: 3,
        name: "Jackie Rodriguez",
        service: "portrait",
        rating: 4,
        text: "Professional, punctual, and talented! Our corporate event was documented beautifully. The team was unobtrusive yet captured all the key moments perfectly.",
        date: "2025-10-05",
        image: "lady3.jpg"
    },
    {
        id: 3,
        name: "Priscilla Kayegi",
        service: "event",
        rating: 4,
        text: "Professional, punctual, and talented! Our corporate event was documented beautifully. The team was unobtrusive yet captured all the key moments perfectly.",
        date: "2025-10-05",
        image: "priscilla.jpeg"
    },
    {
        id: 3,
        name: "Anthony Kagere",
        service: "wedding",   
        rating: 5,
        text: "Professional, punctual, and talented! Our corporate event was documented beautifully. The team was unobtrusive yet captured all the key moments perfectly.",
        date: "2025-10-05",
        image: "anthony.jpeg"
    },
    {
        id: 3,
        name: "Emma Julia",
        service: "event",
        rating: 4,
        text: "Professional, punctual, and talented! Our corporate event was documented beautifully. The team was unobtrusive yet captured all the key moments perfectly.",
        date: "2025-10-05",
        image: "lady2.jpg"
    },
    {
        id: 3,
        name: "Jackie Rodriguez",
        service: "event",
        rating: 4,
        text: "Professional, punctual, and talented! Our corporate event was documented beautifully. The team was unobtrusive yet captured all the key moments perfectly.",
        date: "2025-10-05",
        image: "lady3.jpg"
    },
    {
        id: 4,
        name: "James Wilson",
        service: "wedding",
        rating: 5,
        text: "From the engagement shoot to the wedding day, the experience was flawless. The attention to detail and creative eye resulted in photos that tell our love story perfectly.",
        date: "2023-08-30",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        name: "Lisa Thompson",
        service: "portrait",
        rating: 5,
        text: "I was nervous about my family portrait session, but the photographer made everyone feel comfortable. The natural, candid shots are our favorites!",
        date: "2023-10-08",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        name: "David Park",
        service: "event",
        rating: 4,
        text: "Great coverage of our product launch event. The photos were delivered quickly and were exactly what we needed for our marketing materials.",
        date: "2023-11-12",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
];

// DOM Elements
const testimonialsContainer = document.getElementById('testimonialsContainer');
const filterButtons = document.querySelectorAll('.filter-btn');
const testimonialForm = document.getElementById('testimonialForm');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayTestimonials(testimonials);
    setupEventListeners();
});

// Display testimonials in the container
function displayTestimonials(testimonialsArray) {
    testimonialsContainer.innerHTML = '';
    
    testimonialsArray.forEach(testimonial => {
        const flipCard = createFlipCard(testimonial);
        testimonialsContainer.appendChild(flipCard);
    });
}

// Create a flip card element for testimonial
function createFlipCard(testimonial) {
    // Create flip card container
    const flipCard = document.createElement('div');
    flipCard.className = `flip-card ${testimonial.service}`;
    
    // Create flip card inner container
    const flipCardInner = document.createElement('div');
    flipCardInner.className = 'flip-card-inner';
    
    // Create front of card
    const cardFront = document.createElement('div');
    cardFront.className = 'flip-card-front';
    
    // Client image or default avatar
    if (testimonial.image) {
        const clientImage = document.createElement('img');
        clientImage.className = 'client-image';
        clientImage.src = testimonial.image;
        clientImage.alt = testimonial.name;
        cardFront.appendChild(clientImage);
    } else {
        const defaultAvatar = document.createElement('div');
        defaultAvatar.className = 'default-avatar';
        defaultAvatar.textContent = testimonial.name.charAt(0);
        cardFront.appendChild(defaultAvatar);
    }
    
    // Client name
    const clientNameFront = document.createElement('h3');
    clientNameFront.className = 'client-name-front';
    clientNameFront.textContent = testimonial.name;
    cardFront.appendChild(clientNameFront);
    
    // Service badge
    const serviceBadge = document.createElement('div');
    serviceBadge.className = `service-badge service-${testimonial.service}`;
    serviceBadge.textContent = getServiceName(testimonial.service);
    cardFront.appendChild(serviceBadge);
    
    // Hover hint
    const hoverHint = document.createElement('div');
    hoverHint.className = 'hover-hint';
    hoverHint.textContent = 'Hover to read testimonial';
    cardFront.appendChild(hoverHint);
    
    // Create back of card
    const cardBack = document.createElement('div');
    cardBack.className = 'flip-card-back';
    
    // Rating stars
    const rating = document.createElement('div');
    rating.className = 'rating';
    rating.innerHTML = generateStarRating(testimonial.rating);
    
    // Testimonial text
    const testimonialText = document.createElement('div');
    testimonialText.className = 'testimonial-text';
    testimonialText.textContent = `"${testimonial.text}"`;
    
    // Client info on back
    const clientInfoBack = document.createElement('div');
    clientInfoBack.className = 'client-info-back';
    
    const clientNameBack = document.createElement('h4');
    clientNameBack.className = 'client-name-back';
    clientNameBack.textContent = testimonial.name;
    
    const serviceTypeBack = document.createElement('p');
    serviceTypeBack.className = 'service-type-back';
    serviceTypeBack.textContent = getServiceName(testimonial.service);
    
    const testimonialDate = document.createElement('p');
    testimonialDate.className = 'testimonial-date';
    testimonialDate.textContent = formatDate(testimonial.date);
    
    clientInfoBack.appendChild(clientNameBack);
    clientInfoBack.appendChild(serviceTypeBack);
    clientInfoBack.appendChild(testimonialDate);
    
    // Assemble back card
    cardBack.appendChild(rating);
    cardBack.appendChild(testimonialText);
    cardBack.appendChild(clientInfoBack);
    
    // Assemble flip card
    flipCardInner.appendChild(cardFront);
    flipCardInner.appendChild(cardBack);
    flipCard.appendChild(flipCardInner);
    
    return flipCard;
}

// Generate star rating HTML
function generateStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '★';
        } else {
            stars += '☆';
        }
    }
    return stars;
}

// Get service name for display
function getServiceName(serviceType) {
    const serviceNames = {
        'wedding': 'Wedding Photography',
        'portrait': 'Portrait Session',
        'event': 'Event Photography'
    };
    return serviceNames[serviceType] || serviceType;
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Set up event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter testimonials
            const filter = this.getAttribute('data-filter');
            filterTestimonials(filter);
        });
    });
    
    // Testimonial form submission
    testimonialForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addNewTestimonial();
    });
}

// Filter testimonials by service type
function filterTestimonials(filter) {
    const allTestimonials = document.querySelectorAll('.flip-card');
    
    if (filter === 'all') {
        allTestimonials.forEach(card => {
            card.style.display = 'block';
        });
    } else {
        allTestimonials.forEach(card => {
            if (card.classList.contains(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// Add a new testimonial from the form
function addNewTestimonial() {
    const name = document.getElementById('clientName').value;
    const image = document.getElementById('clientImage').value;
    const service = document.getElementById('serviceType').value;
    const rating = parseInt(document.getElementById('rating').value);
    const text = document.getElementById('testimonialText').value;
    
    // Create new testimonial object
    const newTestimonial = {
        id: testimonials.length + 1,
        name: name,
        image: image || null,
        service: service,
        rating: rating,
        text: text,
        date: new Date().toISOString().split('T')[0] // Current date in YYYY-MM-DD format
    };
    
    // Add to testimonials array
    testimonials.unshift(newTestimonial);
    
    // Create and add new card with animation
    const newCard = createFlipCard(newTestimonial);
    newCard.classList.add('new-testimonial');
    testimonialsContainer.prepend(newCard);
    
    // Reset form
    testimonialForm.reset();
    
    // Show success message
    alert('Thank you for your testimonial! It has been added to our page.');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        newCard.classList.remove('new-testimonial');
    }, 600);
}

// Optional: Add click functionality for mobile devices
function setupMobileFlip() {
    if (window.innerWidth <= 768) {
        const flipCards = document.querySelectorAll('.flip-card');
        flipCards.forEach(card => {
            card.addEventListener('click', function() {
                this.querySelector('.flip-card-inner').classList.toggle('flipped');
            });
        });
    }
}

// Initialize mobile functionality
setupMobileFlip();
window.addEventListener('resize', setupMobileFlip);