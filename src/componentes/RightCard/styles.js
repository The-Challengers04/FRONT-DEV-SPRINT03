import styled from "styled-components";

export const Card = styled.div`
	text-align: center;
	border-radius: 4px;
	width: 25rem;
	height: 20rem;
	margin: 15px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;
export const Image = styled.img`
	width: 100%;
	height: 70%;
`;
export const LegendBox = styled.div`
	height: 30%;
	width: auto;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
export const Subtitle = styled.h2`
	color: black;
	font-size: 1.6em;
	text-decoration: none;
	cursor: pointer;
	margin: 5px;

	&:hover {
		color: #55e5f6;
	}
`;
export const Paragraph = styled.p`
	color: #767676;
`;
