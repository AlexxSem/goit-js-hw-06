const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const ingredientsItemsEl = ingredients.map(ingredient => {
    const ingredientItemEl = document.createElement('li');
    ingredientItemEl.classList.add('item');
    ingredientItemEl.textContent = ingredient;

    return ingredientItemEl;
});

ingredientsListEl.append(...ingredientsItemsEl);

const test = document.querySelector('#ingredients');
console.log(test);
