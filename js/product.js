/**
 * Product Detail Page Functionality
 */

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// Find product
const product = products.find(p => p.id === productId);

// Sample reviews data
const reviews = [
    {
        name: "Rajesh Kumar",
        date: "2025-02-15",
        rating: 5,
        text: "Excellent quality! The furniture exceeded our expectations. Great craftsmanship."
    },
    {
        name: "Priya Singh",
        date: "2025-02-10",
        rating: 4,
        text: "Very good product. Delivery was on time and assembly was professional."
    },
    {
        name: "Amit Verma",
        date: "2025-02-05",
        rating: 5,
        text: "Beautiful piece of furniture. Looks exactly like the picture. Worth every rupee."
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    loadProductDetails();
    setupProductPageListeners();
    loadRelatedProducts();
});

function loadProductDetails() {
    // Set breadcrumbs
    document.getElementById('breadcrumbCategory').textContent = product.category;
    document.getElementById('breadcrumbCategory').href = `index.html?category=${encodeURIComponent(product.category)}`;
    document.getElementById('breadcrumbProduct').textContent = product.name;
    
    // Set main product info
    document.getElementById('productCategory').textContent = product.category;
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productPrice').textContent = `₹${product.price.toLocaleString()}`;
    
    // Set specifications
    document.getElementById('specMaterial').textContent = product.material;
    document.getElementById('specWarranty').textContent = product.warranty;
    
    // Set rating
    document.getElementById('productRating').innerHTML = generateStars(product.rating);
    document.getElementById('reviewsCount').textContent = `(${product.reviews} reviews)`;
    document.getElementById('avgRating').textContent = product.rating;
    document.getElementById('avgRatingStars').innerHTML = generateStars(product.rating);
    document.getElementById('totalReviews').textContent = `(${product.reviews} reviews)`;
    
    // Set main image
    document.getElementById('mainProductImage').src = product.img;
    document.getElementById('mainProductImage').alt = product.name;
    
    // Load additional images (using same product image for demo)
    loadProductImages();
    
    // Load color options
    loadColorOptions();
    
    // Load reviews
    loadReviews();
}

function loadProductImages() {
    const thumbnails = document.getElementById('thumbnailGrid');
    
    // For demo, we'll use the same image with different parameters
    const images = [
        product.img,
        product.hoverImg || product.img,
        product.img + '&2',
        product.hoverImg || product.img + '&3'
    ];
    
    thumbnails.innerHTML = images.map((img, index) => `
        <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">
            <img src="${img}" alt="Product view ${index + 1}" loading="lazy">
        </div>
    `).join('');
}

function loadColorOptions() {
    const colorContainer = document.getElementById('colorOptions');
    
    const colors = product.colors || ['Brown', 'Black', 'White'];
    const colorMap = {
        'Brown': '#8B4513',
        'Black': '#000000',
        'White': '#FFFFFF',
        'Beige': '#F5F5DC',
        'Grey': '#808080',
        'Navy Blue': '#000080',
        'Tan': '#D2B48C',
        'Walnut': '#5C4033',
        'Honey': '#F0DDB0',
        'Teak': '#B8860B',
        'Blue': '#0000FF',
        'Green': '#008000',
        'Oak': '#964B00'
    };
    
    colorContainer.innerHTML = colors.map(color => `
        <div class="color-item" style="background-color: ${colorMap[color] || '#ccc'};" 
             title="${color}" onclick="selectColor(this, '${color}')"></div>
    `).join('');
}

function loadReviews() {
    const reviewsList = document.getElementById('reviewsList');
    
    reviewsList.innerHTML = reviews.map(review => `
        <div class="review-card">
            <div class="review-header">
                <span class="reviewer-name">${review.name}</span>
                <span class="review-date">${new Date(review.date).toLocaleDateString()}</span>
            </div>
            <div class="review-rating">${generateStars(review.rating)}</div>
            <p class="review-text">${review.text}</p>
        </div>
    `).join('');
}

function loadRelatedProducts() {
    const relatedContainer = document.getElementById('relatedProducts');
    
    // Get products from same category
    const related = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);
    
    if (related.length === 0) {
        // If no related in same category, show other products
        related.push(...products.filter(p => p.id !== product.id).slice(0, 4));
    }
    
    relatedContainer.innerHTML = related.map(p => `
        <a href="product.html?id=${p.id}" class="product-card-luxury">
            <div class="product-image">
                <img src="${p.img}" alt="${p.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-name">${p.name}</h3>
                <div class="product-price">₹${p.price.toLocaleString()}</div>
            </div>
        </a>
    `).join('');
}

function setupProductPageListeners() {
    // Quantity buttons
    document.getElementById('decreaseQty').addEventListener('click', () => {
        const qty = document.getElementById('quantity');
        if (qty.value > 1) qty.value = parseInt(qty.value) - 1;
    });
    
    document.getElementById('increaseQty').addEventListener('click', () => {
        const qty = document.getElementById('quantity');
        if (qty.value < 10) qty.value = parseInt(qty.value) + 1;
    });
    
    // Add to cart
    document.getElementById('addToCartBtn').addEventListener('click', () => {
        const quantity = parseInt(document.getElementById('quantity').value);
        for (let i = 0; i < quantity; i++) {
            addToCart(product.id);
        }
    });
    
    // WhatsApp contact
    document.getElementById('contactWhatsApp').addEventListener('click', (e) => {
        e.preventDefault();
        const message = encodeURIComponent(`Hello, I'm interested in ${product.name}. Can you provide more details?`);
        window.open(`https://wa.me/918630042048?text=${message}`, '_blank');
    });
}

// Global functions for onclick handlers
function changeMainImage(src, element) {
    document.getElementById('mainProductImage').src = src;
    
    // Update active state
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    element.classList.add('active');
}

function selectColor(element, color) {
    document.querySelectorAll('.color-item').forEach(c => {
        c.classList.remove('active');
    });
    element.classList.add('active');
    showNotification(`Selected color: ${color}`);
}

// Make functions global
window.changeMainImage = changeMainImage;
window.selectColor = selectColor;