import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function isValidEmail(email) {
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailPattern.test(email);
}

export function RegisterUser() {
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();

		const newErrors = {};

		if (!firstName) {
			newErrors.firstName = "O campo Nome é obrigatório.";
		}

		if (!lastName) {
			newErrors.lastName = "O campo Sobrenome é obrigatório.";
		}

		if (!user) {
			newErrors.user = "O campo Usuário é obrigatório.";
		}

		if (!email) {
			newErrors.email = "O campo Email é obrigatório.";
		} else if (!isValidEmail(email)) {
			newErrors.email = "O campo Email é inválido.";
		}

		if (!password) {
			newErrors.password = "O campo Senha é obrigatório.";
		}

		if (!confirmPassword) {
			newErrors.confirmPassword = "O campo Confirmar Senha é obrigatório.";
		} else if (password !== confirmPassword) {
			newErrors.confirmPassword =
				"O campo Confirmar Senha deve ser igual ao campo Senha.";
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		} else {
			const userObj = {
				firstName,
				lastName,
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
			window.location.href = "/login";
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="firstName">
				<Form.Label>Nome</Form.Label>
				<Form.Control
					type="text"
					placeholder="Digite seu nome"
					value={firstName}
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

			<Form.Group controlId="lastName">
				<Form.Label>Sobrenome</Form.Label>
				<Form.Control
					type="text"
					placeholder="Digite seu sobrenome"
					value={lastName}
					onChange={(e) => {
						errors.lastName = null;
						setLastName(e.target.value);
					}}
					isInvalid={!!errors.lastName}
				/>
				<Form.Control.Feedback type="invalid">
					{errors.lastName}
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
				<Form.Label>Senha</Form.Label>
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
	);
}
