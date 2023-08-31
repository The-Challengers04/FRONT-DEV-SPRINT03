import React from "react";
import "./nav.css";
import Logo from "../../imgs/logo_inclui+.png";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div>
			<nav aria-label="Navegação">
				<nav id="nav">
					<button id="btn-mobile">
						<span id="hamburger"></span>
					</button>
					<div className="nav_left layout">
						<a href="./pages/empresa.html" aria-label="Empresa">
							Empresa
						</a>
						<a href="./pages/map.html" aria-label="Viagem">
							Viagem
						</a>
						<a href="./pages/descontos.html" aria-label="Descontos">
							Descontos
						</a>
						<a href="./pages/sobre.html" aria-label="Sobre">
							Sobre
						</a>
					</div>
				</nav>
				<Link to="/" className="logo">
					<img src={Logo} alt="Logo do Site" />
				</Link>
				<div className="nav_left">
					<Link to="/empresa" aria-label="Empresa">
						Empresa
					</Link>
					<Link to="/viajem" aria-label="Viagem">
						Viagem
					</Link>
					<Link to="/sobre" aria-label="Sobre">
						Sobre
					</Link>
					<Link to="/perfil" aria-label="Perfil">
						Perfil
					</Link>
				</div>
				<div className="nav_right">
					<Link to="/login">
						<button id="fazer_login" aria-label="Fazer login">
							Entrar
						</button>
					</Link>
				</div>
			</nav>
		</div>
	);
}
