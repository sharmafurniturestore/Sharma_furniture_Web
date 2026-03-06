/**
 * SHARMA FURNITURE - COMPLETE WORKING VERSION
 * All improvements applied
 */

// ===== PRODUCT DATABASE (All 20 products) =====
const products = [
    { 
        id: 1, 
        name: "Luxury Fabric 3-Seater Sofa", 
        price: 29999, 
        category: "Sofa Sets", 
        img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format",
        hoverImg: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=600&auto=format",
        rating: 4.8,
        reviews: 124,
        material: "Premium Italian Fabric",
        warranty: "5 Years",
        colors: ["Beige", "Grey", "Navy Blue"],
        description: "Experience ultimate comfort with our luxury fabric sofa. Designed for modern living spaces."
    },
    { 
        id: 2, 
        name: "Premium Leather Recliner Chair", 
        price: 18500, 
        category: "Recliner Chairs", 
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format",
        hoverImg: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&auto=format",
        rating: 4.9,
        reviews: 89,
        material: "Genuine Leather",
        warranty: "3 Years",
        colors: ["Brown", "Black", "Tan"],
        description: "Adjustable recliner chair designed for ultimate relaxation with premium leather finish."
    },
    { 
        id: 3, 
        name: "Solid Wood King Size Bed", 
        price: 34999, 
        category: "Beds & Bed Frames", 
        img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format",
        hoverImg: "https://images.unsplash.com/photo-1631049158822-36423e8c3c9b?w=600&auto=format",
        rating: 4.7,
        reviews: 156,
        material: "Solid Sheesham Wood",
        warranty: "10 Years",
        colors: ["Honey", "Walnut", "Teak"],
        description: "Elegant wooden king size bed with strong frame and timeless design."
    },
    { 
        id: 4, 
        name: "Orthopedic Comfort Mattress", 
        price: 12999, 
        category: "Mattresses", 
        img: "https://images.unsplash.com/photo-1631049035182-249067d7618e?w=600&auto=format",
        hoverImg: "https://images.unsplash.com/photo-1631048885020-83c1e1f4b1b1?w=600&auto=format",
        rating: 4.6,
        reviews: 203,
        material: "Memory Foam + Latex",
        warranty: "8 Years",
        colors: ["White", "Grey"],
        description: "Soft and supportive mattress for healthy sleep with orthopedic support."
    },
    { 
        id: 5, 
        name: "Modern 6-Seater Dining Table Set", 
        price: 26500, 
        category: "Dining Tables & Dining Sets", 
        img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&auto=format",
        hoverImg: "https://images.unsplash.com/photo-1617806118233-18e1de247201?w=600&auto=format",
        rating: 4.8,
        reviews: 167,
        material: "Solid Wood + Glass",
        warranty: "5 Years",
        colors: ["Brown", "Black", "White"],
        description: "Stylish dining set perfect for family meals and gatherings."
    },
    { 
        id: 6, 
        name: "Sliding Door Wooden Wardrobe", 
        price: 22999, 
        category: "Wardrobes & Almirahs", 
        img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format",
        hoverImg: "https://images.unsplash.com/photo-1618220179428-22790b461014?w=600&auto=format",
        rating: 4.7,
        reviews: 98,
        material: "Engineered Wood + Laminate",
        warranty: "5 Years",
        colors: ["Walnut", "White", "Oak"],
        description: "Spacious wardrobe with smooth sliding doors and ample storage."
    },
    { 
        id: 7, 
        name: "Elegant Dressing Table with Mirror", 
        price: 9800, 
        category: "Dressing Tables", 
        img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&auto=format",
        hoverImg: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbg?w=600&auto=format",
        rating: 4.5,
        reviews: 76,
        material: "Solid Wood + Glass Top",
        warranty: "3 Years",
        colors: ["White", "Brown", "Black"],
        description: "Wooden dressing table with mirror and drawers for storage."
    },
    { 
        id: 8, 
        name: "Contemporary TV Unit Cabinet", 
        price: 13499, 
        category: "TV Units / TV Cabinets", 
        img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&auto=format",
        hoverImg: "https://images.unsplash.com/photo-1615874959474-d609969a20ee?w=600&auto=format",
        rating: 4.6,
        reviews: 112,
        material: "Engineered Wood + PU Finish",
        warranty: "3 Years",
        colors: ["Walnut", "White", "Grey"],
        description: "Modern TV unit with storage shelves and cable management."
    },
    { 
        id: 9, 
        name: "Modular Kitchen Cabinet System", 
        price: 68000, 
        category: "Modular Kitchen Cabinets", 
        img: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=600&auto=format",
        hoverImg: "https://images.unsplash.com/photo-1556912173-3bb406ef7e78?w=600&auto=format",
        rating: 4.9,
        reviews: 45,
        material: "Waterproof MDF + Acrylic",
        warranty: "10 Years",
        colors: ["White", "Blue", "Green", "Wood"],
        description: "Smart modular kitchen cabinets for modern homes with soft-close mechanisms."
    },
    { 
        id: 10, 
        name: "Modern Wooden Coffee Table", 
        price: 6499, 
        category: "Center Tables / Coffee Tables", 
        img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&auto=format",
        hoverImg: "https://images.unsplash.com/photo-1533090161767-e6ffed986c89?w=600&auto=format",
        rating: 4.4,
        reviews: 134,
        material: "Solid Wood + Tempered Glass",
        warranty: "3 Years",
        colors: ["Brown", "Black", "White"],
        description: "Stylish coffee table ideal for living rooms with storage shelf."
    },
    { 
        id: 11, 
        name: "Stainless Steel Kitchen Trolley", 
        price: 7999, 
        category: "Kitchen Trolleys", 
        img: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=600&auto=format",
        hoverImg: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d5?w=600&auto=format",
        rating: 4.3,
        reviews: 67,
        material: "Stainless Steel",
        warranty: "2 Years",
        colors: ["Silver"],
        description: "Multi-purpose kitchen trolley for easy storage."
    },
    { 
        id: 12, 
        name: "Wooden Crockery Display Cabinet", 
        price: 14999, 
        category: "Crockery Cabinets", 
        img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format",
        hoverImg: "https://images.unsplash.com/photo-1616486338812-3dadae4b4acf?w=600&auto=format",
        rating: 4.5,
        reviews: 89,
        material: "Solid Wood + Glass",
        warranty: "3 Years",
        colors: ["Brown", "White"],
        description: "Elegant cabinet for displaying crockery sets."
    },
    { 
        id: 13, 
        name: "Minimalist Side Table", 
        price: 3999, 
        category: "Side Tables", 
        img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&auto=format",
        hoverImg: "https://images.unsplash.com/photo-1540574163026-643ea20ade26?w=600&auto=format",
        rating: 4.2,
        reviews: 156,
        material: "Engineered Wood",
        warranty: "1 Year",
        colors: ["Brown", "Black", "White"],
        description: "Compact side table for bedroom or living room."
    },
    { 
        id: 14, 
        name: "Multi-Layer Wooden Shoe Rack", 
        price: 4499, 
        category: "Shoe Racks", 
        img: "https://images.unsplash.com/photo-1600180758890-6c5d1f0c2b8d?w=600&auto=format",
        hoverImg: "https://images.unsplash.com/photo-1600180758890-6c5d1f0c2b8e?w=600&auto=format",
        rating: 4.1,
        reviews: 203,
        material: "Engineered Wood",
        warranty: "1 Year",
        colors: ["Brown", "White"],
        description: "Space-saving shoe rack for organized storage."
    },
    { 
        id: 15, 
        name: "Wooden Bookshelf Storage Rack", 
        price: 8200, 
        category: "Bookshelves / Book Racks", 
        img: "https://images.unsplash.com/photo-1588580000645-4562a6d2c839?w=600&auto=format",
        hoverImg: "https://images.unsplash.com/photo-1588580000645-4562a6d2c840?w=600&auto=format",
        rating: 4.4,
        reviews: 178,
        material: "Solid Wood",
        warranty: "3 Years",
        colors: ["Brown", "Walnut"],
        description: "Stylish bookshelf for books and décor."
    },
    { 
        id: 16, 
        name: "Study Table with Storage Drawers", 
        price: 8999, 
        category: "Study Tables & Chairs", 
        img: "https://images.unsplash.com/photo-1582582494700-7b2f7f4c9a3c?w=600&auto=format",
        hoverImg: "https://images.unsplash.com/photo-1582582494700-7b2f7f4c9a3d?w=600&auto=format",
        rating: 4.3,
        reviews: 145,
        material: "Engineered Wood",
        warranty: "2 Years",
        colors: ["Brown", "White"],
        description: "Practical study table for students and work."
    },
    { 
        id: 17, 
        name: "Wooden Office Work Desk", 
        price: 11500, 
        category: "Office Tables & Chairs", 
        img: "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?w=600&auto=format",
        hoverImg: "https://images.unsplash.com/photo-1593642532871-8b12e02d091d?w=600&auto=format",
        rating: 4.5,
        reviews: 98,
        material: "Solid Wood",
        warranty: "3 Years",
        colors: ["Brown", "Black"],
        description: "Durable office desk suitable for home office."
    },
    { 
        id: 18, 
        name: "Compact Computer Table", 
        price: 6999, 
        category: "Computer Tables", 
        img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&auto=format",
        hoverImg: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6be?w=600&auto=format",
        rating: 4.2,
        reviews: 167,
        material: "Engineered Wood",
        warranty: "2 Years",
        colors: ["Black", "White"],
        description: "Space-efficient table designed for computers."
    },
    { 
        id: 19, 
        name: "Modern Wall Mounted Shelves", 
        price: 2999, 
        category: "Wall Shelves", 
        img: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&auto=format",
        hoverImg: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9b?w=600&auto=format",
        rating: 4.0,
        reviews: 234,
        material: "Engineered Wood",
        warranty: "1 Year",
        colors: ["Brown", "White"],
        description: "Decorative wall shelves for books and décor."
    },
    { 
        id: 20, 
        name: "Outdoor Patio Furniture Set", 
        price: 21000, 
        category: "Outdoor Furniture", 
        img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&auto=format",
        hoverImg: "https://images.unsplash.com/photo-1600210492493-0946911123eb?w=600&auto=format",
        rating: 4.6,
        reviews: 56,
        material: "Rattan + Aluminum",
        warranty: "2 Years",
        colors: ["Brown", "Black"],
        description: "Comfortable outdoor furniture set for garden spaces."
    }
];

