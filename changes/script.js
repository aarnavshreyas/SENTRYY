document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const triggerBottom = window.innerHeight / 5 * 4; // Adjusts trigger point for when the animation starts

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});
