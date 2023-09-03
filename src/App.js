import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import Empresa from "./pages/empresa";
import Places from "./pages/places";
import { Sobre } from "./pages/sobre";
import { Perfil } from "./pages/perfil";
import { Login } from "./pages/login";
// import { Cadastro } from "./pages/cadastro";
import { RegisterUser } from "./pages/registerUser";
import VLibras from "@djpfs/react-vlibras";

function App() {
	return (
		<div className="app">
			<VLibras forceOnload={true} />
			<Router>
				{/* Rota para as páginas */}
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/empresa" element={<Empresa />} />
					<Route path="/places" element={<Places />} />
					<Route path="/sobre" element={<Sobre />} />
					<Route path="/perfil" element={<Perfil />} />
					<Route path="/login" element={<Login />} />
					<Route path="/cadastro" element={<RegisterUser />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
