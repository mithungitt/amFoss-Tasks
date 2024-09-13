// script.js

const terminalOutput = document.getElementById('terminal-output');
const commandLine = document.getElementById('command-line');

// Sample product data from the API
let products = [];
let cart = [];

// Fetch products from the API
async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    products = await response.json();
    displayProducts();
}

// Display products on the product page
function displayProducts() {
    const productContainer = document.querySelector('.product-container');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
        `;
        productContainer.appendChild(productElement);
    });
}

// Initialize the terminal with a welcome message
function initializeTerminal() {
    terminalOutput.innerHTML = 'Type help to get started\n';
}

// Handle terminal commands
function handleCommand(command) {
    if (command === 'list') {
        displayProductList();
    } else if (command.startsWith('details ')) {
        const id = command.split(' ')[1];
        displayProductDetails(id);
    } else if (command.startsWith('add ')) {
        const id = command.split(' ')[1];
        addToCart(id);
    } else if (command.startsWith('remove ')) {
        const id = command.split(' ')[1];
        removeFromCart(id);
    } else if (command === 'cart') {
        displayCart();
    } else if (command === 'buy') {
        // Save cart data to localStorage or another storage before redirecting
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href = 'checkout.html';
    } else if (command === 'clear') {
        terminalOutput.innerHTML = '';
    } else if (command.startsWith('search ')) {
        const query = command.split(' ')[1];
        searchProducts(query);
    } else if (command.startsWith('sort ')) {
        const criterion = command.split(' ')[1];
        sortProducts(criterion);
    } else if (command === 'help') {
        showHelp();
    } else {
        terminalOutput.innerHTML += 'Unknown command\n';
    }
}

// Display the product list as a numbered list
function displayProductList() {
    const orderedList = document.createElement('ol');

    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.title} - $${product.price}`;
        orderedList.appendChild(listItem);
    });

    terminalOutput.innerHTML = '';
    terminalOutput.appendChild(orderedList);
}

// Display product details
function displayProductDetails(id) {
    const product = products.find(p => p.id === parseInt(id));
    if (product) {
        terminalOutput.innerHTML = `
            <h3>${product.title}</h3>
            <img src="${product.image}" alt="${product.title}" style="max-width: 100%; height: auto;">
            <p>$${product.price}</p>
            <p>${product.description}</p>
        `;
    } else {
        terminalOutput.innerHTML = 'Product not found\n';
    }
}

// Add product to cart
function addToCart(id) {
    const product = products.find(p => p.id === parseInt(id));
    if (product) {
        cart.push(product);
        terminalOutput.innerHTML = `${product.title} added to cart\n`;
    } else {
        terminalOutput.innerHTML = 'Product not found\n';
    }
}

// Remove product from cart
function removeFromCart(id) {
    const index = cart.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
        const removedProduct = cart.splice(index, 1)[0];
        terminalOutput.innerHTML = `${removedProduct.title} removed from cart\n`;
    } else {
        terminalOutput.innerHTML = 'Product not in cart\n';
    }
}

// Display cart contents
function displayCart() {
    if (cart.length === 0) {
        terminalOutput.innerHTML = 'Cart is empty\n';
        return;
    }

    const orderedList = document.createElement('ol');

    cart.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.title} - $${product.price}`;
        orderedList.appendChild(listItem);
    });

    terminalOutput.innerHTML = 'Cart:\n';
    terminalOutput.appendChild(orderedList);
}

// Search for products
function searchProducts(query) {
    const results = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );

    if (results.length === 0) {
        terminalOutput.innerHTML = 'No products found\n';
        return;
    }

    const orderedList = document.createElement('ol');

    results.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.title} - $${product.price}`;
        orderedList.appendChild(listItem);
    });

    terminalOutput.innerHTML = 'Search results:\n';
    terminalOutput.appendChild(orderedList);
}

// Sort products
function sortProducts(criterion) {
    if (criterion === 'price') {
        products.sort((a, b) => a.price - b.price);
    } else if (criterion === 'name') {
        products.sort((a, b) => a.title.localeCompare(b.title));
    } else {
        terminalOutput.innerHTML = 'Invalid sort criterion\n';
        return;
    }

    displayProducts();
    terminalOutput.innerHTML = `Products sorted by ${criterion}\n`;
}

// Show help information
function showHelp() {
    terminalOutput.innerHTML = `
        Available commands:
        list - Display all available products.
        details 'product_id' - View details of a specific product.
        add 'product_id' - Add a product to your cart.
        remove 'product_id' - Remove a product from your cart.
        cart - View current items in your cart.
        buy - Proceed to checkout.
        clear - Clear the terminal screen.
        search 'product_name' - Search for a product.
        sort 'price/name' - Sort products by price or name.
    `;
}

// Handle input from the command line
commandLine.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleCommand(commandLine.value.trim());
        commandLine.value = '';
    }
});

// Fetch products on page load
fetchProducts();
initializeTerminal();
