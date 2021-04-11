//Напиши скрипт, который для каждого элемента массива 
//ingredients создаст отдельный li, после 
//чего вставит все li за одну операцию 
//в список ul.ingredients.Для создания DOM - узлов 
//используй document.createElement().

const ingredients = [
  'Картошка', 
  'Грибы', 
   'Чеснок', 
   'Помидоры', 
   'Зелень', 
   'Приправы', 
];

const ingredientsEl = document.querySelector('#ingredients');
// console.log(ingredientsEl)

const makeIngredients = elem => {
  return elem.map(elem => {
    const createLiEl = document.createElement('li');
    createLiEl.textContent = elem;

    return createLiEl;
  });

};
const elements = makeIngredients(ingredients);
ingredientsEl.append(...elements);
console.log(elements);


// const elements = ingredients.map(elem => {
//   const createLiEl = document.createElement('li');
//   createLiEl.textContent = elem;

//   return createLiEl;

// });

//  console.log(elements);
// ingredientsEl.append(...elements);
 


// const elements = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//     const elem = ingredients[i];

//     const createLiEl = document.createElement('li');
//     createLiEl.textContent = elem;
    
//     elements.push(createLiEl);
// }

// console.log(elements);
// ingredientsEl.append(...elements);
