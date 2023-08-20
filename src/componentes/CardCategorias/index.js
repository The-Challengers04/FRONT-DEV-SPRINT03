import React from 'react';
import styled from 'styled-components';

export default function Card({imagem, subtitulo, legenda}){
  
const Card = styled.div`
    border-radius: 4px;
    width: 18rem;
    height: 18rem;
    margin: 15px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`
const Image = styled.img`
    width: 100%;
    height: 70%;
`
const BoxLegend = styled.div`
    display: flex;
    background-color: #4b4b4b;
    height: 30%;
    width:auto;
    justify-content: center;
    align-items:center;
    text-align: center;
    
    &:hover{
        background-color: #55E5F6;
`
const Subtitulo = styled.h2`
    color: #fff;
    font-size: 1.6em;    
    text-decoration: none;
    cursor: pointer;
    }
`
    return(
        <Card>
            <Image src={imagem} alt={legenda}/>
            <BoxLegend>
                <Subtitulo>{subtitulo}</Subtitulo>
            </BoxLegend>
        </Card>
    );
};
