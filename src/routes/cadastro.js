import React from "react";
import styled from "styled-components";
import Logo from "../imagens/logo_inclui+.png";
import Input from "../componentes/Input";
import Titulo from "../componentes/Titulo";

export const Cadastro = () => {
  return (
    <BoxLogin>
      <ContainerLeft></ContainerLeft>
      <ContainerRigth>
        <CaixaForm>
          <FormLogin action="">
            <img alt="logo" src={Logo} />

            <Titulo 
              titulo="Insira seus dados: " 
            />

            <Input placeholder="nome" name="name" for="name" label="Nome" />
            <Input placeholder="email" name="email" for="email" label="Email" />
            <Input
              placeholder="numero"
              name="number"
              for="number"
              label="Número"
            />
            <Input
              placeholder="senha"
              name="password"
              for="password"
              label="Senha"
            />
            <Input
              placeholder="confirme senha"
              name="confirmPassword"
              for="confirmPassword"
              label="Confirme Senha"
            />

            <button className="botao" to="/login">
              Fazer Login
            </button>
          </FormLogin>
        </CaixaForm>
      </ContainerRigth>
    </BoxLogin>
  );
};

const BoxLogin = styled.div`
  display: flex;
`;
const ContainerLeft = styled.div`
  width: 50%;
`;
const ContainerRigth = styled.div`
  width: 50%;
  z-index: 100;
  height: 100vh;
  background-color: white;
`;
const CaixaForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
const FormLogin = styled.form`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 10em;
        height: 8em;
    }
    .botao {
        margin: 20px auto 10px auto;
        padding: 20px 60px;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
        background-color: var(--cor-primaria);
        color: #fff;
        border: solid 1px #fff;
        text-decoration: none;
    
    
        &:hover {
        color: var(--cor-primaria);
        background-color: #fff;
        border: solid 1px var(--cor-primaria);
        transition: 0.2s linear;
    }
    
`;
