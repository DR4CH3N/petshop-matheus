import { Link } from "react-router-dom";
import estilos from "./ArtigoPost.module.css";

const ArtigoPost = (props) => {
  return (
    <article className={props.classe}>
      <Link to={`/posts/${props.id}`}>
        {/* caminho para posts é estatico, e com template string coloque o props.id para poder fazer desconstrução e para fazer um caminho dinamico */}
        <h3>{props.titulo}</h3>
        <p>{props.subtitulo}</p>
      </Link>
    </article>
  );
};

export default ArtigoPost;
