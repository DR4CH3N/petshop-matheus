import estilos from "./Sobre.module.css";

const Sobre = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Sobre nosso petshop</h2>

      <div id="sobre">
        <h3>Missão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          molestias. Neque veritatis, iusto obcaecati maiores voluptates dolor
          rerum, in delectus illo perspiciatis ad quia nemo dolorum, dolores
          repellendus laborum tempora.
        </p>

        <h3>Visão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla
          iusto praesentium earum modi? Molestiae sint blanditiis asperiores,
          voluptatem eveniet ut distinctio deserunt nisi earum enim ea
          obcaecati. Unde nam molestiae, vitae corporis tempora quod maxime
          natus dolore aut. Aspernatur.
        </p>

        <h3>Valores</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          quas deleniti cumque sint obcaecati repudiandae alias, blanditiis
          magnam natus debitis?
        </p>
      </div>
    </section>
  );
};

export default Sobre;
