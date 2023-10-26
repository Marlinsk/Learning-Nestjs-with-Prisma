# Posts backend

Backend application developed for study, using the Node.js framework Nest.js, which is one of the best and most comprehensive Node.js frameworks available in the market. It is even compared to Java's Spring Boot because both use the MVC structure and have a wide range of built-in functionalities and libraries, making them suitable for large-scale projects.

## Technologies
- Javascript
- Typescript
- Node.js
- npm (Node.js package manager)
- Nest.js (Node.js framework)
- Prisma ORM (for mapping objects to the relational database paradigm)
- @prisma/client (client for executing Prisma commands locally in the project via the terminal)
- Postgres
- class-validator (library using notation for field validation in a class or DTO)
- class-transformer (zero-dependency utility library that helps you quickly transform class instances into plain objects and vice versa)
- swagger-ui-express (documentation interface library)
- docker
- docker-compose
- editorconfig
- eslint
- prettier

## Tutorial
**Note:** To be able to test the application, you need to have knowledge of: containers, Docker, PostgreSQL, and terminal commands.

### Cloning and setting up the project
**1º step: clone the repository to your machine from GitHub.**

```bash
git clone https://github.com/Marlinsk/posts-backend.git
```

**2º step: Navigate to the project folder.**
```bash
cd posts-backend
```

**3º passo: Before using 'docker-compose up,' create a .env file outside the src folder and insert the following variables.**
```bash
NODE_ENV=development
DATABASE_URL="postgresql://postgres:docker@db:5432/posts"
```
**Note:** Do not execute the **npm install** command.

## Run container
**Note:** **Observação:** Quando rodar o comando docker compose up no seu terminal, o node_modules é instalado junto, então se você instalou o node_modules antes, remova-o com o comando **rm -rf node_modules** e depois execute o comando **docker-compose up**.

**1º step: Make sure the 'node_modules' folder is not in the project, and after removing it using 'rm -rf node_modules,' use the following command to start the container.**
```bash
docker-compose up -d
```

**2º step: With everything up and running, any further installations will require you to access the container's terminal and execute the 'npm' or 'npx' command. Please ensure that the container is running for this to work.**
```bash
docker-compose exec app bash
```

### Services running in 'docker-compose':
- Main application
- Postgres

## Other docker-compose commands
Command to run the container in the background.

```bash
docker-compose start
```

Command to list the containers.
```bash
docker-compose ps
```
Command to stop the running containers.
```bash
docker-compose stop
```
Command to delete the container.
```bash
docker-compose down
```
