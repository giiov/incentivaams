const equipeSection = document.getElementById('equipe');

// Cria o elemento principal <div>
const divEquipe = document.createElement('div');
divEquipe.id = 'Equipe';

// -------------------------------------------------------------------
// --- Seção 1: Equipe ---
// -------------------------------------------------------------------

// Cria o primeiro <h1> e adiciona a class='titulos'
const h1eq = document.createElement('h1');
h1eq.textContent = 'Equipe';
h1eq.className = 'titulos'; // Adiciona a classe 'titulos'
divEquipe.appendChild(h1eq); // Anexa o H1 diretamente

// Cria a div de agrupamento para o conteúdo
const divConteudoEquipe = document.createElement('div');
divConteudoEquipe.className = 'divsGeral';

// Cria o primeiro <p> e adiciona a class='p'
const p1eq = document.createElement('p');
p1eq.textContent = 'Somos alunas do curso com módulo AMS, unidas pela vontade de compartilhar a grande oportunidade que consideramos esse curso. Cada uma contribui com suas habilidades para divulgar o AMS de forma criativa e acessível, por meio de ações presenciais e digitais. Também contamos com o apoio e a ajuda de colegas da sala que se interessam pelo projeto, tornando possível a realização de cada etapa com colaboração e dedicação.';
p1eq.className = 'p'; // Adiciona a classe 'p'

// Anexa o parágrafo à div de agrupamento e a div de agrupamento à divEquipe
divConteudoEquipe.appendChild(p1eq);
divEquipe.appendChild(divConteudoEquipe);


// -------------------------------------------------------------------
// --- Seção 2: Missão, Visão e Valores ---
// -------------------------------------------------------------------

// Cria o segundo <h1> e adiciona a class='titulos'
const h1eq_2 = document.createElement('h1');
h1eq_2.textContent = 'Missão, Visão e Valores';
h1eq_2.className = 'titulos'; // Adiciona a classe 'titulos'
divEquipe.appendChild(h1eq_2); // Anexa o H1 diretamente

// MVMdiv (Conteúdo de agrupamento existente - não criaremos outra div de agrupamento)
const MVVDiv = document.createElement('div');
MVVDiv.className = 'MVVDiv';

// MISSÃO
const divMissao = document.createElement('div');
divMissao.className = 'MVVdivs';

const div_alvo = document.createElement('div');
div_alvo.className = 'item-img';
const img_alvo = document.createElement('img')
img_alvo.id = 'alvo';
img_alvo.src = './src/img/alvo.png';
div_alvo.appendChild(img_alvo);
divMissao.appendChild(div_alvo);

const divTituloMissao = document.createElement('div')
divTituloMissao.className = 'divTituloMVV';
const tituloMissao = document.createElement('h5');
tituloMissao.className = 'tituloMVV';
tituloMissao.textContent = 'MISSÃO';
divTituloMissao.appendChild(tituloMissao);
divMissao.appendChild(divTituloMissao);

const pmissao = document.createElement('p');
pmissao.className = 'texto-MVVs p'; // Adiciona a classe 'p'
pmissao.textContent = 'Promover o conhecimento e a valorização do curso AMS e incentivar os estudantes a usufruírem dessa oportunidade que une ensino médio, técnico e superior!'
divMissao.appendChild(pmissao)

// VISÃO
const divVisao = document.createElement('div')
divVisao.className = 'MVVdivs'

const div_binoculo = document.createElement('div');
div_binoculo.className = 'item-img';
const img_binoculo = document.createElement('img')
img_binoculo.id = 'binoculo';
img_binoculo.src = './src/img/binoculo.png';
div_binoculo.appendChild(img_binoculo);
divVisao.appendChild(div_binoculo);

const divTituloVisao = document.createElement('div')
divTituloVisao.className = 'divTituloMVV';
const tituloVisao = document.createElement('h5');
tituloVisao.className = 'tituloMVV';
tituloVisao.textContent = 'VISÃO';
divTituloVisao.appendChild(tituloVisao);
divVisao.appendChild(divTituloVisao);

const pvisao = document.createElement('p');
pvisao.className = 'texto-MVVs p' // Adiciona a classe 'p'
pvisao.textContent = 'Ser reconhecido como um projeto de referência na divulgação AMS e ser levado a outras ETECs, contribuindo para que mais jovens descubram essa oportunidade'
divVisao.appendChild(pvisao)

// VALORES
const divValores = document.createElement('div');
divValores.className = 'MVVdivs';

const div_coracao = document.createElement('div');
div_coracao.className = 'item-img';
const img_coracao = document.createElement('img')
img_coracao.id = 'coracao';
img_coracao.src = './src/img/coracao.png';
div_coracao.appendChild(img_coracao);
divValores.appendChild(div_coracao);

const divTituloValores = document.createElement('div')
divTituloValores.className = 'divTituloMVV';
const tituloValores = document.createElement('h5');
tituloValores.className = 'tituloMVV';
tituloValores.textContent = 'VALORES';
divTituloValores.appendChild(tituloValores);
divValores.appendChild(divTituloValores);

const pvalores = document.createElement('p');
pvalores.className = 'texto-MVVs p' // Adiciona a classe 'p'
pvalores.textContent = 'Acolhimento e inclusão de novos alunos; Colaboração entre estudantes; Compromisso com a informação de qualidade e Responsabilidade com o que divulgamos'
divValores.appendChild(pvalores)

MVVDiv.appendChild(divMissao)
MVVDiv.appendChild(divVisao)
MVVDiv.appendChild(divValores)

divEquipe.appendChild(MVVDiv); // Anexa o MVVDiv (Conteúdo de agrupamento)


// -------------------------------------------------------------------
// --- Seção 3: Por que criamos o projeto? ---
// -------------------------------------------------------------------

// Cria o terceiro <h1> e adiciona a class='titulos'
const h1eq_3 = document.createElement('h1');
h1eq_3.textContent = 'Por que criamos o projeto?';
h1eq_3.className = 'titulos'; // Adiciona a classe 'titulos'
divEquipe.appendChild(h1eq_3); // Anexa o H1 diretamente

// Cria a div de agrupamento para o conteúdo
const divConteudoProjeto = document.createElement('div');
divConteudoProjeto.className = 'divsGeral';

// Cria o terceiro <p> e adiciona a class='p'
const p3eq = document.createElement('p');
p3eq.textContent = 'Criamos o Incentiva AMS a partir da percepção de que muitas pessoas ainda não conhecem o curso e o potencial que ele tem. Vimos de perto como ele pode abrir portas e quisemos compartilhar isso com outros estudantes, ajudando-os a enxergar essa possibilidade e a aproveitá-la com mais segurança e motivação.';
p3eq.className = 'p'; // Adiciona a classe 'p'

// Anexa o parágrafo à div de agrupamento e a div de agrupamento à divEquipe
divConteudoProjeto.appendChild(p3eq);
divEquipe.appendChild(divConteudoProjeto);


// Limpa o conteúdo existente e adiciona o novo conteúdo à seção
equipeSection.innerHTML = '';
equipeSection.appendChild(divEquipe);