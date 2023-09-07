import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function isValidEmail(email) {
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailPattern.test(email);
}

export function PartnerRegister() {
	const [email, setEmail] = useState("");
	const [partnerName, setFirstName] = useState("");
	const [user, setUser] = useState("");
	const [partnerPlan, setPartnerPlan] = useState("");

	const [street, setStreet] = useState("");
	const [number, setNumber] = useState("");
	const [complement, setComplement] = useState("");
	const [neighborhood, setNeighborhood] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [cep, setCep] = useState("");

	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const [errors, setErrors] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();

		const newErrors = {};

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		} else {
			const userObj = {
				user,
				email,
				password,
			};
			let users = localStorage.getItem("users");
			if (users) {
				users = JSON.parse(users);
			} else {
				users = [];
			}
			users.push(userObj);
			localStorage.setItem("users", JSON.stringify(users));
			window.location.href = "/user/login";
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
							errors.firstName = null;
							setFirstName(e.target.value);
						}}
						isInvalid={!!errors.firstName}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.firstName}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group controlId="user">
					<Form.Label>Usuário</Form.Label>
					<Form.Control
						type="text"
						placeholder="Digite seu usuário"
						value={user}
						onChange={(e) => {
							errors.user = null;
							setUser(e.target.value);
						}}
						isInvalid={!!errors.user}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.user}
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
