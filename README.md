# React: Projeto PetShop

Projeto iniciado através do [Create React App](https://github.com/facebook/create-react-app).

## execução do app

na primeira vez, é necessario `npm install` para gerar node_modules (com dependencias etc)
e para executar, sempre use `npm start`. e acesse `localhost:3000`.

## dica: desabilitar compact folders do VScode em configurações/settings

## sobre modulos CSS

o uso de modulos CSS garante escopo de estilos, ou seja, o CSS criado em modulos só é aplicado no componente em que o modulo foi importado.

arquivos de modulo devem ser nomeados como `Componente.module.css`.

A importação de modulos CSS deve ser feita com `import nome from "caminho-do-modulo"`.

### mobile first:

telas a partir de X tamanho (min-width)

### desktop first:

telas de ate o tamanho X (max-width)

## dicas de sintaxe

### objetos

sempre que for utilizar um objeto no JSX, sempre use letras minusculas em vez de maiusculas, mesmo se o nome da classe começar com letra maiuscula

## roteamento

### instalação

`npm install react-router-dom@5` (versão 5)

### App.jsx

1. realizar a importação dos recursos da lib
   `import { BrowserRouter, Route , Switch }`

2. envolver todo o conteudo do App.jsx dentro de **BrowserRouter**

3. cada componente que funciona como "pagina ou tela" deve estar dentro de um `<Route>`

4. os `<Route>` devem estar dentro de um `<Switch>` para que aconteça a troca entre componentes ao navegar.

**obs:** não coloque nada alem de `<Route>` no `<Switch>`

### Menu.jsx

1. importar o NavLink
   `import { navLink } from "react-router-dom";`

2. substituir a tag `<a>` pelo `<NavLink>` e o atributo `<href>` por `to`

ficaria algo como:

`<NavLink to="/">Blog</NavLink>`

Usando classes no Navlink:

`<NavLink activeClassName={estilos.ativo} to="/">Blog</NavLink>`

quando for utilizar o BrowserRouter, faça com que ele abrace todos os elementos (exceto os fragmentos)

quando for utilizar o switch, apenas utilize ele para que ele "abrace" somente as tags que tem navegação ou seja, somente links

obs: ele deve ser utilizado somente na abertura e fechamento ou seja, 2 vezes dentro dos parenteses de return

quando for utilizar o route, dentro da mesma tag certifique-se de colocar "exact path" caso for uma pagina principal (home, index, etc) e apenas "path" para as outras paginas que são secundarias (porem tambem da certo colocar exact path em todas)

obs: utilize route apenas nos links de navegação, para que ele "envelope" apenas as paginas
