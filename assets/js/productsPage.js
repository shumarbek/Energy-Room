document.addEventListener("DOMContentLoaded", () => {
    class ProductCard {
        constructor(id, name, category, price, oldPrice, image, parentSelector) {
            this.id = id,
            this.name = name,
            this.category = category,
            this.price = price,
            this.oldPrice = oldPrice,
            this.image = image,
            this.parent = document.querySelector(parentSelector)
        }

        render() {
            let discount = Math.round(((this.oldPrice - this.price) / this.oldPrice) * 100);
            let oldPrice = '';

            // Format prices
            const formattedPrice = this.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
            const formattedOldPrice = this.oldPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

            if (discount != -Infinity && discount > 0) {
                discount = `<span class="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">-${discount}%</span>`;
                oldPrice = `<span class="text-[0.8rem] line-through">${formattedOldPrice}</span>`
            } else {
                discount = '';
                oldPrice = '';
            }

            const element = document.createElement('div')
            element.classList = "productCard lg:w-[20%] md:w-[33%] sm:w-[50%] w-[50%] h-auto p-2 mb-5 rounded-lg hover:bg-[#1001] transition"
            element.innerHTML = `
                    <div class="block relative h-48 rounded overflow-hidden relative cursor-pointer rounded-lg bg-white" onclick="openProductModal(${this.id})">
                        <img src="${this.image}" alt="${this.name}" class="object-cover object-center w-full h-full block">
                        ${discount}
                        <button class="cursor-pointer absolute top-3 right-3 bg-white rounded-full p-1">
                            <img src="./assets/icons/heart-black.png" alt="heart" class="w-5">
                        </button>
                    </div>
                    <div class="mt-4 sm:flex justify-between flex-col">
                        <div class="w-full">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">${this.category}</h3>
                            <h2 class="text-gray-900 title-font text-sm font-medium">${this.name}</h2>
                            <div class="mb-4">
                                <span class="text-[1.125rem] font-bold text-gray-900">${formattedPrice}</span>
                                ${oldPrice}
                            </div>
                        </div>
                        <button
                            class="addToCartBtn flex items-center justify-center bg-[#CC0000] text-white sm:text-sm sm:w-auto w-full text-[0.875rem] px-2 py-2 rounded-lg cursor-pointer hover:bg-[#CC0000]/80 transition" onclick="addToCart(${this.id})">
                            <span class="mr-1">Add to cart</span>
                            <img src="./assets/icons/cart-white.png" alt="cart" class="w-4">
                        </button>
                    </div>
            `;

            this.parent.append(element)
        }
    }

    // Barcha mahsulotlarni yuklash
    function loadAllProducts() {
        const productCards = document.querySelector('#categoryProducts');
        productCards.innerHTML = '';
        
        products.forEach(product => {
            const { id, name, category, price, oldPrice, image } = product;
            new ProductCard(id, name, category, price, oldPrice, image, "#categoryProducts").render();
        });
    }

    // Category va Subcategory bo'yicha filtirlash
    function filterProductsByCategoryAndSubcategory(category, subcategory) {
        const productCards = document.querySelector('#categoryProducts');
        productCards.innerHTML = '';

        let filteredProducts = [];

        if (category === 'all') {
            filteredProducts = products;
        } else if (subcategory) {
            // Subcategory bo'yicha filtirlash
            filteredProducts = products.filter(product => 
                product.category === category && product.subcategory === subcategory
            );
        } else {
            // Faqat category bo'yicha filtirlash
            filteredProducts = products.filter(product => product.category === category);
        }

        filteredProducts.forEach(product => {
            const { id, name, category, price, oldPrice, image } = product;
            new ProductCard(id, name, category, price, oldPrice, image, "#categoryProducts").render();
        });

        // Mahsulotlar sonini yangilash
        updateProductsCount(filteredProducts.length);
    }

    // Mahsulotlar sonini ko'rsatish
    function updateProductsCount(count) {
        const countElement = document.getElementById('products-count');
        if (countElement) {
            countElement.textContent = `Showing ${count} products`;
        }
    }

    // Active button ni yangilash
    function updateActiveButton(button) {
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.classList.add('bg-white', 'hover:bg-gray-50', 'border', 'border-gray-200');
            btn.classList.remove('bg-gradient-to-r', 'from-[#CC0000]', 'to-red-700', 'text-white');
        });

        if (button) {
            button.classList.add('active');
            button.classList.remove('bg-white', 'hover:bg-gray-50', 'border', 'border-gray-200');
            button.classList.add('bg-gradient-to-r', 'from-[#CC0000]', 'to-red-700', 'text-white');
        }
    }

    // Mobile filter ni yopish
    function closeMobileFilters() {
        if (window.innerWidth < 1024) {
            const filters = document.getElementById('productsFilters');
            filters.classList.add('hidden');
            filters.classList.add('left-[-500%]');
            filters.classList.remove('left-0');
        }
    }

    // Asosiy category button lar uchun event listener
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Agar button da onclick attributi bo'lsa (collapsible categories)
            if (this.getAttribute('onclick')) {
                return;
            }

            const category = this.getAttribute('data-category');
            const subcategory = this.getAttribute('data-subcategory');

            updateActiveButton(this);
            closeMobileFilters();

            filterProductsByCategoryAndSubcategory(category, subcategory);
        });
    });

    // Subcategory button lar uchun event listener
    document.querySelectorAll('.subcategory-btn').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const subcategory = this.getAttribute('data-subcategory');

            // Subcategory ni bosganda uning parent category si active bo'ladi
            const parentCategoryBtn = document.querySelector(`.category-btn[data-category="${category}"]`);
            updateActiveButton(parentCategoryBtn);

            closeMobileFilters();
            filterProductsByCategoryAndSubcategory(category, subcategory);
        });
    });

    // Collapsible categories uchun toggle function
    window.toggleSubcategories = function(category) {
        const subcategories = document.getElementById(`${category}-subcategories`);
        const arrow = document.getElementById(`${category}-arrow`);

        // Boshqa barcha subcategory larni yopish
        const allSubcategories = document.querySelectorAll('[id$="-subcategories"]');
        const allArrows = document.querySelectorAll('[id$="-arrow"]');

        allSubcategories.forEach(sub => {
            if (sub.id !== `${category}-subcategories`) {
                sub.classList.add('hidden');
            }
        });

        allArrows.forEach(arr => {
            if (arr.id !== `${category}-arrow`) {
                arr.classList.remove('fa-chevron-up');
                arr.classList.add('fa-chevron-down');
            }
        });

        // Joriy subcategory ni toggle qilish
        subcategories.classList.toggle('hidden');
        arrow.classList.toggle('fa-chevron-down');
        arrow.classList.toggle('fa-chevron-up');
    }

    // Mobile filter ochish/yopish
    window.openProductsFilters = function() {
        const productsFilters = document.getElementById('productsFilters');
        
        if (productsFilters.classList.contains('left-[-500%]') || productsFilters.classList.contains('hidden')) {
            productsFilters.classList.remove('left-[-500%]', 'hidden');
            productsFilters.classList.add('left-0');
            productsFilters.style.transition = "right 0.3s ease-in-out";
        } else {
            productsFilters.classList.remove('left-0');
            productsFilters.classList.add('left-[-500%]', 'hidden');
            productsFilters.style.transition = "right 0.3s ease-in-out";
        }
    }

    // Tashqariga bosilganda filter ni yopish
    if (window.innerWidth < 1024) {
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#categoryNavigation') && !e.target.closest('#menuBtn')) {
                const productsFilters = document.getElementById('productsFilters');
                productsFilters.classList.remove('left-0');
                productsFilters.classList.add('left-[-500%]', 'hidden');
            }
        });
    }

    // Dastlabki mahsulotlarni yuklash
    loadAllProducts();
    updateProductsCount(products.length);

    // Category count larni yangilash
    updateCategoryCounts();
});

