//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid.

const validationInput = document.querySelector('#validation-input');

const inputAttributeValue = parseInt(validationInput.getAttribute('data-length'));


 validationInput.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
   // console.log(event.currentTarget.value.length); 
    if (event.target.value.length === inputAttributeValue  ) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
        console.log('Вы успешно ввели 6 символов:)');
    } else {   
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
        console.log('Введите толко 6 символов');
 }  
    
};
// function changeValidationColor(validClass, invalidClass) {
//     validationInput.classList.add(validClass);
//     validationInput.classList.remove(invalidClass);

// }
// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }