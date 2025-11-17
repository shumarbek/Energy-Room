const menuBtn = document.getElementById('menuBtn');
const menuContainer = document.getElementById('menu-container');
const header = document.getElementById('header');

menuBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('activeMenu');
    if (menuContainer.classList.contains('activeMenu')) {
        document.body.style.overflow = "hidden";
        header.style.overflow = "visible";
        menuContainer.style.right = "0";
        menuContainer.style.transition = "right 0.3s ease-in-out";
        menuContainer.style.boxShadow = "0 10px 10px 1000px rgba(0, 0, 0, 0.5)";
        menuContainer.style.backgroundColor = "white";
    } else {
        document.body.style.overflow = "auto";
        header.style.overflow = "hidden";
        menuContainer.style.right = "-100%";
        menuContainer.style.transition = "right 0.3s ease-in-out";
        menuContainer.style.boxShadow = "none";
        menuContainer.style.backgroundColor = "none";
    }
});


document.body.addEventListener('click', (event) => {
    if (screen.width < 768) {
        if (!header.contains(event.target)) {
            menuContainer.classList.remove('activeMenu');
            document.body.style.overflow = "auto";
            header.style.overflow = "hidden";
            menuContainer.style.right = "-100%";
            menuContainer.style.transition = "right 0.3s ease-in-out";
            menuContainer.style.boxShadow = "none";
            menuContainer.style.backgroundColor = "none";
        }
    }
});

const heroContent = document.getElementById('hero-content');
const heroImage = document.getElementById('hero-image');


window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const topBtn = document.getElementById('topBtn');

    if (scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    if (scrollY > 130) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}