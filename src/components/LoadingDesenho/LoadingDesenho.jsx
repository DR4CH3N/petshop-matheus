import imagemLoading from "../../assets/images/pacman-loading.svg";
import estilos from "./LoadingDesenho.module.css";
import { useParams } from "react-router-dom";

const LoadingDesenho = (props) => {
  const { nome } = useParams();
  return (
    <div className={estilos.loading}>
      <h2>Carregando {props.texto} ....</h2>
      {/* <h2>Carregando {`${nome || "post"}`}....</h2> */}
      <img src={imagemLoading} alt="" />
    </div>
  );
};

export default LoadingDesenho;