// ===== GLOBAL VARIABLES =====
let cart = [];

// ===== LOAD CART FROM LOCALSTORAGE =====
try {
    const savedCart = localStorage.getItem('sharmaCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
} catch(e) {
    console.log('No saved cart found');
    cart = [];
}

// ===== INITIALIZE WHEN PAGE LOADS =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Sharma Furniture Loaded Successfully!');
    
    // Update cart count
    updateCartCount();
    
    // Check which page we're on
    const isProductPage = window.location.pathname.includes('product.html');
    
    if (isProductPage) {
        initProductPage();
    } else {
        initMainPage();
    }
    
    // Setup common elements
    setupCartButtons();
    setupWhatsApp();
    setupSearch();
    setupMobileMenu();
    setupProductScroll();
    setupCheckoutModal();
    setupNavLinks();
    fixImageLoading();
});

// ===== MAIN PAGE INITIALIZATION =====
function initMainPage() {
    const productGrid = document.getElementById('productGrid');
    if (productGrid) {
        displayProducts(productGrid, products);
    }
    
    setupFilters();
    setupSort();
}

// ===== DISPLAY PRODUCTS =====
function displayProducts(grid, productsToShow) {
    let html = '';
    
    productsToShow.forEach(product => {
        html += `
            <div class="product-card-luxury" onclick="window.location.href='product.html?id=${product.id}'" style="cursor: pointer;">
                <div class="product-image">
                    <img src="${product.img}" alt="${product.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format'">
                    <button class="product-quick-view" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fas fa-shopping-bag"></i> Quick Add
                    </button>
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-rating">
                        ${generateStars(product.rating)}
                        <span>(${product.reviews})</span>
                    </div>
                    <div class="product-price">₹${product.price.toLocaleString()}</div>
                    <button class="add-to-cart-luxury" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
    });
    
    grid.innerHTML = html;
}

// ===== GENERATE STARS =====
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// ===== FILTER BY CATEGORY (for category cards) =====
window.filterByCategory = function(category) {
    const productsSection = document.querySelector('.featured-products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        if (btn.dataset.cat === category) {
            btn.click();
        }
    });
};

// ===== SETUP NAVIGATION LINKS =====
function setupNavLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const category = this.dataset.category;
            
            if (category === 'new') {
                // Show new arrivals (first 8 products)
                const newProducts = products.slice(0, 8);
                const productGrid = document.getElementById('productGrid');
                if (productGrid) {
                    displayProducts(productGrid, newProducts);
                    document.querySelector('.featured-products').scrollIntoView({ behavior: 'smooth' });
                }
            } else if (category === 'sale') {
                // Show products under ₹15000
                const saleProducts = products.filter(p => p.price < 15000);
                const productGrid = document.getElementById('productGrid');
                if (productGrid) {
                    displayProducts(productGrid, saleProducts);
                    document.querySelector('.featured-products').scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Filter by category
                const filterButtons = document.querySelectorAll('.filter-btn');
                filterButtons.forEach(btn => {
                    if (btn.dataset.cat === category) {
                        btn.click();
                    }
                });
                document.querySelector('.featured-products').scrollIntoView({ behavior: 'smooth' });
            }
            
            // Close mobile menu if open
            const mainNav = document.getElementById('mainNav');
            const menuToggle = document.getElementById('menuToggle');
            if (mainNav && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                if (menuToggle) {
                    menuToggle.querySelector('i').className = 'fas fa-bars';
                }
            }
        });
    });
}

// ===== SETUP FILTERS =====
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.cat;
            const grid = document.getElementById('productGrid');
            
            if (category === 'all') {
                displayProducts(grid, products);
            } else {
                const filtered = products.filter(p => p.category === category);
                displayProducts(grid, filtered);
            }
        });
    });
}

// ===== SETUP SORT =====
function setupSort() {
    const sortSelect = document.getElementById('sortProducts');
    if (!sortSelect) return;
    
    sortSelect.addEventListener('change', function() {
        let sorted = [...products];
        const grid = document.getElementById('productGrid');
        
        switch(this.value) {
            case 'price-low':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                sorted.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                sorted = products;
        }
        
        displayProducts(grid, sorted);
    });
}

// ===== SETUP SEARCH =====
function setupSearch() {
    const searchToggle = document.getElementById('searchToggle');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', function(e) {
            e.preventDefault();
            searchOverlay.classList.add('active');
            setTimeout(() => {
                if (searchInput) searchInput.focus();
            }, 300);
        });
    }
    
    if (closeSearch && searchOverlay) {
        closeSearch.addEventListener('click', function() {
            searchOverlay.classList.remove('active');
            if (searchResults) searchResults.innerHTML = '';
            if (searchInput) searchInput.value = '';
        });
    }
    
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function() {
            const term = this.value.toLowerCase();
            
            if (term.length < 2) {
                searchResults.innerHTML = '';
                return;
            }
            
            const results = products.filter(p => 
                p.name.toLowerCase().includes(term) || 
                p.category.toLowerCase().includes(term) ||
                p.description.toLowerCase().includes(term)
            ).slice(0, 5);
            
            if (results.length === 0) {
                searchResults.innerHTML = '<div class="no-results">No products found</div>';
            } else {
                let html = '';
                results.forEach(p => {
                    html += `
                        <div class="search-result-item" onclick="window.location.href='product.html?id=${p.id}'">
                            <img src="${p.img}" alt="${p.name}">
                            <div>
                                <h4>${p.name}</h4>
                                <p>₹${p.price.toLocaleString()}</p>
                            </div>
                        </div>
                    `;
                });
                searchResults.innerHTML = html;
            }
        });
    }
    
    // Close on escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
            if (searchResults) searchResults.innerHTML = '';
            if (searchInput) searchInput.value = '';
        }
    });
}

// ===== SETUP MOBILE MENU =====
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            mainNav.classList.toggle('active');
            
            const icon = this.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }
}

// ===== SETUP PRODUCT SCROLL =====
function setupProductScroll() {
    const grid = document.querySelector('.product-grid-luxury');
    const scrollLeft = document.getElementById('scrollLeft');
    const scrollRight = document.getElementById('scrollRight');
    
    if (grid && scrollLeft && scrollRight) {
        scrollLeft.addEventListener('click', () => {
            grid.scrollBy({ left: -300, behavior: 'smooth' });
        });
        
        scrollRight.addEventListener('click', () => {
            grid.scrollBy({ left: 300, behavior: 'smooth' });
        });
        
        grid.addEventListener('scroll', () => {
            scrollLeft.disabled = grid.scrollLeft <= 0;
            scrollRight.disabled = grid.scrollLeft >= (grid.scrollWidth - grid.clientWidth - 10);
        });
        
        // Initial check
        setTimeout(() => {
            scrollLeft.disabled = grid.scrollLeft <= 0;
            scrollRight.disabled = grid.scrollLeft >= (grid.scrollWidth - grid.clientWidth - 10);
        }, 500);
    }
}

// ===== PRODUCT PAGE INITIALIZATION =====
function initProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    // Set breadcrumb
    const breadcrumbCategory = document.getElementById('breadcrumbCategory');
    const breadcrumbProduct = document.getElementById('breadcrumbProduct');
    if (breadcrumbCategory) breadcrumbCategory.textContent = product.category;
    if (breadcrumbProduct) breadcrumbProduct.textContent = product.name;
    
    // Set basic info
    setElementText('productCategory', product.category);
    setElementText('productName', product.name);
    setElementText('productDescription', product.description);
    setElementText('fullDescription', product.description);
    setElementText('productPrice', `₹${product.price.toLocaleString()}`);
    setElementText('specMaterial', product.material);
    setElementText('specWarranty', product.warranty);
    setElementText('fullMaterial', product.material);
    setElementText('warrantyPeriod', product.warranty);
    setElementText('featureWarranty', product.warranty);
    
    // Set rating
    const ratingEl = document.getElementById('productRating');
    if (ratingEl) ratingEl.innerHTML = generateStars(product.rating);
    
    setElementText('reviewsCount', `(${product.reviews} reviews)`);
    setElementText('avgRating', product.rating);
    
    const avgStars = document.getElementById('avgRatingStars');
    if (avgStars) avgStars.innerHTML = generateStars(product.rating);
    
    setElementText('totalReviews', `(${product.reviews} reviews)`);
    
    // Set main image
    const mainImage = document.getElementById('mainProductImage');
    if (mainImage) {
        mainImage.src = product.img;
        mainImage.alt = product.name;
        mainImage.onerror = function() {
            this.src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format';
        };
    }
    
    // Image zoom functionality
    const mainImageContainer = document.getElementById('mainImageContainer');
    if (mainImageContainer && mainImage) {
        mainImageContainer.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            mainImage.style.transformOrigin = `${x}% ${y}%`;
            mainImage.style.transform = 'scale(1.5)';
        });
        
        mainImageContainer.addEventListener('mouseleave', function() {
            mainImage.style.transform = 'scale(1)';
        });
    }
    
    // Load thumbnails
    loadThumbnails(product);
    
    // Load colors
    loadColors(product);
    
    // Load reviews
    loadReviews();
    
    // Load related products
    loadRelatedProducts(product);
    
    // Setup quantity buttons
    setupQuantityButtons();
    
    // Setup tabs
    setupTabs();
    
    // Add to cart button
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const qtyInput = document.getElementById('quantity');
            const quantity = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
            
            for (let i = 0; i < quantity; i++) {
                addToCart(product.id);
            }
        });
    }
    
    // WhatsApp contact
    const contactWhatsApp = document.getElementById('contactWhatsApp');
    if (contactWhatsApp) {
        contactWhatsApp.addEventListener('click', function(e) {
            e.preventDefault();
            const message = encodeURIComponent(`Hello, I'm interested in ${product.name}. Can you provide more details?`);
            window.open(`https://wa.me/918630042048?text=${message}`, '_blank');
        });
    }
}

