function getPin(){
    const pin =genaratPin();
    const pinString =pin +'';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin()
    }
}

function genaratPin(){
    const random = Math.round(Math.random()*10000)
    return random;
}
document.getElementById("genart-Pin").addEventListener('click',function(){
    const pin = getPin();
    // display pin

    const displayPinField =document.getElementById("display-pin");
    displayPinField.value = pin;
})

document.getElementById('calculater').addEventListener('click',function(){
    const number =event.target.innerText;

    const typeNumber = document.getElementById('type-numbers');
    const previousTypenumber=typeNumber.value;
    if(isNaN(number)){ 

        if(number === "C"){
            typeNumber.value='';
        }
        else if(number === '<'){
            const digits =previousTypenumber.split('');
            digits.pop();
            const remindDigits = digits.join('');
            typeNumber.value =remindDigits;
        }
    }
    else{
       
        const newTypeNumber =previousTypenumber + number;
        typeNumber.value =newTypeNumber;
    }
})

document.getElementById('veryfiy-btn').addEventListener('click',function(){
    const displayPinField =document.getElementById("display-pin");
    const displayPinValue = displayPinField.value;

    const typeNumber = document.getElementById('type-numbers');
    const previousTypenumber=typeNumber.value;
    const pinRightBtn = document.getElementById('ture-btn');
    const pinFalseBtn = document.getElementById('false-btn');
    if(previousTypenumber === displayPinValue){
       pinRightBtn.style.display= 'block';
        pinFalseBtn.style.display= 'none';
    }
    else{
        pinFalseBtn.style.display= 'block';
        pinRightBtn.style.display= 'none';
    }
}) 
