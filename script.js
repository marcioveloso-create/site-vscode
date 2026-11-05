const btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', () => {
    // Alterna a classe 'tema-escuro' no body da página
    document.body.classList.toggle('tema-escuro');
});
