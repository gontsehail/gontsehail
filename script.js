// Get the navigation links
const navLinks = document.querySelectorAll('nav a');

// Get the sections
const sections = document.querySelectorAll('section');

// Add event listener to navigation links
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute('href').substring(1);
    sections.forEach((section) => {
      section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
  });
});

// Toggle navigation menu on smaller screens
const nav = document.querySelector('nav');
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = `
  <span></span>
  <span></span>
  <span></span>
`;
document.querySelector('header').appendChild(hamburger);

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Close navigation menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});