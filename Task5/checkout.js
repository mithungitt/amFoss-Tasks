window.onload = function() {
    const cartContainer = document.querySelector('.cart-items');
    const totalCostElem = document.querySelector('.total-cost');
    const discountElem = document.querySelector('.discount');
    const finalTotalElem = document.querySelector('.final-total');
    const confirmButton = document.querySelector('#confirm-purchase');

    // Retrieve cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let totalCost = 0;

    // Clear previous content
    cartContainer.innerHTML = '';

    // Loop through cart items and create HTML elements for each item
    cartItems.forEach((item, index) => {
        totalCost += item.price;

        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';

        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="Item ${index + 1}" class="cart-item-image">
            <div class="cart-item-info">
                <h3>Item ${index + 1}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
            </div>
        `;

        cartContainer.appendChild(cartItemDiv);
    });

    // Calculate discount and final total
    const discount = 10.00;
    const finalTotal = totalCost - discount;

    // Update total cost and final total elements
    totalCostElem.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    discountElem.textContent = `Discount: -$${discount.toFixed(2)}`;
    finalTotalElem.textContent = `Final Total: $${finalTotal.toFixed(2)}`;

    // Add event listener for confirm button
    if (confirmButton) {
        confirmButton.addEventListener('click', () => {
            alert('Thank you for your purchase! Your order has been successfully placed.');
            localStorage.removeItem('cart'); // Clear the cart after purchase
            window.location.href = 'storehome.html'; // Redirect to home page or any other page
        });
    } else {
        console.error('Confirm Purchase button not found.');
    }
};
