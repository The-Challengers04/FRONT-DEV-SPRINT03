import React from "react";
import styled from "styled-components";
import Logo from "../imgs/logo_inclui+.png";
import Input from "../componentes/Input";
import { Link } from "react-router-dom";
// import ImageFundo from '../imgs/img-login-cad.jpg';

export const Login = () => {
	return (
		<BoxLogin>
			<ContainerLeft></ContainerLeft>
			{/* <img src={ImageFundo} alt="Imagem de fundo"></img> */}
			<ContainerRigth>
				<CaixaForm>
					<FormLogin action="">
						<img alt="logo" src={Logo} />
						<h1>Faça seu login</h1>
						<Input placeholder="email" name="email" for="email" label="Email" />
						<Input
							placeholder="password"
							name="password"
							for="password"
							label="Senha"
						/>
						<Link className="enviar" to="/">
							Entrar
						</Link>
						{/* <input type="submit" className="enviar" value="Entrar"/>  */}
						<Link className="link2" to="/cadastro">
							Não tem cadastro? &gt;{" "}
						</Link>
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

	img {
		width: 10em;
		height: 8em;
	}
	h1 {
		text-align: center;
		font-size: 21px;
		padding: 30px 0px 30px 0px;
		color: var(--cor-fonte-text);
	}
	.enviar {
		margin: 20px auto 10px auto;
		padding: 20px 60px;
		text-transform: uppercase;
		font-weight: bold;
		cursor: pointer;
		background-color: var(--cor-primaria);
		color: #fff;
		border: solid 1px #fff;
		text-decoration: none;
	}

	&.enviar:hover {
		color: var(--cor-primaria);
		background-color: #fff;
		border: solid 1px var(--cor-primaria);
		transition: 0.2s linear;
	}
`;
