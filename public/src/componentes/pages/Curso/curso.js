const cursoSection = document.getElementById('curso');

// Cria o elemento principal <div>
const divCurso = document.createElement('div');
divCurso.id = 'Curso';

// -------------------------------------------------------------------
// --- SEÇÃO 1: O que é o AMS? ---
// -------------------------------------------------------------------

// TÍTULO (vai direto para divCurso)
const h1_1 = document.createElement('h1');
h1_1.className = 'titulos'
h1_1.textContent = 'O que é o ';
const span1 = document.createElement('span');
span1.textContent = ' AMS?';
h1_1.appendChild(span1);
divCurso.appendChild(h1_1); // <--- Título adicionado aqui

// Cria a div de agrupamento (para o parágrafo)
const divOQueE = document.createElement('div');
divOQueE.className = 'divsGeral';

// Conteúdo (Parágrafo)
const p1 = document.createElement('p');
p1.className = 'p'
p1.textContent = 'O curso com módulo AMS oferece um modelo de formação inovador: em apenas cinco anos, o aluno conclui o ensino médio, um curso técnico e o ensino superior (tecnólogo). É uma jornada intensa, mas repleta de oportunidades e aprendizados.';

// Adiciona o parágrafo à div de agrupamento
divOQueE.appendChild(p1);

// Adiciona a div de agrupamento ao elemento principal
divCurso.appendChild(divOQueE);


// -------------------------------------------------------------------
// --- SEÇÃO 2: Trajetória / Período de duração ---
// -------------------------------------------------------------------

// TÍTULO (vai direto para divCurso)
const h1_2 = document.createElement('h1');
h1_2.className = 'titulos'
h1_2.textContent = 'Trajetória AMS';
divCurso.appendChild(h1_2); // <--- Título adicionado aqui

// Cria a div de agrupamento (para o parágrafo e o container da trajetória)
const divTrajetoria = document.createElement('div');
divTrajetoria.className = 'divsGeral';

// Conteúdo (Parágrafo inicial)
const p2 = document.createElement('p');
p2.className = 'p'
p2.textContent = 'O curso tem duração de 5 anos: são 3 anos de ensino médio e técnico integrados, seguidos por 2 anos de curso superior tecnológico, tudo dentro da própria ETEC.';

// Adiciona o Parágrafo à div de agrupamento
divTrajetoria.appendChild(p2);


// Cria o elemento <div> principal da Trajetória (divTrajetoriaContainer e seus filhos)
const divTrajetoriaContainer = document.createElement('div');
divTrajetoriaContainer.className = 'trajetoria-container';

const divSlideWrapper = document.createElement('div');
divSlideWrapper.className = 'slide-wrapper';
divSlideWrapper.style.position = 'relative';
divSlideWrapper.style.width = '100%';

const inputRange = document.createElement('input');
inputRange.type = 'range';
inputRange.min = '1';
inputRange.max = '5';
inputRange.value = '1';
inputRange.id = 'anoSlider';

const divDescricaoAno = document.createElement('div');
divDescricaoAno.id = 'descricaoAno';
divDescricaoAno.className = 'descricao';

const h3Descricao = document.createElement('h3');
divDescricaoAno.appendChild(h3Descricao);

divSlideWrapper.appendChild(inputRange);
divSlideWrapper.appendChild(divDescricaoAno);

divTrajetoriaContainer.appendChild(divSlideWrapper);

// Adiciona o container da Trajetória (com o slider) à div de agrupamento
divTrajetoria.appendChild(divTrajetoriaContainer);

// Adiciona a div de agrupamento ao elemento principal
divCurso.appendChild(divTrajetoria);


// -------------------------------------------------------------------
// --- SEÇÃO 3: Diferenciais ---
// -------------------------------------------------------------------

// TÍTULO (vai direto para divCurso)
const h1_3 = document.createElement('h1');
h1_3.className = 'titulos'
h1_3.textContent = 'Diferenciais';
divCurso.appendChild(h1_3); // <--- Título adicionado aqui

// Cria a div de agrupamento (para o parágrafo)
const divDiferenciais = document.createElement('div');
divDiferenciais.className = 'divsGeral';

// Conteúdo (Parágrafo)
const p3 = document.createElement('p');
p3.className = 'p'
p3.textContent = 'O curso com módulo AMS proporciona uma formação integrada que une ensino médio, técnico e superior tecnólogo, permitindo que o aluno conclua as três etapas em apenas cinco anos. Desde o primeiro ano, os estudantes têm contato com conteúdos técnicos que se conectam à prática, aliando teoria e vivências do mercado para uma preparação mais completa. Além disso, ao final do curso, o aluno sai com uma formação continuada e um excelente diferencial no currículo, estando preparado para ingressar no mercado de trabalho ou seguir aprofundando seus estudos, com uma base sólida construída ao longo de toda a jornada.';

// Adiciona o parágrafo à div de agrupamento
divDiferenciais.appendChild(p3);

// Adiciona a div de agrupamento ao elemento principal
divCurso.appendChild(divDiferenciais);


// Limpa o conteúdo existente e adiciona o novo conteúdo à seção
cursoSection.innerHTML = '';
cursoSection.appendChild(divCurso);