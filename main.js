function onClick() {
    const password = document.querySelector('input[name=password]');
    const password_confirm = document.querySelector('input[name=password_confirm]');
    const validPassword = document.querySelector('#validPassword');

    if (password_confirm.value === password.value) {
        password_confirm.setCustomValidity('');
        validPassword.textContent = ''
    } else {
        password_confirm.setCustomValidity('Passwords do not match');
        password.setAttribute('style', 'outline: none; border: 0.1px solid red;');
        password_confirm.setAttribute('style', 'outline: none; border: 0.1px solid red;');
        validPassword.setAttribute('style', 'color: red; position: relative; margin-top: -22px;');
        validPassword.textContent = '* Passwords do not match'
    }
}