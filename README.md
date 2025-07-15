# Descrição da Atividade

Você irá desenvolver uma aplicação completa para gerenciamento de livros, utilizando um backend Node.js baseado no projeto “api-node-teste” (tanto para usuários quanto para livros) e um frontend em Next.js. O backend será responsável por armazenar, listar, buscar, editar e remover usuários e livros. O frontend Next.js terá páginas para exibir todos os usuários livros, visualizar detalhes, editar e criar novos livros, além de permitir a remoção diretamente da listagem.

# Instruções

## 1. Para os usuários
Para cada usuário, os dados a serem coletados são:
- nome
- data de nascimento no formato dia/mês/ano
- e-mail
- telefone no formato (99)99999-9999
- cidade de onde mora
- estado de onde mora
- url da imagem do usuário (imagem fictícia)

## 2. Para os livros
Para cada livro, os dados a serem coletados são:
- nome
- editora
- número de páginas (campo pode ser num_paginas)
- genero
- autor
- url da capa do livro 

## Backend

* Adapte o backend do projeto “api-node-teste” para trabalhar com usuários livros, adicionando o modelo para os dados que deverão ser coletados.
* Implemente as rotas necessárias: criar, listar, listar pelo id, editar e remover.
* Garanta que os dados sejam persistidos em arquivos JSON e XML, conforme o padrão do projeto original.

## Frontend (Next.js)

* Crie um projeto Next.js.
* Implemente uma página principal que tenha dois botões: "Gerenciar usuários" e "Gerenciar livros". A página pode ter um título de preferência da equipe.
* Para cada botão clicado no item anterior, será exibida uma página com a listagem dos dados (usuários ou livros) em formato de grade contendo componentes em formato de cartão.
* Para cada cartão com o usuário deve ter a imagem, o nome, o e-mail e três botões: “Ver”, “Editar” e “Remover”.
* Para cada cartão com o livro deve ter a capa, o nome, o gênero e três botões: “Ver”, “Editar” e “Remover”.
* Implemente uma página de detalhes do usuário, acessada pelo botão “Ver” e exibindo todos os dados. A mesma coisa deve ser feita para o livro.
* Implemente uma página de edição do livro, acessada pelo botão “Editar” e premita e edição de todos os dados. A mesma coisa deve ser feita para o livro.
* A remoção do usuário ou do livro deve ser feita diretamente na página principal, sem página específica e pelo botão "Remover".
* No topo da página com a lista de usuários, adicione um botão “Criar novo usuário”, que leve a uma página/formulário para cadastro de um novo usuário. O mesmo deve ser feito para o livro.
* O frontend deve consumir a API criada no backend para todas as operações (listar, buscar, criar, editar, remover).
* **ATENÇÃO:** a modelagem das páginas deve seguir um layout simples e sem muitos efeitos adicionais em CSS ou JavaScript.

# Entrega: prazo até 18/07/2025

* **ATENÇÃO:** todos devem participar da atividade implementando uma das partes da atividade (Backend ou Frontend)
* A atividade deve ser entregue utilizando este repositório.
* Cada equipe vai entregar sua parte em uma pasta, ou seja, uma pasta para o backend e outra para o frontend.
* Faça o fork do repositório para a sua conta.
* Faça as alteração e envie para o seu repositório.
* Solicite as mudanças para o repositório principal com um pull request.

# Ferrmantas de suporte
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
