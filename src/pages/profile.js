import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import Title from "../componentes/Title";
import PartnerForm from "../componentes/PartnerForm";
import CustomerForm from "../componentes/CustomerForm";

export const Profile = () => {
	const loggedUser = JSON.parse(localStorage.getItem("loggedUser")) || {};
	const userData = loggedUser["data"];

	function updatePartner(partnerObj) {
		let partnerList = JSON.parse(localStorage.getItem("partners")) || [];
		const index = partnerList.findIndex((p) => p.email === partnerObj.email);
		partnerList[index] = partnerObj;
		localStorage.setItem("partners", JSON.stringify(partnerList));
		const user = {
			type: "Partner",
			data: partnerObj,
		};
		localStorage.setItem("loggedUser", JSON.stringify(user));
		window.location.href = "/profile";
	}

	function updateCustomer(customerObj) {
		let customerList = JSON.parse(localStorage.getItem("customers")) || [];
		const index = customerList.findIndex((c) => c.email === customerObj.email);
		customerList[index] = customerObj;
		localStorage.setItem("customers", JSON.stringify(customerList));
		const user = {
			type: "Customer",
			data: customerObj,
		};
		localStorage.setItem("loggedUser", JSON.stringify(user));
		window.location.href = "/profile";
	}

	function logOut() {
		localStorage.removeItem("loggedUser");
		window.location.href = "/";
	}

	return (
		<div>
			<NavBar />

			<Title titulo="Minha conta" />
			{loggedUser.type === "Partner" ? (
				<PartnerForm
					emailValue={userData.email}
					partnerNameValue={userData.partnerName}
					partnerPlanValue={userData.partnerPlan}
					passwordValue={userData.password}
					cepValue={userData.address.cep}
					neighborhoodValue={userData.address.neighborhood}
					streetValue={userData.address.street}
					numberValue={userData.address.number}
					complementValue={userData.address.complement}
					cityValue={userData.address.city}
					stateValue={userData.address.state}
					rampValue={userData.accessibility.ramp}
					elevatorValue={userData.accessibility.elevator}
					braileMaterialValue={userData.accessibility.braileMaterial}
					accessibleRestroomsValue={userData.accessibility.accessibleRestrooms}
					accessibleParkingValue={userData.accessibility.accessibleParking}
					onSubmitAction={(data) => {
						updatePartner(data);
					}}
				/>
			) : (
				<CustomerForm
					emailValue={userData.email}
					firstNameValue={userData.firstName}
					lastNameValue={userData.lastName}
					passwordValue={userData.password}
					onSubmitAction={(data) => {
						updateCustomer(data);
					}}
				/>
			)}
			<button onClick={logOut}>Sair</button>
			<Footer />
		</div>
	);
};
