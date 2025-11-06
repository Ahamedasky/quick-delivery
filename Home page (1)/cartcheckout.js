document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const summary = document.getElementById("product-summary");
  let subtotal = 0;

  function calculatePriceByWeight(size, pricePerKg) {
    let weightInGrams = 1000;

    switch (size.toLowerCase()) {
      case "1kg":
      case "kg":
        weightInGrams = 1000;
        break;
      case "500g":
        weightInGrams = 500;
        break;
      case "250g":
        weightInGrams = 250;
        break;
      default:
        console.warn(`Unknown size: ${size}, defaulting to 1kg`);
    }

    const weightInKg = weightInGrams / 1000;
    return pricePerKg * weightInKg;
  }

  cart.forEach(product => {
    const basePrice = parseFloat(product.price); // price per 1kg
    const quantity = parseInt(product.quantity);
    const unitPrice = calculatePriceByWeight(product.size, basePrice);
    const total = unitPrice * quantity;
    subtotal += total;

    const div = document.createElement("div");
    div.className = "product-summary";
    div.innerHTML = `
      <img src="${product.image}" />
      <div>
        <h4>${product.name}</h4>
        <p>Size: ${product.size}</p>
        <p>Qty: ${quantity}</p>
        <p>Price (${product.unit || product.size}): Rs.${unitPrice.toFixed(2)}</p>
        <p>Subtotal: Rs.${total.toFixed(2)}</p>
      </div>
    `;
    summary.appendChild(div);
  });

  const shipping = 50;
  const total = subtotal + shipping;

  document.getElementById("subtotal").textContent = `Rs.${subtotal.toFixed(2)}`;
  document.getElementById("grand-total").textContent = `Rs.${total.toFixed(2)}`;
  document.getElementById("total-text").textContent = `Rs.${total.toFixed(2)}`;

  // Load saved address
  const address = JSON.parse(localStorage.getItem("userAddress"));
  const display = document.getElementById("display-address");
  const deleteBtn = document.getElementById("delete-address-btn");
  if (address) {
    display.textContent = `${address.street}, ${address.division}, near ${address.landmark} - Ph: ${address.phone}`;
    deleteBtn.style.display = "inline-block";
  }

  display.addEventListener("click", () => {
    window.location.href = "add-address.html";
  });

  deleteBtn.addEventListener("click", () => {
    localStorage.removeItem("userAddress");
    display.textContent = "+ Add Address";
    deleteBtn.style.display = "none";
  });
});

// Place Order Button Logic
document.getElementById("place-order-btn").addEventListener("click", () => {
  const address = document.getElementById("display-address").textContent;
  const isCOD = document.getElementById("pay-cod").checked;
  const isCard = document.getElementById("pay-card").checked;

  if (address.includes("+ Add")) {
    alert("Please add a delivery address.");
    return;
  }

  if (!isCOD && !isCard) {
    alert("Please select a payment method.");
    return;
  }

  alert("Order Placed Successfully!");
  localStorage.removeItem("cart");
  window.location.href = "order-success.html";
});



