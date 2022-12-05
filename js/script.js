//external library https://github.com/uNmAnNeR/imaskjs was used for phone mask creation

let input = document.getElementById('phone-input');
let maskOptions = {
    mask: '+({38}0)000-00-000'
};
let mask = IMask(input, maskOptions);

//phone input validation

function validateInput(){
    let phoneInput = document.getElementById('phone-input');
    let label = document.getElementById('label');
    console.log(phoneInput)
    if(!input.checkValidity()){
        label.style.opacity = "1";
        phoneInput.classList.add('invalid')

    }else{
        window.location.href = 'pin.html';
    }
}