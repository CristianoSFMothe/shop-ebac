# shop-ebac

## Configuração do Cypress

1. Primeiramente é necessário inicializar o `Node`, dento da pasta selecionada, executar o comando:

```bash
npm init -y
```

2. Logo após inicializar o `Node` será necessário instalar o `Cypress`

```bash
npm i cypress@12.14.0 -D
```

> **Observação**: `Allure report` estava dando problemas com a versão do `cypress` acima de `12.14.0`

3. Inicializar o `Cypress`

```bash	
npx cypress open
```
 
## Configuração do Eslint

1. No terminal executar o seguinte comando, e escolhas as opções que fizerem sentido para você:

```bash
npm install eslint@8.43.0 --save-dev

# Ou

npm i eslint@8.43.0 -D
```

2. Após execute o comando:

```bash	
npx eslint --init
```

Ou copie o código abaixo no arquivo `.eslintrc.json`

```bash	
// .eslintrc.json

{
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-trailing-spaces": [
            "error"
        ]
    }
}
```

### Configura o Eslint Plugin Cypress

1. No terminal executar o comando:

```bash
npm install eslint-plugin-cypress@2.13.3 --save-dev

# Ou

npm i eslint-plugin-cypress@2.13.3 -D
```

2. Logo após dentro do diretório `cypress/`, crie um arquivo `.eslintrc.json` com o seguinte conteúdo:

```bash
{
  "extends": [
    "plugin:cypress/recommended"
  ],
  "rules": {
    "cypress/no-force": "error",
    "cypress/assertion-before-screenshot": "error",
    "cypress/no-pause": "error"
  }
}
```

## Execução do npm scripts

Agora que o `ESLint` está configurado, é hora de criar scripts para validar o código estaticamente, além de corrigir erros automaticamente (quando possível).

1. No arquivo `package.json`, crie um script chamado `lint` com o valor `eslint cypress/**/*.js && eslint cypress.config.js`
2. Ainda no mesmo arquivo, crie um `script` chamado `lint:fix` com o valor `eslint cypress/**/*.js --fix && eslint cypress.config.js --fix`
3. Por fim, execute o comando `npm run lint` para analisar o código existente estaticamente, e caso necessário, execute também o comando `npm run lint:fix`

> Alguns problemas serão corrigidos automaticamente, porém, se você ver os erros abaixo, não se preocupe

```bash
  5:21  error  'on' is defined but never used      no-unused-vars
  5:25  error  'config' is defined but never used  no-unused-vars

✖ 2 problems (2 errors, 0 warnings)
```

## Configuração do Allura Report

1. No terminal executar o comando para instalar o plugin:

```bash	
npm i @shelex/cypress-allure-plugin@2.40.2
```

2. No arquivo `cypress.config.js`, adicionar a importação do plugin do `shelex` que vem do `allura-plugin`

```bash
const allureWriter = require('@shelex/cypress-allure-plugin/writer')
```

3. Ajuste na linha do `setupNodeEvents` para a criação do `AlluraReport`.

```bash	
setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config
    },
```

## Instalação de demais plugins

Com objetivo da implementação de novos testes, foram instalado os seguinte plugins:

```bash	
# Cypress Plugin API
npm i cypress-plugin-api@2.11.1 -D

# Cypress Plugin XHR Toggle
npm i cypress-plugin-xhr-toggle@1.0.0 -D
```

### Estrutura final do arquivo Cypress Config

O arquivo `cypress-config.js` deverá ter a seguinte estrutura final:

```bash
const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    testIsolation: false,
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config
    },
    env: {
      hideCredentials: true,
      requestMode: true,
      hideXhr: true,
    },
    experimentalRunAllSpecs: true,
  },
})
```

## Script

A configuração dos script, foi estrutura da seguinte forma:

```bash	
 "scripts": {
    "allure:report": "allure generate allure-results --clean",
    "allure:open": "allure open",
    "cypress:web": "npx cypress open",
    "cypress:headless": "npx cypress run --env allure=true",
    "lint": "eslint cypress/**/*.js && eslint cypress.config.js",
    "lint:fix": "eslint cypress/**/*.js --fix && eslint cypress.config.js --fix"
  },
```

### Execução e criação do AllureReport

1. No terminal na linha de comando, executar o comando, para o `Cypress` roda em modo `headless`.

```bash
npx cypress run --env allure=true

# Ou

npm run cypress:headless
```

2. No terminal na linha de comando, executar o comando para geração do `allure results`

```bash
npm run allure:report
```

3. Logo após o execute o comando, para abrir no browser o `AllureReport`

```bash
npm run allure:open
```

### Plugin extra

No meu caso para facilitar a execução dos comando, tenho o seguinte plugin instalado:

```bash	
npm i ntl -g
```

Que abre no terminal a opção para escolher quais `script` quero executar de acordo com a criação dos mesmo.


