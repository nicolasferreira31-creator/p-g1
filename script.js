// Aguarda o carregamento do documento
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona todos os cards de seleções e o painel de resultados
    const cards = document.querySelectorAll(".card");
    const painel = document.getElementById("painel-resultado");
    const textoResultado = document.getElementById("texto-resultado");

    // Adiciona evento de clique a cada card
    cards.forEach(card => {
        card.addEventListener("click", function() {
            // Pega o nome do país e os títulos guardados no atributo customizado 'data-titulos'
            const pais = this.querySelector("h3").innerText;
            const titulos = this.getAttribute("data-titulos");

            // Atualiza o texto do painel
            textoResultado.innerHTML = `🏆 O <strong>${pais}</strong> possui <strong>${titulos}</strong> títulos mundiais!`;

            // Remove a classe 'hidden' para tornar o painel visível com animação simples
            painel.classList.remove("hidden");
        });
    });
});