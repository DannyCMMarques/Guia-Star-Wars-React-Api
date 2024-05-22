import "./App.css";

import Navegador from "./components/navbar/Navegador";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HOME/Home";
import Filme from "./pages/filmes/index";
import Personagem from "./pages/Personagens/Personagem";
import Planets from "./pages/planets/planets";
import Species from "./pages/Species/Species";
import Vehicles from "./pages/Vehicles/Vehicles";
import Starships from "./pages/Starships/Starships";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navegador />
        <Routes>
          <Route path="/films" element={<Filme />} />
          <Route path="/people" element={<Personagem />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/species" element={<Species />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="starships" element={<Starships />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
