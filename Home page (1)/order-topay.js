document.addEventListener("DOMContentLoaded", () => {
  const payBtn = document.querySelector(".pay-btn");
  const cancelBtn = document.querySelector(".cancel-btn");

  payBtn?.addEventListener("click", () => {
    alert("Redirecting to payment gateway...");
    // window.location.href = "payment.html";
  });

  cancelBtn?.addEventListener("click", () => {
    const confirmed = confirm("Are you sure you want to cancel the order?");
    if (confirmed) {
      alert("Order cancelled.");
    }
  });
});

