// Handle bottom navigation active link
const bottomNavLinks = document.querySelectorAll(".bottom-nav a");
bottomNavLinks.forEach(link => {
  link.addEventListener("click", () => {
    bottomNavLinks.forEach(nav => nav.classList.remove("active"));
    link.classList.add("active");
  });
});

// Get current file name from URL
const currentPage = window.location.pathname.split("/").pop();

// Select all nav links in bottom navigation
const navLinks = document.querySelectorAll(".bottom-nav a");

// Loop through and add 'active' class to the current page link
navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});




// Handle secondary navigation active link
const secondaryLinks = document.querySelectorAll(".secondary-nav a");
secondaryLinks.forEach(link => {
  link.addEventListener("click", () => {
    secondaryLinks.forEach(nav => nav.classList.remove("active"));
    link.classList.add("active");
  });
});



// Product click animation (mobile/desktop)
const productCards = document.querySelectorAll(".product-card");
productCards.forEach(card => {
  card.addEventListener("touchstart", () => {
    card.style.transform = "scale(1.05)";
  });
  card.addEventListener("touchend", () => {
    card.style.transform = "scale(1)";
  });

  card.addEventListener("mousedown", () => {
    card.style.transform = "scale(1.05)";
  });
  card.addEventListener("mouseup", () => {
    card.style.transform = "scale(1)";
  });
});

function openProductDetails(product) {
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "product-details.html";
}


document.getElementById("search-input").addEventListener("input", function () {
  const searchText = this.value.toLowerCase();
  const products = document.querySelectorAll(".product-card");

  products.forEach(product => {
    const name = product.querySelector("h4").innerText.toLowerCase();
    if (name.includes(searchText)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}); 



