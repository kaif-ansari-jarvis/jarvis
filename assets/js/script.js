// Smooth Scroll
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// Mobile Toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

const backToTopBtn = document.getElementById("backToTopBtn");

// Show button when scrolled down
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    backToTopBtn.classList.toggle("hidden", scrollY < 200);
    });

// Smooth scroll to top
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    });

