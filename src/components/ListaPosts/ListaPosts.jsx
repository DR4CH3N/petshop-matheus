import estilos from "./ListaPosts.module.css";

const ListaPosts = () => {
  return (
    <div className={estilos.lista_posts}>
      <article className={estilos.post}>
        <h3>Titulo do post...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil itaque
          nam distinctio ad consequuntur tempore adipisci architecto,
          voluptatibus placeat error numquam. Amet assumenda aliquam minima
          facilis sed eligendi maxime dolorum.
        </p>
      </article>
      <article className={estilos.post}>
        <h3>Titulo do post...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil itaque
          nam distinctio ad consequuntur tempore adipisci architecto,
          voluptatibus placeat error numquam. Amet assumenda aliquam minima
          facilis sed eligendi maxime dolorum.
        </p>
      </article>
      <article className={estilos.post}>
        <h3>Titulo do post...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil itaque
          nam distinctio ad consequuntur tempore adipisci architecto,
          voluptatibus placeat error numquam. Amet assumenda aliquam minima
          facilis sed eligendi maxime dolorum.
        </p>
      </article>
      <article className={estilos.post}>
        <h3>Titulo do post...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil itaque
          nam distinctio ad consequuntur tempore adipisci architecto,
          voluptatibus placeat error numquam. Amet assumenda aliquam minima
          facilis sed eligendi maxime dolorum.
        </p>
      </article>
    </div>
  );
};

export default ListaPosts;
