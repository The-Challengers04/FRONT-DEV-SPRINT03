import React from "react";
import styled from 'styled-components';
import Logo from '../imagens/logo_inclui+.png';
import Input from "../componentes/Input";
import { useState } from "react";
import { secoes as secoesData } from '../Uteis/DataCadastro';
// import ImageFundo from '../imagens/img-login-cad.jpg';

export const Cadastro = () =>{

    const[numSecao, setNumSecao] = useState(0);

    function avancarSecao(){
        if(numSecao < secoesData.length -1){
            setNumSecao(prevNumSecao => prevNumSecao + 1);
        }
    }

    function voltarSecao(){
        if(numSecao > 0 ){
            setNumSecao(prevNumSecao => prevNumSecao - 1);
        }
    }


    return( 
    <BoxLogin>
        <ContainerLeft>
        </ContainerLeft>
            {/* <img src={ImageFundo} alt="Imagem de fundo"></img> */}
        <ContainerRigth>
            <CaixaForm>
                <FormLogin action="">
                    <img alt="logo" src={Logo}/>

                    <h1>{secoesData[numSecao]?.titulo}</h1>


                    {secoesData[numSecao]?.entradaTexto?.map(entrada =>(
                        <Input
                            label={entrada.label}
                            placeholder={entrada.placeholder}
                            key={entrada.id}
                        />
                    ))}


                    {numSecao > 0 && (<button onClick={()=> voltarSecao()}
                    className="voltar">
                        Voltar
                    </button>)}

                    <button onClick={()=>avancarSecao()}
                    className="avancar">
                        Avançar 
                    </button>

                </FormLogin>
            </CaixaForm>
        </ContainerRigth>
    </BoxLogin>
    )
}


const BoxLogin = styled.div`
    display: flex;
`;
const ContainerLeft = styled.div`
    width: 50%;

`
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
    h1{
        text-align: center;
        font-size: 21px;
        padding: 30px 0px 30px 0px;
        color: var(--cor-fonte-text);
    }
    .voltar, .avancar {
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
    
`