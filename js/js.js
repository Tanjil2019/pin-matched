
function getPin(){
     const pin = generatePin();
     const pinString = pin + '';
     if(pinString.length === 4){
          return pin;
     }
     else{
          // console.log('its 3 digit', pin);
          return getPin();
     }
}

function generatePin(){
     const random = Math.round(Math.random()*10000);
     return random;
}

document.getElementById('generate-btn').addEventListener('click', function(){
     const pin = getPin()
     
     const pinInputFiled = document.getElementById('get-pin-filed');
     pinInputFiled.value = pin;
})

document.getElementById('calculate').addEventListener('click', function(event){
     const number = event.target.innerText;
     const typesNumberFiled = document.getElementById('input-pin');
     const previousTypesNumber = typesNumberFiled.value;
     if(isNaN(number)){
          if(number === 'C'){
               typesNumberFiled.value = '';
          }
          if(number === '<'){
               const digits = previousTypesNumber.split('')
               digits.pop()
               const remaining = digits.join('');
               typesNumberFiled.value = remaining;
          }
     }
     else{
          

          const newTypesNumber = previousTypesNumber + number;
          typesNumberFiled.value = newTypesNumber
     }
})

document.getElementById('verify').addEventListener('click', function(){

     const pinInputFiled = document.getElementById('get-pin-filed');
     const pinInput = pinInputFiled.value;

     const typesNumberFiled = document.getElementById('input-pin');
     const typesNumber = typesNumberFiled.value;


     const notifySuccess1 = document.getElementById('notify-success');
     const notifySuccess = document.getElementById('notify-failed');
     if(pinInput === typesNumber){
          
          notifySuccess1.style.display = 'block'
          notifySuccess.style.display = 'none';
     }
     else{
          
          notifySuccess.style.display = 'block';
          notifySuccess1.style.display = 'none';
     }
})