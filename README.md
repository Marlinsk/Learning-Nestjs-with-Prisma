# Posts backend

Aplicação back-end desenvolvida para estudo, utilizando o framework do Node.js, o Nest.js, que é um dos melhores e mais completos frameworks Node.js disponível no mercado, sendo até comparado com o Spring Boot do Java, por ambos utilizarem a estrutura MVC e possuírem um grande leque de funcionalidades e bibliotecas próprias, que os tornam completos para projetos de grande escala.

## Tecnologias usadas
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
- editorconfig
- eslint
- prettier

## Passo a passo
**Aviso:** Para poder testar a aplicação é necessário você ter conhecimento em: container, docker, postgres, comandos de terminal.

### Clonando e configurando o projeto
**1º passo: clone o repositório para sua máquina com github.**

```bash
git clone https://github.com/Marlinsk/posts-backend.git
```

**2º passo: entre na pasta do projeto.**
```bash
cd posts-backend
```

**3º passo: antes de usar o docker-compose up, crie um arquivo .env fora da pasta src e insira as seguintes variáveis.**
```bash
NODE_ENV=development
DATABASE_URL="postgresql://postgres:docker@db:5432/posts"
```

**Aviso:** Não execute o comando **npm install.**

## Executando o container
**Observação:** Quando rodar o comando docker compose up no seu terminal, o node_modules é instalado junto, então se você instalou o node_modules antes, remova-o com o comando **rm -rf node_modules** e depois execute o comando **docker-compose up**.

**1º passo: certifique-se que a pasta node_modules não esteja no projeto, e depois de removê-la usando 'rm -rf node_modules', use o comando abaixo para subir o container**
```bash
docker-compose up -d
```

**2º passo: tendo tudo rodando, agora tudo que você for instalar, precisará entrar no terminal do container e executar o comando npm ou npx, lembrando que para isso o container precisa estar rodando.**
```bash
docker-compose exec app bash
```

## Outros comandos do docker-compose
Comando para rodar o container em background.

```bash
docker-compose start
```

Comando para listar os containers.
```bash
docker-compose ps
```
Comando para fazer a parada dos containers que estão correndo.
```bash
docker-compose stop
```
Comando para excluir o container.
```bash
docker-compose down
```
