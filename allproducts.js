document.addEventListener("DOMContentLoaded", () => {
    const allProducts = [
        { title: "Smartphone", originalPrice: 15999, discountPercent: 20, image: "phone.jpg", category: "electronics" },
        { title: "Laptop", originalPrice: 52999, discountPercent: 15, image: "laptop.jpg", category: "electronics" },
        { title: "Dress", originalPrice: 2999, discountPercent: 20, image: "dress.jpg", category: "fashion" },
        { title: "Sofa", originalPrice: 24999, discountPercent: 10, image: "sofa.jpg", category: "furniture" },
        { title: "Rice Bag", originalPrice: 1199, discountPercent: 15, image: "rice.jpg", category: "groceries" },
        { title: "sugar", originalPrice: 1199, discountPercent: 15, image: "sugar.jpg", category: "groceries" },
    ];

    const productGrid = document.getElementById("all-products");

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