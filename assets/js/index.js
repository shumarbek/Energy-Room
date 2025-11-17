document.addEventListener('DOMContentLoaded', function () {
    const welcomMessage = document.getElementById('welcomMessage');

    setTimeout(() => {
        welcomMessage.style.left = "0";
        welcomMessage.style.transition = "left 0.7s ease-in-out";
    }, 1000);

    setTimeout(() => {
        welcomMessage.style.left = "-100%";
    }, 3000);
});

document.addEventListener('DOMContentLoaded', function () {
    heroContent.style.left = "0";
    heroContent.style.transition = "left 0.7s ease-in-out";
    heroContent.style.opacity = "1";

    heroImage.style.right = "0";
    heroImage.style.transition = "right 0.7s ease-in-out";
    heroImage.style.opacity = "1";
});

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    
    if (scrollY > 400) {
        const productCards = document.getElementById('productCards');
        productCards.style.top = "0";
        productCards.style.transition = "top 0.7s ease-in-out";
        productCards.style.opacity = "1";
    }

    if (scrollY > 1400) {
        const trustCard_1 = document.getElementById('trustCard_1');
        trustCard_1.style.left = "0";
        trustCard_1.style.transition = "left 0.8s ease-in-out";
        trustCard_1.style.opacity = "1";
    }

    if (scrollY > 1520) {
        const trustCard_2 = document.getElementById('trustCard_2');
        trustCard_2.style.right = "0";
        trustCard_2.style.transition = "right 0.8s ease-in-out";
        trustCard_2.style.opacity = "1";
    }

    if (scrollY > 1640) {
        const trustCard_3 = document.getElementById('trustCard_3');
        trustCard_3.style.left = "0";
        trustCard_3.style.transition = "left 0.8s ease-in-out";
        trustCard_3.style.opacity = "1";
    }
});