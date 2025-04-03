document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const ingredientInput = document.getElementById('ingredient-input');
    const addIngredientBtn = document.getElementById('add-ingredient');
    const ingredientsList = document.getElementById('ingredients-list');
    const dietPreference = document.getElementById('diet-preference');
    const cookingTimeSlider = document.getElementById('cooking-time');
    const timeDisplay = document.getElementById('time-display');
    const searchRecipesBtn = document.getElementById('search-recipes');
    const recipesContainer = document.getElementById('recipes-container');
    const recipeModal = document.getElementById('recipe-modal');
    const modalRecipeDetails = document.getElementById('modal-recipe-details');
    const closeModal = document.querySelector('.close-modal');

    // State
    let userIngredients = [];

    // Event Listeners
    addIngredientBtn.addEventListener('click', addIngredient);
    ingredientInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addIngredient();
        }
    });

    cookingTimeSlider.addEventListener('input', function() {
        timeDisplay.textContent = `${this.value} min`;
    });

    searchRecipesBtn.addEventListener('click', findRecipes);

    closeModal.addEventListener('click', function() {
        recipeModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === recipeModal) {
            recipeModal.style.display = 'none';
        }
    });

    // Functions
    function addIngredient() {
        const ingredient = ingredientInput.value.trim().toLowerCase();
        if (ingredient && !userIngredients.includes(ingredient)) {
            userIngredients.push(ingredient);
            renderIngredientTags();
            ingredientInput.value = '';
        }
    }

    function removeIngredient(ingredient) {
        userIngredients = userIngredients.filter(item => item !== ingredient);
        renderIngredientTags();
    }

    function renderIngredientTags() {
        ingredientsList.innerHTML = '';
        userIngredients.forEach(ingredient => {
            const tag = document.createElement('div');
            tag.className = 'ingredient-tag';
            tag.innerHTML = `
                ${ingredient}
                <button class="remove-tag" data-ingredient="${ingredient}">×</button>
            `;
            ingredientsList.appendChild(tag);
        });

        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-tag').forEach(button => {
            button.addEventListener('click', function() {
                const ingredient = this.getAttribute('data-ingredient');
                removeIngredient(ingredient);
            });
        });
    }

    function findRecipes() {
        if (userIngredients.length === 0) {
            alert('Please add at least one ingredient!');
            return;
        }

        const selectedDiet = dietPreference.value;
        const maxCookingTime = parseInt(cookingTimeSlider.value);

        // Filter recipes based on user criteria
        const matchedRecipes = recipesData.filter(recipe => {
            // Check cooking time
            if (recipe.cookingTime > maxCookingTime) {
                return false;
            }

            // Check dietary preferences
            if (selectedDiet !== 'any') {
                if (selectedDiet === 'vegetarian' && !recipe.dietaryPreferences.includes('vegetarian')) {
                    return false;
                }
                if (selectedDiet === 'vegan' && !recipe.dietaryPreferences.includes('vegan')) {
                    return false;
                }
                if (selectedDiet === 'gluten-free' && !recipe.dietaryPreferences.includes('gluten-free')) {
                    return false;
                }
                if (selectedDiet === 'dairy-free' && !recipe.dietaryPreferences.includes('dairy-free')) {
                    return false;
                }
            }

            // Check if recipe has at least one matching ingredient
            return recipe.ingredients.some(ingredient => 
                userIngredients.some(userIngredient => 
                    ingredient.toLowerCase().includes(userIngredient.toLowerCase())
                )
            );
        });

        // Calculate match percentage for each recipe
        const recipesWithMatchPercentage = matchedRecipes.map(recipe => {
            const matchingIngredients = recipe.ingredients.filter(ingredient => 
                userIngredients.some(userIngredient => 
                    ingredient.toLowerCase().includes(userIngredient.toLowerCase())
                )
            );
            
            const matchPercentage = Math.round((matchingIngredients.length / recipe.ingredients.length) * 100);
            
            return {
                ...recipe,
                matchPercentage,
                matchingIngredients
            };
        });

        // Sort recipes by match percentage (highest first)
        recipesWithMatchPercentage.sort((a, b) => b.matchPercentage - a.matchPercentage);

        // Display results
        displayRecipes(recipesWithMatchPercentage);
    }

    function displayRecipes(recipes) {
        recipesContainer.innerHTML = '';

        if (recipes.length === 0) {
            recipesContainer.innerHTML = '<p class="no-results">No matching recipes found. Try adding more ingredients or adjusting your filters.</p>';
            return;
        }

        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
                <div class="recipe-info">
                    <h3 class="recipe-title">${recipe.title}</h3>
                    <div class="recipe-meta">
                        <span><i class="fas fa-clock"></i> ${recipe.cookingTime} min</span>
                        <span class="match-percentage">${recipe.matchPercentage}% match</span>
                    </div>
                    <div class="recipe-tags">
                        ${recipe.dietaryPreferences.map(pref => `<span class="recipe-tag">${pref}</span>`).join('')}
                    </div>
                </div>
            `;

            recipeCard.addEventListener('click', () => showRecipeDetails(recipe));
            recipesContainer.appendChild(recipeCard);
        });
    }

    function showRecipeDetails(recipe) {
        // Find missing ingredients
        const missingIngredients = recipe.ingredients.filter(ingredient => 
            !userIngredients.some(userIngredient => 
                ingredient.toLowerCase().includes(userIngredient.toLowerCase())
            )
        );

        // Find matching ingredients
        const matchingIngredients = recipe.ingredients.filter(ingredient => 
            userIngredients.some(userIngredient => 
                ingredient.toLowerCase().includes(userIngredient.toLowerCase())
            )
        );

        modalRecipeDetails.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-detail-image">
            <h2 class="recipe-detail-title">${recipe.title}</h2>
            <div class="recipe-detail-meta">
                <span><i class="fas fa-clock"></i> ${recipe.cookingTime} minutes</span>
                <span><i class="fas fa-utensils"></i> ${recipe.servings} servings</span>
                <span><i class="fas fa-percentage"></i> ${recipe.matchPercentage}% match</span>
            </div>
            
            <div class="recipe-detail-section">
                <h3>Ingredients</h3>
                <ul class="ingredients-list">
                    ${recipe.ingredients.map(ingredient => {
                        const isMatching = matchingIngredients.includes(ingredient);
                        return `<li class="${isMatching ? 'matching' : 'missing'}">${ingredient} ${isMatching ? '✓' : ''}</li>`;
                    }).join('')}
                </ul>
            </div>
            
            <div class="recipe-detail-section">
                <h3>Instructions</h3>
                <ol class="instructions-list">
                    ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                </ol>
            </div>
            
            ${recipe.substitutions && recipe.substitutions.length > 0 ? `
                <div class="recipe-detail-section">
                    <h3>Possible Substitutions</h3>
                    <div class="substitutions-list">
                        ${recipe.substitutions.map(sub => `
                            <div class="substitution-item">
                                <strong>${sub.ingredient}</strong> can be replaced with <span>${sub.substitute}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${missingIngredients.length > 0 ? `
                <div class="recipe-detail-section">
                    <h3>Missing Ingredients</h3>
                    <ul class="missing-ingredients-list">
                        ${missingIngredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        `;

        recipeModal.style.display = 'block';
    }
});