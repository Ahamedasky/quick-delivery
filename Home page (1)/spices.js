// Bottom nav active state
document.querySelectorAll(".bottom-nav a").forEach(link => {
  link.addEventListener("click", function () {
    document.querySelectorAll(".bottom-nav a").forEach(nav => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

// Set active tab based on current page
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".bottom-nav a").forEach(link => {
  const href = link.getAttribute("href").split("/").pop();
  if (href === currentPage) {
    link.classList.add("active");
  }
});

// Secondary nav active state
document.querySelectorAll(".secondary-nav a").forEach(link => {
  link.addEventListener("click", function () {
    document.querySelectorAll(".secondary-nav a").forEach(nav => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

// Product hover/tap animation
document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("mousedown", () => {
    card.style.transform = "scale(1.05)";
  });
  card.addEventListener("mouseup", () => {
    card.style.transform = "scale(1)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// Product click & Sold out handling
document.querySelectorAll(".product-card").forEach(card => {
  const isSoldOut = card.dataset.soldout === "true";

  if (isSoldOut) {
    card.classList.add("sold-out");
    card.style.cursor = "not-allowed";
    card.title = "இந்த பொருள் தற்போது கிடைக்கவில்லை (Sold Out)";
  }

  card.addEventListener("click", function (e) {
    if (isSoldOut) {
      e.preventDefault();
      alert("மன்னிக்கவும், இந்த பொருள் தற்போது கிடைக்கவில்லை.");
      return;
    }

    const name = card.querySelector("h4")?.innerText?.trim() || "";
    const price = card.querySelector("p")?.innerText?.replace(/[^\d]/g, "") || "0";
    const image = card.querySelector("img")?.src || "";

    const product = { name, price, image, soldOut: false };
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    window.location.href = "product-details.html";
  });
});

// Search with transliteration support
document.getElementById("search-input").addEventListener("input", function () {
  const searchText = this.value.toLowerCase();
  const products = document.querySelectorAll(".product-card");
  const notFoundMsg = document.getElementById("not-found");

  const transliterations = {
    "வெள்ளைப்பூண்டு": ["vellaipoodu", "garlic", "vallaipoodu"],
    "மிளகாய் தூள்": ["kotchikai thool", "kothikkathool", "redchilli powder"],
    "உப்பு": ["salt", "uppu", "uppoo", "sald"],
    "இஞ்சி": ["ginger", "ingi", "engee"],
    "மிளகு": ["milagu", "pepper","melegu"],
    "மஞ்சள் தூள்": [ "manjathool", "yellow powder"],
    "சீரகம்": ["seeragam", "seragam", "cumin"],
    "காய்ந்த கொச்சிக்காய்": ["dry chilli", "kaanchakochikai", "kainthakotchi"],
    "கோவா": ["kovai", "kovaa", "kova", "goa", "cova"],
    "தக்காளி": ["thakkali", "takkali", "tomato"],
    "சுரக்காய்": ["surakkai", "surekkai", "sorakai", "curakai", "corekkai"],
    "கறி மிளகாய்": ["karikochikai", "karikohikai", "carikochikai"],
    "பாகற்காய்": ["pakatkai", "bittergourd", "pahatkai", "paakatcai"],
    "புடோல்": ["pudol", "pudalangai", "podalangai", "podalankai"]
  };

  let found = false;

  products.forEach(product => {
    const name = product.querySelector("h4")?.innerText?.toLowerCase()?.trim() || "";
    const translit = transliterations[name] || [];

    if (name.includes(searchText) || translit.some(t => t.includes(searchText))) {
      product.style.display = "block";
      found = true;
    } else {
      product.style.display = "none";
    }
  });

  notFoundMsg.style.display = (searchText && !found) ? "block" : "none";
});






