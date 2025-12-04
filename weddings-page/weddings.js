// Carousel, testimonial slider, mobile menu, and a simple contact form validation.

/* ---------- Mobile menu toggle ---------- */
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
mobileMenuBtn && mobileMenuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

/* ---------- Hero carousel ---------- */
const slides = Array.from(document.querySelectorAll('.slide'));
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let current = 0;
let carouselTimer = null;

function showSlide(index) {
  slides.forEach((s, i) => s.classList.toggle('active', i === index));
  current = index;
}

function nextSlide() { showSlide((current + 1) % slides.length); }
function prevSlide() { showSlide((current - 1 + slides.length) % slides.length); }

// auto-advance every 5 seconds
function startCarousel() {
  stopCarousel();
  carouselTimer = setInterval(nextSlide, 5000);
}
function stopCarousel() {
  if (carouselTimer) clearInterval(carouselTimer);
}

nextBtn && nextBtn.addEventListener('click', () => { nextSlide(); startCarousel(); });
prevBtn && prevBtn.addEventListener('click', () => { prevSlide(); startCarousel(); });

// start on load
if (slides.length) {
  showSlide(0);
  startCarousel();

  // pause on mouse enter, resume on leave (nice interaction)
  const carouselEl = document.getElementById('carousel');
  carouselEl && carouselEl.addEventListener('mouseenter', stopCarousel);
  carouselEl && carouselEl.addEventListener('mouseleave', startCarousel);
}

/* ---------- Testimonials slider ---------- */
const testiItems = Array.from(document.querySelectorAll('.testi-item'));
const testiPrev = document.getElementById('testiPrev');
const testiNext = document.getElementById('testiNext');
let testiIndex = 0;

function showTestimonial(i) {
  testiItems.forEach((it, idx) => it.classList.toggle('active', idx === i));
  testiIndex = i;
}
testiPrev && testiPrev.addEventListener('click', () => {
  showTestimonial((testiIndex - 1 + testiItems.length) % testiItems.length);
});
testiNext && testiNext.addEventListener('click', () => {
  showTestimonial((testiIndex + 1) % testiItems.length);
});
// initialize
if (testiItems.length) showTestimonial(0);

/* ---------- Simple contact form validation ---------- */
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

function validateEmail(email) {
  // very simple email check
  return /\S+@\S+\.\S+/.test(email);
}

contactForm && contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formMsg.style.color = 'crimson';
    formMsg.textContent = 'Please fill all fields.';
    return;
  }
  if (!validateEmail(email)) {
    formMsg.style.color = 'crimson';
    formMsg.textContent = 'Please enter a valid email address.';
    return;
  }

  // simulate a successful submit (replace with fetch() to send to server)
  formMsg.style.color = 'green';
  formMsg.textContent = 'Thanks — your message has been sent.';
  contactForm.reset();
});

/* ---------- Utility buttons used in HTML ---------- */
function scrollToContact() {
  const contact = document.getElementById('contact');
  if (contact) contact.scrollIntoView({ behavior: 'smooth' });
}

function openPortfolio() {
  // In your real site, link to the portfolio page
  window.location.href = 'gallery.html';
}

/* Chat button: quick behavior */
const chatBtn = document.getElementById('chatBtn');
chatBtn && chatBtn.addEventListener('click', function (e) {
  // this just scrolls to contact; could open a chat widget in the real site
  e.preventDefault();
  scrollToContact();
});
