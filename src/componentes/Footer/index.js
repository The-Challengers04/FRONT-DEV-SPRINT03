import React from "react";
import styled from 'styled-components';
import Logo from '../../imagens/logo_inclui+.png';

export default function Footer(){

const Footer = styled.div`
    background-color: black;
    padding: 20px;
    color: var(--cor-branca);
`;
const ImageLogo = styled.img`
    width:220px;
    height: 170px;
`;
const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
const Section = styled.div`
    margin-bottom: 20px;
`;
const Texto = styled.h3`
    margin-bottom: 10px;
`;
const P = styled.p`
    color: var(--cor-fonte-text);
`;
const Ul = styled.ul`
    list-style: none;
    padding: 0;
`;
const Li = styled.li`
    margin-bottom: 5px;
    color: var(--cor-fonte-text);
    text-decoration: none;
`;
const Copy = styled.div`
    text-align: center;
    margin-top: 20px;
    color: var(--cor-fonte-text);
`
    return(
        <Footer>
        <Content>
            <Section>
                <ImageLogo src={Logo}/> 
            </Section>
            <Section>
                <Texto>Navegação</Texto>
                <Ul>
                    <Li>Página inicial</Li>
                    <Li>Empresa</Li>
                    <Li>Descontos</Li>
                    <Li>Viajem</Li>
                    <Li>Sobre</Li>
                </Ul>
            </Section>
            <Section>
                <Texto>Contato</Texto>
                    <P>Email: exemplo@inclui+.com</P>
                    <P>Telefone: (99) 9999-9999</P>
            </Section>
        </Content>
        <Copy>
            <P>Todos os direitos reservados a Inclui+ &copy; - 2023</P>
        </Copy>
        </Footer>
    )
}