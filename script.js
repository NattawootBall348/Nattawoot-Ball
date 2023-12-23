// Variables to store cart data
var cartItems = [];
var totalAmount = 0;

// JavaScript logic for adding items to the cart
function addToCart(productName, productPrice) {
    // Validate input
    if (!productName || !productPrice || isNaN(productPrice)) {
        alert('Invalid input. Please provide valid product details.');
        return;
    }

    // Update the cart data
    cartItems.push({ name: productName, price: parseFloat(productPrice) });
    totalAmount += parseFloat(productPrice);

    // Update the cart display
    updateCartDisplay();
}

// JavaScript logic for updating the cart display
function updateCartDisplay() {
    var cartContainer = document.getElementById('cart-items');
    var totalSpan = document.getElementById('cart-total');

    // Clear existing cart items
    cartContainer.innerHTML = '';

    // Add new cart items
    cartItems.forEach(function (item) {
        var cartItem = document.createElement('li');
        cartItem.textContent = item.name + ' - $' + item.price;
        cartContainer.appendChild(cartItem);
    });

    // Update the total amount
    totalSpan.textContent = totalAmount.toFixed(2);
}


