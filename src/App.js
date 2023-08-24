import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import { Home } from './routes/home'; 
import Empresa from './routes/empresa'; 
import { Viajem } from './routes/viajem'; 
import { Sobre } from './routes/sobre'; 
import { Perfil } from './routes/perfil'; 
import { Login } from './routes/login';
import { Cadastro } from './routes/cadastro';

function App() {
  return (
    <Router>

      {/* Rota para as páginas */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/empresa" element={<Empresa/>}/>
        <Route path="/viajem" element={<Viajem/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>

    </Router>
  );
}

export default App;
