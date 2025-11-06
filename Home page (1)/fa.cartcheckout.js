function loadCheckoutCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const productContainer = document.getElementById('product-summary');
  const subtotalEl = document.getElementById('subtotal');
  const grandTotalEl = document.getElementById('grand-total');
  const bottomTotalText = document.getElementById('total-text');

  productContainer.innerHTML = '';
  let subtotal = 0;

  cartItems.forEach((item) => {
    const pricePerKg = parseFloat(item.price);
    let calculatedPrice = 0;

    if (item.unit === 'Kg') {
      calculatedPrice = pricePerKg * item.quantity;
    } else if (item.unit === '500g') {
      calculatedPrice = (pricePerKg / 2) * item.quantity;
    } else if (item.unit === '250g') {
      calculatedPrice = (pricePerKg / 4) * item.quantity;
    } else {
      calculatedPrice = pricePerKg * item.quantity;
    }

    subtotal += calculatedPrice;

    const itemEl = document.createElement('div');
    itemEl.className = 'checkout-item';
    itemEl.innerHTML = `
      <div class="item-box">
        <img src="${item.image}" class="checkout-img" alt="${item.name}">
        <div class="item-info">
          <h4>${item.name}</h4>
          <p>Size: ${item.size}</p>
          <p>Qty: ${item.quantity} ${item.unit}</p>
          <p>Price: Rs.${calculatedPrice.toFixed(2)}</p>
        </div>
      </div>
    `;
    productContainer.appendChild(itemEl);
  });

  const shippingFee = 50;
  let discount = 0;

  // Discount logic
  if (subtotal > 500) {
    discount = subtotal * 0.10; // 10% discount
  }

  const grandTotal = subtotal + shippingFee - discount;

  subtotalEl.innerText = `Rs.${subtotal.toFixed(2)}`;
  grandTotalEl.innerText = `Rs.${grandTotal.toFixed(2)}`;
  bottomTotalText.innerText = `Rs.${grandTotal.toFixed(2)}`;

  // Optional: Show discount info (only if discount applied)
  if (discount > 0) {
    const discountInfo = document.createElement('p');
    discountInfo.innerHTML = `Discount (10%): <strong style="color:green;">- Rs.${discount.toFixed(2)}</strong>`;
    const totalSection = document.querySelector('.total-section');
    totalSection.insertBefore(discountInfo, totalSection.querySelector('h3'));
  }
}

window.onload = loadCheckoutCart;

