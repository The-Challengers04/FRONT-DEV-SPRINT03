import * as S from "./styles";
import Input from "../Input";

export default function FormCadastro() {
	return (
		<form>
			<S.Container>
				<S.Card>
					<h1>Cadastre a sua empresa</h1>
					<Input type="text" placeholder="" id="name" for="name" label="Nome" />
					<Input
						type="text"
						placeholder=""
						id="user"
						for="user"
						label="Usuário"
					/>
					<Input
						type="password"
						placeholder=""
						id="password"
						for="password"
						label="Senha"
					/>
					<Input
						type="password"
						placeholder=""
						id="confirmPassword"
						for="confirmPassword"
						label="Confirmar Senha"
					/>
					<Input
						type="email"
						placeholder=""
						id="email"
						for="email"
						label="Email"
					/>

					<div>
						<RegisterButton>Cadastrar agora</RegisterButton>
					</div>
				</S.Card>
			</S.Container>
		</form>
	);
}
