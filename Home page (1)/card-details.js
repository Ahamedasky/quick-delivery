document.getElementById("card-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const cardNumber = document.getElementById("card-number").value.trim();
  const expiry = document.getElementById("expiry").value.trim();
  const cvv = document.getElementById("cvv").value.trim();
  const name = document.getElementById("card-name").value.trim();

  if (!cardNumber || !expiry || !cvv || !name) {
    alert("Please fill in all the card details.");
    return;
  }

  // Save to localStorage (optional)
  localStorage.setItem("cardPaymentConfirmed", "true");

  alert("Card details confirmed!");
  window.location.href = "checkout.html";
});

