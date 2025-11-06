
document.getElementById("backBtn").addEventListener("click", () => {
  window.history.back();
});

document.getElementById("saveAddressBtn").addEventListener("click", () => {
  const phone = document.getElementById("phone").value;
  if (!/^\d{10}$/.test(phone)) {
  alert("Please enter a valid 10-digit phone number.");
  return;
}
  const street = document.getElementById("street").value;
  const division = document.getElementById("division").value;
  const famous = document.getElementById("famous").value;

  if (!phone || !street || !division || !famous) {
    alert("Please fill out all fields.");
    return;
  }

  const address = {
    phone,
    street,
    division,
    famous
  };

  localStorage.setItem("userAddress", JSON.stringify(address));
  alert("Address saved!");
  window.history.back();
});


// When user adds address:
const address = "123 Street, Division, Famous Place"; // user input
localStorage.setItem("userAddress", address);