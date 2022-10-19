import logo from "../../assets/images/logo.png";
import estilos from "./Cabecalho.module.css";
import Menu from "../Menu/Menu.jsx";

const Cabecalho = () => {
  return (
    <header className={estilos.topo}>
      <div className="limitador">
        <h1>
          <a href="">
            <img src={logo} alt="patinha dentro de um coração" />
            PetShop
          </a>
        </h1>
        <Menu />
      </div>
    </header>
  );
};

export default Cabecalho;
