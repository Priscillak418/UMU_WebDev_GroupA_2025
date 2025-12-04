// ===================================
// 1. HAMBURGER MENU / MOBILE NAVIGATION
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const body = document.body;

  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
  });
});

// ===================================
// 2. TESTIMONIAL SLIDER
// ===================================
const dots = document.querySelectorAll('.dot');
const testimonials = document.querySelectorAll('.testimonial');

function showSlide(index) {
  // 1. Remove active class from ALL
  testimonials.forEach(t => t.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  // 2. Add active class to the selected index
  testimonials[index].classList.add('active');
  dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

// Initialize slider to show the first testimonial (index 0)
// This is redundant as you set it in HTML, but good practice.
// showSlide(0); 


// ===================================
// 3. CONTACT FORM
// ===================================
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nameInput = this.querySelector('#name'); // Get the name input
  const name = nameInput ? nameInput.value.trim() : '';
  const formMessage = document.getElementById('formMessage');
  
  if (name) {
    formMessage.innerHTML = 
      `<p style="color:#2e8b57; font-weight: 500;">Thank you, ${name}! We'll contact you soon regarding your ${this.event.value || 'event'}.</p>`;
    this.reset();
    
    // Clear the message after 5 seconds
    setTimeout(() => formMessage.innerHTML = '', 5000);
  } else {
    formMessage.innerHTML = 
      `<p style="color:#cc0000; font-weight: 500;">Please enter your name.</p>`;
  }
});