// ===== SETUP TABS =====
function setupTabs() {
    const tabHeaders = document.querySelectorAll('.tab-header');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            tabHeaders.forEach(h => h.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(`tab-${tabId}`).classList.add('active');
        });
    });
}

// ===== HELPER: Set element text =====
function setElementText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

// ===== LOAD THUMBNAILS =====
function loadThumbnails(product) {
    const grid = document.getElementById('thumbnailGrid');
    if (!grid) return;
    
    const images = [
        product.img,
        product.hoverImg || product.img,
        product.img,
        product.hoverImg || product.img
    ];
    
    let html = '';
    images.forEach((img, index) => {
        html += `
            <div class="thumbnail-item ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">
                <img src="${img}" alt="Thumbnail ${index + 1}" loading="lazy" onerror="this.src='${product.img}'">
            </div>
        `;
    });
    
    grid.innerHTML = html;
}

// ===== LOAD COLORS =====
function loadColors(product) {
    const container = document.querySelector('.color-options-detailed');
    if (!container) return;
    
    const colors = product.colors || ['Brown', 'Black', 'White'];
    const colorMap = {
        'Brown': '#8B4513', 'Black': '#000000', 'White': '#FFFFFF',
        'Beige': '#F5F5DC', 'Grey': '#808080', 'Navy Blue': '#000080',
        'Tan': '#D2B48C', 'Walnut': '#5C4033', 'Honey': '#F0DDB0',
        'Teak': '#B8860B', 'Blue': '#0000FF', 'Green': '#008000',
        'Oak': '#964B00', 'Silver': '#C0C0C0', 'Wood': '#8B5A2B'
    };
    
    let html = '';
    colors.forEach(color => {
        html += `
            <div class="color-chip" style="background-color: ${colorMap[color] || '#ccc'};" 
                 title="${color}" onclick="selectColor(this, '${color}')"></div>
        `;
    });
    
    container.innerHTML = html;
}

