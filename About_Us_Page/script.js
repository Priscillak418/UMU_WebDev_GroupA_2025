// Testimonial Slider
const dots = document.querySelectorAll('.dot');
const testimonials = document.querySelectorAll('.testimonial');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    testimonials.forEach(t => t.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    dot.classList.add('active');
  });
});

// Contact Form - Simple success message
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value.trim();
  if (name) {
    document.getElementById('formMessage').innerHTML = 
      `<p style="color:#2e8b57;">Thank you, ${name}! We'll contact you soon.</p>`;
    this.reset();
    setTimeout(() => document.getElementById('formMessage').innerHTML = '', 5000);
  }
});