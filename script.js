document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener('click', function(event) {

    event.preventDefault();

    const section = document.querySelector(this.getAttribute('href'));

    if(!section)return;

    section.scrollIntoView({
    behavior: 'smooth'
    });
});
});
const menu = document.querySelector('.menu');

const nav = document.querySelector('nav');
menu.addEventListener('click', function() {
    nav.classList.toggle('active');
});