// Full Corrected Checkout Page Script
window.onload = () => {
  const product = JSON.parse(localStorage.getItem("checkoutProduct"));

  if (product) {
    // UI Update
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-img").src = product.image;
    document.getElementById("product-qty").textContent = `Qty: ${product.quantity} ${product.unit}`;
    document.getElementById("product-price").textContent = `Price: Rs.${product.price} per Kg`;

    // Quantity Conversion (Kg based)
    let actualQtyInKg = 0;
    if (product.unit === "Kg") {
      actualQtyInKg = product.quantity;
    } else if (product.unit === "500g") {
      actualQtyInKg = product.quantity * 0.5;
    } else if (product.unit === "250g") {
      actualQtyInKg = product.quantity * 0.25;
    }

    // Total Calculation
    const itemTotal = parseFloat(product.price) * actualQtyInKg;
    const shipping = 50;

    let discount = 0;
    if (itemTotal >= 500) {
      discount = itemTotal * 0.2; // 20% discount
      document.getElementById("discount-row").style.display = "flex";
      document.getElementById("discount-amount").textContent = `-Rs.${discount.toFixed(2)}`;
    } else {
      document.getElementById("discount-row").style.display = "none";
    }

    const grandTotal = (itemTotal - discount) + shipping;

    // Display Totals
    document.getElementById("item-total").textContent = `Rs.${itemTotal.toFixed(2)}`;
    document.getElementById("shipping-fee").textContent = `Rs.${shipping.toFixed(2)}`;
    document.getElementById("grand-total").textContent = `Rs.${grandTotal.toFixed(2)}`;
    document.getElementById("final-total").textContent = `Rs.${grandTotal.toFixed(2)}`;
  }
};

// Place Order Button Action
function placeOrder() {
  const address = document.getElementById("display-address").textContent;
  const cod = document.getElementById("pay-cod").checked;
  const card = document.getElementById("pay-card").checked;
  const product = JSON.parse(localStorage.getItem("checkoutProduct"));

  if (!address || address === "+ Add New Address") {
    alert("Please add your delivery address.");
    return;
  }

  if (!cod && !card) {
    alert("Please select a payment method.");
    return;
  }

  if (!product) {
    alert("Product data missing.");
    return;
  }

  alert("Order Placed Successfully!");
  localStorage.removeItem("checkoutProduct");
  window.location.href = "thankyou.html";
}

