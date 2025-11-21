const menuBtn = document.getElementById('menuBtn');
const menuContainer = document.getElementById('menu-container');
const header = document.getElementById('header');

menuBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('activeMenu');
    const menuBtnImg = document.querySelector('#menuBtn img');
    if (menuContainer.classList.contains('activeMenu')) {
        document.body.style.overflow = "hidden";
        header.style.overflow = "visible";
        menuContainer.style.right = "0";
        menuContainer.style.transition = "right 0.3s ease-in-out"
        menuContainer.style.backgroundColor = "white";
        menuBtnImg.src = "./assets/icons/close-black.png";
    } else {
        document.body.style.overflow = "auto";
        header.style.overflow = "hidden";
        menuContainer.style.right = "-100%";
        menuContainer.style.transition = "right 0.3s ease-in-out";
        menuContainer.style.backgroundColor = "none";
        menuBtnImg.src = "./assets/icons/menu.png";
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


const toLoginBtn = document.getElementById('toLoginBtn');
toLoginBtn.addEventListener('click', () => {
    window.location.href = "./login.html";
});







// simple error 404 page
document.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        const href = e.target.getAttribute('href');
        if (href && href === ('#')) {
            window.location.href = './error/404.html';
        }
    }
});