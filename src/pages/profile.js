import ProfileCard from "../componentes/ProfileCard";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import Title from "../componentes/Title";
import styled from "styled-components";
import {
	faListAlt,
	faHeart as farHeart,
	faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

export const Profile = () => {
	return (
		<div>
			<NavBar />

			<Title titulo="Minha conta" />

			<CardGrid>
				<ProfileCard subtitle="Meus dados" icon={faListAlt} />
				<ProfileCard subtitle="Favoritos" icon={farHeart} />
				<ProfileCard subtitle="Direitos resgatados" icon={faShoppingBasket} />
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
