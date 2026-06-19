document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Efeito de Animação dos Números (Contador)
    const contadores = document.querySelectorAll('.num');
    
    contadores.forEach(contador => {
        const atualizarContador = () => {
            const alvo = +contador.getAttribute('data-alvo');
            const numeroAtual = +contador.innerText;
            
            // Define a velocidade da animação
            const incremento = alvo / 50; 

            if (numeroAtual < alvo) {
                contador.innerText = Math.ceil(numeroAtual + incremento);
                setTimeout(atualizarContador, 30);
            } else {
                contador.innerText = alvo;
            }
        };
        
        atualizarContador();
    });

    // 2. Validação e Envio do Formulário de Contato
    const formulario = document.getElementById('contact-form');
    
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede a página de recarregar
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        
        // Simulação de envio com feedback visual
        alert(`Obrigado pelo contato, ${nome}! Juntos cultivamos um futuro mais sustentável. Responderemos em breve no e-mail: ${email}.`);
        
        formulario.reset(); // Limpa os campos do formulário
    });
});
