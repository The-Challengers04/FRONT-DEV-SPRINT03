import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import Empresa from "./pages/empresa";
import { Places } from "./pages/places";
import { About } from "./pages/about";
import { Profile } from "./pages/profile";
import { CustomerLogin } from "./pages/customerLogin";
import { CustomerRegister } from "./pages/customerRegister";
import { PartnerLogin } from "./pages/partnerLogin";
import { PartnerRegister } from "./pages/partnerRegister";
import VLibras from "@djpfs/react-vlibras";

function App() {
	return (
		<div className="app">
			<VLibras forceOnload={true} />
			<Router>
				{/* Rota para as páginas */}
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/company" element={<Empresa />} />
					<Route path="/places" element={<Places />} />
					<Route path="/about" element={<About />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/customer/login" element={<CustomerLogin />} />
					<Route path="/customer/register" element={<CustomerRegister />} />
					<Route path="/partner/login" element={<PartnerLogin />} />
					<Route path="/partner/register" element={<PartnerRegister />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
