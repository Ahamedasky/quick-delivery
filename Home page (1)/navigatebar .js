// Logo click to home
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", () => {
      window.location.href = "home.html";
    });
  }
});

// Delete Account
function deleteAccount() {
  const confirmDelete = confirm("Are you sure you want to delete your account?");
  if (confirmDelete) {
    alert("Your account has been deleted.");
    // Add logic to handle deletion
  }
}

