document.addEventListener('DOMContentLoaded', function() {
    const botaoMensagem = document.getElementById('msgBtn');
    const paragrafoMensagem = document.getElementById('mensagem');

    botaoMensagem.addEventListener('click', function() {
        // A linha abaixo foi atualizada com a mensagem mais elaborada.
        paragrafoMensagem.textContent = 'Seja bem-vindo(a) a este espaço! Que a sua visita seja abençoada e que você encontre inspiração e paz. Deus guie sempre os seus passos.';
    });
});
