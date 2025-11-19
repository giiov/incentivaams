const inicialSection = document.getElementById('inicio');

// --- Conteúdo Original (Incentiva AMS) ---

// Cria o elemento principal <div>
const divInicial = document.createElement('div');
divInicial.id = 'Inicial';

// Cria o elemento <h1>
const h1 = document.createElement('h1');
h1.className = 'titulos'
h1.textContent = 'O que é o ';

// Cria o elemento <span> dentro do <h1>
const span = document.createElement('span');
span.textContent = 'Incentiva AMS?';

// Adiciona o <span> ao <h1>
h1.appendChild(span);
divInicial.appendChild(h1);

// Cria o grupo de divs (parágrafos anteriores)
const pDIV = document.createElement('div')
pDIV.className = "pDIV";

// Div 1
const p01div = document.createElement('div');
p01div.className = 'pdiv'

// Imagem 1
const img_p01div = document.createElement('div');
const img_p01 = document.createElement('img')
img_p01.className = 'item-img-p';
img_p01.id = 'ideia';
img_p01.src = './src/img/ideia.png';
img_p01div.appendChild(img_p01);
p01div.appendChild(img_p01div);

// Texto 1
const p01 = document.createElement('p');
p01.className = "p";
p01.textContent = 'O projeto Incentiva AMS foi criado por nós, alunas do segundo ano do curso Técnico de Informática para Internet na modalidade Articulado Médio Superior (AMS)';
p01div.appendChild(p01)
pDIV.appendChild(p01div)

// Div 2
const p02div = document.createElement('div');
p02div.className = 'pdiv'

// Imagem 2
const img_p02div = document.createElement('div');
const img_p02 = document.createElement('img')
img_p02.className = 'item-img-p';
img_p02.id = 'social';
img_p02.src = './src/img/social.png';
img_p02div.appendChild(img_p02);
p02div.appendChild(img_p02div);

// Texto 2
const p02 = document.createElement('p');
p02.className = "p";
p02.textContent = 'Percebendo que o curso AMS é uma novidade na região e muitos estudantes não o conhecem bem, nosso propósito é divulgar seus detalhes por dois canais principais: por meio de palestras informativas nas escolas da região e através das redes sociais.';
p02div.appendChild(p02)
pDIV.appendChild(p02div)


// Div 3
const p03div = document.createElement('div');
p03div.className = 'pdiv'

// Imagem 3
const img_p03div = document.createElement('div');
const img_p03 = document.createElement('img')
img_p03.id = 'estrela';
img_p03.src = './src/img/estrela.png';
img_p03div.appendChild(img_p03);
p03div.appendChild(img_p03div);

// Texto 3
const p03 = document.createElement('p');
p03.className = "p";
p03.textContent = 'Nessas ações, compartilharemos tudo sobre o funcionamento do curso, seus principais diferenciais e os caminhos futuros promissores que ele pode oferecer aos alunos';
p03div.appendChild(p03)
pDIV.appendChild(p03div)

// Adiciona o grupo de parágrafos original ao container principal
divInicial.appendChild(pDIV);

// --- Novo Conteúdo: Título e Novas Divs (REMOVIDO AQUI) ---
/*
// NOVO TÍTULO H2 REMOVIDO
const h1RedesSociais = document.createElement('h1');
h1RedesSociais.className = 'titulos';
h1RedesSociais.textContent = 'Nos siga nas redes sociais';
// divInicial.appendChild(h1RedesSociais); <-- REMOVIDO

// Cria o novo grupo de divs (redes sociais) REMOVIDO
const redesSociaisDIV = document.createElement('div')
redesSociaisDIV.className = "instaDIV";
// ********** DIV 4 (Instagram) ********** REMOVIDO
// ********** DIV 5 (TikTok) ********** REMOVIDO
// ********** DIV 6 (Website/Link) ********** REMOVIDO
// Adiciona o novo grupo de redes sociais ao container principal REMOVIDO
// divInicial.appendChild(redesSociaisDIV); <-- REMOVIDO
*/


// Limpa o conteúdo existente na seção 'inicio'
inicialSection.innerHTML = '';

// Adiciona o bloco original e o novo conteúdo à seção
inicialSection.appendChild(divInicial);