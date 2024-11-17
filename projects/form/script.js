function showGreeting() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    if (firstName && lastName) {
        document.getElementById('greeting').innerText = `Здравствуйте, ${firstName} ${lastName}!`;
    } else if (!firstName && !lastName) {
        document.getElementById('greeting').innerText = 'Пожалуйста, введите ваше имя и фамилию.';
    } else if (!firstName) {
        document.getElementById('greeting').innerText = 'Пожалуйста, введите ваше имя.';
    } else if (!lastName) {
        document.getElementById('greeting').innerText = 'Пожалуйста, введите вашу фамилию.';
    }
}