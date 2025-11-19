const contatoSection = document.getElementById('contato');

// Cria o elemento principal <div> que envolverá todo o conteúdo da seção
const divContato = document.createElement('div');
divContato.id = 'Contato';

const tituloContato = document.createElement('h1');
tituloContato.className = 'titulos';
tituloContato.textContent = 'Emails para contato:';
divContato.appendChild(tituloContato)

// Contato Container Principal (contém os itens de email)
const contatoDiv = document.createElement('div');
contatoDiv.className = 'contato-container';

// --- 1. DIV EMAIL INCENTIVA AMS ---
const divEmailIncentiva = document.createElement('div');
divEmailIncentiva.className = 'contato-item'; 

// **********************************************
// Div para o Ícone de Email (Usando IMG)
// **********************************************
const divIconeEmailWrapperIncentiva = document.createElement('div');
// Reutilizando a classe de imagem de ícone para manter a padronização de tamanho
const img_iconeEmailIncentiva = document.createElement('img');
img_iconeEmailIncentiva.className = 'icone-email'; // Nova classe para estilização específica do ícone de email
img_iconeEmailIncentiva.id = 'email'; 
img_iconeEmailIncentiva.src = './src/img/email.png'; // Substitua pelo caminho do seu ícone de email
divIconeEmailWrapperIncentiva.appendChild(img_iconeEmailIncentiva);
// ADICIONADO PRIMEIRO à divEmailIncentiva
divEmailIncentiva.appendChild(divIconeEmailWrapperIncentiva); 
// **********************************************

// Ícone/Imagem do Incentiva AMS (Logo) - MOVEMOS ESTE PARA DEPOIS DO ÍCONE DE EMAIL
const div_iconeLogo = document.createElement('div');
div_iconeLogo.className = 'item-img-contato'; 
const img_logo = document.createElement('img');
img_logo.id = 'icone-logo-ams'; 
img_logo.src = './src/img/Logo AMS - Vermelha.png'; 
div_iconeLogo.appendChild(img_logo);
// ADICIONADO EM SEGUNDO à divEmailIncentiva
divEmailIncentiva.appendChild(div_iconeLogo); 


// Endereço de Email (Texto/Link)
const pEmailIncentiva = document.createElement('div');
pEmailIncentiva.className = 'texto-email' 
pEmailIncentiva.textContent = 'incentivams@gmail.com';
divEmailIncentiva.appendChild(pEmailIncentiva);

// --- 2. DIV EMAIL ETEC ANHANGUERA ---
const divEmailEtec = document.createElement('div');
divEmailEtec.className = 'contato-item';

// **********************************************
// Div para o Ícone de Email (Usando IMG)
// **********************************************
const divIconeEmailWrapperEtec = document.createElement('div');
// Reutilizando a classe de imagem de ícone para manter a padronização de tamanho
const img_iconeEmailEtec = document.createElement('img');
img_iconeEmailEtec.className = 'icone-email'; // Nova classe para estilização específica do ícone de email
img_iconeEmailEtec.id = 'etec'; 
img_iconeEmailEtec.src = './src/img/email.png'; // Substitua pelo caminho do seu ícone de email
divIconeEmailWrapperEtec.appendChild(img_iconeEmailEtec);
// ADICIONADO PRIMEIRO à divEmailEtec
divEmailEtec.appendChild(divIconeEmailWrapperEtec);
// **********************************************

// Ícone/Imagem da ETEC (Prédio/Escola)
const div_iconeEtec = document.createElement('div');
div_iconeEtec.className = 'item-img-contato';
const img_etec = document.createElement('img');
img_etec.id = 'icone-img-etec'; 
img_etec.src = './src/img/etec.png'; 
div_iconeEtec.appendChild(img_etec);
// ADICIONADO EM SEGUNDO à divEmailEtec
divEmailEtec.appendChild(div_iconeEtec);


// Endereço de Email (Texto/Link)
const pEmailEtec = document.createElement('a');
pEmailEtec.className = 'texto-email'
pEmailEtec.textContent = 'e262.secretaria@etec.sp.gov.br';
divEmailEtec.appendChild(pEmailEtec);

// Adiciona as divs de email ao container principal (contatoDiv)
contatoDiv.appendChild(divEmailIncentiva);
contatoDiv.appendChild(divEmailEtec);

