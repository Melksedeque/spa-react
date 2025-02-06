import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Contato from "./paginas/Contato";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="contato" element={<Contato />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
