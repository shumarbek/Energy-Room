document.addEventListener('DOMContentLoaded', function () {
    class testimonialCard {
        constructor(id, name, category, image, comment, parentSelector, indicatorSelector) {
            this.id = id,
                this.name = name,
                this.category = category,
                this.image = image,
                this.comment = comment,
                this.parent = document.querySelector(parentSelector)
                this.indicatorBtns = document.querySelector(indicatorSelector)
        }

        render() {
            const element_1 = document.createElement('div')
            element_1.classList = "w-full flex-shrink-0 px-4"
            element_1.innerHTML = `
                            <div class="h-full bg-white rounded-xl p-8 shadow-lg">
                                <div class="text-center">
                                    <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="${this.image}">
                                    <p class="leading-relaxed mb-6">${this.comment}</p>
                                    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-2 mb-4"></span>
                                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">${this.name}</h2>
                                    <p class="text-gray-500">${this.category}</p>
                                </div>
                            </div>
            `;

            const element_2 = document.createElement('button');
            element_2.classList = "indicator w-3 h-3 rounded-full bg-gray-300";
            element_2.setAttribute('data-index', this.id);

            this.parent.append(element_1);
            this.indicatorBtns.append(element_2);
        }
    }

    testimonials.forEach(testimonial => {
        const { id, name, category, image, comment } = testimonial;
        new testimonialCard(id, name, category, image, comment, "#carousel-track", "#carousel-indicators").render();
    });
    
    // -------- carusel ----------
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const indicators = document.querySelectorAll('#carousel-indicators .indicator');
    let currentIndex = 0;
    const totalSlides = testimonials.length;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.remove('bg-gray-300');
                indicator.classList.add('bg-indigo-500');
                indicator.classList.add('w-8');
            } else {
                indicator.classList.remove('bg-indigo-500');
                indicator.classList.remove('w-8');
                indicator.classList.add('bg-gray-300');
            }
        });
    }

    nextBtn.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });

    prevBtn.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    indicators.forEach(indicator => {
        indicator.addEventListener('click', function () {
            currentIndex = parseInt(this.getAttribute('data-index'));
            updateCarousel();
        });
    });

    let autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }, 5000);

    const carouselContainer = document.querySelector('.relative');
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });

    carouselContainer.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        }, 5000);
    });

    updateCarousel();
});