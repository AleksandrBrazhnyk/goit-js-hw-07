// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4
const categoriesEl = document.querySelector('#categories');

const itemEl = categoriesEl.querySelectorAll('.item');
console.log(`В списке ${itemEl.length} категории.`);

itemEl.forEach(element => {
    const itemTitel = element.querySelector('h2');
    const totalElements = element.querySelectorAll('li');
    console.log(`Категория:${itemTitel.textContent}`);
    console.log(`Количество элементов:${totalElements.length}`);
});