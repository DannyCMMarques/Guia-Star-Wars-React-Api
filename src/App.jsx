import "./App.css";
import Navegador from "./components/navbar/Navegador";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Filme from "./pages/filmes/index";
import Personagem from "./pages/Personagens/Personagem";
import Planets from "./pages/planets/planets";
import Species from "./pages/Species/Species";
import Vehicles from "./pages/Vehicles/Vehicles";
import Starships from './pages/Starships/Starships'
import Stars from './components/background/Stars'
import Footer from './components/footer/footer'
import { HelmetProvider } from 'react-helmet-async';
function App() {
  const helmetContext = {};
  return (
    <div className="app">
      <HelmetProvider context={helmetContext}>
      <Stars />
      <BrowserRouter>
        <Navegador />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/films" />} />
            <Route path="/films" element={<Filme />} />
            <Route path="/people" element={<Personagem />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/species" element={<Species />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/starships" element={<Starships />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer/> 
      </HelmetProvider>
    </div>
  );
}

export default App;