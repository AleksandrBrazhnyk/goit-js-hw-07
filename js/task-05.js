//Напиши скрипт который, при наборе текста в инпуте
//input#name - input(событие input), подставляет его
//текущее значение в span#name - output.Если инпут пустой,
//  в спане должна отображаться строка 'незнакомец'.

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');



//nameInput.addEventListener('focus', onInputFocus);
//nameInput.addEventListener('blur', onInputBlur);

nameInput.addEventListener('input', onInput);


function onInput(event) {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === '')
        return nameOutput.textContent = 'незнакомец'; {
     
    }; nameOutput.textContent = event.currentTarget.value;
    
    
};


