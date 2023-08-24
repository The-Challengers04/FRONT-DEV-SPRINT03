import React from "react";
import MenuPrincipal from "../componentes/MenuPrincipal/MenuPrincipal";
import Titulo from "../componentes/Titulo";
import Card from "../componentes/CardCategorias";
import CardCupons from "../componentes/CardCupons";
import Categorias from "../Uteis/DateCategorias";
import Cupons from "../Uteis/DateCupons";
import styled from "styled-components";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import Welcome from '../imagens/welcome.png';


export function Home(){
    return(
        <div>
            <NavBar/>
            <MenuPrincipal
                texto="Seja bem-vindo ao Inclui+"
                src={Welcome}
            />

            <Titulo titulo="Busque por categorias: "/>

            <CardGrid>
                {Categorias.map((card, index)=>(
                    <Card
                        key={index}
                        imagem = {card.imagem}
                        subtitulo={card.subtitulo}
                        legenda={card.legenda}
                    />
                ))}
            </CardGrid>

            
            <Titulo titulo="Cupons em destaque!"/>
            <CardGrid>
                {Cupons.map((card, index)=>(
                    <CardCupons
                        key={index}
                        imagem = {card.imagem}
                        subtitulo={card.subtitulo}
                        legenda={card.legenda}
                        paragrafo={card.paragrafo}
                    />
                ))}
            </CardGrid>

            <Footer/>

        </div>
    )
}

const CardGrid = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
margin: 50px;
`;

