function login() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    if (password === 'pass') {
        location.href="toppage.html"
    } else {
        errorMessage.textContent = 'パスワードが間違っています。';
    }
}

function goBack() {
    document.getElementById('details-container').style.display = 'none';
    document.getElementById('services-container').style.display = 'block';
}
