import React, { useEffect, useState } from "react";
import {
	GoogleMap,
	LoadScript,
	Marker,
	InfoWindow,
} from "@react-google-maps/api";
import locais from "../../mocks/Places.mock";

const containerStyle = {
	width: "90%",
	height: "500px",
};

const center = {
	lat: -23.5505, // Latitude de São Paulo
	lng: -46.6333, // Longitude de São Paulo
};

function Mapa() {
	const [selectedLocal, setSelectedLocal] = useState(null);

	// useEffect(() => {
	// 	// Recuperar locais do localStorage (substitua com seus próprios dados)
	// 	const locaisSalvos = JSON.parse(localStorage.getItem("locais")) || [];
	// 	setLocais(locaisSalvos);
	// }, []);

	return (
		<LoadScript googleMapsApiKey="AIzaSyArKcLdE7PuHU_ylcu0tBkpI8bm39aeDY8">
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={9}>
				{locais.map((local, index) => (
					<Marker
						key={index}
						position={{ lat: local.latitude, lng: local.longitude }}
						onClick={() => {
							setSelectedLocal(local);
						}}
					/>
				))}

				{selectedLocal && (
					<InfoWindow
						position={{
							lat: selectedLocal.latitude,
							lng: selectedLocal.longitude,
						}}
						onCloseClick={() => {
							setSelectedLocal(null);
						}}
					>
						<div>
							<h2>{selectedLocal.nome}</h2>
							<p>Outras informações sobre o local aqui...</p>
						</div>
					</InfoWindow>
				)}
			</GoogleMap>
		</LoadScript>
	);
}

export default Mapa;
