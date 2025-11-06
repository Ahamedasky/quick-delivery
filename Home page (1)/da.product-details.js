document.querySelector(".buy-btn").addEventListener("click", function () {
  const name = document.querySelector(".product-name").textContent;
  const image = document.querySelector(".product-img").src;
  const quantity = document.querySelector(".quantity-wrapper input").value;
  const unit = document.querySelector(".unit-select").value;
  const price = 400; // இதை dynamic ஆக மாற்றலாம் விருப்பப்பட்டால்

  const productData = {
    name,
    image,
    quantity,
    unit,
    price
  };

  localStorage.setItem("checkoutProduct", JSON.stringify(productData));
});