// ===== LOAD REVIEWS =====
function loadReviews() {
    const list = document.querySelector('.review-cards-detailed');
    if (!list) return;
    
    const reviews = [
        { name: "Rajesh Kumar", date: "2025-02-15", rating: 5, text: "Excellent quality! The furniture exceeded our expectations. Great craftsmanship and beautiful design. Delivery was prompt and assembly was professional." },
        { name: "Priya Singh", date: "2025-02-10", rating: 4, text: "Very good product. The material quality is top-notch. Delivery was on time and the team was very helpful. Slight delay in assembly but overall satisfied." },
        { name: "Amit Verma", date: "2025-02-05", rating: 5, text: "Beautiful piece of furniture. Looks exactly like the picture. Worth every rupee. The customer service was excellent and they answered all my questions." }
    ];
    
    let html = '';
    reviews.forEach(r => {
        html += `
            <div class="review-card-detailed">
                <div class="review-header-detailed">
                    <div class="reviewer-info">
                        <h4>${r.name}</h4>
                        <span>${new Date(r.date).toLocaleDateString()}</span>
                    </div>
                    <div class="review-rating">${generateStars(r.rating)}</div>
                </div>
                <p class="review-text">${r.text}</p>
            </div>
        `;
    });
    
    list.innerHTML = html;
}

