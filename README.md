# CNI - Desafio Técnico Frontend

- Sobre: Projeto desenvolvido para soulução do Desafio Técnico Frontend da CNI.

- Projeto: Sistema de Controle e Acesso aos Funcionários (SCAF)

- Descrição: A proposta do SCAF é simular um sistema da CNI desenvolvido para realizar a (criação, edição e deleção) dos funcionários. E gerar um relatório no formato PDF com os dados consolidados inseridos dos funcionários.

- Código Fonte: https://github.com/lp-mateus/cni-desafio-tecnico-front

## Autores

- Mateus Leite Pedrosa [@lp-mateus](https://github.com/lp-mateus)

## Funcionalidades

- Acessar o SCAF
- Criação de funcionários
- Edição de funcionários
- Deleção de funcionários
- Geração de relatório PDF de dados

## Tecnologias

- JavaScript (ES6)
- Node JS (18.17.1)
- React JS (18.2.0)
- react-router-dom
- bootstrap
- mui/material
- react-pdf/renderer

## Documentação

Para desenvolvimento do projeto SCAF, o foco foi a implementação da UI com todos requisitos necessários para realização das ações do usuário, além de um design seguindo o System Design da CNI disponível no Figma e um layout também responsivo.

O projeto está estruturado em:

- App
- Routes
- Pages
- Components
- Contexts

Para implementação do Context foi realizado um bom exemplo de implementação de Gerenciamento de Estado dentro do React, criando-se um estado global compartilhado por todos componentes da aplicação utilizando-se dos Hooks do React em especial (useContext e useReducer).

## Instalação e Rodando Localmente

- Após clonar o projeto disponível pelo link do github:
  https://github.com/lp-mateus/cni-desafio-tecnico-front

- Verificar versão do Node.js na máquina local:

```bash
  node -v
```

- Navegar até o diretório onde foi clonado o repositório do projeto e realizar os seguintes comandos:

```bash
  npm install
  npm start
```

## Demonstração

Tomei a liberdade de ir além e realizar o deploy do projeto SCAF, pela infraestrutura provedora Netlifly. Dessa forma o projeto também está disponível e acessível pelo link:

https://mlp-cni-desafio-tecnico-frontend.netlify.app/

## Sobre mim

Mateus Leite Pedrosa

- Github: https://github.com/lp-mateus
- Linkedin: https://www.linkedin.com/in/mateusleitepedrosa/
- E-mail: mateuspedrosa38@gmail.com
- Telefone: (61)991792676
