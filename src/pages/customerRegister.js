import CustomerForm from "../componentes/CustomerForm";

export function CustomerRegister() {
	function registerCustomer(customerObj) {
		const customers = JSON.parse(localStorage.getItem("customers")) || [];
		customers.push(customerObj);
		localStorage.setItem("customers", JSON.stringify(customers));
		window.location.href = "/customer/login";
	}
	return (
		<>
			<CustomerForm
				onSubmitAction={(data) => {
					registerCustomer(data);
				}}
			/>
			<a href="/customer/login">Já é um cliente?</a> <br />
			<a href="/">Ir para Home</a>
		</>
	);
}