// Category lar sonini yangilash - products massivi global bo'lishi kerak
function updateCategoryCounts() {
    // products massivi global scope da mavjudligini tekshiramiz
    if (typeof products === 'undefined') {
        console.error('products array is not defined');
        return;
    }

    const categoryCounts = {
        'all': products.length,
        'PC Components': products.filter(p => p.category === 'PC Components').length,
        'Gaming Accessories': products.filter(p => p.category === 'Gaming Accessories').length,
        'Streaming Equipment': products.filter(p => p.category === 'Streaming Equipment').length,
        'Gaming Monitor': products.filter(p => p.category === 'Gaming Monitor').length,
        'Gaming PC': products.filter(p => p.category === 'Gaming PC').length,
        'Gaming Laptop': products.filter(p => p.category === 'Gaming Laptop').length,
        'Gaming Chair': products.filter(p => p.category === 'Gaming Chair').length,
        // Subcategory counts
        'Graphics Card': products.filter(p => p.subcategory === 'Graphics Card').length,
        'Processor': products.filter(p => p.subcategory === 'Processor').length,
        'RAM': products.filter(p => p.subcategory === 'RAM').length,
        'Storage': products.filter(p => p.subcategory === 'Storage').length,
        'Motherboard': products.filter(p => p.subcategory === 'Motherboard').length,
        'Power Supply': products.filter(p => p.subcategory === 'Power Supply').length,
        'Cooling': products.filter(p => p.subcategory === 'Cooling').length,
        'Case': products.filter(p => p.subcategory === 'Case').length,
        'Keyboard': products.filter(p => p.subcategory === 'Keyboard').length,
        'Mouse': products.filter(p => p.subcategory === 'Mouse').length,
        'Headset': products.filter(p => p.subcategory === 'Headset').length,
        'Microphone': products.filter(p => p.subcategory === 'Microphone').length,
        'Webcam': products.filter(p => p.subcategory === 'Webcam').length,
        'Controller': products.filter(p => p.subcategory === 'Controller').length,
        'Lighting': products.filter(p => p.subcategory === 'Lighting').length
    };

    // Count larni HTML ga joylash
    Object.keys(categoryCounts).forEach(category => {
        const elementId = `${category.replace(/\s+/g, '')}ItemsCount`;
        const element = document.getElementById(elementId);
        
        if (element) {
            element.textContent = categoryCounts[category];
            console.log(`Updated ${elementId}: ${categoryCounts[category]}`);
        } else {
            console.warn(`Element with id '${elementId}' not found`);
        }
    });
}

