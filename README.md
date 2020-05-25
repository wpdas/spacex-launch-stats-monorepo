![](https://github.com/Wpdas/spacex-launch-stats-monorepo/.github/workflows/ci/badge.svg)

# SpaceX Launch Stats - Monorepo [Server and Client]

Development in progress...

This is an experimental Monorepo project developed using technologies like Docker, NodeJS, React, GraphQL, TypeScript, Express and others. The app works handling with SpaceX program data.

**Code Quality:** ESLint, Prettier <br>
**Backend Stack:** NodeJS, GraphQL, TypeScript, Express <br>
**Frontend Stack:** ...<br>
**Others:** Docker Compose, Nodemon, ts-node, tsconfig-paths <br>
**Continuous Integration:** Github Actions

The `ts-node` is the guy who run .ts files directly without the necessity of transpile files for .js (it's done internally) and the `tsconfig-paths` one is for handler with the `baseUrl` property from tsconfig.json files. The IDE handles pretty well this configuration, however, when using ts-node, things get weird and the baseUrl can not be recognized by only ts-node. Here is where tsconfig-paths come along in order to fix this.

## File Details

### Root:

- **.github:** Github configurations like workflow (Github Actions). Used for CI in this project;

- **.vscode:** All the necessary configuration for VSCode IDE is placed here. New IDEs can be supported by adding new config files;

- **.env:** Environment file (must be privated for real projects);

- **.prettierrc.js:** Prettier rules. This is used as a code formatter;

- **docker-compose.yml:** Docker compose configuration for container/service;

- **package.json:** This file holds all the necessary scripts for the project, can call scripts from sub-packages;

### Server:

- **Dockerfile:** File containing instructions used when a server container is created;

- **.eslintignore, .eslintrc.json, eslint-tsconfig.json:** ESlint configuration for IDE and for the code itself. **.eslintrc.json** file contain the optinal rules and _extends_ the necessary eslint base configuration (created by my, you can edit your base preferences). The **eslint-tsconfig.json** file has all the necessary plugins and extends needed in order to have a good code type for this project. It'll connect the IDE with the eslint rules as well as prettier rules. So, eslint and prettier are connected;

- **nodemon.json:** The file containing the necessary configuration for nodemon. Every time `nodemon` is executed, this file will be used in order to get the required props, it is `ext`(file extension to be watched) and `exec`(what should be executed after detect a change into some watched file);

- **.gitignore:** File describing what should be ignored by git;

- **./src:** The main server source.

## Commands

### Without Docker

Run server:

```sh
yarn server
```

Run server and watch files (this is useful while developing):

```sh
yarn server:watch
```

Run lint throughout the project:

```sh
yarn es-lint
```

### With Docker Compose (basic commands)

Create and start all containers/services

```sh
docker-compose up --build
```

Check the complete docker-compose commands:

```sh
docker-compose help
```

## GraphiQL

When the server is running you'll be able to access the GraphiQL tool if you want. This feature is useful for check what the API can do. You can check the documentation and test everything you want.

After run the server, go to http://localhost:5000/graphql to access the GraphiQL tool.

## Author

[Wenderson Pires - Linkedin](https://www.linkedin.com/in/wenderson-pires-silva/)
