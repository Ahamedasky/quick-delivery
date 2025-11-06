// Function to calculate and update the total
function updateTotal() {
  let total = 0;
  
  const ingredientItems = document.querySelectorAll('.ingredient-item');

  ingredientItems.forEach(item => {
    const quantityInput = item.querySelector('.quantity');
    const unitSelect = item.querySelector('.unit');
    const priceDiv = item.querySelector('.price');

    const quantity = parseFloat(quantityInput.value);
    const unitValue = parseFloat(unitSelect.value);
    let basePriceText = priceDiv.textContent.trim();
    let basePrice = parseFloat(basePriceText.replace('Rs.', ''));

    if (!isNaN(unitValue) && unitValue > 0 && !isNaN(quantity) && quantity > 0) {
      const ingredientTotal = (basePrice / 1000) * (unitValue * quantity); 
      total += ingredientTotal;
    }
  });

  document.getElementById('grand-total').textContent = total.toFixed(2);
}

// Add Event Listeners to quantity and unit select inputs
document.addEventListener('DOMContentLoaded', () => {
  const quantityInputs = document.querySelectorAll('.quantity');
  const unitSelects = document.querySelectorAll('.unit');

  quantityInputs.forEach(input => {
    input.addEventListener('input', updateTotal);
  });

  unitSelects.forEach(select => {
    select.addEventListener('change', updateTotal);
  });

  updateTotal();
});

// Example Cart Array
let cart = [];

// Add ingredients to cart
function addToCart(name, pricePerKg, quantity) {
    cart.push({
        name: name,
        pricePerKg: pricePerKg,
        quantity: quantity
    });
    console.log(cart); 
}

// Proceed to Checkout Button
function proceedToCheckout() {
    if (cart.length === 0) {
        alert("Please add at least one ingredient before proceeding to checkout.");
        return;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'chefcheckout.html'; 
}

// Checkout Button Event
document.getElementById('checkout-button').addEventListener('click', proceedToCheckout);

