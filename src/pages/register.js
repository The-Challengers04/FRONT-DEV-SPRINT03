import { useState } from "react";
import PartnerForms from "../componentes/PartnerForm";
import CustomerForm from "../componentes/CustomerForm";
import { Select } from "../componentes/Forms";

export function Register() {
	const [typeOfRegister, setTypeOfRegister] = useState("Customer");

	function registerPartner(partnerData) {
		const partnerList = JSON.parse(localStorage.getItem("partners")) || [];
		partnerList.push(partnerData);
		localStorage.setItem("partners", JSON.stringify(partnerList));
		window.location.href = "/login";
	}
	function registerCustomer(customerObj) {
		const customers = JSON.parse(localStorage.getItem("Customers")) || [];
		customers.push(customerObj);
		localStorage.setItem("customers", JSON.stringify(customers));
		window.location.href = "/login";
	}
	return (
		<>
			<Select
				label="Tipo de cadastro"
				entity={typeOfRegister}
				setEntity={setTypeOfRegister}
				options={[
					{ value: "Customer", label: "Cliente" },
					{ value: "Partner", label: "Parceiro" },
				]}
			/>
			{typeOfRegister === "Customer" ? (
				<CustomerForm
					onSubmitAction={(data) => {
						registerCustomer(data);
					}}
				/>
			) : (
				<PartnerForms
					onSubmitAction={(data) => {
						registerPartner(data);
					}}
				/>
			)}
			<a href="/login">Já possui um cadastro?</a> <br />
			<a href="/">Ir para Home</a>
		</>
	);
}
