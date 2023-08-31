import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
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
