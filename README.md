<h1 align="center">
  RentalX
</h1>

<!-- Badges -->
<p align="center">
  <!-- if your  -->
  <a href="https://github.com/mahtf/rentalx/graphs/commit-activity" alt="Maintenance">
    <img src="https://img.shields.io/badge/Maintained%3F-yes-1EAE72.svg" />
  </a>

  <!-- License -->
  <a href="./LICENSE" alt="License: MIT">
    <img src="https://img.shields.io/badge/License-MIT-1EAE72.svg" />
  </a>

  <!-- codefactor -->
  <a href="https://www.codefactor.io/repository/github/mahtf/rentalx" alt="CodeFactor">
    <img src="https://www.codefactor.io/repository/github/mahtf/rentalx/badge" />
  </a>

  <br/>

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/mahtf/rentalx?color=blue">

  <!-- version -->
  <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/mahtf/rentalx">

  <!-- GitHub repo size -->
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/mahtf/rentalx">

  <!-- Social -->  
  <a href="https://github.com/mahtf/rentalx/stargazers">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/mahtf/rentalx?style=social">
  </a>

  <!-- more badges here -> https://gist.github.com/tterb/982ae14a9307b80117dbf49f624ce0e8 -->
</p>

<!-- summary -->
<p align="center">
  <a href="#clipboard-descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-iniciando">Iniciando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-o-que-contém">O que contém?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

> under construction...

## :clipboard: Descrição

Este projeto é sobre uma locadora de veículos, realizado em NodeJs e Docker.

## :rocket: Iniciando

1. Clone o repositório

  - Usando Git
```shell
  git clone https://github.com/mahtf/rentalx.git
```
  - Usando Github CLI
```shell
  gh repo clone mahtf/rentalx
```
  > :bulb: ou como preferir

2. Installation

  - Rode o comando 
  ```shell
    yarn
  ```

3. Execução

  - Utilizando docker, rode o comando 
  ```shell
    docker-compose up
  ```
  - Rode as migrações em outro terminal usando o comando 
  ```shell
    yarn typeorm migration:run
  ```


## 🧐 O que contém?

### :building_construction: Tecnologias
- [NodeJs](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org)
  

### :lipstick: Linter tools
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)


### :package: Packages
- [Express](https://expressjs.com)
- [Ts-Node-Dev](https://www.npmjs.com/package/ts-node-dev)
- [UUID](https://www.npmjs.com/package/uuid)
- [CSV-Parse](https://csv.js.org/parse/)
- [Multer](https://www.npmjs.com/package/multer)
- [Postgres](https://www.npmjs.com/package/pg)
- [Swagger](https://swagger.io)
- [TSyringe](https://www.npmjs.com/package/tsyringe)
- [TypeOrm](https://typeorm.io/#/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [jest](https://jestjs.io/)


### A quick look at the top-level directories inside the `./src`.

    ./src
     ├── database
     ├── modules
     ├── routes
     ├── shared

1.  **`database`**: arquivos de migrações do banco de dados da aplicação.

2.  **`modules`**: todos os modulos da aplicação, como entidades e useCases.

3.  **`routes`**: rotas da aplicação.
   
4.  **`shared`**: arquivos que são compartilhados pela aplicação.

## :memo: Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Build with 💙 By [Marcelo Ferreira](http://github.com/mahtf)

Based on the [readme template](https://gist.github.com/henry-ns/a00234378353d9ca43e1bfe043202192) by [Henrique Miranda](http://thehenry.dev/)