# React: Projeto PetShop

Projeto iniciado através do [CRA - Create React App](https://github.com/facebook/create-react-app).

Obs.: este projeto poderia ser criado também a partir do Vite.

## Execução do app

Na 1ª vez, é necessário `npm install` para gerar node_modules (com dependências etc).
E para executar, sempre use `npm start` e acesse `localhost:3000`.

## Dica: desabilitar o Compact Folders do VSCode em Configurações/Settings.

## Sobre Módulos CSS

O uso de módulos CSS garante escopo de estilos, ou seja, o CSS criado em módulos só é aplicado no componente em que o módulo foi importado.

Arquivos de módulo devem ser nomeados como `Componente.module.css`.

A importação de módulos CSS deve ser feita com `import nome from "caminho-do-modulo"`.

## Sobre Media Query

### Mobile First:

Telas a partir de X tamanho (min-width)

### Desktop First:

Telas de até o tamanho X (max-width)

---

## Uso de rotas com a lib react-router-dom (versão 5)

### Instalação

`npm install react-router-dom@5`

### App.jsx

1. Realizar a importação dos recursos da lib:
   `import { BrowserRouter, Route, Switch } from "react-router-dom";`

2. Envolver todo o conteúdo do App.jsx dentro do **BrowserRouter**

3. Cada componente que funciona como "página ou tela" deve estar dentro de um `<Route>`.

4. Os `<Route>` devem estar dentro de um `<Switch>` para que aconteça a troca entre componentes ao navegar.

**Obs.:** não coloque nada além de `<Route>` no `<Switch>`

#### Sintaxe alternativa para aplicar rotas:

`<Route exact path="/" component={Home}>`

`<Route path="/produtos" component={Produtos}>`

`<Route path="/sobre" component={Sobre}>`

`<Route path="/contato" component={Contato}>`

### Menu.jsx

1. Importar o NavLink:
   `import { NavLink } from "react-router-dom";`

2. Substituir a tag `<a>` pelo `<NavLink>` e o atributo `href` por `to`

### Criação de um componente de interface chamado Caixa

Em vez de usar uma `div` em cada página agrupando conteúdos diferentes, isolamos ela num componente genérico (**Caixa**), aplicamos o CSS uma única vez usando módulo do componente, e programos através de `props` o carregamento dinâmico do conteúdo (**children**) e de classes adicionais (**listaDeClasses**).

**Dica:** você pode usar **destructuring** de objetos nas `props`!

---

## Usando uma api fake para simular processos de consumo de dados dinâmicos

### Instalação global do pacote JSON-SERVER (basta instalar 1x)

`npm install -g json-server`

Obs.: se tiver problemas ao executar, utilize o **Node.js command prompt**

### Utilização de um arquivo.json para simular a base de dados da API

É necessário criar um **arquivo.json** em qualquer pasta em sua máquina (no nosso caso, usamos a própria pasta raíz do petshop.). Este arquivo deve ser composto por um grande objeto contendo arrays com outros objetos.

### Execução do servidor da API

1. Usando de preferência o **Node.js command prompt**, acesse a pasta onde está o **nome-do-arquivo.json**
2. Execute o comando `json-server --watch nome-do-arquivo.json --port 2112`

Obs.: o número da porta deve ser diferente de 3000 (que é padrão no json-server) pois esta porta já estará sendo usada pelo app **React**.

Dica: no **package.json** do seu app adicione em `scripts` uma nova propriedade chamada `api` valendo `json-server --watch nome-do-arquivo.json --port 2112`. Desta forma, você poderá executar o server da API digitando simplesmente `npm run api`.

Após a execução da API, cada array de objetos contido no **arquivo.json** se torna um `endpoint` da API, acessível através da URL _localhost:porta/nome-do-endpoint_.

Exemplos:

`http://localhost:2112/categorias`

`http://localhost:2112/posts`

`http://localhost:2112/contatos`

--

## React Hooks

Introduzidos na versão React 16.8, são funções que permitem manipular estados e outros recursos do React sem a necessidade de programar Classes. **Hooks** são funções que se conectam aos estados do React e aos recursos do ciclo de vida dos componentes da função. _Não funcionam dentro de classes_.

Mais informações: <https://www.javatpoint.com/react-hooks>

### useState

Função que retorna uma variável com o valor do estado (state) e uma função que permite atualizar o valor desta variável. Podemos ter vários useState em nossos componentes para gerenciar estados e dados diferentes.

### useEffect

Este hook visa permitir um maior controle sobre "efeitos colaterais" na execução do componente.

Recebe dois parâmetros:

- 1º: função callback com o que será executado
- 2º: lista (array) de dependências que indicarão ao `useEffect` quando ele deverá funcionar

Se não passar a lista (ou seja, se deixar sem []), `useEffect` executará toda vez que o componente for renderizado. Portanto, o callback se torna um loop infinito.

Se passar a lista vazia (ou seja, deixar o [] vazio), `useEffect` executará somente no momento que o componente é renderizado pela primeira vez, evitando o loop infinito do callback.

## dicas de sintaxe

### props

props são basicamente variaveis, porem no react essas variaveis se chamam "props" em vez de var

## instalação da biblioteca de componentes do react MUI

npm install @mui/material @emotion/react @emotion/styled

Dicas de CSS: https://code.tutsplus.com/pt/tutorials/the-30-css-selectors-you-must-memorize--net-16048

## para poder usar a API via rede local

### package.json

altere a linha: `"json-server --watch db.json --port 2112"`
para: `"json-server --host numero.IP.Da.Sua.Maquina db.json --port 2112"`

exemplo: `"json-server --host 10.20.45.27 db.json --port 2112"`

## tornando o app react em uma aplicação instalavel no dispositivo movel (PWA)

### configurar arquivo manifest.json

ele é um **arquivo de manifesto** JSON contendo informações sobre seu aplicativo web e, quando combinado com um **service worker**, permite a instalação do aplicativo em qualquer dispositivo compativel.

## configurar/programar um service worker JavaScript

um **service worker** (trabalhador/manipulador de serviços) é um script que o navegador executa em segundo plano separado da aplicação web, possibilitando recursos que não precisam de uma pagina ou interações com o usuario.

o service worker esta no centro de muitos recursos das chamadas **PWAs (progressive web applications)**, tais como: cache offline, sincronização em segundo plano, notificações, execução independente do navegador mobile etc
