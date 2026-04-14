import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AreasDeAtuacao from "./pages/AreasDeAtuacao";
import Sobre from "./pages/Sobre";
import Depoimentos from "./pages/Depoimentos";
import Contato from "./pages/Contato";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import NotFound from "./pages/NotFound";
import { Layout } from "./components/layout/Layout";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/areas-de-atuacao" element={<AreasDeAtuacao />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
