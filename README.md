# Documentação api

 - Projeto atualmente em desenvolvimento
 - Atualmente totalmente desenvolvido somente back-end
 - Para rodar o projeto localmente basta acessar /api
 - Rodar comando "npm i" para instalação dos pacotes
 - rodar o comando docker-compose up -d para subir o banco de dados e criação de um usuário padrão
 - Para rodar o projeto basta rodar o comando "npm run dev"
 - O acesso da documentação das rotas pode ser encontrado em http://localhost:7777/api/v1/docs

 - Regras de negócio adotadas
 - Como ficou bem em aberto as regras de negócio, foi feito da seguinte forma, a ideia foi a criação de um sistema com login de usuários em que cada usuário pode cadastrar seus estabelecimentos e ter acesso a somente seus estabelecimentos.
 - Para isso foi criado a rota de autenticação para criação do token de acesso das demais rotas.
 - Foram criados dois CRUDS, o de usuários e o de estabelecimentos.
 - Também foi criada a regra de que os usuários só podem ter acesso aos dados de seus estabelecimentos.