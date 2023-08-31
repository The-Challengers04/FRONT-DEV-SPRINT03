import styled from "styled-components";

export const Container = styled.div`
	padding: 40px;
	background-color: ${(props) => props.background || "var(--cor-primaria)"};
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
`;

export const Image = styled.img`
	margin: 40px;
	width: 30%;
`;
export const Text = styled.h1`
	font-weight: 400;
	font-size: 3.8rem;
	line-height: 75px;
	text-align: center;
	color: #ffffff;
`;
