import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
	GoogleMap,
	MarkerF,
	useJsApiLoader,
	InfoWindowF,
} from "@react-google-maps/api";
import locais from "../../mocks/Places.mock";

import Card from "react-bootstrap/Card";

const containerStyle = {
	width: "100%",
	height: "90vh",
};

const center = {
	lat: -23.5505, // Latitude de São Paulo
	lng: -46.6333, // Longitude de São Paulo
};
function PartnerCard({ name, accessibility, coords }) {
	return (
		<Card>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>{accessibility.ramp ? "Rampas de acesso" : ""}</Card.Text>
				<Card.Text>{accessibility.elevator ? "Elevador" : ""}</Card.Text>
				<Card.Text>
					{accessibility.braileMaterial ? "Material em braile" : ""}
				</Card.Text>
				<Card.Text>
					{accessibility.accessibleRestrooms ? "Banheiros acessíveis" : ""}
				</Card.Text>
				<Card.Text>
					{accessibility.accessibleParking ? "Estacionamento acessível" : ""}
				</Card.Text>

				{/* Um botão que redireciona para o google maps no local apontado */}
				<Card.Link
					href={`https://www.google.com/maps/search/?api=1&query=${coords.lat},${coords.lng}`}
					target="_blank"
				>
					Ver no Google Maps
				</Card.Link>
			</Card.Body>
		</Card>
	);
}

const CheckBoxComponent = ({ label, value, setValue }) => {
	return (
		<div>
			<input
				type="checkbox"
				checked={value}
				onChange={(e) => {
					setValue(e.target.checked);
				}}
			/>
			<label>{label}</label>
		</div>
	);
};

const SwitchInput = styled.input`
	appearance: none;
	width: 2em;
	height: 1em;
	background-color: #707070;
	border-radius: 50px;
	position: relative;
	cursor: pointer;
	transition: 0.5ms;

	&::before {
		content: "";
		position: absolute;
		width: 1em;
		height: 1em;
		background-color: #d5d5d5;
		border-radius: 50%;
		transition: 0.5s;
	}

	&:checked {
		background: #55e5f6;
	}
	&:checked:before {
		content: "";
		position: absolute;
		transition: 0.5s;
		left: calc(100% - 1em);
		background: #777777;
	}
`;

const SwitchLabel = styled.label`
	position: relative;
	display: inline-block;
	margin-left: 0.6em;
`;

const SwitchComponent = ({ label, value, setValue }) => {
	return (
		<div>
			<SwitchInput
				type="checkbox"
				checked={value}
				onChange={(e) => {
					setValue(e.target.checked);
				}}
			/>
			<SwitchLabel>{label}</SwitchLabel>
		</div>
	);
};

function Mapa() {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyB5hUFsQW-iE8boD9b-TiRBfyXIOGGuITA",
	});

	const [selectedLocal, setSelectedLocal] = useState(null);
	const [pontosSelecionados, setPontosSelecionados] = useState([]);

	const [ramp, setRamp] = useState(false);
	const [elevator, setElevator] = useState(false);
	const [braileMaterial, setBraileMaterial] = useState(false);
	const [accessibleRestrooms, setAccessibleRestrooms] = useState(false);
	const [accessibleParking, setAccessibleParking] = useState(false);

	useEffect(() => {
		setPontosSelecionados(locais);
	}, []);

	useEffect(() => {
		let pontos = locais;
		if (ramp) pontos = pontos.filter((local) => local.accessibility.ramp);
		if (elevator)
			pontos = pontos.filter((local) => local.accessibility.elevator);
		if (braileMaterial)
			pontos = pontos.filter((local) => local.accessibility.braileMaterial);
		if (accessibleRestrooms)
			pontos = pontos.filter(
				(local) => local.accessibility.accessibleRestrooms
			);
		if (accessibleParking)
			pontos = pontos.filter((local) => local.accessibility.accessibleParking);

		setPontosSelecionados(pontos);
		setSelectedLocal(null);
	}, [ramp, elevator, braileMaterial, accessibleRestrooms, accessibleParking]);

	return isLoaded ? (
		<>
			<PageContainer>
				<CheckBoxContainer>
					<h2>Qual serviço deseja?</h2>
					<p>Filtre por categoria</p>
					<SwitchComponent
						label="Rampas de acesso"
						value={ramp}
						setValue={setRamp}
					/>
					<SwitchComponent
						label="Elevador"
						value={elevator}
						setValue={setElevator}
					/>
					<SwitchComponent
						label="Material em braile"
						value={braileMaterial}
						setValue={setBraileMaterial}
					/>
					<SwitchComponent
						label="Banheiros acessíveis"
						value={accessibleRestrooms}
						setValue={setAccessibleRestrooms}
					/>
					<SwitchComponent
						label="Estacionamento acessível"
						value={accessibleParking}
						setValue={setAccessibleParking}
					/>
				</CheckBoxContainer>
				<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
					{/* Child components, such as markers, info windows, etc. */}
					{/* Preciso marcar os locais no mapa, e ao clicar neles, deve aparecer um card com suas informações */}
					{pontosSelecionados
						? pontosSelecionados.map((local) => (
								<MarkerF
									key={local.id}
									position={{ lat: local.lat, lng: local.lng }}
									onClick={() => {
										setSelectedLocal(local);
									}}
								/>
						  ))
						: null}
					{selectedLocal && (
						<InfoWindowF
							position={{
								lat: selectedLocal.lat,
								lng: selectedLocal.lng,
							}}
							onCloseClick={() => {
								setSelectedLocal(null);
								console.log("Estou fechando");
							}}
							//Quando ele perder o foco, deve fechar a janela
						>
							<PartnerCard
								name={selectedLocal.name}
								accessibility={selectedLocal.accessibility}
								coords={{ lat: selectedLocal.lat, lng: selectedLocal.lng }}
							/>
						</InfoWindowF>
					)}

					<></>
				</GoogleMap>
			</PageContainer>
		</>
	) : (
		<></>
	);
}
const PageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	@media (max-width: 800px) {
		flex-direction: column;
	}
`;
const CheckBoxContainer = styled.div`
width: 40%;
height: 90vh;
display: flex;
flex-direction: column;
aling-items: center;
justify-content: center;
padding: 0 30px;
h2{
	font-size: 40px
}
p{
	color: #646464;
	font-size: 20px
}
@media (max-width: 900px) {
	width: 100%;
	flex-direction: column;
	border-right: 0;
	height: 350px;
}
`
export default Mapa;
