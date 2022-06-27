<div id="top"></div>

<div align="center">
  <a href="https://genpag.com.br">
    <img src="https://genpag.com.br/assets/images/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">To do List!</h3>

  <p align="center">
    Essa é uma lista de tarefas para o teste Frontend GenPag
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#built">Built</a></li>
      </ul>
    </li>
    <li>
      <a href="#primeiros-passos">Primeiros Passos</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#testes">Tests</a></li>
    <li><a href="#firebase">Firevase</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Sobre o Projeto

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Esse projeto foi desenvolvido para ser avaliado pela GenPag como um desafio Frontend. 

Funcionalidades desenvolvidas:
* Adicionar uma tarefa inserindo uma descrição;
* Marcar ou desmarcar uma tarefa como concluída;
* Editar a descrição de uma tarefa;
* Excluir uma tarefa;

<p align="right">(<a href="#top">voltar ao topo</a>)</p>

### Built

* [Angular](https://angular.io/) (Angular CLI version 11.0.2)
* [Firebase](https://firebase.google.com/)
* [Karma](http://karma-runner.github.io/6.4/index.html)

<p align="right">(<a href="#top">voltar ao topo</a>)</p>

<!-- GETTING STARTED -->
## Primeiros Passos

Como é um projeto teste, ele foi configurado apenas para rodar em modo de desenvolvimento. O ambiente de produção ainda precisa ser configurado.

### Pré-requisitos

Importante ter o Npm e o NodeJs instalado na maquina. 
* npm
  ```sh
  npm install npm@latest -g
  ```
* Angular CLI
  ```sh
  npm install -g @angular/cli
  ```

### Instalação


1. Clone o repo
   ```sh
   git clone https://github.com/genpag/frontend
   ```
2. Altere a branch
   ```sh
   git checkout feature-42586
   ```
3. Instale os pacotes NPM
   ```sh
   npm install
   ```
4. Inicie a aplicação
   ```sh
   ng serve --open
   ```

<p align="right">(<a href="#top">voltar ao topo</a>)</p>



<!-- USAGE EXAMPLES -->
## Testes

Utilizei o Karma para realizar um exemplo de teste unitários com 3 cases. 
```sh
ng test
```
<p align="right">(<a href="#top">voltar ao topo</a>)</p>



<!-- ROADMAP -->
## Firebase

Ao desenvolver localmente, apareceu um erro no console informando que o projeto não atende as rules do firebase, então criei minha propria app.
No arquivo `/src/environments/environments.ts` se encontra as configurações da GenPag instalada e as minhas configurações de desenvolvimento comentadas.

<p align="right">(<a href="#top">voltar ao topo</a>)</p>


<!-- CONTACT -->
## Contact

Linkedin - [Sandro Matos](https://www.linkedin.com/in/sandro-matos-874289b7/)

<p align="right">(<a href="#top">voltar ao topo</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/project.gif
