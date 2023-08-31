import styled from "styled-components";

export const Card = styled.div`
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

	&:hover {
		transform: scale(1.1);
	}

	.icon {
		width: 50%;
		height: 50%;
		border: none;
		color: var(--cor-fonte-text); // Altere a cor conforme desejado
		margin-bottom: 10px;
	}
`;
export const Subtitle = styled.h2`
	font-size: 1.6em;
	text-decoration: none;
	cursor: pointer;
	margin: 5px;

	&:hover {
		color: var(--cor-primaria);
	}
`;
