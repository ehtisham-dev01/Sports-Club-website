document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('open');
            if (navUl.classList.contains('open')) {
                menuToggle.innerHTML = '&#10005;'; // Close icon
            } else {
                menuToggle.innerHTML = '&#9776;'; // Hamburger icon
            }
        });
    }
});
