// Menu Script

const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');
const authButtons = document.querySelector('.auth-buttons');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  authButtons.classList.toggle('show');
});

// Faqs Script
const faqItems = document.querySelectorAll('.faq_item');

// First Item active 
if (faqItems.length > 0) {
  faqItems[0].classList.add('active');
}

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
      }
    });

    item.classList.toggle('active');
  });
});


// Procrastinators Area img load

const headings = document.querySelectorAll('.procrastinators_img');
const mainImage = document.getElementById('main_image');

// First Item active 
headings[0].classList.add('active');

headings.forEach(heading => {
  heading.addEventListener('click', () => {
    // All remove active class
    headings.forEach(h => h.classList.remove('active'));
    
    // Click heading  active 
    heading.classList.add('active');

    // main image change
    const newImage = heading.getAttribute('data-image');
    mainImage.src = newImage;
  });
});


// Smooth Scroll
const menuLinks = document.querySelectorAll('.menu_link');

menuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 70, // Navbar adjust
      behavior: 'smooth'
    });
  });
});

// Sticky Navbar
const navbar = document.getElementById('navbar');
const stickyPoint = navbar.offsetTop;

window.addEventListener('scroll', () => {
  if (window.scrollY > stickyPoint) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});