// ===== LOAD RELATED PRODUCTS =====
function loadRelatedProducts(currentProduct) {
    const container = document.querySelector('.related-products-grid');
    if (!container) return;
    
    const related = products
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 4);
    
    if (related.length === 0) {
        container.style.display = 'none';
        return;
    }
    
    let html = '';
    related.forEach(p => {
        html += `
            <div class="related-product-card" onclick="window.location.href='product.html?id=${p.id}'">
                <img src="${p.img}" alt="${p.name}" loading="lazy">
                <div class="related-product-info">
                    <h4>${p.name}</h4>
                    <div class="price">₹${p.price.toLocaleString()}</div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    container.style.display = 'grid';
}

// ===== SETUP QUANTITY BUTTONS =====
function setupQuantityButtons() {
    const decBtn = document.getElementById('decreaseQty');
    const incBtn = document.getElementById('increaseQty');
    const qtyInput = document.getElementById('quantity');
    
    if (decBtn && qtyInput) {
        decBtn.addEventListener('click', function() {
            let val = parseInt(qtyInput.value) || 1;
            if (val > 1) qtyInput.value = val - 1;
        });
    }
    
    if (incBtn && qtyInput) {
        incBtn.addEventListener('click', function() {
            let val = parseInt(qtyInput.value) || 1;
            if (val < 10) qtyInput.value = val + 1;
        });
    }
}

// ===== CART FUNCTIONS =====
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existing = cart.find(item => item.id === productId);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            quantity: 1
        });
    }
    
    saveCart();
    showNotification(`${product.name} added to cart!`);
    animateCartIcon();
}

function removeFromCart(index) {
    const removed = cart[index];
    cart.splice(index, 1);
    saveCart();
    showNotification(`${removed.name} removed from cart`);
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity < 1) {
        cart.splice(index, 1);
    }
    saveCart();
}

function calculateTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function saveCart() {
    localStorage.setItem('sharmaCart', JSON.stringify(cart));
    updateCartCount();
    updateCartDrawer();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cartCount');
    const cartHeader = document.getElementById('cartCountHeader');
    
    if (cartCount) cartCount.textContent = count;
    if (cartHeader) cartHeader.textContent = count;
}

function updateCartDrawer() {
    const container = document.getElementById('cartItemsContainer');
    const subtotalSpan = document.getElementById('cartSubtotal');
    const totalSpan = document.getElementById('grandTotal');
    
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 40px 20px; color: #999;"><i class="fas fa-shopping-bag" style="font-size: 3rem; margin-bottom: 15px;"></i><p>Your cart is empty</p></div>';
    } else {
        let html = '';
        cart.forEach((item, i) => {
            html += `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${item.name}</h4>
                        <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                        <div class="cart-item-quantity">
                            <button class="qty-btn" onclick="updateQuantity(${i}, -1)">−</button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${i}, 1)">+</button>
                            <i class="fas fa-trash remove-item" onclick="removeFromCart(${i})"></i>
                        </div>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    }
    
    const total = calculateTotal();
    if (subtotalSpan) subtotalSpan.textContent = `₹${total.toLocaleString()}`;
    if (totalSpan) totalSpan.textContent = `₹${total.toLocaleString()}`;
}

