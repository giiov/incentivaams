document.addEventListener("DOMContentLoaded", function() {
    const sliderLocal = document.getElementById("anoSlider");
    const descricaoLocal = document.getElementById("descricaoAno");
    
    // Verificação de segurança
    if (!sliderLocal || !descricaoLocal) {
        console.error("Erro: Elementos do slider (anoSlider ou descricaoAno) não encontrados no DOM.");
        return;
    }

    // Informações de cada ano
    const anos = {
        1: { titulo: "1º Ano - Na ETEC", conteudo: "Fundamentos e desenvolvimento Básico de páginas web e lógica de  programação. HTML, CSS.", icone: "<i class='fas fa-laptop'></i>" },
        2: { titulo: "2º Ano - Na ETEC", conteudo: "Sistemas completos e nuvem. Criação e modelagem de banco de dados. PHP, MySQL, Js, React Native.", icone: "<i class='fas fa-desktop'></i>" },
        3: { titulo: "3º Ano - Na ETEC", conteudo: "Gestão e soluções inovadoras. Construção e gerenciamento de websites completos.", icone: "<i class='fas fa-tools'></i>" },
        4: { titulo: "4º Ano - Na FATEC", conteudo: "Aprofundamento técnico dos conhecimentos da Etec, com foco em bancos de dados não relacionais e temas avançados de desenvolvimento web.", icone: "<i class='fas fa-mobile-alt'></i>" },
        5: { titulo: "5º Ano - Na FATEC", conteudo: "Especialização e conclusão. Estudo de IA e Segurança da Informação, culminando no Projeto de Graduação que integra os 5 anos d aprendizado.", icone: "<i class='fas fa-graduation-cap'></i>" }
    };


    // Função para atualizar o conteúdo
    function atualizarDescricao() {
        const ano = sliderLocal.value;

        // Atualiza descrição
        descricaoLocal.innerHTML = `
            <h3>${anos[ano].titulo}</h3>
            <p>${anos[ano].conteudo}</p>
            <div class="icone">${anos[ano].icone}</div>
        `;

        // Cálculos de posição
        const sliderWidth = sliderLocal.offsetWidth; 
        const max = sliderLocal.max;
        const min = sliderLocal.min;
        const percent = (ano - min) / (max - min);

        // Centraliza a descrição
        const offset = descricaoLocal.offsetWidth / 2;
        descricaoLocal.style.left = `calc(${percent * 100}% - ${offset}px)`;
    }

    sliderLocal.addEventListener("input", atualizarDescricao);
    atualizarDescricao();
});