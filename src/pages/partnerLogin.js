import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function PartnerLogin() {
	const [partnerName, setPartnerName] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();

		const newErrors = {};

		if (!partnerName) {
			newErrors.partnerName = "O campo de nome do parceiro é obrigatório.";
		}

		if (!password) {
			newErrors.password = "O campo Senha é obrigatório.";
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		} else {
			const partnerList = JSON.parse(localStorage.getItem("partners")) || [];
			const partnerObj = partnerList.find((p) => p.partnerName === partnerName);
			if (!partnerObj) {
				newErrors.partnerName = "Parceiro não encontrado.";
				setErrors(newErrors);
				return;
			}
			if (partnerObj.password !== password) {
				newErrors.password = "Senha incorreta.";
				setErrors(newErrors);
				return;
			}
			localStorage.setItem("loggedPartner", JSON.stringify(partnerObj));
			// Se a autenticação for bem-sucedida, redirecione para a página inicial
			window.location.href = "/";
		}
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="partnerName">
					<Form.Label>Nome do parceiro</Form.Label>
					<Form.Control
						type="text"
						placeholder="Digite seu nome de parceiro"
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
			<a href="/partner/register">Ainda não é um parceiro?</a>
			<br />
			<a href="/">Ir para Home</a>
		</>
	);
}
