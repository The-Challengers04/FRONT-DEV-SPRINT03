import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function Login() {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();

		const newErrors = {};

		if (!user) {
			newErrors.user = "O campo Nome de usuário ou Email é obrigatório.";
		}

		if (!password) {
			newErrors.password = "O campo Senha é obrigatório.";
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		} else {
			const userList = JSON.parse(localStorage.getItem("users")) || [];
			const userObj = userList.find((u) => u.user === user || u.email === user);
			if (!userObj) {
				newErrors.user = "Usuário não encontrado.";
				setErrors(newErrors);
				return;
			}
			if (userObj.password !== password) {
				newErrors.password = "Senha incorreta.";
				setErrors(newErrors);
				return;
			}
			localStorage.setItem("loggedUser", JSON.stringify(userObj));
			// Se a autenticação for bem-sucedida, redirecione para a página inicial
			window.location.href = "/";
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="user">
				<Form.Label>Nome de usuário ou Email</Form.Label>
				<Form.Control
					type="text"
					placeholder="Digite seu nome de usuário ou email"
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

			<Button variant="primary" type="submit">
				Entrar
			</Button>
		</Form>
	);
}
