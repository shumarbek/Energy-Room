function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('Product:', productId);
        return;
    }

    const modalContent = document.getElementById('productModalContent');
    modalContent.innerHTML = generateModalContent(product);

    const modal = document.getElementById('productModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function generateModalContent(product) {
    let discountBadge = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

    if (discountBadge != -Infinity) {
        discountBadge = `<span class="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">-${discountBadge}%</span>`;
    } else {
        discountBadge = '';
    }

    let oldPrice = '';
    if (product.oldPrice) {
        oldPrice = `<span class="text-gray-500 line-through text-lg ml-2">${product.oldPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>`;
    }

    return `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <div class="relative rounded overflow-hidden">
                            <img src="${product.image}" alt="${product.name}" class="w-full h-auto">
                            <div class="absolute top-1 left-1">
                                ${discountBadge}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">${product.category}</h3>
                        <h2 class="text-gray-900 title-font text-2xl font-bold mb-2">${product.name}</h2>
                        
                        <div class="flex items-center mb-4">
                            <div class="flex text-yellow-400">
                                ${generateStarRating(product.rating)}
                            </div>
                            <span class="text-gray-600 ml-2">${product.rating} (${product.reviews} comment)</span>
                        </div>
                        
                        <div class="mb-4">
                            <span class="text-2xl font-bold text-gray-900">${product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                            ${oldPrice}
                        </div>
                        
                        <p class="text-gray-700 mb-4">${product.description}</p>
                        
                        <div class="mb-4">
                            <h4 class="font-medium mb-2">Xususiyatlar:</h4>
                            <ul class="list-disc pl-5 text-gray-700">
                                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="mt-6 flex space-x-4">
                            <button class="flex items-center bg-[#CC0000] text-white px-4 py-3 rounded-lg cursor-pointer hover:bg-[#CC0000]/80 transition flex-1 justify-center" onclick="addToCart(${product.id})">
                                <span class="mr-2">Add to cart</span>
                                <img src="./assets/icons/cart-white.png" alt="cart" class="w-5">
                            </button>
                            <button class="flex items-center border border-gray-300 text-gray-700 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-100 transition" onclick="addToWishlist(${product.id})" data-wishlist-btn="${product.id}">
                                <img src="./assets/icons/heart-black.png" alt="heart" class="w-5">
                            </button>
                        </div>
                    </div>
                </div>
            `;
}

function generateStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars += '<span>★</span>';
    }

    if (hasHalfStar) {
        stars += '<span>★</span>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<span class="text-gray-300">★</span>';
    }

    return stars;
}

document.addEventListener('click', function (event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeProductModal();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeProductModal();
    }
});