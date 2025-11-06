function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('total-amount');
  container.innerHTML = '';
  let total = 0;

  cartItems.forEach((item, index) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="item-img">
      <div class="item-info">
        <h4>${item.name}</h4>
        <p>Size: ${item.size}</p>
        <p>Quantity: ${item.quantity} ${item.unit}</p>
        <p>Price: Rs.${item.price}</p>
      </div>
      <button class="delete-btn" onclick="removeFromCart(${index})">Delete</button>
      <button  class="edit-btn"   onclick="editCartItem(${index})"> Edit </button>
    
    `;
    container.appendChild(itemEl);
    total += parseFloat(item.price);
  });

  totalEl.innerText = `Total: Rs${total.toFixed(2)}`;
}

function removeFromCart(index) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  loadCart();
}

function goTocartCheckout() {
  window.location.href = 'cartcheckout.html';
}

window.onload = loadCart;


function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('total-amount');
  container.innerHTML = '';
  let total = 0;

  cartItems.forEach((item, index) => {
    const pricePerKg = parseFloat(item.price);
    let calculatedPrice = 0;

    if (item.unit === 'Kg') {
      calculatedPrice = pricePerKg * item.quantity;
    } else if (item.unit === '500g') {
      calculatedPrice = (pricePerKg / 2) * item.quantity;
    } else if (item.unit === '250g') {
      calculatedPrice = (pricePerKg / 4) * item.quantity;
    }

    total += calculatedPrice;

    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="item-img">
      <div class="item-info">
        <h4>${item.name}</h4>
        <p>Size: ${item.size}</p>
        <p>Quantity: ${item.quantity} ${item.unit}</p>
        <p>Price: Rs.${calculatedPrice.toFixed(2)}</p>
      </div>
                 <div class="button-group">
      <button class="delete-btn" onclick="removeFromCart(${index})">Delete</button>
      <button class="edit-btn" onclick="editCartItem(${index})">Edit</button>
         </div>
    `;
    container.appendChild(itemEl);
  });

  totalEl.innerText = `Total: Rs.${total.toFixed(2)}`;
}

function removeFromCart(index) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  loadCart();
}

function goToCartCheckout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Go to Checkout Page
  window.location.href = "cartcheckout.html";
}



function editCartItem(index) {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const item = cartItems[index];

  // Example: Just showing alert for now
  alert(`Edit item: ${item.name}\nYou can now build a form/modal here to update quantity or size.`);
  
  // Future: You can open a popup or inline edit form to update size/quantity
}

function editCartItem(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const item = cart[index];

  // Product details-க்கு அனுப்ப JSON data localStorage-ல் temporarily வைத்துக்கொள்
  localStorage.setItem('editItem', JSON.stringify(item));
  localStorage.setItem('editIndex', index); // optional - update பண்ண வேண்டுமா தெரிய தெரியும்

  // Product details page-க்கு செல்ல
  window.location.href = 'product-details.html';
}