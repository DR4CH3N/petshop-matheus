import estilos from "./Menu.module.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink activeClassName={estilos.ativo} to="/">
        Blog
      </NavLink>
      <NavLink activeClassName={estilos.ativo} to="/produtos">
        Produtos
      </NavLink>
      <NavLink activeClassName={estilos.ativo} to="/sobre">
        Sobre
      </NavLink>
      <NavLink activeClassName={estilos.ativo} to="/contato">
        Contato
      </NavLink>
    </nav>
  );
};

export default Menu;
