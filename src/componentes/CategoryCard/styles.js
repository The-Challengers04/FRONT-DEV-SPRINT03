import styled from "styled-components";

export const StyledCard = styled.div`
	border-radius: 4px;
	width: 18rem;
	height: 18rem;
	margin: 15px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;
export const Image = styled.img`
	width: 100%;
	height: 70%;
`;
export const LegendBox = styled.div`
	display: flex;
	background-color: #4b4b4b;
	height: 30%;
	width: auto;
	justify-content: center;
	align-items: center;
	text-align: center;

	&:hover {
		background-color: #55e5f6;
	}
`;
export const Subtitle = styled.h2`
	color: #fff;
	font-size: 1.6em;
	text-decoration: none;
	cursor: pointer;
`;
