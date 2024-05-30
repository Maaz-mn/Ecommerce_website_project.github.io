let cart = [];

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

function addToCart(productName, productPrice) {
    let product = cart.find(item => item.name === productName);
    if (product) {
        product.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        cartItems.innerHTML += `
            <li>
                ${item.name} - $${item.price} x ${item.quantity}
                <button onclick="changeQuantity('${item.name}', -1)">-</button>
                <button onclick="changeQuantity('${item.name}', 1)">+</button>
            </li>
        `;
    });
    document.getElementById('cart-subtotal').innerText = subtotal.toFixed(2);
    document.getElementById('cart-count').innerText = cart.reduce((acc, item) => acc + item.quantity, 0);
}

function changeQuantity(productName, amount) {
    let product = cart.find(item => item.name === productName);
    if (product) {
        product.quantity += amount;
        if (product.quantity <= 0) {
            cart = cart.filter(item => item.name !== productName);
        }
        updateCart();
    }
}

function viewCart() {
    // Redirect to view cart page
    window.location.href = 'view-cart.html';
}

function filterProducts() {
    let priceRange = document.getElementById('price-range').value;
    let categoryAccessories = document.getElementById('category-accessories').checked;
    let categoryMen = document.getElementById('category-men').checked;
    let categoryWomen = document.getElementById('category-women').checked;
    let productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        let productPrice = parseInt(card.dataset.price);
        let productCategory = card.dataset.category;
        let show = true;
        if (productPrice > priceRange) {
            show = false;
        }
        if (categoryAccessories && productCategory !== 'accessories') {
            show = false;
        }
        if (categoryMen && productCategory !== 'men') {
            show = false;
        }
        if (categoryWomen && productCategory !== 'women') {
            show = false;
        }
        card.style.display = show ? 'block' : 'none';
    });
}

function updatePriceFilter(value) {
    document.getElementById('price-range-value').innerText = `$${value}`;
}

function searchProducts() {
    let searchQuery = document.getElementById('product-search').value.toLowerCase();
    let productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        let productName = card.dataset.name.toLowerCase();
        if (productName.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

window.onload = function() {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        updateCart();
    }
};

window.onbeforeunload = function() {
    localStorage.setItem('cart', JSON.stringify(cart));
};
document.getElementById('burger').addEventListener('click', function() {
            document.getElementById('navbarLinks').classList.toggle('active');
        });