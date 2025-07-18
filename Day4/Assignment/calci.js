const display = document.getElementById("display");


function setDisplay(input) {
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function Calculate(){
   try{
       display.value = eval(display.value);

   }
   catch{
    display.value = 'error';
   }
   
}