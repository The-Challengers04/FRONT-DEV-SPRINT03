import * as S from "./styles";
import Logo from "../../imgs/logo_inclui+.png";

export default function Footer() {
	return (
		<S.Footer>
			<S.Content>
				<S.Section>
					<S.LogoImage src={Logo} />
				</S.Section>
				<S.Section>
					<S.Text>Navegação</S.Text>
					<S.Ul>
						<S.Li ><a href="/">Página inicial</a></S.Li>
						<S.Li > <a href="company"> Empresa </a> </S.Li>
						<S.Li > <a href="places"> Viajem </a></S.Li>
						<S.Li > <a href="about"> Sobre </a></S.Li>
					</S.Ul>
				</S.Section>
				<S.Section>
					<S.Text>Contato</S.Text>
					<S.Paragraph>Email: exemplo@inclui+.com</S.Paragraph>
					<S.Paragraph>Telefone: (99) 9999-9999</S.Paragraph>
				</S.Section>
			</S.Content>
			<S.Copy>
				<S.Paragraph>
					Todos os direitos reservados a Inclui+ &copy; - 2023
				</S.Paragraph>
			</S.Copy>
		</S.Footer>
	);
}