// Anexa o container de emails (contatoDiv) dentro do container da seção (divContato)
divContato.appendChild(contatoDiv);


// -------------------------------------------------------------------
// --- CONTEÚDO DE REDES SOCIAIS (MOVIDO DO INÍCIO) ---
// -------------------------------------------------------------------

// NOVO TÍTULO H1
const h1RedesSociais = document.createElement('h1'); 
h1RedesSociais.className = 'titulos';
h1RedesSociais.textContent = 'Nos siga nas redes sociais';
// Anexado após contatoDiv
divContato.appendChild(h1RedesSociais);

// Cria o novo grupo de divs (redes sociais)
const redesSociaisDIV = document.createElement('div')
redesSociaisDIV.className = "instaDIV"; // Reutilizando a classe de container

// ********** DIV 4 (Instagram) **********
const p04div = document.createElement('div');
p04div.className = 'insta-div'

// Imagem 4 (Ícone do Instagram)
const img_p04div = document.createElement('div');
const img_p04 = document.createElement('img')
img_p04.className = 'item-img-insta';
img_p04.id = 'instagram';
img_p04.src = './src/img/insta.png'; // Assumindo que você tem essa imagem
img_p04div.appendChild(img_p04);
p04div.appendChild(img_p04div);

// Texto 4
const p04 = document.createElement('div')
p04.className = 'texto-insta'
const p04_texto = document.createElement('p');
p04_texto.className = "p";
p04_texto.textContent = 'Acompanhe-nos pelo Instagram e fique informado de tudo!';
p04.appendChild(p04_texto)
p04div.appendChild(p04)

const linkp04 = document.createElement('a');
linkp04.target = 'blank'
linkp04.className = 'link-insta';
linkp04.textContent = '@incentivams';
linkp04.href = 'https://www.instagram.com/incentivams/'
p04div.appendChild(linkp04)

redesSociaisDIV.appendChild(p04div)

// ********** DIV 5 (TikTok) **********
const p05div = document.createElement('div');
p05div.className = 'insta-div'

// Imagem 5 (Ícone do TikTok)
const img_p05div = document.createElement('div');
const img_p05 = document.createElement('img')
img_p05.className = 'item-img-insta';
img_p05.id = 'tiktok';
img_p05.src = './src/img/insta.png'; // Assumindo que você tem essa imagem
img_p05div.appendChild(img_p05);
p05div.appendChild(img_p05div);

// Texto 5
const p05 = document.createElement('div')
p05.className = 'texto-insta'
const p05_texto = document.createElement('p');
p05_texto.className = "p";
p05_texto.textContent = 'Siga também a página do Segundo AMS!';
p05.appendChild(p05_texto)
p05div.appendChild(p05)

const linkp05 = document.createElement('a');
linkp05.target = 'blank'
linkp05.className = 'link-insta';
linkp05.textContent = '@segundoams_';
linkp05.href = 'https://www.instagram.com/segundoams_/'
p05div.appendChild(linkp05)

redesSociaisDIV.appendChild(p05div)

// ********** DIV 6 (Website/Link) **********
const p06div = document.createElement('div');
p06div.className = 'insta-div'

// Imagem 6 (Ícone de Website/Link)
const img_p06div = document.createElement('div');
const img_p06 = document.createElement('img')
img_p06.className = 'item-img-insta';
img_p06.id = 'link';
img_p06.src = './src/img/insta.png'; // Assumindo que você tem essa imagem
img_p06div.appendChild(img_p06);
p06div.appendChild(img_p06div);

// Texto 6
const p06 = document.createElement('div')
p06.className = 'texto-insta'
const p06_texto = document.createElement('p');
p06_texto.className = "p";
p06_texto.textContent = 'Não deixe de seguir o instagram da nossa Etec!';
p06.appendChild(p06_texto)
p06div.appendChild(p06)

const linkp06 = document.createElement('a');
linkp06.target = 'blank'
linkp06.className = 'link-insta';
linkp06.textContent = '@etecanhanguera';
linkp06.href = 'https://www.instagram.com/etecanhanguera/'
p06div.appendChild(linkp06)

redesSociaisDIV.appendChild(p06div)

// Anexa o novo grupo de redes sociais ao container principal
divContato.appendChild(redesSociaisDIV);


// Limpa o conteúdo existente e adiciona o novo conteúdo à seção
contatoSection.innerHTML = ''; 
contatoSection.appendChild(divContato);