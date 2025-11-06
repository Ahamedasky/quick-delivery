document.addEventListener('DOMContentLoaded', () => {
  const reorderBtns = document.querySelectorAll('.reorder-btn');
  reorderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Reorder placed successfully!');
    });
  });
});

