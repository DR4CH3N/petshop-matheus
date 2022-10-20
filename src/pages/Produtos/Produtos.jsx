import estilos from "./Produtos.module.css";

const Produtos = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Conheça os nossos produtos</h2>

      <div id="produtos" className={estilos.produtos}>
        <article>
          <h3>Produto 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quod
            repellat aspernatur ducimus, tempore, tempora reprehenderit officia
            est laboriosam, similique vero optio assumenda minima perspiciatis
            eos. Magni quos ducimus doloribus.
          </p>
        </article>
        <article>
          <h3>Produto 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quod
            repellat aspernatur ducimus, tempore, tempora reprehenderit officia
            est laboriosam, similique vero optio assumenda minima perspiciatis
            eos. Magni quos ducimus doloribus.
          </p>
        </article>
        <article>
          <h3>Produto 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quod
            repellat aspernatur ducimus, tempore, tempora reprehenderit officia
            est laboriosam, similique vero optio assumenda minima perspiciatis
            eos. Magni quos ducimus doloribus.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Produtos;
