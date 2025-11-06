document.addEventListener("DOMContentLoaded", () => {
  const product = JSON.parse(localStorage.getItem("checkoutProduct"));

  if (product) {
    document.getElementById("product-img").src = product.image;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-qty").textContent = `Qty: ${product.quantity}`;
    document.getElementById("product-unit").textContent = `Unit: ${product.unit}`;
    document.getElementById("product-price").textContent = `Price: Rs.${product.price}`;

    const itemTotal = parseInt(product.price) * parseInt(product.quantity);
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

    document.getElementById("item-total").textContent = `Rs.${itemTotal.toFixed(2)}`;
    document.getElementById("grand-total").textContent = `Rs.${grandTotal.toFixed(2)}`;
    document.getElementById("final-total").textContent = `Rs.${grandTotal.toFixed(2)}`;
  }

  // Load address
  const savedAddress = JSON.parse(localStorage.getItem("userAddress"));
  if (savedAddress) {
    document.getElementById("display-address").textContent =
      `${savedAddress.street}, ${savedAddress.division}, Near ${savedAddress.landmark} - Ph: ${savedAddress.phone}`;
    document.getElementById("delete-address-btn").style.display = "inline-block";
  }
});

// Delete address
document.getElementById("delete-address-btn").addEventListener("click", () => {
  localStorage.removeItem("userAddress");
  document.getElementById("display-address").textContent = "+ Add New Address";
  document.getElementById("delete-address-btn").style.display = "none";
});

// Payment selection
function selectPayment(method) {
  document.getElementById("pay-cod").checked = method === "cod";
  document.getElementById("pay-card").checked = method === "card";
}

// Place order
document.getElementById("place-order-btn").addEventListener("click", () => {
  const addressText = document.getElementById("display-address").textContent;
  const cod = document.getElementById("pay-cod").checked;
  const card = document.getElementById("pay-card").checked;

  if (addressText.includes("+ Add New Address")) {
    alert("Please add your delivery address before placing the order.");
    return;
  }

  if (!cod && !card) {
    alert("Please select a payment method.");
    return;
  }

  alert("Order Placed Successfully! Email will be sent to owner.");
  localStorage.removeItem("checkoutProduct");
});

