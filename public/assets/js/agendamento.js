function validarAgendamento(event) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const veiculo = document.getElementById('veiculo').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const errorMessage = document.getElementById('error-message');

    if (!nome || !email || !veiculo || !servico || !data || !hora) {
        event.preventDefault(); 
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
    } else {
        
        errorMessage.style.display = 'none';
    }
}


window.onload = function () {
    const agendamentoForm = document.getElementById('agendamento-form');
    
    if (agendamentoForm) {
        agendamentoForm.addEventListener('submit', validarAgendamento);
    }
};
