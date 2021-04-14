//Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
//В результате при перетаскивании ползунка будет меняться размер текста

const fontSizeControl = document.querySelector('#font-size-control');
const textFontSize = document.querySelector('#text');  


fontSizeControl.addEventListener("input", 
  function() {            
    textFontSize.style.fontSize = fontSizeControl.value + 'px'           
  });




