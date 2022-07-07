function onChange() {
    const user_password = document.querySelector('input[name=user_password]');
    const user_password_confirm = document.querySelector('input[name=user_password_confirm]');
    if (user_password_confirm.value === user_password.value) {
        user_password_confirm.setCustomValidity('');
    } else {
        user_password_confirm.setCustomValidity('Passwords do not match');
    }
}