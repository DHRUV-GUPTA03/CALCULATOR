const display=document.getElementById('display');

function showDisplay(input){
    display.value+= input
}

function clearDisplay(){
    display.value=''
}

function calculate(){
    try{

        display.value= eval(display.value);
    }
    
    catch(err){

        display.value='Error'
    }
    
}