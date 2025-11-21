// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    if (searchInput) {
        // Input focus bo'lganda
        searchInput.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        // Input focus yo'qolganida
        searchInput.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
        
        // Inputda yozish boshlanganda
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.trim();
            
            if (searchTerm.length > 0) {
                performSearch(searchTerm);
            } else {
                clearSearchResults();
            }
        });
        
        // Enter bosilganda
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = e.target.value.trim();
                if (searchTerm.length > 0) {
                    performSearch(searchTerm);
                }
            }
        });
        
        // Search icon bosilganda
        if (searchIcon) {
            searchIcon.addEventListener('click', function() {
                const searchTerm = searchInput.value.trim();
                if (searchTerm.length > 0) {
                    performSearch(searchTerm);
                }
            });
        }
    }
});

// Search natijalarini ko'rsatish
function performSearch(searchTerm) {
    console.log('Searching for:', searchTerm);
    
    // products massivi mavjudligini tekshirish
    if (typeof products === 'undefined') {
        console.error('Products array is not defined');
        return;
    }
    
    // Search qilish
    const searchResults = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    
    console.log('Found results:', searchResults.length);
    
    // Natijalarni ko'rsatish
    displaySearchResults(searchResults, searchTerm);
}

// Search natijalarini ekranga chiqarish
function displaySearchResults(results, searchTerm) {
    // Oldingi search results ni tozalash
    clearSearchResults();
    
    // Yangi search results container yaratish
    const searchContainer = document.querySelector('.search');
    let resultsContainer = document.getElementById('search-results-container');
    
    if (!resultsContainer) {
        resultsContainer = document.createElement('div');
        resultsContainer.id = 'search-results-container';
        resultsContainer.className = 'search-results-container absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg border border-gray-200 max-h-80 overflow-y-auto z-50';
        searchContainer.style.position = 'relative';
        searchContainer.appendChild(resultsContainer);
    }
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="p-4 text-center text-gray-500">
                No products found for "<strong>${searchTerm}</strong>"
            </div>
        `;
    } else {
        resultsContainer.innerHTML = `
            <div class="p-3 border-b border-gray-200 bg-gray-50 text-sm text-gray-600">
                Found ${results.length} product(s) for "<strong>${searchTerm}</strong>"
            </div>
            <div class="divide-y divide-gray-100">
                ${results.map(product => `
                    <div class="search-result-item p-3 hover:bg-gray-50 cursor-pointer transition-colors" 
                         onclick="openProductFromSearch(${product.id})"
                         data-product-id="${product.id}">
                        <div class="flex items-center space-x-3">
                            <div class="flex-shrink-0 w-12 h-12 bg-gray-200 rounded overflow-hidden">
                                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                            </div>
                            <div class="flex-1 min-w-0">
                                <h3 class="text-sm font-medium text-gray-900 truncate">${product.name}</h3>
                                <p class="text-sm text-gray-500 truncate">${product.category}</p>
                                <div class="flex items-center mt-1">
                                    <span class="text-sm font-bold text-gray-900">${typeof product.price === 'string' ? product.price : product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                                    ${product.oldPrice ? `<span class="text-sm text-gray-500 line-through ml-2">${typeof product.oldPrice === 'string' ? product.oldPrice : product.oldPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    // Tashqariga bosilganda yopish
    setTimeout(() => {
        document.addEventListener('click', closeSearchResultsOnClickOutside);
    }, 100);
}

// Search natijalarini tozalash
function clearSearchResults() {
    const resultsContainer = document.getElementById('search-results-container');
    if (resultsContainer) {
        resultsContainer.remove();
    }
    document.removeEventListener('click', closeSearchResultsOnClickOutside);
}

// Tashqariga bosilganda search natijalarini yopish
function closeSearchResultsOnClickOutside(event) {
    const searchContainer = document.querySelector('.search');
    const resultsContainer = document.getElementById('search-results-container');
    
    if (searchContainer && resultsContainer && !searchContainer.contains(event.target)) {
        clearSearchResults();
    }
}

// Search natijasidan product modalini ochish
function openProductFromSearch(productId) {
    console.log('Opening product from search:', productId);
    
    // Search natijalarini yopish
    clearSearchResults();
    
    // Search input ni tozalash
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Product modalini ochish
    openProductModal(productId);
}

// ESC bosilganda search natijalarini yopish
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        clearSearchResults();
    }
});