// ===== CART DRAWER =====
function setupCartButtons() {
    const cartBtn = document.getElementById('cartButton');
    const cartHeader = document.getElementById('cartIconHeader');
    const closeBtn = document.getElementById('closeCartBtn');
    const overlay = document.getElementById('cartOverlay');
    const continueBtn = document.getElementById('continueShopping');
    
    if (cartBtn) cartBtn.addEventListener('click', openCart);
    if (cartHeader) cartHeader.addEventListener('click', openCart);
    if (closeBtn) closeBtn.addEventListener('click', closeCart);
    if (overlay) overlay.addEventListener('click', closeCart);
    if (continueBtn) continueBtn.addEventListener('click', closeCart);
}

function openCart() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    
    if (drawer && overlay) {
        drawer.classList.add('open');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
        updateCartDrawer();
    }
}

function closeCart() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    
    if (drawer && overlay) {
        drawer.classList.remove('open');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// ===== WHATSAPP =====
function setupWhatsApp() {
    const waBtn = document.getElementById('waButton');
    if (waBtn) {
        waBtn.addEventListener('click', function() {
            const msg = encodeURIComponent('Hello, I want to inquire about furniture from Sharma Furniture.');
            window.open(`https://wa.me/918630042048?text=${msg}`, '_blank');
        });
    }
}

// ===== CHECKOUT MODAL WITH FORMSPREE =====
function setupCheckoutModal() {
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    const checkoutModal = document.getElementById('checkoutModal');
    const orderForm = document.getElementById('orderForm');
    const orderSuccess = document.getElementById('orderSuccess');
    const modalOrderSummary = document.getElementById('modalOrderSummary');
    
    if (!placeOrderBtn || !checkoutModal) return;
    
    placeOrderBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            showNotification('Your cart is empty');
            return;
        }
        
        // Generate order summary
        let summary = 'ORDER SUMMARY:\n\n';
        let total = 0;
        cart.forEach(item => {
            const subtotal = item.price * item.quantity;
            total += subtotal;
            summary += `${item.name} x${item.quantity} = ₹${subtotal.toLocaleString()}\n`;
        });
        summary += `\nTOTAL: ₹${total.toLocaleString()}`;
        
        if (modalOrderSummary) {
            modalOrderSummary.textContent = summary;
            modalOrderSummary.style.whiteSpace = 'pre-wrap';
        }
        
        checkoutModal.classList.add('show-modal');
        if (orderForm) orderForm.style.display = 'block';
        if (orderSuccess) orderSuccess.style.display = 'none';
    });
    
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name')?.value;
            const phone = document.getElementById('phone')?.value;
            const address = document.getElementById('address')?.value;
            const instructions = document.getElementById('instructions')?.value || '';
            
            if (!name || !phone || !address) {
                showNotification('Please fill all required fields');
                return;
            }
            
            // Generate full order details
            let orderDetails = `CUSTOMER DETAILS:\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nInstructions: ${instructions || 'None'}\n\nORDER ITEMS:\n`;
            let total = 0;
            cart.forEach(item => {
                const subtotal = item.price * item.quantity;
                total += subtotal;
                orderDetails += `${item.name} x${item.quantity} = ₹${subtotal}\n`;
            });
            orderDetails += `\nGRAND TOTAL: ₹${total}`;
            
            // Prepare form data for Formspree
            const formData = new FormData();
            formData.append('name', name);
            formData.append('phone', phone);
            formData.append('address', address);
            formData.append('instructions', instructions);
            formData.append('order', orderDetails);
            
            // Show loading state
            const submitBtn = e.target.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Send to Formspree
            fetch('https://formspree.io/f/mlgprglk', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Clear cart
                    cart = [];
                    saveCart();
                    
                    // Show success message
                    if (orderForm) orderForm.style.display = 'none';
                    if (orderSuccess) orderSuccess.style.display = 'block';
                    
                    // Close cart drawer
                    closeCart();
                    
                    showNotification('Order placed successfully!');
                } else {
                    throw new Error('Failed to send');
                }
            })
            .catch(error => {
                showNotification('Failed to place order. Please try again.');
                console.error(error);
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }
    
    // Close modal when clicking outside
    if (checkoutModal) {
        checkoutModal.addEventListener('click', function(e) {
            if (e.target === checkoutModal) {
                checkoutModal.classList.remove('show-modal');
            }
        });
    }
}

