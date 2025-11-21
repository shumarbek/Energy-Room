document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animate-fade-in-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        element.style.animationPlayState = 'paused';
        observer.observe(element);
    });
});