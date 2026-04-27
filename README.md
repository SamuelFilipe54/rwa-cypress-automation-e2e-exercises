# Este projeto utiliza Cypress para automatizar features do site de transação - Real World App (RWA)

# Requisitos para melhor funcionamento:
Node v20.20.2

## Instalação
Primeiro, é necessário rodar o servidor do RWA em um terminal (git) separado. Então clone o repositório oficial da aplicação RWA:
``` bash
git clone https://github.com/cypress-io/cypress-realworld-app.git
```

## Entre na pasta do rwa:
```
cd cypress-realworld-app
```

## instale as dependências:
``` bash
yarn install
```

## Rode o servidor local:
``` branch
yarn dev
```

## Agora em outro terminal git, escolha a pasta que deseja e clone este repositório para poder rodar a automação:
``` branch
git clone https://github.com/SamuelFilipe54/rwa-cypress-automation-e2e-exercises.git
```
entre na pasta main
```
cd rwa-cypress-automation-e2e-exercises
```
e nela faça a instalação das dependências da automação:
``` branch
npm install
```

## Por fim, rode o cypress e2e
``` branch
npx cypress open
```


