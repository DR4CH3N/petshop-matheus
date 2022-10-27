import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Cabecalho from "./components/Cabecalho/Cabecalho";
import Categoria from "./pages/Categoria/Categoria";
import Contato from "./pages/Contato/Contato";
import Home from "./pages/Home/Home";
import Pagina404 from "./pages/Pagina404/Pagina404";
import Post from "./pages/Post/Post";
import Produtos from "./pages/Produtos/Produtos";
import Sobre from "./pages/Sobre/Sobre";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <main className="limitador">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            {/* Rota de redirecionamento (se o usuario cair em /posts), ele sera redirecionado a rota raiz (onde esta o Home) */}
            <Route exact path="/posts">
              <Redirect to="/" />
            </Route>

            <Route path="/posts/:id">
              <Post />
            </Route>

            {/* estamos usando o :nome em vez de :id com o propositso de ter uma URL amigavel (slug) */}

            <Route exact path="/categoria/:nome">
              <Categoria> </Categoria>
            </Route>

            <Route path="/produtos">
              <Produtos />
            </Route>

            <Route path="/sobre">
              <Sobre />
            </Route>
            <Route path="/contato">
              <Contato />
            </Route>
            <Route path="*">
              <Pagina404 />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
