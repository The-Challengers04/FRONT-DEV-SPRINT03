import React, { useState } from "react";
import { Input } from "../componentes/Forms";
import { Form, Button } from "react-bootstrap";

export function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});

	function setErrorToEntity(entityName, errorMessage) {
		setErrors((prevValue) => {
			const newObject = { ...prevValue };
			if (!newObject[entityName]) newObject[entityName] = errorMessage;
			return newObject;
		});
	}

	function validateForm() {
		let isFormValid = true;
		if (!email) {
			setErrorToEntity(
				"email",
				"O campo Nome de usuário ou Email é obrigatório."
			);
			isFormValid = false;
		}

		if (!password) {
			setErrorToEntity("password", "O campo de senha é obrigatório.");
			isFormValid = false;
		}

		return isFormValid;
	}

	function findCustomer() {
		const customers = JSON.parse(localStorage.getItem("customers")) || [];
		const customerObj = customers.find((c) => c.email === email);
		return customerObj;
	}

	function findPartner() {
		const partnerList = JSON.parse(localStorage.getItem("partners")) || [];
		const partnerObj = partnerList.find((p) => p.email === email);
		return partnerObj;
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		const isFormValid = validateForm();
		if (!isFormValid) return;

		const customerObj = findCustomer();
		const partnerObj = findPartner();

		if (!customerObj && !partnerObj) {
			setErrorToEntity("user", "Usuário não encontrado.");
			return;
		}
		let user;
		if (!!customerObj) {
			if (customerObj.password !== password) {
				setErrorToEntity("password", "Senha incorreta.");
				return;
			}
			user = {
				type: "Customer",
				data: customerObj,
			};
		} else if (!!partnerObj) {
			if (partnerObj.password !== password) {
				setErrorToEntity("password", "Senha incorreta.");
				return;
			}
			user = {
				type: "Partner",
				data: partnerObj,
			};
		} else {
			setErrorToEntity("user", "Usuário não encontrado.");
			return;
		}
		localStorage.setItem("loggedUser", JSON.stringify(user));
		window.location.href = "/";
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Input
					controlId="email"
					label="Email"
					type="text"
					placeholder="Digite seu email"
					entity={email}
					setEntity={setEmail}
					errorList={errors}
					setErrorList={setErrors}
					errorName={"email"}
				/>
				<Input
					controlId="password"
					label="Senha"
					type="password"
					placeholder="Digite sua senha"
					entity={password}
					setEntity={setPassword}
					errorList={errors}
					setErrorList={setErrors}
					errorName={"password"}
				/>

				<Button variant="primary" type="submit">
					Entrar
				</Button>
			</Form>
			<a href="/register">Não tem um registro?</a>
			<br />
			<a href="/">Ir para Home</a>
		</>
	);
}
