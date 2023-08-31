import * as S from "./styles";
import Welcome from "../../imgs/welcome.png";

export default function MainMenu({ text }) {
	return (
		<S.Container>
			<S.Text>{text}</S.Text>
			<S.Image src={Welcome} alt="Imagem de um time reunido" />
		</S.Container>
	);
}
