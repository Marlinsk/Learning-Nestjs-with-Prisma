# backend posts

Aplicação back-end desenvolvida para estudo, utilizando o framework do Nodejs, o Nestjs, que é um dos melhores e mais completos frameworks NodeJS disponível no mercado, sendo até comparado com o Spring Boot do Java, por ambos utilizarem a estrutura MVC e possuírem um grande leque de funcionalidades e bibliotecas próprias, que os tornam completos para projetos de grande escala.

## Tecnologias
- Javascript
- Typescript
- Node.js
- npm (gerenciador de pacotes do Node.js)
- Nest.js (framework do Node.js)
- Prisma ORM (para mapear objetos ao paradigma do banco de dados relacional)
- @prisma/client (client para executar comandos do prisma localmente no projeto via terminal)
- Postgres
- class-validator (lib que utiliza notação para validação de campos de uma classe ou dto)
- class-transformer (biblioteca de utilitários de dependência zero que ajuda você a transformar rapidamente instâncias de classe em objetos simples e vice-versa)
- swagger-ui-express (lib de interface de documentação)
- docker
- docker-compose
- Jest
- editorconfig
- eslint
- prettier

## Tutorial
**Aviso:** Para poder testar a aplicação é necessário você ter conhecimento em: container, docker, postgres, comandos de terminal.

### Clonando e configurando o projeto

Clone o repositório para sua máquina.

```bash
git clone https://github.com/Marlinsk/backend-posts.git
```

Entre na pasta do projeto.
```bash
cd backend-posts
```

Instale as dependências.

```bash
npm install
```

**Observação:** Quando rodar o comando docker compose up no seu terminal, o node_modules é instalado junto.

### Comandos do docker

Comando para subir o container.

```bash
docker compose up
```

Comando para rodar o container em background.

```bash
docker compose start
```

Comando para entrar no terminal do container.

```bash
docker compose exec app bash
```

Comando para listar os containers.

```bash
docker compose ps
```

Comando para fazer a parada dos containers que estão correndo.

```bash
docker compose stop
```

Comando para excluir o container.

```bash
docker compose down
```
