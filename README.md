# Backend para Consulta de Veículos com Autenticação JWT

Este projeto é um backend para um sistema de consulta de veículos. Ele oferece funcionalidades como autenticação e autorização de usuários, utilizando tokens JWT (JSON Web Tokens). O backend é construído em Node.js, com o uso do KnexJS / Sequelize para interagir com o banco de dados PostgreSQL.

## Recursos

- **Autenticação de Usuário**: Sistema de login e registro de usuários.
- **Autorização via JWT**: Após o login, os usuários recebem um token JWT para acessos subsequentes.
- **Gerenciamento de Veículos**: Funcionalidades para adicionar, visualizar, editar e deletar itens de veículos.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução do servidor.
- **Express.js**: Framework para o servidor Node.js.
- **KnexJS / Sequelize**: Construtor de consultas SQL para interagir com o banco de dados SQLite.
- **PostgreSQL**: Banco de dados eficiente para armazenar os dados dos usuários e informações dos veículos.
- **JWT (JSON Web Tokens)**: Utilizado para a autenticação e autorização de usuários.

## Documentação da API

A documentação completa das API's está disponível no endpoint `/api-docs`. A documentação é interativa e permite testar os endpoints diretamente pela interface do Swagger.

## Instruções de Instalação e Uso

1. Clone o repositório: `git clone [URL_DO_REPOSITORIO]`.

2. Navegue até a pasta do projeto e instale as dependências: `cd [NOME_DA_PASTA_DO_PROJETO]` e depois rodar o comando `npm install`.

3. Inicie o servidor: `nodemon server.js`.

4. Acesse `http://localhost:3001/api-docs` em seu navegador para visualizar a documentação da API.

---

Desenvolvido com ❤️ por Samuel Baldasso
