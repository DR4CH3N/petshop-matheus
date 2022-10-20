import logo from "../../assets/images/logo.png";
import estilos from "./Cabecalho.module.css";
import Menu from "../Menu/Menu.jsx";
import { Link } from "react-router-dom";

const Cabecalho = () => {
  return (
    <header className={estilos.topo}>
      <div className="limitador">
        <h1>
          <Link to="">
            <img src={logo} alt="patinha dentro de um coração" />
            PetShop
          </Link>
        </h1>
        <Menu />
      </div>
    </header>
  );
};

export default Cabecalho;
