// chef.js

// Recipes Data
const recipes = [
  {
    id: "biryani",
    name: "Hyderabadi Biryani",
    image: "image/hyderabadbiryani.jpg"
  },
  {
    id: "veg-curry",
    name: "Spicy Veg Curry",
    image: "image/birya.jpg"
  },
  {
    id: "paneer-butter",
    name: "Paneer Butter Masala",
    image: "https://via.placeholder.com/300x200?text=Paneer+Butter+Masala"
  },
  {
    id: "tomato-soup",
    name: "Tomato Soup",
    image: "https://via.placeholder.com/300x200?text=Tomato+Soup"
  },
  {
    id: "grilled-sandwich",
    name: "Grilled Sandwich",
    image: "https://via.placeholder.com/300x200?text=Grilled+Sandwich"
  }
];

// Load Recipes Dynamically
const container = document.getElementById('recipes-container');
const searchInput = document.getElementById('searchInput');

function displayRecipes(filteredRecipes) {
  container.innerHTML = '';
  filteredRecipes.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img">
      <div class="recipe-title"></div>
    `;
    
    card.addEventListener('click', () => {
      localStorage.setItem('selectedRecipe', recipe.id);
      window.location.href = 'ingredients.html'; // Redirect
    });
    
    container.appendChild(card);
  });
}

// Initial Display
displayRecipes(recipes);

// Search Feature
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));
  displayRecipes(filteredRecipes);
});

