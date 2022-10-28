import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";
import serverApi from "../../api/servidor-api";

const Contato = () => {
  /* Eventos/Funções para captura da digitação nos campos */
  const inputNome = (event) => setNome(event.target.value);
  const inputEmail = (event) => setEmail(event.target.value);
  const inputMensagem = (event) => setMensagem(event.target.value);

  /* Hook useState para manipular os estados dos dados do componente */
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviarContato = async (event) => {
    event.preventDefault();

    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: { "content-type": "application/json; charset=UTF-8" },
    };

    /* Script para envio dos dados para a API */
    try {
      await fetch(`${serverApi}/contatos`, opcoes);
      alert("dados enviados!");
    } catch (error) {
      console.log("deu ruim: " + error.message);
    }
  };

  //  "Toggle" do botão: caso qualquer uma das variaveis seja undefined, desabilitado se manterá true e com isso o botão sera desabilitado.

  // quando todas deixarem de ser undefined, desabilitado se tornará false e com isso o botão será habilitado.
  let desabilitado = !nome || !email || !mensagem;
  // let desabilitado = nome === "" || email === "" | mensagem === ""

  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale Conosco</h2>

      <Caixa>
        <form
          onSubmit={enviarContato}
          className={estilos.formulario}
          method="post"
        >
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
              helperText="Você deve digitar o nome"
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
              helperText="Informe um e-mail para contato"
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
            <Button type="submit" variant="contained" disabled={desabilitado}>
              Enviar mensagem
            </Button>
            {/* tudo que estiver na biblioteca requere importação, como o componente Button e TextField */}
          </div>
        </form>
      </Caixa>
    </section>
  );
};

export default Contato;
