//Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
//В результате при перетаскивании ползунка будет меняться размер текста

// const fontSizeControl = document.querySelector('#font-size-control');
// console.log("fontSizeControl", fontSizeControl)

// const textFontSize = document.querySelector('#text');


const fontSizeControl = document.querySelector('#font-size-control');
const textFontSize = document.querySelector('#text');  


fontSizeControl.addEventListener("input", 
  function() {            
    textFontSize.style.fontSize = fontSizeControl.value + 'px'           
  });




// fontSizeControl.addEventListener('input', chengeTextFontSize);

// function chengeTextFontSize(event) {
//     textFontSize.style.fontSize = event.value;
// };

