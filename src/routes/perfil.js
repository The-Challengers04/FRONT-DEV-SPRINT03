import CardPerfil from "../componentes/CardPerfil";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import Titulo from "../componentes/Titulo";
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

      <Titulo titulo="Minha conta" />

      <CardGrid>
        <CardPerfil subtitulo="Meus dados" icon={faListAlt} />
        <CardPerfil subtitulo="Favoritos" icon={farHeart} />
        <CardPerfil subtitulo="Sua loja" icon={faShoppingBasket} />
        <CardPerfil subtitulo="Configurações" icon={farCog} />
        <CardPerfil subtitulo="Segurança" icon={farShieldAlt} />
        <CardPerfil subtitulo="Ajuda" icon={farQuestionCircle} />
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