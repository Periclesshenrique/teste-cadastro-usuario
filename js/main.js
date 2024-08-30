document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = document.getElementById('userForm');
    const formData = new FormData(form);

    fetch('php/config.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        const responseMessage = document.getElementById('response-message');
        if (data.includes('Usuário cadastrado com sucesso!')) {
            responseMessage.innerHTML = `<p class="success-message">${data}</p>`;
            setTimeout(() => {
                form.reset();
                responseMessage.innerHTML = '';
            }, 3000);
        } else {
            responseMessage.innerHTML = `<p class="error-message">${data}</p>`;
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        document.getElementById('response-message').innerHTML = '<p class="error-message">Ocorreu um erro ao processar o formulário.</p>';
    });
});
