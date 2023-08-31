import ProfileCard from "../componentes/ProfileCard";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import Title from "../componentes/Title";
import styled from "styled-components";
import {
	faListAlt,
	faHeart as farHeart,
	faShoppingBasket,
	faCog as farCog,
	faShieldAlt as farShieldAlt,
	faQuestionCircle as farQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

export const Perfil = () => {
	return (
		<div>
			<NavBar />

			<Title titulo="Minha conta" />

			<CardGrid>
				<ProfileCard subtitulo="Meus dados" icon={faListAlt} />
				<ProfileCard subtitulo="Favoritos" icon={farHeart} />
				<ProfileCard subtitulo="Sua loja" icon={faShoppingBasket} />
				<ProfileCard subtitulo="Configurações" icon={farCog} />
				<ProfileCard subtitulo="Segurança" icon={farShieldAlt} />
				<ProfileCard subtitulo="Ajuda" icon={farQuestionCircle} />
			</CardGrid>
			<Footer />
		</div>
	);
};

const CardGrid = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	margin: 50px;
`;
