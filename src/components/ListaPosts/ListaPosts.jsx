import { useState, useEffect } from "react"; // Hooks do React
import serverApi from "../../api/servidor-api";

import ArtigoPost from "../ArtigoPost/ArtigoPost";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho";
import estilos from "./ListaPosts.module.css";
const ListaPosts = (props) => {
  /* Iniciamos o state do componente com um array vazio,
  para posteriormente "preenchê-lo" com os dados vindos da API.
  Esta atribuição será feita com auxílio do setPosts. */
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    async function getPosts() {
      try {
        // const resposta = await fetch(`${serverApi}/posts`);

        // solução gulherme com if/else simples
        // const resposta = await fetch(`${serverApi}/${props.url || "posts"}`);

        // solução adriel com operador ternario
        // caso props.url existir, ele vai trazer a pagina de posts
        const resposta = await fetch(
          `${serverApi}/${props.url !== undefined ? props.url : "posts"}`
        );

        const dados = await resposta.json();
        setPosts(dados);
        setloading(false);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getPosts();
  }, [props.url]);
  /* é necessario indicar a url como dependencia pois ela muda toda vez que uma categoria é clicada.
  
  desta forma, o useEffect "entende" que ele deve executar novamente as suas ações (neste caso, executar novamente o fetch na API)
  */

  if (loading) {
    return <LoadingDesenho texto="posts" />;
  }
  if (posts.length === 0) {
    return <h2 style={{ textAlign: "center" }}> não há posts!</h2>;
  }
  /* Sobre o useEffect
  Este hook visa permitir um maior controle sobre "efeitos colaterais" na execução do componente.
  
  Recebe dois parâmetros:
  1º: função callback com o que será executado
  2º: lista de dependências que indicarão ao useEffect quando ele deverá funcionar

  -Se não passar a lista (ou seja, se deixar sem []), useEffect executará toda vez que o componente for renderizado. Portanto, o callback se torna um loop infinito.

  -Se passar a lista vazia (ou seja, deixar o [] vazio), useEffect executará somente no momento que o componente é renderizado pela primeira vez, evitando o loop infinito do callback.  */

  return (
    // retornar uma ul li no ListaCategorias
    <div className={estilos.lista_posts}>
      {posts.map(({ id, titulo, subtitulo }) => (
        <ArtigoPost
          key={id}
          id={id}
          titulo={titulo}
          subtitulo={subtitulo}
          classe={estilos.post}
        />
      ))}
    </div>
  );
};

export default ListaPosts;

/* <article className={estilos.post} key={id}>
          <h3> {titulo} </h3>
          <p>{subtitulo}</p>
        </article> */
