import styled from 'styled-components';

export default function Titulo(props){

    const Titulo = styled.h2`
        display: flex;
        font-weight: 200;
        font-size: 2.2em;
        text-align: center;
        align-items: center;
        justify-content:center;
        color: #4b4b4b;
        margin: 60px;
    `

    return(
        <Titulo>{props.Titulo}</Titulo>
    )
}