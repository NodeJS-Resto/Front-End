document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;
    
    const name = document.getElementById('name').value.trim();
    const ape = document.getElementById('ape').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === '') {
        document.getElementById('nameError').textContent = 'El nombre es obligatorio.';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    if (ape === '') {
        document.getElementById('apeError').textContent = 'El apellido es obligatorio.';
        isValid = false;
    } else {
        document.getElementById('apeError').textContent = '';
    }
    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Introduce un correo electrónico válido.';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }
    
    if (message === '') {
        document.getElementById('messageError').textContent = 'El mensaje es obligatorio.';
        isValid = false;
    } else {
        document.getElementById('messageError').textContent = '';
    }
    
    if (isValid) {
        
        alert('Formulario enviado correctamente.');
        document.getElementById('contactForm').reset();
    }
});
