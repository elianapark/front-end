const form = document.getElementById('form');
const username = document.getElementById('username');
const Email = document.getElementById('Email');
const password = document.getElementById('password');
const pw2 = document.getElementById('pw2');

//show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

    // const small = formControl.querySelector('small');
    // small.innerText = message;
}

//email valid
function isValidEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(string(email).toLowerCase());
    if(re.test(input.value.trim())){
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid')
    }
}


//check requr=ired fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        console.log(input.value)
        if(input.value.trim()===''){
            showError(input, input.id+'is required!');
        } else {
            showSuccess(input)
        }
    });
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

function checkLength(input, min, max) {
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length >max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

function checkPassword(input1, input2){
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    }
}
//Event Listeners
form.addEventListener('submit', function(e) {
    //console.log('submit')
    e.preventDefault()
    //console.log(username)
    // if(username.value === ''){
    //     //alert('Username is required!')
    //     showError(username, "Username is required");
    // } else {
    //     showSuccess(username)
    // }

    // if(Email.value === ''){
    //     //alert('Email is required!')
    //     showError(Email, "Email is required");
    // } else if (!isValidEmail(email.value)) {
    //     showError(email, 'Email is not valid')
    // } else {
    //     showSuccess(Email)
    // }

    // if(password.value === ''){
    //     //alert('password is required!')
    //     showError(password, "Password is required");
    // } else {
    //     showSuccess(password)
    // }

    // if(pw2.value === ''){
    //     //alert('pw2 is required!')
    //     showError(pw2, "Password 2 is required");
    // } else {
    //     showSuccess(pw2)
    // }

    checkRequired([username, Email, password, pw2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 20);
    isValidEmail(Email);
    checkPassword(password, pw2);
})
