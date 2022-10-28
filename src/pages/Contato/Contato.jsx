import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";
const Contato = () => {
  // Eventos e funções para captura da digitação dos campos

  const inputNome = (event) => setNome(event.target.value);
  const inputEmail = (event) => setEmail(event.target.value);
  const inputMensagem = (event) => setMensagem(event.target.value);

  // hook useState para manipular os estados dos dados do componente
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale Conosco</h2>

      <Caixa>
        <form className={estilos.formulario} action="" method="post">
          <div>
            <TextField
              onChange={inputNome}
              // enquanto estiver rolando a digitação, ele vai executar a função inputNome
              // OBS: entre chaves, NÃO colocar entre parenteses ou a função ja vai começar a ser executada desde o inicio e não ao longo do caminho
              type="text"
              label="Nome"
              variant="outlined"
              fullWidth
              required
              helperText="Você deve digitar seu nome"
            />
          </div>

          <div>
            <TextField
              onChange={inputEmail}
              type="email"
              label="E-mail"
              variant="outlined"
              fullWidth
              required
              helperText="Informe um e-mail para o contato"
            />
          </div>
          <div>
            <TextField
              onChange={inputMensagem}
              type="text"
              label="Mensagem"
              variant="outlined"
              fullWidth
              required
              helperText="Fale o que você quiser"
              multiline
              rows={6}
            />
          </div>
          <div>
            <Button type="submit" variant="contained">
              Enviar mensagem
            </Button>
          </div>
          {/* tudo que estiver na biblioteca requere importação, como o componente Button e TextField */}
        </form>
      </Caixa>
    </section>
  );
};

export default Contato;
