import { useState, useEffect } from "react"; // hooks do react
import estilos from "./ListaPosts.module.css";
import servidorApi from "../../api/servidor-api";

const ListaPosts = () => {
  /* iniciamos o state do componente com um array vazio para posteriormente "preenche-lo" com os dados vindos da API
  esta atribuição sera feita com auxilio do setPosts */

  const [posts, setPosts] = useState([]);

  const postsTemp = [];

  useEffect(() => {
    async function getPosts() {
      try {
        const resposta = await fetch(`${servidorApi}/posts`);
        const dados = await resposta.json();
        setPosts(dados);
      } catch (error) {
        console.log("deu ruim!" + error.message);
      }
    }
    getPosts();
  }, []);

  /* sobre o useEffect
  este hook visa permitir um maior controle sobre "efeitos colaterais" na execução do componente.
  
  recebe dois parametros:
  1º: função callback com o que sera executado
  2º: lista de dependencias que indicarão ao useEffect quando ele deverá funcionar

  - se não passar a lista (ou seja, se deixar sem o []), useEffect executará toda vez que o componente for renderizado. portanto, o callback se torna um loop infinito.

  - se passar a lista vazia (ou seja, deixar o [] vazio), useEffect executará somente no momento em que o componente é renderizado a primeira vez evitando o loop infinito do callback.
  */

  return (
    <div className={estilos.lista_posts}>
      {posts.map(({ id, titulo, subtitulo }) => (
        <article className={estilos.post} key={id}>
          <h3> {titulo} </h3>
          <p>{subtitulo}</p>
        </article>
      ))}
    </div>
  );
};

export default ListaPosts;
