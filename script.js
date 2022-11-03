//Client side validation
const user_email = document.getElementById('user_email');
const user_pnumber = document.getElementById('user_pnumber');

//The form itself
const registration_form = document.getElementById('registration');
registration_form.addEventListener('submit', validateForm);


user_email.addEventListener('change', () => {
    user_email.classList.remove('initial');
});

if (user_email.value != ''){
    user_email.classList.remove('initial');
}

user_pnumber.addEventListener('change', () => {
    user_pnumber.classList.remove('initial');
});

if (user_pnumber.value != ''){
    user_pnumber.classList.remove('initial');
}

function validateForm(e) {
    //This just check the password to see if they are identical, else we don't submit
    //The other invalids are checked by the browser engine itself so no need
    //Password
    const user_pwd_input = document.getElementById('user_pwd');
    const user_confirm_pwd_input = document.getElementById('user_confirm_pwd');

    user_pwd_input.classList.remove('initial');
    user_confirm_pwd_input.classList.remove('initial');
    user_email.classList.remove('initial');
    user_pnumber.classList.remove('initial');

    if(!(user_pwd_input.value == user_confirm_pwd_input.value)) {
        user_pwd_input.classList.add('error-confirm');
        user_confirm_pwd_input.classList.add('error-confirm');
        e.preventDefault();
    } else if (user_pwd_input.value == user_confirm_pwd_input.value) {
        user_pwd_input.classList.remove('error-confirm');
        user_confirm_pwd_input.classList.remove('error-confirm');
    }
}