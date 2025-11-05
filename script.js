// === 1. Prevent auto-scroll on page load (when URL has #contact) ===
window.addEventListener('load', function () {
    if (window.location.hash === '#contact') {
        // Remove #contact from URL without reloading
        history.replaceState(null, null, ' ');
        // Ensure page stays at top
        window.scrollTo(0, 0);
    }
});

// === 2. Smooth scroll for ALL anchor links (#contact, #services, etc.) ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Only handle non-empty internal links
        if (href && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Optional: Update URL without jumping
                history.pushState(null, null, href);
            }
        }
    });
});
