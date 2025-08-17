# 📦 Nome do Projeto

Breve descrição do projeto: o que ele faz, qual problema resolve e para quem é destinado.  
Exemplo: "API para gerenciamento de produtos e avaliações de clientes, desenvolvida em Node.js seguindo o padrão MVC."

---

## 🏗️ Arquitetura MVC
Este projeto segue a arquitetura **Model-View-Controller (MVC)**:

- **Model**: responsável pela comunicação com o banco de dados.  
- **View**: neste projeto, pode ser apenas a resposta em JSON para o cliente.  
- **Controller**: contém a lógica da aplicação e recebe as requisições.  
- **Routes**: direcionam as requisições para os controllers corretos.  

## 📂 Estrutura de pastas do projeto

```bash
📂 projeto-backend
 ┣ 📂 src
 ┃ ┣ 📂 controllers   # Lógica das requisições
 ┃ ┣ 📂 models        # Estruturas e banco de dados
 ┃ ┣ 📂 routes        # Definição das rotas
 ┃ ┣ 📂 views         # (opcional) Renderização ou respostas
 ┃ ┗ 📜 app.js        # Arquivo principal
 ┣ 📜 package.json
 ┣ 📜 .env
 ┗ 📜 README.md
```
---

## 🚀 Tecnologias utilizadas
- [Node.js](https://nodejs.org/)  
- [Express](https://expressjs.com/)  
- [Nodemon](https://nodemon.io/) (para desenvolvimento)  

---

## ⚙️ Instalação e uso

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/NOME-DO-PROJETO.git
cd NOME-DO-PROJETO

npm install

npm run dev
Servidor rodando em http://localhost:3000
```
## 📡 Rotas principais (exemplo)

| Método | Rota            | Descrição                     |
|--------|-----------------|-------------------------------|
| GET    | `/produtos`     | Lista todos os produtos       |
| POST   | `/produtos`     | Cria um novo produto          |
| PUT    | `/produtos/:id` | Atualiza produto por ID       |
| DELETE | `/produtos/:id` | Remove produto por ID         |

## :smiley_cat: Authors
- Tábata Macedo
