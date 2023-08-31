import styled from "styled-components";
import ImageEmpresa from "../../imgs/img-empresa01.jpg";

export const Container = styled.div`
	display: flex;
	justify-content: end;
	width: 100%;
	background-image: ${ImageEmpresa};
	height: 700px;
	background-size: cover;
`;
export const Card = styled.div`
	background-color: #ffffff;
	padding: 30px;
	border-radius: 4%;
	box-shadow: 3px 3px 1px 0px #00000060;
	width: 400px;
	height: 65%;
	margin: 150px;

	h1 {
		text-align: center;
		margin-bottom: 20px;
		color: var(--cor-fonte-title);
	}
`;
export const RegisterButton = styled.button`
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
	transition: all 0.4s ease-out;

	&:hover {
		background-color: var(--cor-primaria);
		color: #fff;
	}
`;
