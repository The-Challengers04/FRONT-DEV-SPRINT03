import styled from "styled-components";
import Input from "../Input";
import ImageEmpresa from '../../imagens/img-empresa01.jpg';

export default function FormCadastro() {
  const Container = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
    background-image: ${ImageEmpresa};
    height: 700px;
    background-size: cover;
  `;
const Card = styled.div`
    background-color: #ffffff;
    padding: 30px;
    border-radius: 4%;
    box-shadow: 3px 3px 1px 0px #00000060;
    width: 400px;
    height: 65%;
    margin: 150px;

    h1{
        text-align: center;
        margin-bottom: 20px;
        color: var(--cor-fonte-title);
    }
`;
const BotaoCad = styled.button`
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: transparent;
    border-color: var(--cor-primaria);
    color: var(--cor-primaria);
    padding: 7px;
    font-weight: bold;
    font-size: 12pt;
    margin-top: 20px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    transition: all .4s ease-out;

    &:hover {
    background-color: var(--cor-primaria);
    color: #fff;
    }
`;
  return (
    <form>
      <Container>
        <Card>
          <h1>Cadastre a sua empresa</h1>
          <Input
            type="text"
            placeholder=""
            id="nome"
            for="nome"
            label="Nome"
          />
          <Input
            type="text"
            placeholder=""
            id="usuario"
            for="usuario"
            label="Usuário"
          />
          <Input
            type="password"
            placeholder=""
            id="senha"
            for="senha"
            label="Senha"
          />
          <Input
            type="text"
            placeholder=""
            id="nome"
            for="nome"
            label="Nome"
          />
          <Input
            type="password"
            placeholder=""
            id="confirmsenha"
            for="senha"
            label="Confirmar Senha"
          />
          <Input
            type="email"
            placeholder=""
            id="email"
            for="email"
            label="Email"
          />
        
          <div>
            <BotaoCad>Cadastrar agora</BotaoCad>
          </div>
        </Card>
      </Container>
    </form>
  );
}
