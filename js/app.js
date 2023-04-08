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
}
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}
// generate 4 digit pin 
document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    console.log(pin);
})