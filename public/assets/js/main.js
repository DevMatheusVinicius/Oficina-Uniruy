function validarLogin(event) {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    
    if (!emailRegex.test(email)) {
        event.preventDefault(); 
        errorMessage.textContent = 'Por favor, insira um e-mail válido.';
        errorMessage.style.display = 'block';
    } else if (senha.length < 6) {
        event.preventDefault(); 
        errorMessage.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        errorMessage.style.display = 'block';
    } else {
        
        errorMessage.style.display = 'none';
    }
}


function validarCadastro(event) {
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const telefone = document.getElementById('phone').value;
    const nascimento = document.getElementById('birthdate').value;
    const errorMessage = document.getElementById('error-message');

    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (nome === '' || email === '' || senha === '' || telefone === '' || nascimento === '') {
        event.preventDefault(); 
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
    } else if (!emailRegex.test(email)) {
        event.preventDefault();
        errorMessage.textContent = 'Por favor, insira um e-mail válido.';
        errorMessage.style.display = 'block';
    } else if (senha.length < 6) {
        event.preventDefault();
        errorMessage.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        errorMessage.style.display = 'block';
    } else {
        
        errorMessage.style.display = 'none';
    }
}


function limparErro() {
    const errorMessage = document.getElementById('error-message');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}


window.onload = function () {
    const loginForm = document.getElementById('login-form');
    const cadastroForm = document.getElementById('cadastro-form');

    if (loginForm) {
        loginForm.addEventListener('submit', validarLogin);
    }

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', validarCadastro);
    }

   
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', limparErro);
    });
};
