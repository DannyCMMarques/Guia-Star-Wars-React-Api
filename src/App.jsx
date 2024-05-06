
import './App.css'

import Navegador from './components/navbar/Navegador'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/HOME/Home';
import Filme from './pages/filmes/index'
import Personagem from './pages/Personagens/Personagem';
function App() {

  return (

    <>     
    <BrowserRouter>
   <Navegador/>
    <Routes>
       
   <Route path="/" element={<Home />} />
   <Route path="/films" element={<Filme/>} />
   <Route path="/people" element={<Personagem/>} />
    </Routes>
    
    </BrowserRouter>
    
     
    
    </>
  )
}

export default App
