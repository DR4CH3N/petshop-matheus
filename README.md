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
