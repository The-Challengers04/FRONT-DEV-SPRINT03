import styled from "styled-components";

export const FormGroup = styled.div`
	position: relative;
	padding: 15px 0 0;
	margin: 10px 0;
	width: 100%;
`;

export const InputField = styled.input`
	font-family: inherit;
	width: 100%;
	border: 0;
	border-bottom: 2px solid #9b9b9b;
	outline: 0;
	font-size: 1rem;
	color: #383838b4;
	padding: 7px 0;
	background: transparent;

	&::placeholder {
		color: transparent;
	}

	&:placeholder-shown ~ .form__label {
		font-size: 1rem;
		cursor: text;
		top: 20px;
	}

	&:focus {
		padding-bottom: 6px;
		font-weight: 700;
		border-width: 3px;
		border-image-slice: 1;
	}

	&:focus ~ .form__label {
		position: absolute;
		top: 0;
		display: block;
		transition: 0.2s;
		font-size: 1rem;
		color: #383838b4;
		font-weight: 700;
	}

	&:required,
	&:invalid {
		box-shadow: none;
	}
`;

export const FormLabel = styled.label`
	position: absolute;
	top: 0;
	display: block;
	transition: 0.2s;
	font-size: 1rem;
	color: #383838b4;
`;
