// Inicializa as Animações (AOS)
AOS.init({
    duration: 800, // Duração da animação em milissegundos
    easing: 'ease-out-cubic', // Tipo de transição (suavidade)
    once: true, // Animar apenas uma vez ao rolar para baixo
    offset: 100 // Iniciar animação um pouco antes do elemento aparecer na tela
});

// Lógica do Acordeão (FAQ - Perguntas Frequentes)
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');

        // Fecha todas as outras perguntas abertas (opcional)
        // Se quiser que várias fiquem abertas ao mesmo tempo, remova este bloco.
        faqQuestions.forEach(q => {
            if (q !== question) {
                q.nextElementSibling.style.maxHeight = null;
                q.nextElementSibling.classList.remove('active');
                const otherIcon = q.querySelector('i');
                if(otherIcon) otherIcon.classList.replace('ph-caret-up', 'ph-caret-down');
            }
        });

        // Alterna (abre/fecha) a pergunta clicada
        if (answer.style.maxHeight) {
            // Se já está aberto, fecha
            answer.style.maxHeight = null;
            answer.classList.remove('active');
            if(icon) icon.classList.replace('ph-caret-up', 'ph-caret-down');
        } else {
            // Se está fechado, abre calculando a altura do conteúdo
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.classList.add('active');
            if(icon) icon.classList.replace('ph-caret-down', 'ph-caret-up');
        }
    });
});