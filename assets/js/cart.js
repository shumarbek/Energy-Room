function openCartModal() {
    const cart = document.getElementById('cartModal');
    cart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

let sumProduct = 0;
let quantity = 1;
let cartProductsNumber = 0;

function addToCart(productId) {
    cartProductsNumber++;

    const cartBtn = document.getElementById('cartBtn');
    if (cartProductsNumber > 0) {
        cartBtn.innerHTML = `<img src="./assets/icons/cart-black.png" alt="cart">
        <div
            class="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-medium leading-none text-white bg-red-500 rounded-full" id="cartProductsNumberDiv">
            <span class="text-white text-xs">${cartProductsNumber}</span>
        </div>`;
    }

    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('Product:', productId);
        return;
    }

    const cartProductList = document.getElementById('cartProductList');
    cartProductList.innerHTML += generateCartProductList(product);

    const sumCart = document.querySelector('.sumCart');
    let productPrice = product.price * quantity;
    
    if (typeof product.price === 'string') {
        productPrice = parseFloat(product.price.replace('$', '')) * quantity;
    }
    
    sumProduct += productPrice;
    sumCart.textContent = sumProduct.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function generateCartProductList(product) {
    let productPrice = product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    return `
        <li class="flex py-6" data-product-id="${product.id}">
            <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img src="${product.image}"
                    alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
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
                    <p class="text-gray-500">Qty ${quantity}</p>

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
    cartProductsNumber--;

    const cartBtn = document.getElementById('cartBtn');
    if (cartProductsNumber > 0) {
        cartBtn.innerHTML = `<img src="./assets/icons/cart-black.png" alt="cart">
        <div
            class="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-medium leading-none text-white bg-red-500 rounded-full" id="cartProductsNumberDiv">
            <span class="text-white text-xs">${cartProductsNumber}</span>
        </div>`;
    } else {
        cartBtn.innerHTML = `<img src="./assets/icons/cart-black.png" alt="cart">`;
    }

    const element = document.querySelector(`li[data-product-id="${productId}"]`);
    if (element) {
        element.remove();
    }

    const product = products.find(p => p.id === productId);
    const sumCart = document.querySelector('.sumCart');
    let productPrice = product.price * quantity;

    if (typeof product.price === 'string') {
        productPrice = parseFloat(product.price.replace('$', '')) * quantity;
    }
    
    sumProduct -= productPrice;
    sumCart.textContent = sumProduct.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
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