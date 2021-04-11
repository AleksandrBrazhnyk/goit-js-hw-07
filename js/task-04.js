//Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const counterEl = document.querySelector('#counter');
const decrementBtnEl = counterEl.querySelector('[data-action="decrement"]');
const incrementBtnEl = counterEl.querySelector('[data-action="increment"]');
const valueEl = counterEl.querySelector('#value');

incrementBtnEl.addEventListener('click', increment);

decrementBtnEl.addEventListener('click', decrement);

let counterValue = 0;

function increment() {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

 function decrement() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};








// const CounterValue = function ({
//     rootSelector,
//     initialValue = 0,
//     step = 1,
// } = {}) {
    
//     this._value = initialValue;
//     this._step = step;

//     this._refs = this._getRefs(rootSelector);

//     this._bindEvents();
//     this.refreshValue();
// };

// CounterValue.prototype._getRefs = function (rootSelector) {
//     // console.log(rootSelector);
//     const refs = {};
//     refs.container = document.querySelector(rootSelector);
//     // console.log(refs.container);
//     refs.incrementBtn = refs.container.querySelector('[data-action]');
//     refs.decrementBtn = refs.container.querySelector('[data-action]');
//     refs.value = refs.container.querySelector('#value');
    
//     return refs;
// };

// CounterValue.prototype._bindEvents = function () {
//     this._refs.incrementBtn.addEventListener('click', () => {
//         this.increment();
//         this.refreshValue();
//     });
  
//     this._refs.decrementBtn.addEventListener('click', () => {
//         this.decrement();
//         this.refreshValue();
//     });
// };   

// CounterValue.prototype.refreshValue = function () {
//     this._refs.value.textContent = this._value;
// };

// CounterValue.prototype.increment = function () {
//     this._value += this._step;
// };

// CounterValue.prototype.decrement = function () {
//     this._value -= this._step;
// };

// const counter = new CounterValue({ rootSelector: '#counter', step: 1 });
// console.log(counter);