# Descrição da Atividade

Você irá desenvolver uma aplicação completa para gerenciamento de livros, utilizando um backend Node.js baseado no projeto “api-node-teste” (adaptado para o domínio de usuários e livros) e um frontend em Next.js. O backend será responsável por armazenar, listar, buscar, editar e remover dados.

## 1. Dados do usuário
Para os dados do usuário, deve-se considerar:
* nome
* data de nascimento no formato dia/mês/ano
* e-mail
* telefone no formato (99)99999-9999
* cidade de onde mora
* estado de onde mora
* url da imagem (deve ser uma imagem fictícia)

## 2. Dados do livro
Para os dados do livro, deve-se considerar:
* título
* editora
* num_paginas
* genero
* autor
* url da capa do livro

# Instruções

## Backend

* Adapte o backend do projeto “api-node-teste” para trabalhar com os usuários e livros, adicionando os modelo de usuários e os modelos de livro.
* Implemente as rotas necessárias para listar todos os dados, buscar por id, criar, editar e remover usuários e livros.
* Garanta que os dados sejam persistidos em arquivos JSON e XML, conforme o padrão do projeto original.

## Frontend (Next.js)
* Para o frontend deverá ser criado um projeto com o framework Next.js.
* Deverá ser modelada uma página inicial com um título da escolha da equipe com dois botões: "Gerenciar usuários" e "Gerenciar livros".

### **Para os usuários**
* Implemente uma página que exiba todos os usuários em formato de lista ou cartões. Cada usuário deve ter a sua imagem, o nome, o e-mail e três botões: “Ver”, “Editar” e “Remover”.
* Implemente uma página de detalhes do usuário, acessada pelo botão “Ver”.
* Implemente uma página de edição do usuário, acessada pelo botão “Editar”. A edição deve ser feita em uma página com o formulário e os dados em seus respectivos campos de preenchimento.
* A remoção do usuário deve ser feita diretamente na página principal, sem página específica.
* No topo da página principal, adicione um botão “Criar novo usuário”, que leve a uma página/formulário para cadastro de um novo usuário.

### **Para os livros**
* Implemente uma página que exiba todos os livros em formato de lista ou cartões. Cada livro deve ter a capa, o nome, o gênero e três botões: “Ver”, “Editar” e “Remover”.
* Implemente uma página de detalhes do livro, acessada pelo botão “Ver”.
* Implemente uma página de edição do livro, acessada pelo botão “Editar”. A edição deve ser feita em uma página com o formulário e os dados em seus respectivos campos de preenchimento.
* A remoção do livro deve ser feita diretamente na página principal, sem página específica.
* No topo da página principal, adicione um botão “Criar novo livro”, que leve a uma página/formulário para cadastro de um novo livro.
* O frontend deve consumir a API criada no backend para todas as operações (listar, buscar, criar, editar, remover).

  
### **ATENÇÃO:** a modelagem das páginas deve seguir um layout simples e sem muitos efeitos adicionais em CSS ou JavaScript.

# Entrega: prazo até 18/07/2025

* **ATENÇÃO:** todos devem participar da atividade implementando uma das partes da atividade (Backend ou Frontend)
* A atividade deve ser entregue utilizando este repositório.
* Cada equipe vai entregar sua parte em uma pasta, ou seja, uma pasta para o backend e outra para o frontend.
* Faça o fork do repositório para a sua conta.
* Faça as alteração e envie para o seu repositório.
* Solicite as mudanças para o repositório principal com um pull request.

# Ferramentas de suporte
* Poderão ser usadas ferrmantas de assistentes de inteligência artificial como suporte ou auxílio para a realização da atividade.
* Assistentes de inteligência artificial recomendados: OpenAI ChatGPT, Google Gemini, Antropic Claude, Microsoft Copilot ou Github Copilot.
* **ATENÇÃO** : fiquem atentos como as solicitações de suporte ou ajuda a essas ferramentas devem ser feitas para que o foco da realização da atividade não seja desviado. Várias solicitações sobre um mesmo assunto podem ser gerados de forma diferente.

# Instruções de uso das pastas de backend e frontend

1. Para usar ambas as pastas, é recomendado executar o comando a seguir:

``` powershell
npm i
```

### Observação
Abra a pasta que será usada no Terminal para executar o comando acima 

# Equipes
## Frontend
* Amanda
* Beatriz
* Marques
* Ranna
* Ramos

## Backend
* Deyse
* Edmilson
* Thiago
* Franklin
* Samuel 
