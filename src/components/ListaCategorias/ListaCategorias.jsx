import { useState, useEffect } from "react";
import serverApi from "../../api/servidor-api";

import { Link } from "react-router-dom";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho";
import estilos from "./ListaCategorias.module.css";

const ListaCategorias = () => {
  /* Iniciamos o state do componente com um array vazio,
    para posteriormente "preenchê-lo" com os dados vindos da API.
    Esta atribuição será feita com auxílio do setPosts. */
  const [categorias, setCategorias] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function getCategorias() {
      try {
        const resposta = await fetch(`${serverApi}/categorias`);
        const dados = await resposta.json();
        setCategorias(dados);
        setloading(false);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getCategorias();
  }, []);

  if (loading) {
    return <LoadingDesenho />;
  }

  return (
    // retornar uma ul li no ListaCategorias
    <div className={estilos.lista_categorias}>
      <ul>
        {/* aqui fazemos um loop foreach para acessar cada categoria, a versão abaixo comentada é a versão sem destructuring. a 2 versão é a versão com destructuring */}
        {/* {categorias.map(({ categoria }) => {
          return <li key={categoria.id}> {categoria.nome}</li>;
        })} */}

        {categorias.map(({ id, nome }) => {
          return (
            <li key={id}>
              <Link to={`/categoria/${nome}`}>{nome} </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListaCategorias;
