document.addEventListener("DOMContentLoaded", function() {
    
    // Objeto contendo os dados detalhados de cada país (Base de Dados do Site)
    const dadosPaises = {
        brasil: {
            nome: "Brasil 🇧🇷",
            titulos: "5 Vezes Campeão (1958, 1962, 1970, 1994, 2002)",
            artilheiro: "Ronaldo Nazário (15 gols em 4 Copas)",
            principalJogador: "Cafu (20 partidas disputadas e único a jogar 3 finais seguidas)",
            fato: "É a única seleção do planeta a participar de absolutamente todas as edições da Copa do Mundo sem precisar de repescagem."
        },
        alemanha: {
            nome: "Alemanha 🇩🇪",
            titulos: "4 Vezes Campeã (1954, 1974, 1990, 2014)",
            artilheiro: "Miroslav Klose (16 gols - O maior artilheiro geral da história das Copas)",
            principalJogador: "Lothar Matthäus (25 partidas disputadas em 5 Copas diferentes)",
            fato: "É a seleção que mais vezes chegou às semifinais (13 vezes) e a que mais disputou finais na história (8 vezes)."
        },
        italia: {
            nome: "Itália 🇮🇹",
            titulos: "4 Vezes Campeã (1934, 1938, 1982, 2006)",
            artilheiro: "Roberto Baggio, Paolo Rossi e Christian Vieri (9 gols cada)",
            principalJogador: "Paolo Maldini (23 partidas disputadas, sendo uma das maiores lendas defensivas do torneio)",
            fato: "Foi a primeira seleção a conquistar o bicampeonato consecutivo na história (1934 e 1938) sob o comando do técnico Vittorio Pozzo."
        },
        argentina: {
            nome: "Argentina 🇦🇷",
            titulos: "3 Vezes Campeã (1978, 1986, 2022)",
            artilheiro: "Lionel Messi (13 gols)",
            principalJogador: "Lionel Messi (26 partidas disputadas - Recordista absoluto de jogos na história do torneio)",
            fato: "A conquista de 1986 contou com Diego Maradona marcando o antológico 'Gol do Século' enfileirando a defesa inglesa desde o meio de campo."
        },
        franca: {
            nome: "França 🇫🇷",
            titulos: "2 Vezes Campeã (1998, 2018)",
            artilheiro: "Just Fontaine (13 gols - Feito incrível alcançado em uma única edição, em 1958)",
            principalJogador: "Hugo Lloris (20 partidas disputadas)",
            fato: "Chegou a quatro finais nas últimas sete edições do torneio (1998, 2006, 2018 e 2022), consolidando-se como uma das maiores potências modernas."
        }
    };

    // Mapeamento dos elementos do DOM
    const botoes = document.querySelectorAll(".btn-pais");
    const painel = document.getElementById("painel-pais");
    const txtNome = document.getElementById("nome-pais");
    const txtTitulos = document.getElementById("titulos-pais");
    const txtArtilheiro = document.getElementById("artilheiro-pais");
    const txtJogador = document.getElementById("principal-jogador-pais");
    const txtFato = document.getElementById("fato-pais");

    // Adiciona o evento de clique para os botões das seleções
    botoes.forEach(botao => {
        botao.addEventListener("click", function() {
            // Remove o destaque visual do botão ativo anterior
            botoes.forEach(b => b.classList.remove("active"));
            
            // Adiciona destaque ao botão clicado
            this.classList.add("active");

            // Identifica qual país foi clicado usando o atributo data-pais
            const chavePais = this.getAttribute("data-pais");
            const dados = dadosPaises[chavePais];

            // Alimenta o painel HTML com as informações do objeto JavaScript
            if (dados) {
                txtNome.innerText = dados.nome;
                txtTitulos.innerText = dados.titulos;
                txtArtilheiro.innerText = dados.artilheiro;
                txtJogador.innerText = dados.principalJogador;
                txtFato.innerText = dados.fato;

                // Mostra o painel removendo a classe 'hidden'
                painel.classList.remove("hidden");
                
                // Rola suavemente até o painel em telas menores
                painel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });
});