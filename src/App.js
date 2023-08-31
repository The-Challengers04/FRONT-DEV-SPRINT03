import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import Empresa from "./pages/empresa";
import { Viajem } from "./pages/viajem";
import { Sobre } from "./pages/sobre";
import { Perfil } from "./pages/perfil";
import { Login } from "./pages/login";
import { Cadastro } from "./pages/cadastro";

function App() {
	return (
		<Router>
			{/* Rota para as páginas */}
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/empresa" element={<Empresa />} />
				<Route path="/viajem" element={<Viajem />} />
				<Route path="/sobre" element={<Sobre />} />
				<Route path="/perfil" element={<Perfil />} />
				<Route path="/login" element={<Login />} />
				<Route path="/cadastro" element={<Cadastro />} />
			</Routes>
		</Router>
	);
}

export default App;
