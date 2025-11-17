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
            console.log(discount);

            this.price = this.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
            this.oldPrice = this.oldPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
            
            if (discount != -Infinity) {
                discount = `<span class="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">-${discount}%</span>`;
                oldPrice = `<span class="text-[0.8rem] line-through">${this.oldPrice}</span>`
            } else {
                discount = '';
                oldPrice = '';
            }

            const element = document.createElement('div')
            element.classList = "productCard lg:w-[19%] md:w-[33%] sm:w-[50%] w-[50%] p-2 mb-5 rounded-lg hover:bg-[#1001] transition"
            element.innerHTML = `
                    <div class="block relative h-48 rounded overflow-hidden relative cursor-pointer rounded-lg bg-white" onclick="openProductModal(${this.id})">
                        <img src="${this.image}" alt="${this.name}" class="object-cover object-center w-full h-full block">
                        ${discount}
                        <button class="cursor-pointer absolute top-3 right-3 bg-white rounded-full p-1" onclick="addToWishlist(${this.id})">
                            <img src="./assets/icons/heart-black.png" alt="heart" class="w-5">
                        </button>
                    </div>
                    <div class="mt-4 sm:flex justify-between flex-col">
                        <div class="w-full">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">${this.category}</h3>
                            <h2 class="text-gray-900 title-font text-sm font-medium">${this.name}</h2>
                            <div class="mb-4">
                                <span class="text-[1.125rem] font-bold text-gray-900">${this.price}</span>
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
    
    let i = 0;
    products.forEach(product => {
        if (i < 10) {
            const { id, name, category, price, oldPrice, image } = product;
            new ProductCard(id, name, category, price, oldPrice, image, ".productCards").render();
            i++;
        }
    });
})