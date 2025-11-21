let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

document.addEventListener('DOMContentLoaded', function() {
    updateWishlistCount();
    updateAllWishlistButtons();
    
    const wishlistBtn = document.querySelector('button[class*="flex"][class*="justify-center"][class*="items-center"]');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', openWishlistModal);
    }
});

function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    const existingIndex = wishlist.findIndex(p => p.id === productId);
    
    if (existingIndex !== -1) {
        wishlist.splice(existingIndex, 1);
        console.log(`Removed product ${productId} from wishlist`);
    } else {
        wishlist.push(product);
        console.log(`Added product ${productId} to wishlist`);
    }

    saveWishlistToStorage();
    
    updateWishlistCount();
    updateAllWishlistButtons();
    
    if (document.getElementById('wishlistModal')?.style.display === 'flex') {
        renderWishlistProducts();
    }
}

function saveWishlistToStorage() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function updateWishlistCount() {
    const wishlistCount = document.getElementById('wishlist-count');
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
    
    const headerWishlistBtn = document.querySelector('button[class*="flex"][class*="justify-center"][class*="items-center"]');
    if (headerWishlistBtn) {
        const existingBadge = headerWishlistBtn.querySelector('.wishlist-badge');
        if (wishlist.length > 0) {
            if (!existingBadge) {
                const badge = document.createElement('div');
                badge.className = 'wishlist-badge absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-medium leading-none text-white bg-red-500 rounded-full';
                badge.innerHTML = `<span class="text-white text-xs">${wishlist.length}</span>`;
                headerWishlistBtn.style.position = 'relative';
                headerWishlistBtn.appendChild(badge);
            } else {
                existingBadge.innerHTML = `<span class="text-white text-xs">${wishlist.length}</span>`;
            }
        } else if (existingBadge) {
            existingBadge.remove();
        }
    }
}

function updateAllWishlistButtons() {
    document.querySelectorAll('[data-wishlist-btn]').forEach(button => {
        const productId = parseInt(button.getAttribute('data-wishlist-btn'));
        updateWishlistButtonState(productId);
    });
}

function updateWishlistButtonState(productId) {
    const button = document.querySelector(`[data-wishlist-btn="${productId}"]`);
    if (!button) return;
    
    const isInWishlist = wishlist.some(p => p.id === productId);
    const heartIcon = button.querySelector('img');
    
    if (heartIcon) {
        if (isInWishlist) {
            heartIcon.src = "./assets/icons/heart-red.png";
            heartIcon.alt = "heart-red";
            button.classList.add('wishlist-active');
        } else {
            heartIcon.src = "./assets/icons/heart-black.png";
            heartIcon.alt = "heart-black";
            button.classList.remove('wishlist-active');
        }
    }
}

function openWishlistModal() {
    const modal = document.getElementById('wishlistModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        renderWishlistProducts();
    }
}

function closeWishlistModal() {
    const modal = document.getElementById('wishlistModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function renderWishlistProducts() {
    const wishlistProducts = document.getElementById('wishlist-products');
    if (!wishlistProducts) return;
    
    if (wishlist.length === 0) {
        wishlistProducts.innerHTML = `
            <div class="flex flex-col items-center justify-center py-12 text-center">
                <div class="w-24 h-24 mb-4 opacity-50 bg-gray-200 rounded-full flex items-center justify-center">
                    <img src="./assets/icons/heart-black.png" alt="Empty wishlist" class="w-12 h-12">
                </div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
                <p class="text-gray-500 mb-4">Add some products to your wishlist</p>
                <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-200" onclick="closeWishlistModal()">
                    Continue Shopping
                </button>
            </div>
        `;
        return;
    }

    wishlistProducts.innerHTML = wishlist.map(product => {
        const productPrice = typeof product.price === 'string' 
            ? product.price 
            : product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

        return `
        <ul class="border-b flex items-center justify-between sm:flex-nowrap flex-wrap py-4" data-product-id="${product.id}">
            <li class="px-2 md:w-[380px] sm:w-[300px] w-full">
                <div class="flex items-center w-full">
                    <div class="w-16 h-16 rounded-lg mr-4 flex items-center justify-center overflow-hidden border border-gray-200">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                    </div>
                    <div>
                        <h3 class="font-bold text-gray-800">${product.name}</h3>
                        <p class="text-gray-500 text-sm">${product.category}</p>
                    </div>
                </div>
            </li>
            <li class="px-2 md:w-[100px] sm:w-[80px] w-auto">
                <span class="font-bold text-gray-800">${productPrice}</span>
            </li>
            <li class="px-2 md:w-[140px] sm:w-[120px] w-auto">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    In Stock
                </span>
            </li>
            <li class="px-2 md:w-[140px] sm:w-[120px] w-auto">
                <button class="block bg-blue-600 hover:bg-blue-700 text-white md:px-4 px-2 py-2 rounded-lg transition duration-200" onclick="addToCartFromWishlist(${product.id})">
                    Add to Cart
                </button>
            </li>
            <li class="px-2 md:w-[70px] sm:w-[50px] w-auto flex justify-center">
                <button class="text-gray-400 hover:text-red-500 transition duration-200" onclick="removeFromWishlist(${product.id})">
                    <i class="far fa-trash-alt"></i>
                </button>
            </li>
        </ul>
        `;
    }).join('');
}

function removeFromWishlist(productId) {
    const productIndex = wishlist.findIndex(p => p.id === productId);
    
    if (productIndex !== -1) {
        wishlist.splice(productIndex, 1);
        saveWishlistToStorage();
        updateWishlistCount();
        updateAllWishlistButtons();
        renderWishlistProducts();
    }
}

function addToCartFromWishlist(productId) {
    addToCart(productId);
    console.log(`Product ${productId} added to cart from wishlist`);
}

function addAllToCart() {
    if (wishlist.length === 0) {
        alert('Wishlist is empty!');
        return;
    }
    
    wishlist.forEach(product => {
        addToCart(product.id);
    });
    
    alert(`Added all ${wishlist.length} products to cart!`);
}

function generateModalContent(product) {
    let discountBadge = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
    const isInWishlist = wishlist.some(p => p.id === product.id);
    const heartIcon = isInWishlist ? "./assets/icons/heart-red.png" : "./assets/icons/heart-black.png";
    const heartAlt = isInWishlist ? "heart-red" : "heart-black";

    if (discountBadge != -Infinity && !isNaN(discountBadge)) {
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
                        <img src="${heartIcon}" alt="${heartAlt}" class="w-5">
                    </button>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('click', function (event) {
    const modal = document.getElementById('wishlistModal');
    if (event.target === modal) {
        closeWishlistModal();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const wishlistModal = document.getElementById('wishlistModal');
        if (wishlistModal && wishlistModal.style.display === 'flex') {
            closeWishlistModal();
        }
    }
});