// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    
    const navToggle = document.getElementById('nav-toggle');
    const navHorizontal = document.getElementById('nav-horizontal');

    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navHorizontal.classList.toggle('active');

        if (navHorizontal.classList.contains('active')) {
            navToggle.querySelector('.menu-text').textContent = 'Close';
            navToggle.querySelector('.hamburger-icon').textContent = '✕';
        } else {
            navToggle.querySelector('.menu-text').textContent = 'Menu';
            navToggle.querySelector('.hamburger-icon').textContent = '☰';
        }
    });

    // Close when clicking outside
    document.addEventListener('click', () => {
        if (navHorizontal.classList.contains('active')) {
            navHorizontal.classList.remove('active');
            navToggle.querySelector('.menu-text').textContent = 'Menu';
            navToggle.querySelector('.hamburger-icon').textContent = '☰';
        }
    });

    // Close when clicking any link
    const navLinks = document.querySelectorAll('.nav-btn');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navHorizontal.classList.remove('active');
            navToggle.querySelector('.menu-text').textContent = 'Menu';
            navToggle.querySelector('.hamburger-icon').textContent = '☰';
        });
    });
    
});