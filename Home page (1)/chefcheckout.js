document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutList = document.getElementById('checkout-list');
    let total = 0;

    cart.forEach(item => {
        const itemTotal = (item.pricePerKg / 1000) * (item.unit * item.quantity);
        total += itemTotal;

        const div = document.createElement('div');
        div.className = 'checkout-item';
        div.textContent = `${item.name} - ${item.quantity} x ${item.unit}g = Rs. ${itemTotal.toFixed(2)}`;
        checkoutList.appendChild(div);
    });

    document.getElementById('grand-total').textContent = total.toFixed(2);

    document.getElementById('place-order-button').addEventListener('click', () => {
        alert('Order Placed Successfully!');
        localStorage.removeItem('cart');
        window.location.href = 'ingredients.html'; // Thank you page அல்லது back
    });
});

