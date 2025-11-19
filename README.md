## 🚀 Projeto Incentiva AMS
Este repositório contém o código do site oficial do **Projeto Incentiva AMS**, uma iniciativa criada por alunos para orientar e motivar futuros estudantes sobre o curso **AMS (Articulado Médio Superior)** da ETEC.

O site reúne informações importantes sobre o curso, conteúdos de orientação e recursos interativos desenvolvidos com diversas APIs.

## 📦 Conteinerização com Docker
Como parte dos requisitos da disciplina de CNW I, este projeto foi configurado para rodar em um ambiente Docker.
A conteinerização garante que o site possa rodar em qualquer máquina de forma padronizada — mas o Docker está incluído aqui essencialmente para atender à exigência acadêmica.

## ✔️ Dockerfile
O repositório possui um arquivo **Dockerfile** que faz:

- Build de um ambiente PHP + Apache
- Cópia dos arquivos do projeto para o container
- Instalação das dependências via **Composer**

## 🛠️ Como Rodar o Projeto

# 1️⃣ Baixar a imagem
fazer o pull da imagem oficial:
docker pull gicipulo/incentivams:v1

# 2️⃣ Rodar o container
Após o download, execute:
docker run -d -p 8080:80 gicipulo/incentivams:v1

# 3️⃣ Acessar o site
Abra no navegador:
http://localhost:8080


## ✨Tecnologias Utilizadas
- **HTML, CSS e JavaScript**
- **APIs externas (Google Gemini, Google Maps, Google Calendar)**
- **PHP + MySQL** para partes do backend  
- **Composer** para gerenciamento de dependências  
- **Docker** para conteinerização (exigência da disciplina)

