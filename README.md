![](https://github.com/Wpdas/spacex-launch-stats-monorepo/workflows/ci/badge.svg)

# SpaceX Launch Stats - Monorepo [Server and Client]

Development in progress...

This is an experimental Monorepo project. The app works handling SpaceX program data.

**Stack:** TypeScript, React, NodeJS, Express, GraphQL, Apollo, Nodemon, Jest, Docker, ESLint, Prettier, Github Actions

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

## Good to know

The `ts-node` is the guy who run .ts files directly without the necessity of transpile files for .js (it's done internally) and the `tsconfig-paths` one is for handler with the `baseUrl` property from tsconfig.json files. The IDE handles pretty well this configuration, however, when using ts-node, things get weird and the baseUrl can not be recognized by only ts-node. Here is where tsconfig-paths come along in order to fix this.

**ESLint for server** is configured using the resources below:

Needed modules:

```json
"@typescript-eslint/eslint-plugin": "^3.0.0",
"@typescript-eslint/parser": "^3.0.0",
"eslint": "^7.1.0",
"eslint-config-prettier": "^6.11.0",
"eslint-plugin-prettier": "^3.1.3",
"prettier": "^2.0.5",
```

And the `eslint-tsconfig.json` to be extended by eslint:

```json
{
  "env": { "node": true },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 11,
    "project": ["tsconfig.json"],
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint", "prettier"],
  "settings": {}
}
```

**ESLint for web (React)** is configured using eslint-config-airbnb-typescript with react support. See more here: https://www.npmjs.com/package/eslint-config-airbnb-typescript

Needed modules:

```json
"@typescript-eslint/eslint-plugin": "^2.24.0",
"@typescript-eslint/parser": "^3.0.2",
"eslint": "^6.8.0",
"eslint-config-airbnb-typescript": "^7.2.1",
"eslint-config-prettier": "^6.11.0",
"eslint-plugin-import": "^2.20.1",
"eslint-plugin-jsx-a11y": "^6.2.3",
"eslint-plugin-prettier": "^3.1.3",
"eslint-plugin-react": "^7.19.0",
"eslint-plugin-react-hooks": "^2.5.0",
"prettier": "^2.0.5"
```

And the `eslint-tsconfig.json` to be extended by eslint:

```json
{
  "extends": [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 11,
    "project": ["tsconfig.json"],
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["@typescript-eslint", "prettier"],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

## Author

[Wenderson Pires - Linkedin](https://www.linkedin.com/in/wenderson-pires-silva/)
