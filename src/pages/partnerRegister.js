import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function isValidEmail(email) {
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailPattern.test(email);
}

const InputComponent = ({
	controlId,
	Label,
	type,
	placeholder,
	value,
	setValue,
	error,
}) => {
	return (
		<Form.Group controlId={controlId}>
			<Form.Label>{Label}</Form.Label>
			<Form.Control
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={(e) => {
					error = null;
					setValue(e.target.value);
				}}
				isInvalid={!!error}
			/>
			<Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
		</Form.Group>
	);
};

const CheckBoxComponent = ({ label, value, setValue }) => {
	return (
		<Form.Group controlId="formBasicCheckbox">
			<Form.Check
				type="checkbox"
				label={label}
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
		</Form.Group>
	);
};

export function PartnerRegister() {
	const [email, setEmail] = useState("");
	const [partnerName, setPartnerName] = useState("");
	const [partnerPlan, setPartnerPlan] = useState("");

	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const [cep, setCep] = useState("");
	const [neighborhood, setNeighborhood] = useState("");
	const [street, setStreet] = useState("");
	const [number, setNumber] = useState("");
	const [complement, setComplement] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");

	const [ramp, setRamp] = useState(false);
	const [elevator, setElevator] = useState(false);
	const [braileMaterial, setBraileMaterial] = useState(false);
	const [accessibleRestrooms, setAccessibleRestrooms] = useState(false);
	const [accessibleParking, setAccessibleParking] = useState(false);

	const [errors, setErrors] = useState({});

	const validateFields = () => {
		// Validação dos campos
		const validationErrors = {};

		if (!partnerName) {
			validationErrors.partnerName = "Campo obrigatório";
		}
		if (!email || !isValidEmail(email))
			validationErrors.email = "Digite um email válido";
		if (!password) validationErrors.password = "Campo obrigatório";
		if (!confirmPassword)
			validationErrors.confirmPassword = "Campo obrigatório";
		if (password !== confirmPassword)
			validationErrors.confirmPassword = "As senhas não coincidem";
		if (!cep) {
			validationErrors.cep = "Campo obrigatório";
		}
		if (!neighborhood) {
			validationErrors.neighborhood = "Campo obrigatório";
		}
		if (!street) {
			validationErrors.street = "Campo obrigatório";
		}
		if (!number) {
			validationErrors.number = "Campo obrigatório";
		}
		if (!city) {
			validationErrors.city = "Campo obrigatório";
		}
		if (!state) {
			validationErrors.state = "Campo obrigatório";
		}

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
		}
	};

	const getCoordinatesOfAddress = async () => {
		try {
			const response = await fetch(
				`https://maps.googleapis.com/maps/api/geocode/json?address=${cep},${neighborhood},${street},${number},${complement},${city},${state}&key=AIzaSyArKcLdE7PuHU_ylcu0tBkpI8bm39aeDY8`
			);

			if (response.ok) {
				const data = await response.json();

				if (data.status === "OK") {
					const location = data.results[0].geometry.location;
					console.log(location);

					const { lat, lng } = location;

					return { lat, lng };
				} else {
					console.error("Erro na busca de coordenadas");
				}
			} else {
				console.error("Erro na busca de coordenadas");
			}
		} catch (error) {
			console.error("Erro na busca de coordenadas", error);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		validateFields();

		if (Object.keys(errors).length > 0) {
			return;
		}

		const { lat, lng } = await getCoordinatesOfAddress();

		const partnerData = {
			partnerName,
			email,
			partnerPlan,
			password,
			lat,
			lng,
			accessibility: {
				ramp,
				elevator,
				braileMaterial,
				accessibleRestrooms,
				accessibleParking,
			},
		};

		const partnerList = JSON.parse(localStorage.getItem("partners")) || [];
		partnerList.push(partnerData);
		localStorage.setItem("partners", JSON.stringify(partnerList));

		window.location.href = "/partner/login";
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<InputComponent
					controlId="PartnerName"
					Label="Nome do Parceiro"
					type="text"
					placeholder="Nome do Parceiro"
					value={partnerName}
					setValue={setPartnerName}
					error={errors.partnerName}
				/>
				<InputComponent
					controlId="email"
					Label="Email"
					type="email"
					placeholder="Digite seu email"
					value={email}
					setValue={setEmail}
					error={errors.email}
				/>
				<Form.Group controlId="partnerPlan">
					<Form.Label>Plano</Form.Label>
					<Form.Select
						aria-label="Default select example"
						value={partnerPlan}
						onChange={(e) => {
							setPartnerPlan(e.target.value);
						}}
					>
						<option value="1">Básico</option>
						<option value="2">Premium</option>
					</Form.Select>
				</Form.Group>
				<InputComponent
					controlId="password"
					Label="Senha"
					type="password"
					placeholder="Digite sua senha"
					value={password}
					setValue={setPassword}
					error={errors.password}
				/>
				<InputComponent
					controlId="confirmPassword"
					Label="Confirme a senha"
					type="password"
					placeholder="Confirme sua senha"
					value={confirmPassword}
					setValue={setConfirmPassword}
					error={errors.confirmPassword}
				/>
				<Form.Group controlId="cep">
					<Form.Label>CEP</Form.Label>
					<Form.Control
						type="text"
						placeholder="00000-000"
						value={cep}
						onChange={(e) => {
							errors.cep = null;
							setCep(e.target.value);
						}}
						isInvalid={!!errors.cep}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.cep}
					</Form.Control.Feedback>
				</Form.Group>

				<InputComponent
					controlId="neighborhood"
					Label="Bairro"
					type="text"
					placeholder="Digite o nome do bairro"
					value={neighborhood}
					setValue={setNeighborhood}
					error={errors.neighborhood}
				/>
				<InputComponent
					controlId="city"
					Label="Cidade"
					type="text"
					placeholder="Digite o nome da cidade"
					value={city}
					setValue={setCity}
					error={errors.city}
				/>
				<InputComponent
					controlId="state"
					Label="Estado"
					type="text"
					placeholder="Digite o nome do estado"
					value={state}
					setValue={setState}
					error={errors.state}
				/>
				<InputComponent
					controlId="street"
					Label="Rua"
					type="text"
					placeholder="Digite o nome da rua"
					value={street}
					setValue={setStreet}
					error={errors.street}
				/>
				<InputComponent
					controlId="number"
					Label="Número"
					type="text"
					placeholder="Digite o número"
					value={number}
					setValue={setNumber}
					error={errors.number}
				/>
				<InputComponent
					controlId="complement"
					Label="Complemento"
					type="text"
					placeholder="Digite o complemento"
					value={complement}
					setValue={setComplement}
					error={errors.complement}
				/>

				<CheckBoxComponent
					label="Possui rampa de acesso?"
					value={ramp}
					setValue={setRamp}
				/>
				<CheckBoxComponent
					label="Possui elevador?"
					value={elevator}
					setValue={setElevator}
				/>
				<CheckBoxComponent
					label="Possui material em braile?"
					value={braileMaterial}
					setValue={setBraileMaterial}
				/>
				<CheckBoxComponent
					label="Possui banheiros acessíveis?"
					value={accessibleRestrooms}
					setValue={setAccessibleRestrooms}
				/>
				<CheckBoxComponent
					label="Possui estacionamento acessível?"
					value={accessibleParking}
					setValue={setAccessibleParking}
				/>

				<Button variant="primary" type="submit">
					Enviar
				</Button>
			</Form>
			{/* Redirecionar o usuario para o login */}
			<a href="/partner/login">Já é um parceiro?</a> <br />
			<a href="/">Ir para Home</a>
		</>
	);
}
