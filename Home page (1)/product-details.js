document.addEventListener("DOMContentLoaded", () => {
  // LocalStorage-ல் இருந்து product details வாங்கும்
  const product = JSON.parse(localStorage.getItem("selectedProduct"));
  
  // Data இருக்கா என பாக்குறது
  if (product) {
    document.getElementById("product-img").src = product.image;
    document.getElementById("product-name").innerText = product.name;
    document.getElementById("product-price").innerText = `Price: Rs.${product.price} per Kg`;
  }

  // Size buttons selection logic
  const sizeButtons = document.querySelectorAll(".size-btn");
  sizeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      sizeButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // Quantity validation
  const quantityInput = document.getElementById("quantity-input");
  quantityInput.addEventListener("input", () => {
    if (quantityInput.value < 0) quantityInput.value = 1;
  });
});

// Buy Now button logic
function goToCheckout() {
  const quantity = parseInt(document.getElementById("quantity-input").value);
  const unit = document.getElementById("unit-select").value;
  const size = document.querySelector(".size-btn.active")?.dataset.size || "Medium";
  const product = JSON.parse(localStorage.getItem("selectedProduct"));

  if (!product) {
    alert("Product not found!");
    return;
  }

  // Checkout page-க்கு அனுப்பும் data
  const checkoutProduct = {
    ...product,
    quantity,
    unit,
    size
  };

  localStorage.setItem("checkoutProduct", JSON.stringify(checkoutProduct));
  window.location.href = "checkout.html";
}

window.addEventListener("DOMContentLoaded", () => {
  const product = JSON.parse(localStorage.getItem("selectedProduct"));
  if (product) {
    document.getElementById("productName").textContent = product.name;
    document.getElementById("productImage").src = product.image;
    document.getElementById("productPrice").textContent = `Rs. ${product.price} / ${product.unit}`;
  }
});




