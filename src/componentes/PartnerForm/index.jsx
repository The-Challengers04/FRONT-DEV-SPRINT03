import React, { useState, useCallback } from "react";
import { Form, Button } from "react-bootstrap";
import { CheckBox, Input, Select } from "../Forms";
import { ButtonLogin } from "../../componentes/Buttons";

function isValidEmail(email) {
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailPattern.test(email);
}

function cloneObj(obj) {
	return { ...obj };
}

// Eu quero que esse forms possa ser usado tanto para o cadastro quanto para atualizar as informações
function PartnerForms({
	emailValue,
	partnerNameValue,
	partnerPlanValue,
	passwordValue,
	confirmPasswordValue,
	cepValue,
	neighborhoodValue,
	streetValue,
	numberValue,
	complementValue,
	cityValue,
	stateValue,
	rampValue,
	elevatorValue,
	braileMaterialValue,
	accessibleRestroomsValue,
	accessibleParkingValue,
	onSubmitAction,
}) {
	const [email, setEmail] = useState(emailValue || "");
	const [partnerName, setPartnerName] = useState(partnerNameValue || "");
	const [partnerPlan, setPartnerPlan] = useState(partnerPlanValue || "Básico");
	const [password, setPassword] = useState(passwordValue || "");
	const [confirmPassword, setConfirmPassword] = useState(
		confirmPasswordValue || ""
	);
	const [cep, setCep] = useState(cepValue || "");
	const [neighborhood, setNeighborhood] = useState(neighborhoodValue || "");
	const [street, setStreet] = useState(streetValue || "");
	const [number, setNumber] = useState(numberValue || "");
	const [complement, setComplement] = useState(complementValue || "");
	const [city, setCity] = useState(cityValue || "");
	const [state, setState] = useState(stateValue || "");
	const [ramp, setRamp] = useState(rampValue || false);
	const [elevator, setElevator] = useState(elevatorValue || false);
	const [braileMaterial, setBraileMaterial] = useState(
		braileMaterialValue || false
	);
	const [accessibleRestrooms, setAccessibleRestrooms] = useState(
		accessibleRestroomsValue || false
	);
	const [accessibleParking, setAccessibleParking] = useState(
		accessibleParkingValue || false
	);

	const [errors, setErrors] = useState({});

	function setErrorToEntity(entityName, errorMessage) {
		setErrors((prevValue) => {
			const newObject = cloneObj(prevValue);
			if (!newObject[entityName]) newObject[entityName] = errorMessage;
			return newObject;
		});
	}

	let validateObligatoryFields = useCallback(() => {
		let formsIsValid = true;

		let obligatoryEntities = [
			{ entity: partnerName, entityName: "partnerName" },
			{ entity: email, entityName: "email" },
			{ entity: password, entityName: "password" },
			{ entity: confirmPassword, entityName: "confirmPassword" },
			{ entity: cep, entityName: "cep" },
			{ entity: neighborhood, entityName: "neighborhood" },
			{ entity: street, entityName: "street" },
			{ entity: number, entityName: "number" },
			{ entity: city, entityName: "city" },
			{ entity: state, entityName: "state" },
		];

		for (let i = 0; i < obligatoryEntities.length; i++) {
			const { entity, entityName } = obligatoryEntities[i];
			if (!entity) {
				setErrorToEntity(entityName, "Campo obrigatório");
				formsIsValid = false;
			}
		}
		return formsIsValid;
	}, [
		partnerName,
		email,
		password,
		confirmPassword,
		cep,
		neighborhood,
		street,
		number,
		city,
		state,
	]);

	const isEmailAvailable = (emailAlreadyBeingUsing) => {
		const customers = JSON.parse(localStorage.getItem("customers")) || [];
		const customerObj = customers.find((c) => c.email === email);
		if (!!customerObj) {
			if (
				!!emailAlreadyBeingUsing &&
				customerObj.email === emailAlreadyBeingUsing
			)
				return true;
			return false;
		}
		const partners = JSON.parse(localStorage.getItem("partners")) || [];
		const partnerObj = partners.find((p) => p.email === email);
		if (!!partnerObj) {
			if (
				!!emailAlreadyBeingUsing &&
				partnerObj.email === emailAlreadyBeingUsing
			)
				return true;
			return false;
		}
		return true;
	};

	const validateFields = () => {
		let isValid = true;
		// Validação dos campos
		const allObligatoryFieldsAreFilled = validateObligatoryFields();
		if (!allObligatoryFieldsAreFilled) isValid = false;

		// Validação do email
		if (!isValidEmail(email)) {
			setErrorToEntity("email", "Email inválido");
			isValid = false;
		} else {
			if (!isEmailAvailable(emailValue)) {
				setErrorToEntity("email", "Email já cadastrado");
				isValid = false;
			}
		}
		// Validação da senha
		if (password !== confirmPassword) {
			setErrorToEntity("confirmPassword", "Senhas não conferem");
			isValid = false;
		}

		// Verificar se tem algum erro
		if (Object.keys(errors).length > 0) {
			isValid = false;
		}

		return isValid;
	};

	async function fillAddressByCEP() {
		if (cep.length !== 8) return setErrorToEntity("cep", "CEP inválido");

		const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

		if (response.ok) {
			const data = await response.json();

			if (data.erro) return setErrorToEntity("cep", "CEP não encontrado");

			setNeighborhood(data.bairro);
			setStreet(data.logradouro);
			setCity(data.localidade);
			setState(data.uf);

			// Remover o erro
			setErrors((prevValue) => {
				const newObject = cloneObj(prevValue);
				delete newObject["cep"];
				delete newObject["neighborhood"];
				delete newObject["street"];
				delete newObject["city"];
				delete newObject["state"];
				return newObject;
			});
		}
	}

	const getCoordinatesOfAddress = async () => {
		try {
			const response = await fetch(
				`https://maps.googleapis.com/maps/api/geocode/json?address=${cep},${neighborhood},${street},${number},${complement},${city},${state}&key=AIzaSyB5hUFsQW-iE8boD9b-TiRBfyXIOGGuITA`
			);

			if (response.ok) {
				const data = await response.json();

				if (data.status === "OK") {
					const location = data.results[0].geometry.location;

					const { lat, lng } = location;

					return { status: 200, lat, lng };
				} else {
					return { status: 400 };
				}
			} else {
				return { status: 400 };
			}
		} catch (error) {
			return { status: 500 };
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const isFieldValid = validateFields();
		if (!isFieldValid) return;

		const data = await getCoordinatesOfAddress();
		if (data.status === 400) {
			alert("O endereço passado é invalido, por favor passe um válido");
			return;
		} else if (data.status === 500) {
			alert(
				"Ocorreu um erro ao tentar buscar o endereço, tente novamente mais tarde"
			);
			return;
		}

		const { lat, lng } = data;

		const partnerData = {
			partnerName,
			email,
			partnerPlan,
			password,
			address: {
				cep,
				neighborhood,
				street,
				number,
				complement,
				city,
				state,
			},
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

		onSubmitAction(partnerData);
	};

	return (
		<>
			<Form onSubmit={handleSubmit} style={{ width: "50%" }}>
				<Input 
					controlId="PartnerName"
					label="Nome do Parceiro"
					type="text"
					placeholder="Nome do Parceiro"
					entity={partnerName}
					setEntity={setPartnerName}
					errorList={errors}
					setErrorList={setErrors}
					errorName={"partnerName"}
					
				/>
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
				<Select
					controlId="partnerPlan"
					label="Plano"
					entity={partnerPlan}
					setEntity={setPartnerPlan}
					options={[
						{ value: "Básico", label: "Básico" },
						{ value: "Premium", label: "Premium" },
					]}
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
				<Input
					controlId="confirmPassword"
					label="Confirme a senha"
					type="password"
					placeholder="Confirme sua senha"
					entity={confirmPassword}
					setEntity={setConfirmPassword}
					errorList={errors}
					setErrorList={setErrors}
					errorName={"confirmPassword"}
				/>

<Input
					controlId="cep"
					label="CEP"
					type="number"
					placeholder="00000-000"
					entity={cep}
					setEntity={setCep}
					//	onChange={(e) => { setCep(formatToCPF(e.target.value)) }}
					onBlur={async () => await fillAddressByCEP()}
					errorList={errors}
					setErrorList={setErrors}
					errorName={"cep"}
				/>

				<Input
					controlId="neighborhood"
					label="Bairro"
					type="text"
					placeholder="Digite o nome do bairro"
					entity={neighborhood}
					setEntity={setNeighborhood}
					errorList={errors}
					setErrorList={setErrors}
					errorName={"neighborhood"}
				/>
				<Input
					controlId="city"
					label="Cidade"
					type="text"
					placeholder="Digite o nome da cidade"
					entity={city}
					setEntity={setCity}
					errorList={errors}
					setErrorList={setErrors}
					errorName={"city"}
				/>
				<Input
					controlId="state"
					label="Estado"
					type="text"
					placeholder="Digite o nome do estado"
					entity={state}
					setEntity={setState}
					errorList={errors}
					setErrorList={setErrors}
					errorName={"state"}
				/>
				<Input
					controlId="street"
					label="Rua"
					type="text"
					placeholder="Digite o nome da rua"
					entity={street}
					setEntity={setStreet}
					errorList={errors}
					setErrorList={setErrors}
					errorName={"street"}
				/>
				<Input
					controlId="number"
					label="Número"
					type="number"
					placeholder="Digite o número"
					entity={number}
					setEntity={setNumber}
					errorList={errors}
					setErrorList={setErrors}
					errorName={"number"}
				/>
				<Input
					controlId="complement"
					label="Complemento"
					type="text"
					placeholder="Digite o complemento"
					entity={complement}
					setEntity={setComplement}
				/>

				<Form.Group controlId="formBasicCheckbox">
					<CheckBox
						label="Possui rampa de acesso?"
						value={ramp}
						setValue={setRamp}
						id={1}
					/>
					<CheckBox
						label="Possui elevador?"
						value={elevator}
						setValue={setElevator}
						id={2}
					/>
					<CheckBox
						label="Possui material em braile?"
						value={braileMaterial}
						setValue={setBraileMaterial}
						id={3}
					/>
					<CheckBox
						label="Possui banheiros acessíveis?"
						value={accessibleRestrooms}
						setValue={setAccessibleRestrooms}
						id={4}
					/>
					<CheckBox
						label="Possui estacionamento acessível?"
						value={accessibleParking}
						setValue={setAccessibleParking}
						id={5}
					/>
				</Form.Group>
				<ButtonLogin variant="primary" type="submit">
					Enviar
				</ButtonLogin>
			</Form>
		</>
	);
}

export default PartnerForms;