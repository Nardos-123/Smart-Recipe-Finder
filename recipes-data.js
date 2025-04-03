const recipesData = [
    {
        id: 1,
        title: "Spaghetti Carbonara",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
        cookingTime: 25,
        servings: 4,
        dietaryPreferences: ["dairy"],
        ingredients: [
            "spaghetti", "eggs", "bacon", "parmesan cheese", "black pepper", "salt", "olive oil", "garlic"
        ],
        instructions: [
            "Bring a large pot of salted water to boil and cook spaghetti according to package instructions.",
            "While pasta cooks, heat olive oil in a large skillet over medium heat. Add bacon and cook until crispy.",
            "In a bowl, whisk together eggs, grated parmesan, and black pepper.",
            "Drain pasta, reserving 1/2 cup of pasta water.",
            "Working quickly, add hot pasta to the skillet with bacon, then remove from heat.",
            "Pour egg mixture over pasta and toss quickly to coat the pasta and create a creamy sauce.",
            "Add a splash of pasta water if needed to loosen the sauce.",
            "Serve immediately with extra parmesan and black pepper."
        ],
        substitutions: [
            { ingredient: "bacon", substitute: "pancetta or guanciale" },
            { ingredient: "parmesan cheese", substitute: "pecorino romano" }
        ]
    },
    {
        id: 2,
        title: "Vegetable Stir Fry",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        cookingTime: 20,
        servings: 3,
        dietaryPreferences: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
        ingredients: [
            "broccoli", "bell pepper", "carrot", "onion", "garlic", "ginger", "soy sauce", "rice", "vegetable oil"
        ],
        instructions: [
            "Prepare rice according to package instructions.",
            "Chop all vegetables into bite-sized pieces.",
            "Heat vegetable oil in a wok or large skillet over high heat.",
            "Add garlic and ginger, stir for 30 seconds until fragrant.",
            "Add vegetables, starting with the ones that take longest to cook (carrots, broccoli).",
            "Stir fry for 5-7 minutes until vegetables are crisp-tender.",
            "Add soy sauce and any other desired seasonings.",
            "Serve hot over cooked rice."
        ],
        substitutions: [
            { ingredient: "soy sauce", substitute: "tamari or coconut aminos" },
            { ingredient: "rice", substitute: "quinoa or cauliflower rice" }
        ]
    },
    {
        id: 3,
        title: "Chicken Quesadillas",
        image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
        cookingTime: 30,
        servings: 2,
        dietaryPreferences: ["dairy"],
        ingredients: [
            "chicken breast", "tortillas", "cheddar cheese", "bell pepper", "onion", "olive oil", "salt", "pepper", "cumin", "chili powder"
        ],
        instructions: [
            "Season chicken breast with salt, pepper, cumin, and chili powder.",
            "Cook chicken in olive oil over medium heat until no longer pink, about 6-8 minutes per side.",
            "Remove chicken and let rest for 5 minutes, then dice into small pieces.",
            "In the same pan, sauté diced bell pepper and onion until softened.",
            "Place a tortilla in a clean skillet over medium heat.",
            "Sprinkle half the tortilla with cheese, add chicken and vegetables, then more cheese.",
            "Fold the tortilla in half and cook until golden brown, about 2-3 minutes per side.",
            "Repeat with remaining ingredients and serve hot."
        ],
        substitutions: [
            { ingredient: "chicken breast", substitute: "rotisserie chicken or black beans" },
            { ingredient: "cheddar cheese", substitute: "monterey jack or dairy-free cheese" }
        ]
    },
    {
        id: 4,
        title: "Vegetarian Lentil Soup",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
        cookingTime: 45,
        servings: 6,
        dietaryPreferences: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
        ingredients: [
            "lentils", "carrot", "celery", "onion", "garlic", "vegetable broth", "diced tomatoes", "cumin", "paprika", "olive oil", "salt", "pepper", "bay leaf"
        ],
        instructions: [
            "Rinse lentils and set aside.",
            "Heat olive oil in a large pot over medium heat.",
            "Add diced onion, carrot, and celery. Cook until softened, about 5 minutes.",
            "Add minced garlic, cumin, and paprika. Cook for 1 minute until fragrant.",
            "Add lentils, diced tomatoes, vegetable broth, and bay leaf.",
            "Bring to a boil, then reduce heat and simmer for 30-35 minutes until lentils are tender.",
            "Season with salt and pepper to taste.",
            "Remove bay leaf before serving."
        ],
        substitutions: [
            { ingredient: "lentils", substitute: "split peas or chickpeas" },
            { ingredient: "vegetable broth", substitute: "water with vegetable bouillon" }
        ]
    },
    {
        id: 5,
        title: "Banana Pancakes",
        image: "https://images.unsplash.com/photo-1575853121743-60c24f0a7502?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        cookingTime: 15,
        servings: 2,
        dietaryPreferences: ["vegetarian", "dairy"],
        ingredients: [
            "flour", "baking powder", "salt", "sugar", "milk", "egg", "banana", "butter", "vanilla extract"
        ],
        instructions: [
            "In a bowl, mix flour, baking powder, salt, and sugar.",
            "In another bowl, mash one banana and mix with milk, egg, and vanilla extract.",
            "Combine wet and dry ingredients, stirring just until moistened.",
            "Heat a lightly buttered griddle or frying pan over medium-high heat.",
            "Pour 1/4 cup of batter onto the griddle for each pancake.",
            "Cook until bubbles form and edges are dry, then flip and cook until golden brown.",
            "Serve with sliced bananas and maple syrup."
        ],
        substitutions: [
            { ingredient: "milk", substitute: "almond milk or oat milk" },
            { ingredient: "egg", substitute: "flax egg (1 tbsp ground flaxseed + 3 tbsp water)" },
            { ingredient: "flour", substitute: "gluten-free flour blend" }
        ]
    },
    {
        id: 6,
        title: "Greek Salad",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1684&q=80",
        cookingTime: 10,
        servings: 4,
        dietaryPreferences: ["vegetarian", "gluten-free"],
        ingredients: [
            "cucumber", "tomato", "red onion", "bell pepper", "feta cheese", "kalamata olives", "olive oil", "lemon juice", "oregano", "salt", "pepper"
        ],
        instructions: [
            "Chop cucumber, tomato, red onion, and bell pepper into bite-sized pieces.",
            "Place vegetables in a large bowl.",
            "Add crumbled feta cheese and kalamata olives.",
            "In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.",
            "Pour dressing over salad and toss gently to combine.",
            "Serve immediately or refrigerate for up to 1 hour before serving."
        ],
        substitutions: [
            { ingredient: "feta cheese", substitute: "goat cheese or dairy-free feta alternative" },
            { ingredient: "kalamata olives", substitute: "black olives" }
        ]
    },
    {
        id: 7,
        title: "Beef Tacos",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        cookingTime: 25,
        servings: 4,
        dietaryPreferences: ["dairy"],
        ingredients: [
            "ground beef", "taco seasoning", "onion", "garlic", "taco shells", "lettuce", "tomato", "cheddar cheese", "sour cream", "avocado", "lime"
        ],
        instructions: [
            "In a skillet over medium heat, cook diced onion until translucent.",
            "Add minced garlic and cook for 30 seconds until fragrant.",
            "Add ground beef and cook until browned, breaking it up as it cooks.",
            "Drain excess fat if necessary.",
            "Add taco seasoning and water according to seasoning package instructions.",
            "Simmer until liquid is reduced and mixture is thickened.",
            "Warm taco shells according to package instructions.",
            "Fill shells with beef mixture and top with shredded lettuce, diced tomato, shredded cheese, sour cream, and diced avocado.",
            "Serve with lime wedges."
        ],
        substitutions: [
            { ingredient: "ground beef", substitute: "ground turkey or plant-based meat alternative" },
            { ingredient: "taco shells", substitute: "soft tortillas or lettuce wraps" },
            { ingredient: "cheddar cheese", substitute: "monterey jack or dairy-free cheese" }
        ]
    },
    {
        id: 8,
        title: "Mushroom Risotto",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        cookingTime: 40,
        servings: 4,
        dietaryPreferences: ["vegetarian", "gluten-free"],
        ingredients: [
            "arborio rice", "mushrooms", "onion", "garlic", "white wine", "vegetable broth", "parmesan cheese", "butter", "olive oil", "thyme", "salt", "pepper"
        ],
        instructions: [
            "In a large pot, heat vegetable broth and keep warm over low heat.",
            "In a large skillet, heat olive oil over medium heat.",
            "Add diced onion and cook until translucent, about 3 minutes.",
            "Add minced garlic and sliced mushrooms, cook until mushrooms are soft.",
            "Add arborio rice and stir to coat with oil, cooking for 1-2 minutes.",
            "Add white wine and cook until absorbed.",
            "Add warm broth one ladle at a time, stirring frequently and waiting until liquid is absorbed before adding more.",
            "Continue adding broth and stirring until rice is creamy and tender, about 20-25 minutes.",
            "Stir in butter, parmesan cheese, thyme, salt, and pepper.",
            "Serve immediately, garnished with additional parmesan if desired."
        ],
        substitutions: [
            { ingredient: "parmesan cheese", substitute: "nutritional yeast" },
            { ingredient: "white wine", substitute: "additional vegetable broth with a splash of lemon juice" },
            { ingredient: "butter", substitute: "olive oil or plant-based butter" }
        ]
    },
    {
        id: 9,
        title: "Chocolate Chip Cookies",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        cookingTime: 25,
        servings: 24,
        dietaryPreferences: ["vegetarian", "dairy"],
        ingredients: [
            "flour", "baking soda", "salt", "butter", "brown sugar", "white sugar", "eggs", "vanilla extract", "chocolate chips"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "In a small bowl, whisk together flour, baking soda, and salt.",
            "In a large bowl, cream together butter, brown sugar, and white sugar until smooth.",
            "Beat in eggs one at a time, then stir in vanilla.",
            "Gradually blend in the dry ingredients.",
            "Fold in chocolate chips.",
            "Drop by rounded tablespoons onto ungreased baking sheets.",
            "Bake for 9 to 11 minutes or until golden brown.",
            "Let stand on baking sheet for 2 minutes, then remove to cool on wire racks."
        ],
        substitutions: [
            { ingredient: "butter", substitute: "coconut oil or plant-based butter" },
            { ingredient: "eggs", substitute: "flax eggs or applesauce" },
            { ingredient: "chocolate chips", substitute: "carob chips or chopped nuts" }
        ]
    },
    {
        id: 10,
        title: "Quinoa Bowl with Roasted Vegetables",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
        cookingTime: 35,
        servings: 2,
        dietaryPreferences: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
        ingredients: [
            "quinoa", "sweet potato", "broccoli", "chickpeas", "olive oil", "cumin", "paprika", "garlic powder", "salt", "pepper", "lemon juice", "tahini", "maple syrup"
        ],
        instructions: [
            "Preheat oven to 425°F (220°C).",
            "Rinse quinoa and cook according to package instructions.",
            "Dice sweet potato and cut broccoli into florets.",
            "Drain and rinse chickpeas, pat dry with paper towels.",
            "Toss vegetables and chickpeas with olive oil, cumin, paprika, garlic powder, salt, and pepper.",
            "Spread on a baking sheet and roast for 20-25 minutes, stirring halfway through.",
            "For the dressing, whisk together tahini, lemon juice, maple syrup, and a splash of water.",
            "Divide quinoa between bowls, top with roasted vegetables and chickpeas.",
            "Drizzle with tahini dressing and serve."
        ],
        substitutions: [
            { ingredient: "quinoa", substitute: "brown rice or cauliflower rice" },
            { ingredient: "sweet potato", substitute: "butternut squash or regular potato" },
            { ingredient: "tahini", substitute: "almond butter or sunflower seed butter" }
        ]
    }
];