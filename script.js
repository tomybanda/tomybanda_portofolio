// =========================================================
// TOMY BANDA PORTFOLIO
// =========================================================

// Update tahun footer automatically
const yearElement = document.querySelector("footer p:last-child");

if (yearElement) {
    const currentYear = new Date().getFullYear();

    yearElement.textContent =
        `© ${currentYear} Tomy Banda. All rights reserved.`;
}


// =========================================================
// NAVIGATION
// =========================================================

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// =========================================================
// SCROLL REVEAL
// =========================================================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .skill, .project, .experience-item"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});
