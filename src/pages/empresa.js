import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import Titulo from "../componentes/Title";
import styled from "styled-components";
import ImageFundo from "../imgs/img-empresa01.jpg";
import ImageTime from "../imgs/imgTimeEmpresa.png";

export default function Empresa() {
	return (
		<Container>
			<NavBar />
			<Menu>
				<img src={ImageFundo} alt="Imagem de vendo - pessoas sorrindo" />
			</Menu>

			<Titulo titulo="Faça parte da mudança, seja nosso parceiro!" />

			<Texto>
				<h1>
					Seja nosso parceiro e mostre seu comprometimento com a inclusão,
					divulgando as informações sobre os recursos de acessibilidade que sua
					empresa disponibiliza em nosso aplicativo, alcançando um público mais
					amplo.
				</h1>
				<img src={ImageTime} alt="Imagem de um time se ajudando" />
			</Texto>
			<Footer />
		</Container>
	);
}

const Container = styled.div`
	margin: 0;
`;

const Menu = styled.div`
	img {
		width: 100%;
		height: 700px;
		background-size: cover;
	}
`;

const Texto = styled.div`
	background: ${(props) => props.backgorund || ""};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	h1 {
		margin: 20px;
		font-size: 2rem;
		text-align: center;
		color: var(--cor-fonte-title);
		border: none;
	}
	img {
		width: 40%;
		margin: 30px;
		padding: 30px;
	}
`;
