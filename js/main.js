window.addEventListener('DOMContentLoaded', function() {
    const sendEmailBtn = document.querySelector('#contacto form button[type="submit"]');
    const nameInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('mensaje');
    const errorContainer = document.getElementById('errorContainer');

    sendEmailBtn.addEventListener('click', function(event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        const nameRegex = /^[a-zA-Z0-9\s]*$/;
        if (!nameRegex.test(name)) {
            alert('Por favor, ingresa un nombre válido (solo caracteres alfanuméricos).');
            return;
        }

        displayError('');
        alert('¡Mensaje enviado con éxito!');

        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    });

    function displayError(message) {
        errorContainer.textContent = message;
    }
});