// Global function sifatida loadProducts ni qayta aniqlash
window.loadProducts = function(category, subcategory = null) {
    const productCards = document.querySelector('#categoryProducts');
    productCards.innerHTML = '';

    let filteredProducts = [];

    if (category === 'all') {
        filteredProducts = products;
    } else if (subcategory) {
        filteredProducts = products.filter(product => 
            product.category === category && product.subcategory === subcategory
        );
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }

    filteredProducts.forEach(product => {
        const { id, name, category, price, oldPrice, image } = product;
        new ProductCard(id, name, category, price, oldPrice, image, "#categoryProducts").render();
    });

    // Mahsulotlar sonini yangilash
    updateProductsCount(filteredProducts.length);

    console.log(`Loaded ${filteredProducts.length} products for category: ${category}, subcategory: ${subcategory}`);
}

// Mahsulotlar sonini yangilash uchun alohida funksiya
function updateProductsCount(count) {
    const countElement = document.getElementById('products-count');
    if (countElement) {
        countElement.textContent = `Showing ${count} products`;
    }
}

// DOM yuklanganda countlarni yangilash
document.addEventListener('DOMContentLoaded', function() {
    // products massivi mavjudligini tekshirish
    if (typeof products !== 'undefined') {
        updateCategoryCounts();
    } else {
        console.error('products array is not available');
    }
});