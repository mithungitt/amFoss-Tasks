# TASK5: E-Commerce Website Project

## Project Overview

Th is E-commerce store website uses HTML, CSS, and JavaScript to provide a functional user experience. The core functionality includes listing products, viewing details, adding/removing items to/from the cart, and checking out.

## Key Features

- **Product Listing**: Displays all available products in a grid layout.
- **Product Details**: Shows detailed information about a selected product.
- **Add/Remove to Cart**: Allows users to add or remove products from their cart.
- **Search and Sort**: Users can search products by name and sort them by price or name.
- **Checkout Page**: Displays items in the cart, calculates the total cost with a discount, and allows users to confirm their purchase.

## Methods and Functions Used

1. **Fetching Products**:
   - **Function**: `fetchProducts()`
   - **Description**: Fetches product data from an external API (Fake Store API).
   - **Code**:
     ```typescript
     async function fetchProducts(): Promise<Product[]> {
         const response = await fetch('https://fakestoreapi.com/products');
         return response.json();
     }
     ```

2. **Handling Terminal Commands**:
   - **Function**: `handleCommand(command: string, args: string[])`
   - **Description**: Processes commands entered in the terminal and performs actions like listing products, viewing details, and managing the cart.
   - **Code**:
     ```typescript
     async function handleCommand(command: string, args: string[]): Promise<void> {
         const products = await fetchProducts();
         // Switch case to handle different commands
     }
     ```

3. **Updating the Terminal**:
   - **Function**: `updateTerminal(message: string)`
   - **Description**: Updates the terminal display with messages or command outputs.
   - **Code**:
     ```typescript
     function updateTerminal(message: string): void {
         const output = document.querySelector('.terminal-output') as HTMLElement;
         output.textContent += `\n${message}`;
     }
     ```

4. **Checkout Process**:
   - **Function**: `window.onload` and `confirmPurchase()`
   - **Description**: Loads cart items, calculates totals, and processes the purchase on the checkout page.
   - **Code**:
     ```typescript
     window.onload = function() {
         const cartItems: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
         // Calculate total cost and update the checkout page
     }

     function confirmPurchase() {
         alert('Thank you for your purchase! Your order has been successfully placed.');
         localStorage.removeItem('cart');
     }
     ```

## Logic Behind the Code

1. **Product Display**: Products are fetched from the Fake Store API and displayed in a grid format on the product page. Each product has a name, price, and image.

2. **Terminal Commands**: The terminal handles various commands, such as listing products and searching by name. Commands are parsed and executed based on user input.

3. **Cart Management**: Products can be added to or removed from the cart. Cart data is stored in `localStorage` to persist across page reloads.

4. **Checkout Page**: The checkout page retrieves cart items, calculates the total cost, applies a discount, and displays the final total. Users can confirm their purchase, which triggers a success alert.

## Challenges and Difficulties

1. **Integrating Terminal with Product Display**: Ensuring that terminal commands accurately affect the product display and cart was challenging. It required careful planning and adjustement between the terminal input and product management logic.

2. **Dynamic Content Handling**: Updating the checkout page dynamically with cart items and calculating totals required precise use of DOM elements and JavaScript logic.

3. **UI Design**: Making the UI both functional and visually appealing involved tweaking CSS styles to ensure a good user experience across different screen sizes.

## Conclusion

This project provided valuable experience in integrating different web technologies to create a functional e-commerce website. 

---