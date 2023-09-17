import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import Title from "../componentes/Title";
import styled from "styled-components";
import ImageFundo from "../imgs/img-empresa01.jpg";
import ImageTime from "../imgs/imgTimeEmpresa.png";
import { ButtonLogin } from "../componentes/Buttons";
import { Link } from "react-router-dom";

export default function Empresa() {
	return (
		<Container>
			<NavBar />
			<Menu>
				<h1>Fazer da acessibilidade uma realidade para todos</h1>
			</Menu>
			<Title title={"Faça parte da mudança, seja nosso parceiro!"}/>
			<Section1 >
				<h1>
					Seja nosso parceiro e mostre seu comprometimento com a inclusão,
					divulgando as informações sobre os recursos de acessibilidade que sua
					empresa disponibiliza em nosso aplicativo, alcançando um público mais
					amplo.
				</h1>
				<img src={ImageTime} alt="Imagem de um time se ajudando" />
			</Section1>
			<Section2><p>O projeto Inclui+ tem como estratégia mapear e catalogar informações sobre os recursos de acessibilidade em diferentes estabelecimentos e serviços, tais como restaurantes, hotéis, cinemas, museus, entre outros. Para isso, utilizamos tecnologia
                    de geolocalização e crowdsourcing, incentivando os usuários do aplicativo a contribuírem com informações e avaliações sobre os locais que visitam.</p></Section2>
			<Section3>
			<h2>Nossa missão</h2>
                <p>Transformar vidas por meio da tecnologia e inovalção, fazendo da inclusão e acessibilidade uma realidade para todos</p>
				<br/>
			<h2>Como funciona?</h2>
                <p>Seja nosso parceiro e mostre seu comprometimento com a inclusão, divulgando as informações sobre os recursos de acessibilidade que sua empresa disponibiliza em nosso aplicativo, alcançando um público mais amplo.</p>
				<Link to="/login" className="nav-link">
								<ButtonLogin className="btn">Ja possui uma Conta?</ButtonLogin>
							</Link>
			</Section3>
			
			
			<Footer />
		</Container>
	);
}

const Container = styled.div`
	margin: 0;
`;

const Menu = styled.div`
display: flex;
        justify-content: center;
		align-items: center;
        width: 100%;
		background-image: url(${ImageFundo});
        height: 700px;
        background-size: cover;
		h1 {
			font-size: 3.5rem;
			color: #ffffff;
			margin: 0 30%
		}
`;

const Section1 = styled.div`
	background: ${(props) => props.backgorund || ""};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	h1 {
		margin: 20px;
		font-size: 2rem;
		text-align: center;
		color: #4b4b4b;
		border: none;
	}
	img {
		width: 40%;
		margin: 30px;
		padding: 30px;
	}
	@media (max-width: 750px) {
        flex-direction: column;
		img {
            width: 60%;
        }
}
`;

const Section2 = styled.div`
width: 100%;
        max-height: 900px;
        display: flex;
        text-align: center;
        align-items: center;
	p{
		font-size: 1.7rem;
        padding: 150px 60px;
        color: #ffffff;
        background-color: #55e5f6;
	}
	@media (max-width: 750px) {
        p {
			padding: 60px 10px;
			font-size: 1.3rem;
		}
`

const Section3 = styled.div`
width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
		h2 {
			font-size: 40px;
			text-align: center;
			color: #4b4b4b;
			padding: 20px;
		}
		p {
			padding: 10px 40px;
			font-size: 1.5rem;
			text-align: center;
			color: #4b4b4b;
		}
`