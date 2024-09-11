document.addEventListener('DOMContentLoaded', function() {
    const cubo = document.getElementById('cubo');
    const botao = document.getElementById('sortear');

    botao.addEventListener('click', function() {
        cubo.classList.add('animacao');
        
        cubo.addEventListener('animationend', function() {
            cubo.classList.remove('animacao');
        }, { once: true });

        setTimeout(function() {
            const resultado = Math.floor(Math.random() * 6) + 1;
            cubo.querySelector('.frente').textContent = resultado;
        }, 500);
    });
});
