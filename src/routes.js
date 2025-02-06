import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Contato from "./paginas/Contato";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";

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
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
