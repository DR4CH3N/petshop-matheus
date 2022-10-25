import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import serverApi from "../../api/servidor-api";

import estilos from "./Post.module.css";
import Caixa from "../../components/Caixa/Caixa";
import LoadingDesenho from "../../components/LoadingDesenho/LoadingDesenho";

const Post = () => {
  /* useParams() -> hook do react-router que permite acesso/manipulação de parametros vindos da URL */
  const { id } = useParams();

  const [post, setPost] = useState([]);
  const [loading, setloading] = useState(true);

  /* hook do react-router que permite utilizar recursos de navegação no historico do navegador */
  let history = useHistory();

  useEffect(() => {
    async function getPost() {
      try {
        const resposta = await fetch(`${serverApi}/posts/${id}`);
        const dados = await resposta.json();
        console.log(dados);
        // ao final do fetch, voce ja pode fazer a exibição de dados DENTRO do try
        // e tambem
        setPost(dados);
        setloading(false);
        /* aqui estamos verificando se o resultado do objeto de dados possui tamanho zero (ou seja, se ele esta vazio, sem dados nenhum) */
        if (Object.keys(dados).length === 0) {
          /* estando, forçamos o redirecionamento numa rota dde primeiro nivel que não existe. com isso, na pratica, o router traz a pagina 404 */
          history.push("/404");
        }
      } catch (error) {
        console.log("deui ruim na busca do post: " + error.message);
      }
    }
    getPost();
  }, [id]); /* id é uma dependencia para o useEffect */

  if (loading) {
    return <LoadingDesenho />;
  }

  return (
    <section>
      <h2 className={estilos.titulo_secao}>{post.titulo}</h2>

      <Caixa>
        <h3>{post.subtitulo}</h3>
        <p>{post.descricao}</p>
      </Caixa>
      {/* aqui fazemos uso do useState, usando programação orientada a objetos (titulo esta dentro de post, subtitulo esta dentro de post e a mesma coisa acontece com descrição) */}
    </section>
  );
};

export default Post;
