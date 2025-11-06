document.addEventListener("DOMContentLoaded", () => {
  const product = JSON.parse(localStorage.getItem("selectedProduct"));

  if (product) {
    document.getElementById("product-img").src = product.image;
    document.getElementById("product-name").innerText = product.name;
    document.getElementById("product-price").innerText = `Price: ₹${product.price} per Kg`;
  }

  const sizeButtons = document.querySelectorAll(".size-btn");
  sizeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      sizeButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});

function goToCheckout() {
  const quantity = parseInt(document.getElementById("quantity-input").value);
  const unit = document.getElementById("unit-select").value;
  const product = JSON.parse(localStorage.getItem("selectedProduct"));

  const checkoutProduct = {
    ...product,
    quantity,
    unit
  };

  localStorage.setItem("checkoutProduct", JSON.stringify(checkoutProduct));
  window.location.href = "checkout.html";
}

const sizeButtons = document.querySelectorAll(".size-btn");
let selectedSize = "Medium";

// Size selection logic
sizeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    sizeButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedSize = btn.dataset.size;
  });
});

document.getElementById("buy-now-link").addEventListener("click", function (e) {
  const quantity = document.getElementById("quantity-input").value;
  const unit = document.getElementById("unit-select").value;
  const productName = document.getElementById("product-name").innerText;
  const pricePerKg = 400;

  // Convert to grams if needed
  let qtyKg = 1;
  if (unit === "Kg") qtyKg = quantity;
  else if (unit === "500g") qtyKg = quantity * 0.5;
  else if (unit === "250g") qtyKg = quantity * 0.25;

  const total = qtyKg * pricePerKg;

  // Pass data to checkout via localStorage
  localStorage.setItem("product", JSON.stringify({
    name: productName,
    size: selectedSize,
    quantity,
    unit,
    pricePerKg,
    total,
    image: document.getElementById("product-img").src
  }));
});
function goToCheckout() {
  const quantity = document.querySelector('.quantity-wrapper input').value;
  const unit = document.querySelector('.unit-select').value;
  const productData = {
    name: "Fresh Tomatoes",
    image: "image/tomato.png",
    quantity: quantity,
    unit: unit,
    price: 400
  };
  localStorage.setItem("checkoutProduct", JSON.stringify(productData));
  window.location.href = "checkout.html";
}

function goToCheckout() {
  const quantity = document.getElementById("quantity-input").value;
  const unit = document.getElementById("unit-select").value;

  const productData = {
    name: document.getElementById("product-name").textContent,
    image: document.getElementById("product-img").src,
    quantity: quantity,
    unit: unit,
    price: 400
  };

  localStorage.setItem("checkoutProduct", JSON.stringify(productData));
  window.location.href = "checkout.html";
}

