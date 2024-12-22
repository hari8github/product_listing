// Product data
const products = [
    { name: "Handmade Soap", price: 8.99, image: "https://placehold.co/250x200" },
    { name: "Scented Candle", price: 15.99, image: "https://placehold.co/250x200" },
    { name: "Organic Tea Set", price: 24.99, image: "https://placehold.co/250x200" },
    { name: "Knitted Scarf", price: 19.99, image: "https://placehold.co/250x200" },
    { name: "Ceramic Mug", price: 12.99, image: "https://placehold.co/250x200" },
    { name: "Lavender Sachet", price: 7.99, image: "https://placehold.co/250x200" },
    { name: "Decorative Pillow", price: 29.99, image: "https://placehold.co/250x200" },
    { name: "Essential Oil Set", price: 34.99, image: "https://placehold.co/250x200" },
    { name: "Potpourri Bowl", price: 16.99, image: "https://placehold.co/250x200" },
    { name: "Quilted Blanket", price: 49.99, image: "https://placehold.co/250x200" },
    { name: "Herbal Tea Blend", price: 13.99, image: "https://placehold.co/250x200" },
    { name: "Hand Cream", price: 11.99, image: "https://placehold.co/250x200" },
    { name: "Aromatherapy Diffuser", price: 39.99, image: "https://placehold.co/250x200" },
    { name: "Jewelry Box", price: 27.99, image: "https://placehold.co/250x200" },
    { name: "Table Runner", price: 22.99, image: "https://placehold.co/250x200" },
    { name: "Photo Frame", price: 18.99, image: "https://placehold.co/250x200" },
    { name: "Garden Tools Set", price: 32.99, image: "https://placehold.co/250x200" },
    { name: "Throw Blanket", price: 45.99, image: "https://placehold.co/250x200" },
    { name: "Wind Chimes", price: 23.99, image: "https://placehold.co/250x200" },
    { name: "Recipe Book", price: 17.99, image: "https://placehold.co/250x200" }
];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');

// Function to create product cards
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
        </div>
    `;
    
    return card;
}

// Function to display products
function displayProducts(productsToShow) {
    productsGrid.innerHTML = '';
    productsToShow.forEach(product => {
        productsGrid.appendChild(createProductCard(product));
    });
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

// Initial display
displayProducts(products);