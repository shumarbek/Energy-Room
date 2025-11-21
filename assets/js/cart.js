function openCartModal() {
    const cart = document.getElementById('cartModal');
    cart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Initialize cart from localStorage or set defaults
let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
let sumProduct = parseFloat(localStorage.getItem('cartTotal')) || 0;
let cartProductsNumber = parseInt(localStorage.getItem('cartCount')) || 0;

// Initialize cart button on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartButton();
    renderCartProducts();
});

function updateCartButton() {
    const cartBtn = document.getElementById('cartBtn');
    if (cartProductsNumber > 0) {
        cartBtn.innerHTML = `<img src="./assets/icons/cart-black.png" alt="cart" class="w-6">
        <span class="lg:hidden ml-2 text-[1.125rem]">Cart</span>
        <div class="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-medium leading-none text-white bg-red-500 rounded-full" id="cartProductsNumberDiv">
            <span class="text-white text-xs">${cartProductsNumber}</span>
        </div>`;
    } else {
        cartBtn.innerHTML = `<img src="./assets/icons/cart-black.png" alt="cart" class="w-6">
        <span class="lg:hidden ml-2 text-[1.125rem]">Cart</span>`;
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    // Check if product already exists in cart
    const existingProductIndex = cartProducts.findIndex(p => p.id === productId);
    
    if (existingProductIndex !== -1) {
        // Product exists, increase quantity
        cartProducts[existingProductIndex].quantity += 1;
    } else {
        // Add new product to cart
        cartProducts.push({
            ...product,
            quantity: 1
        });
    }

    // Update cart totals
    cartProductsNumber++;
    let productPrice = typeof product.price === 'string' 
        ? parseFloat(product.price.replace('$', '')) 
        : product.price;
    sumProduct += productPrice;

    // Save to localStorage
    saveCartToStorage();
    
    // Update UI
    updateCartButton();
    renderCartProducts();
}

function renderCartProducts() {
    const cartProductList = document.getElementById('cartProductList');
    const sumCart = document.querySelector('.sumCart');
    
    // Clear current list
    cartProductList.innerHTML = '';
    
    // Add all products from cart
    cartProducts.forEach(product => {
        cartProductList.innerHTML += generateCartProductList(product);
    });
    
    // Update total
    sumCart.textContent = sumProduct.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function generateCartProductList(product) {
    let productPrice = typeof product.price === 'string' 
        ? product.price 
        : product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    return `
        <li class="flex py-6" data-product-id="${product.id}">
            <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img src="${product.image}"
                    alt="${product.name}"
                    class="size-full object-cover" />
            </div>

            <div class="ml-4 flex flex-1 flex-col">
                <div>
                    <div class="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href="#">${product.name}</a>
                        </h3>
                        <p class="ml-4">${productPrice}</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">${product.category}</p>
                </div>
                <div class="flex flex-1 items-end justify-between text-sm">
                    <p class="text-gray-500">Qty ${product.quantity}</p>

                    <div class="flex">
                        <button type="button"
                            class="font-medium text-indigo-600 hover:text-indigo-500" onclick="removeFromCart(${product.id})">Remove</button>
                    </div>
                </div>
            </div>
        </li>
    `;
}

function removeFromCart(productId) {
    const productIndex = cartProducts.findIndex(p => p.id === productId);
    
    if (productIndex !== -1) {
        const product = cartProducts[productIndex];
        
        // Update totals
        cartProductsNumber -= product.quantity;
        let productPrice = typeof product.price === 'string' 
            ? parseFloat(product.price.replace('$', '')) 
            : product.price;
        sumProduct -= productPrice * product.quantity;
        
        // Remove product from cart
        cartProducts.splice(productIndex, 1);
        
        // Save to localStorage
        saveCartToStorage();
        
        // Update UI
        updateCartButton();
        renderCartProducts();
    }
}

function saveCartToStorage() {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    localStorage.setItem('cartTotal', sumProduct.toString());
    localStorage.setItem('cartCount', cartProductsNumber.toString());
}

function clearCart() {
    cartProducts = [];
    sumProduct = 0;
    cartProductsNumber = 0;
    
    // Clear localStorage
    localStorage.removeItem('cartProducts');
    localStorage.removeItem('cartTotal');
    localStorage.removeItem('cartCount');
    
    // Update UI
    updateCartButton();
    renderCartProducts();
}

function closeCartModal() {
    const modal = document.getElementById('cartModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.addEventListener('click', function (event) {
    const modal = document.getElementById('cartModal');
    if (event.target === modal) {
        closeCartModal();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeCartModal();
    }
});