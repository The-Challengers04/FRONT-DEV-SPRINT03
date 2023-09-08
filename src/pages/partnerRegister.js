import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function isValidEmail(email) {
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailPattern.test(email);
}

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

	const [errors, setErrors] = useState({});

	const handleSubmit = async (e) => {
		e.preventDefault();

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

		console.log(validationErrors);
		console.log(errors);

		if (Object.keys(validationErrors).length > 0) {
			return setErrors(validationErrors);
		}

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

					const partnerData = {
						partnerName,
						email,
						partnerPlan,
						password,
						lat,
						lng,
					};
					const partnerList =
						JSON.parse(localStorage.getItem("partners")) || [];
					partnerList.push(partnerData);
					localStorage.setItem("partners", JSON.stringify(partnerList));

					window.location.href = "/partner/login";
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

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="PartnerName">
					<Form.Label>Nome do Parceiro</Form.Label>
					<Form.Control
						type="text"
						placeholder="Nome do Parceiro"
						value={partnerName}
						onChange={(e) => {
							errors.partnerName = null;
							setPartnerName(e.target.value);
						}}
						isInvalid={!!errors.partnerName}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.partnerName}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Digite seu email"
						value={email}
						onChange={(e) => {
							errors.email = null;
							setEmail(e.target.value);
						}}
						isInvalid={!!errors.email}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.email}
					</Form.Control.Feedback>
				</Form.Group>
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
				<Form.Group controlId="password">
					<Form.Label>Senha</Form.Label>
					<Form.Control
						type="password"
						placeholder="Digite sua senha"
						value={password}
						onChange={(e) => {
							errors.password = null;
							setPassword(e.target.value);
						}}
						isInvalid={!!errors.password}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.password}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="confirmPassword">
					<Form.Label>Confirme a senha</Form.Label>
					<Form.Control
						type="password"
						placeholder="Confirme sua senha"
						value={confirmPassword}
						onChange={(e) => {
							errors.confirmPassword = null;
							setConfirmPassword(e.target.value);
						}}
						isInvalid={!!errors.confirmPassword}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.confirmPassword}
					</Form.Control.Feedback>
				</Form.Group>
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
				<Form.Group controlId="neighborhood">
					<Form.Label>Bairro</Form.Label>
					<Form.Control
						type="text"
						placeholder="Digite o nome do bairro"
						value={neighborhood}
						onChange={(e) => {
							errors.neighborhood = null;
							setNeighborhood(e.target.value);
						}}
						isInvalid={!!errors.neighborhood}
					/>

					<Form.Control.Feedback type="invalid">
						{errors.neighborhood}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="city">
					<Form.Label>Cidade</Form.Label>
					<Form.Control
						type="text"
						placeholder="Digite o nome da cidade"
						value={city}
						onChange={(e) => {
							errors.city = null;
							setCity(e.target.value);
						}}
						isInvalid={!!errors.city}
					/>

					<Form.Control.Feedback type="invalid">
						{errors.city}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="state">
					<Form.Label>Estado</Form.Label>
					<Form.Control
						type="text"
						placeholder="Digite o nome do estado"
						value={state}
						onChange={(e) => {
							errors.state = null;
							setState(e.target.value);
						}}
						isInvalid={!!errors.state}
					/>

					<Form.Control.Feedback type="invalid">
						{errors.state}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group controlId="street">
					<Form.Label>Rua</Form.Label>
					<Form.Control
						type="text"
						placeholder="Digite o nome da rua"
						value={street}
						onChange={(e) => {
							errors.street = null;
							setStreet(e.target.value);
						}}
						isInvalid={!!errors.street}
					/>

					<Form.Control.Feedback type="invalid">
						{errors.street}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="number">
					<Form.Label>Número</Form.Label>
					<Form.Control
						type="text"
						placeholder="Digite o número"
						value={number}
						onChange={(e) => {
							errors.number = null;
							setNumber(e.target.value);
						}}
						isInvalid={!!errors.number}
					/>

					<Form.Control.Feedback type="invalid">
						{errors.number}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="complement">
					<Form.Label>Complemento</Form.Label>
					<Form.Control
						type="text"
						placeholder="Digite o complemento"
						value={complement}
						onChange={(e) => {
							errors.complement = null;
							setComplement(e.target.value);
						}}
						isInvalid={!!errors.complement}
					/>

					<Form.Control.Feedback type="invalid">
						{errors.complement}
					</Form.Control.Feedback>
				</Form.Group>
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
