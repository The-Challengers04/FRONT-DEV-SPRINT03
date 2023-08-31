import * as S from "./styles";
export default function Button({ destiny, text }) {
	return <S.StyledLink to={destiny}>{text}</S.StyledLink>;
}
