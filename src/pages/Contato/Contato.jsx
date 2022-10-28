import { Button, TextField } from "@mui/material";
import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";
const Contato = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale Conosco</h2>

      <Caixa>
        <form action="" method="post">
          <div>
            <TextField
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
        </form>
      </Caixa>
    </section>
  );
};

export default Contato;