// ===== FIX IMAGE LOADING =====
function fixImageLoading() {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format';
        });
        img.loading = 'lazy';
    });
}

// ===== NOTIFICATION =====
function showNotification(msg) {
    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.textContent = msg;
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #1F2A44;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        font-family: 'Montserrat', sans-serif;
    `;
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

function animateCartIcon() {
    const btn = document.getElementById('cartButton');
    if (btn) {
        btn.style.transform = 'scale(1.2)';
        setTimeout(() => btn.style.transform = 'scale(1)', 200);
    }
}

// ===== GLOBAL FUNCTIONS =====
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.openCart = openCart;
window.closeCart = closeCart;

window.changeMainImage = function(src, element) {
    const main = document.getElementById('mainProductImage');
    if (main) main.src = src;
    
    document.querySelectorAll('.thumbnail-item').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
};

window.selectColor = function(element, color) {
    document.querySelectorAll('.color-chip').forEach(c => c.classList.remove('active'));
    element.classList.add('active');
    showNotification(`Selected color: ${color}`);
};

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { opacity: 0; transform: translateX(50px); }
        to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes slideOut {
        from { opacity: 1; transform: translateX(0); }
        to { opacity: 0; transform: translateX(50px); }
    }
    
    .search-results {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border-radius: 10px;
        margin-top: 10px;
        max-height: 400px;
        overflow-y: auto;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 1000;
    }
    
    .search-result-item {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px;
        cursor: pointer;
        transition: background 0.3s;
        border-bottom: 1px solid #eee;
    }
    
    .search-result-item:hover {
        background: #F5F0E8;
    }
    
    .search-result-item img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 5px;
    }
    
    .search-result-item h4 {
        font-size: 0.9rem;
        margin-bottom: 5px;
        color: #1F2A44;
    }
    
    .search-result-item p {
        color: #C8A96A;
        font-weight: 600;
        font-size: 0.9rem;
    }
    
    .no-results {
        padding: 20px;
        text-align: center;
        color: #999;
    }
`;
document.head.appendChild(style);