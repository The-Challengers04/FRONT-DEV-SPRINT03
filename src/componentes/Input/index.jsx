import * as S from "./styles";

export default function Input(props) {
	const {
		type = "text",
		placeholder = "",
		name = "",
		id = "",
		label = "",
	} = props;

	return (
		<S.FormGroup className="formGroupInicial field">
			<S.InputField
				type={type}
				className="form__field"
				placeholder={placeholder}
				name={name}
				id={id}
				required
			/>
			<S.FormLabel htmlFor={id} className="form__label">
				{label}
			</S.FormLabel>
		</S.FormGroup>
	);
}
