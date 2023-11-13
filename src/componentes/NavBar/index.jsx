import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../imgs/logo_inclui+.png";
import { Link } from "react-router-dom";
import "../Buttons/sass.scss"
import "./nav.css";

function BasicExample() {
	const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
	return (
		<Navbar expand="lg" className="bg-body">
			<Container>
				<Link to="/" className="logo">
					<img src={Logo} alt="Logo do Site" />
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Inicio</Nav.Link>
						<Nav.Link href="company">Empresa</Nav.Link>
						<Nav.Link href="places">Viagem</Nav.Link>
						<Nav.Link href="about">Sobre</Nav.Link>
					</Nav>
					<Nav>
						{/* // Se não tiver um usuario logado, deve apresentar um botão para logar
							// Se ja estiver logado, deve aparece o botao de perfil */}
						{loggedUser ? (
							<Link to="/profile" className="nav-link">
								{/* // Quero que seja um botao */}
								<button className="button-login">Perfil</button>
							</Link>
						) : (
							<Link to="/login" className="nav-link">
								<button className="button-login">Entrar</button>
							</Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default BasicExample;

// import React from "react";
// import "./nav.css";
// import Logo from "../../imgs/logo_inclui+.png";
// import { Link } from "react-router-dom";

// export default function NavBar() {

// 	return (
// 		<div>
// 			<nav aria-label="Navegação">
// 				<nav id="nav">
// 					<button id="btn-mobile">
// 						<span id="hamburger"></span>
// 					</button>
// 					<div className="nav_left layout">
// 						<a href="./pages/empresa.html" aria-label="Empresa">
// 							Empresa
// 						</a>
// 						<a href="./pages/map.html" aria-label="Viagem">
// 							Viagem
// 						</a>
// 						<a href="./pages/descontos.html" aria-label="Descontos">
// 							Descontos
// 						</a>
// 						<a href="./pages/sobre.html" aria-label="Sobre">
// 							Sobre
// 						</a>
// 					</div>
// 				</nav>
// 				<Link to="/" className="logo">
// 					<img src={Logo} alt="Logo do Site" />
// 				</Link>
// 				<div className="nav_left">
// 					<Link to="/empresa" aria-label="Empresa">
// 						Empresa
// 					</Link>
// 					<Link to="/viajem" aria-label="Viagem">
// 						Viagem
// 					</Link>
// 					<Link to="/sobre" aria-label="Sobre">
// 						Sobre
// 					</Link>
// 					<Link to="/perfil" aria-label="Perfil">
// 						Perfil
// 					</Link>
// 				</div>
// 				<div className="nav_right">
// 					<Link to="/login">
// 						<button id="fazer_login" aria-label="Fazer login">
// 							Entrar
// 						</button>
// 					</Link>
// 				</div>
// 			</nav>
// 		</div>
// 	);
// }
