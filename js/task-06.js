//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid.



const validationInput = document.querySelector('#validation-input');

const inputAttributeValue = parseInt(validationInput.getAttribute('data-length'));


validationInput.addEventListener('change', onInputChange);
validationInput.addEventListener('focus', onInputFocus);
 
function onInputChange(event) {
   // console.log(event.currentTarget.value.length); 
    if (event.currentTarget.value.length === inputAttributeValue  ) {
        validationInput.classList.add('valid');
        
        console.log('Вы успешно ввели 6 символов:)');

    } else {   validationInput.classList.add('invalid');
            
    }  
     
};

 function onInputFocus() {
     validationInput.classList.remove('valid', 'invalid');
       
};
    