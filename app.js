document.addEventListener("DOMContentLoaded", () => {
    // Demo products (ensure this is global)
    const allProducts = [
        { title: "Smartphone", originalPrice: 15999, discountPercent: 20, image: "phone.jpg", category: "electronics" },
        { title: "Laptop", originalPrice: 52999, discountPercent: 15, image: "laptop.jpg", category: "electronics" },
        { title: "Dress", originalPrice: 2999, discountPercent: 20, image: "dress.jpg", category: "fashion" },
        { title: "Sofa", originalPrice: 24999, discountPercent: 10, image: "sofa.jpg", category: "furniture" },
        { title: "Rice / chawal", originalPrice: 1199, discountPercent: 15, image: "rice.jpg", category: "groceries" },
        { title: "sugar / cheeni", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "biscuits", originalPrice: 0, discountPercent: 0, image: "biscuits.jpg", category: "groceries" },
        { title: "atta", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "dal", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "salt", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "spices / masala", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sauces", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "oils / tel", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "yeast / maida", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "baking powder", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "milk", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "cottage cheese / paneer", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "butter", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "cream", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "butter cream / chhachh", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "yourt / dahi", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "cheese", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "fruits", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "vegitables", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "dry fruits", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "snacks", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "namkeen", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "chips", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "noodles", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "pasta", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "tea", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "green tea", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "coffee", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "soft drinks", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "laundry detergent", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "floor cleanears", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "dishwash", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "bathing soaps", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sampoo", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "toothpaste", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "hair oils", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "brushes", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "lassi", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "soda", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "almonds", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "cashews", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "parle biscuits", originalPrice: 1199, discountPercent: 15, image: "parle biscuits.jpg", category: "groceries" },
        { title: "britannia biscuits", originalPrice: 1199, discountPercent: 15, image: "britannia biscuits.jpg", category: "groceries" },
        { title: "sunfeast biscuits", originalPrice: 1199, discountPercent: 15, image: "sunfeast biscuits.jpg", category: "groceries" },
        { title: "oreo biscuits", originalPrice: 1199, discountPercent: 15, image: "oreo biscuits.jpg", category: "groceries" },
        { title: "priyagold biscuits", originalPrice: 1199, discountPercent: 15, image: "priyagold biscuits.jpg", category: "groceries" },
        { title: "parle parle g biscuits", originalPrice: 1199, discountPercent: 15, image: "parle parle g biscuits.jpg", category: "groceries" },
        { title: "parle g biscuits pack of 1", originalPrice: 1199, discountPercent: 15, image: "parle g biscuits pack of 1.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
        
        
    ];

    const productGrid = document.getElementById("all-products");
    const searchResultsGrid = document.getElementById("search-results");
    const searchQueryDisplay = document.getElementById("search-query");

    // Render products
    function renderProducts(products, gridElement) {
    gridElement.innerHTML = ''; // Clear previous content
    if (products.length === 0) {
        gridElement.innerHTML = '<p>No products found.</p>';
        return;
    }
    products.forEach((product) => {
            const finalPrice = product.originalPrice - (product.originalPrice * product.discountPercent) / 100;
            const productHTML = `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p class="price">
                        <span id="cut-price">₹${product.originalPrice}</span>
                        <span id="discounted-price">₹${finalPrice.toFixed(2)}</span>
                        <span>(${product.discountPercent}% OFF)</span>
                    </p>
                    
                    <a href="${product.title}.html" class="btn-primary"style="color: red;">view details</a>
                </div>
            `;
            gridElement.innerHTML += productHTML;
        });
}

// Redirect to product.html with the product ID
window.viewProduct = (productId) => {
    window.location.href = `product.html?id=${productId}`;
};

    // Search products and redirect to search.html
    window.searchProducts = () => {
        const searchBox = document.getElementById("search-box");
        const query = searchBox.value.trim();

        if (!query) {
            alert("Please enter a search query.");
            return;
        }

        // Redirect to search.html with the query as a URL parameter
        window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    };

    // Handle logic for the home page (index.html)
    if (window.location.pathname.endsWith("index.html")) {
        if (productGrid) {
            renderProducts(allProducts, productGrid);
        }
    }

    // Handle search results on search.html
    if (window.location.pathname.endsWith("search.html")) {
        // Get the query parameter from the URL
        const params = new URLSearchParams(window.location.search);
        const query = params.get("query")?.toLowerCase();

        if (query && searchQueryDisplay) {
            searchQueryDisplay.textContent = query;
        }

        const searchResults = allProducts.filter(product =>
            product.title.toLowerCase().includes(query)
        );

        if (searchResultsGrid) {
            renderProducts(searchResults, searchResultsGrid);
        }
    }
    
    const searchBox = document.getElementById("search-box");
    const suggestionsBox = document.getElementById("suggestions");

    // Display suggestions as user types
    window.showSuggestions = () => {
        const query = searchBox.value.trim().toLowerCase();

        // Clear previous suggestions
        suggestionsBox.innerHTML = "";

        if (!query) {
            suggestionsBox.style.display = "none";
            return;
        }

        // Filter products matching the query
        const filteredProducts = allProducts.filter(product =>
            product.title.toLowerCase().includes(query)
        );

        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const suggestion = document.createElement("div");
                suggestion.textContent = product.title;

                // On click, set the search box value and hide suggestions
                suggestion.onclick = () => {
                    searchBox.value = product.title;
                    suggestionsBox.style.display = "none";
                };

                suggestionsBox.appendChild(suggestion);
            });

            suggestionsBox.style.display = "block";
        } else {
            const noResult = document.createElement("div");
            noResult.textContent = "No results found";
            suggestionsBox.appendChild(noResult);
            suggestionsBox.style.display = "block";
        }
    };

    // Close suggestions when clicking outside
    document.addEventListener("click", (event) => {
        if (!event.target.closest("#search-box")) {
            suggestionsBox.style.display = "none";
        }
    });
    // Initially render all products
    renderProducts(allProducts, productGrid);

    // Filter by category logic
    function filterByCategory() {
        const selectedCategory = document.getElementById("category-select").value;
        const filteredProducts = selectedCategory === "all"
            ? allProducts
            : allProducts.filter(product => product.category === selectedCategory);
        renderProducts(filteredProducts, productGrid);
    }

    // Attach category filter event listener
    document.getElementById("category-select").addEventListener("change", filterByCategory);

    // View product details (placeholder function)
    window.viewProduct = (productTitle) => {
        alert(`Viewing details for ${productTitle}`);
    };

});