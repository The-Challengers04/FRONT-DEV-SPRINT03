import PartnerForms from "../componentes/PartnerForm";

export function PartnerRegister() {
	function registerPartner(partnerData) {
		const partnerList = JSON.parse(localStorage.getItem("partners")) || [];
		partnerList.push(partnerData);
		localStorage.setItem("partners", JSON.stringify(partnerList));
	}
	return (
		<>
			<PartnerForms
				onSubmitAction={(data) => {
					registerPartner(data);
					window.location.href = "/partner/login";
				}}
			/>
		</>
	);
}
