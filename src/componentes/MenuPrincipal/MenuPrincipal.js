import styled from 'styled-components';
import Welcome from '../../imagens/welcome.png';

export default function MenuPrincipal(props){

const Container = styled.div`
    padding: 40px;
    background-color: ${props => props.background || 'var(--cor-primaria)'};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Image = styled.img`
    margin: 40px;
    width: 30%;
`
const Texto = styled.h1`
    font-weight: 400;
    font-size: 3.8rem;
    line-height: 75px;
    text-align: center;
    color: #ffffff;
` 
    return(
        <Container>
            <Texto>Seja bem-vindo ao Inclui+</Texto>
            <Image src={Welcome} alt="Imagem de um time reunido"/> 
        </Container>
    )
}