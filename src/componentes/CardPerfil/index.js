import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardPerfil({ icon, subtitulo }) {
  return (
    <Card>
      <FontAwesomeIcon className="icon" icon={icon} />
      <Subtitulo>{subtitulo}</Subtitulo>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 4px;
  width: 25rem;
  height: 20rem;
  margin: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover{
    transform: scale(1.1);
  }
  
  .icon{
    width: 50%;
    height: 50%;
    border: none;
    color: var(--cor-fonte-text); // Altere a cor conforme desejado
    margin-bottom: 10px;
  }
`;
const Subtitulo = styled.h2`
    font-size: 1.6em;    
    text-decoration: none;
    cursor: pointer;
    margin: 5px;

    &:hover{
        color: var(--cor-primaria);
    }
`;