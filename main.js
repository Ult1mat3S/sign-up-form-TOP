function onClick() {
    const password = document.querySelector('input[name=password]');
    const passwordConfirm = document.querySelector('input[name=password_confirm]');
    const validPassword = document.querySelector('#validPassword');

    if (password_confirm.value === password.value && passwordConfirm.value != '') {
        password.setAttribute('style', 'padding-left: 5px; border-color: rgb(0 0 0 / 4 %); border: rgb(0 0 0 / 4 %); border-radius: 3px; margin-bottom: 20px');
        passwordConfirm.setAttribute('style', 'padding-left: 5px; border-color: rgb(0 0 0 / 4 %); border: rgb(0 0 0 / 4 %); border-radius: 3px; margin-bottom: 20px');
        validPassword.textContent = ''
    } else {
        passwordConfirm.setAttribute('style', 'outline: none; border: 0.1px solid red;');
        password.setAttribute('style', 'outline: none; border: 0.1px solid red;');
        validPassword.setAttribute('style', 'color: red; position: absolute; margin-top: -22px;');
        validPassword.textContent = '* Passwords do not match'
    }
}