import React from 'react';
import styled from 'styled-components';

export default function CardCupons({imagem, subtitulo, legenda, paragrafo}){

const Card = styled.div`
    text-align: center;
    border-radius: 4px;
    width: 25rem;
    height: 20rem;
    margin: 15px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`
const Image = styled.img`
    width:100%;
    height: 70%;
`
const BoxLegend = styled.div`
    height: 30%;
    width:auto;
    justify-content: center;
    align-items:center;
    text-align: center;
`
const Subtitulo = styled.h2`
    color:
    font-size: 1.6em;    
    text-decoration: none;
    cursor: pointer;
    margin: 5px;

    &:hover{
        color:  #55e5f6;
    }
`
const Paragrafo = styled.p`
    color: #767676;
`
    return(
        <Card>
            <Image src={imagem} alt={legenda} width="200" height="300"/>
            <BoxLegend>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Paragrafo>{paragrafo}</Paragrafo>
            </BoxLegend>
        </Card>
    );
};
