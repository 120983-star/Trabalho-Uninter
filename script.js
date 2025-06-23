document.addEventListener('DOMContentLoaded', function() {
    const botaoMensagem = document.getElementById('msgBtn');
    const paragrafoMensagem = document.getElementById('mensagem');

    botaoMensagem.addEventListener('click', function() {
        // A linha abaixo foi alterada para a mensagem religiosa
        paragrafoMensagem.textContent = 'Que Deus te abençoe!';
    });
});