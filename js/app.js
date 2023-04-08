function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        console.log('3 digit pin found');
        return getPin();
    }
};
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
};
// generate 4 digit pin 
document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // display pin 
    const displayElement = document.getElementById('display-pin');
    displayElement.value = pin;
});
// calculator section 
document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        if(number === '<'){
           /* 
           //my system
           const previousTypedNumberField = typedNumberField.value;
           const newTypedNumberField = previousTypedNumberField.slice(0, -1);
           typedNumberField.value = newTypedNumberField; */
        // jhankar mahbub system
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
});
document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-number');
    const typedNumber = typedNumberField.value;

    if(currentPin === typedNumber){
        console.log('correct pin');
    }
    else{
        console.log('incorrect pin');
    }
});