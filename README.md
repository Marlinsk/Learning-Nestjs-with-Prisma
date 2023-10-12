# back-end do blog

Projeto API Rest com Nestjs

## Descrição

Aplicação back-end desenvolvida para estudo, utilizando o framework do Nodejs, o Nestjs, que é um dos melhores e mais completos frameworks NodeJS disponível no mercado, sendo até comparado com o Spring Boot do Java, por ambos utilizarem a estrutura MVC e possuírem um grande leque de funcionalidades e bibliotecas próprias, que os tornam completos para projetos de grande escala.

## Tecnologias

- nodejs
- express
- typescript
- nestjs
- docker
- jest
- prisma
- env
- swagger-ui-express
- editorconfig
- eslint
- prettier

## Tutorial
**Aviso:** Para poder testar a aplicação é necessário você ter conhecimento em: container, docker, postgres, comandos de terminal.

Clonando o repositório para em sua máquina

```bash
git clone https://github.com/Marlinsk/learning-Nestjs-with-Prisma.git
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

Comando para entrar no terminal do container

```bash
docker compose exec app bash
```

Comando para listar os containers

```bash
docker compose ps
```

Comando para fazer a parada dos containers que estão correndo

```bash
docker compose stop
```

Comando para excluir o container

```bash
docker compose down
```
