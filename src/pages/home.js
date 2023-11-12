import React, { useEffect, useState } from "react";
import MainMenu from "../componentes/MainMenu";
import Title from "../componentes/Title";
import CardGrid from "../componentes/CardGrid";
import CategoryCard from "../componentes/CategoryCard";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import {
	ProductCard,
	ProductCardContainer,
	ProductCardGrid,
} from "../componentes/Rights";

export function Home() {
	const [restaurantFilter, setRestaurantFilter] = useState(false);
	const [entertainmentFilter, setEntertainmentFilter] = useState(false);
	const [libraryFilter, setLibraryFilter] = useState(false);
	const [serviceFilter, setServiceFilter] = useState(false);
	const [rights, setRights] = useState([]);

	async function getProducts() {
		try {
			let url = "http://localhost:8000/teste";
			const filters = [];
			if (restaurantFilter) filters.push("restaurant");
			if (entertainmentFilter) filters.push("entertainment");
			if (libraryFilter) filters.push("library");
			if (serviceFilter) filters.push("service");
			if (filters.length > 0) url += "?tag=" + filters.join(",");
			const response = await fetch(url);
			if (!response.ok) {
				setRights([]);
				return;
			}
			const data = await response.json();
			setRights(data);
		} catch (err) {
			// Was not possible to fetch
			setRights([]);
		}
	}

	useEffect(() => {
		if (restaurantFilter) {
			setEntertainmentFilter(false);
			setLibraryFilter(false);
			setServiceFilter(false);
		}
		getProducts();
	}, [restaurantFilter]);
	useEffect(() => {
		if (entertainmentFilter) {
			setRestaurantFilter(false);
			setLibraryFilter(false);
			setServiceFilter(false);
		}
		getProducts();
	}, [entertainmentFilter]);
	useEffect(() => {
		if (libraryFilter) {
			setEntertainmentFilter(false);
			setRestaurantFilter(false);
			setServiceFilter(false);
		}
		getProducts();
	}, [libraryFilter]);
	useEffect(() => {
		if (serviceFilter) {
			setEntertainmentFilter(false);
			setLibraryFilter(false);
			setRestaurantFilter(false);
		}
		getProducts();
	}, [serviceFilter]);

	return (
		<div>
			<NavBar />
			<MainMenu text="Seja bem-vindo ao Inclui+" />

			<Title title="Busque por categorias: " />

			<CardGrid>
				<CategoryCard
					image={require("../imgs/img-restaurante.jpg")}
					subtitle="Restaurantes"
					legend="Imagem de restaurante"
					value={restaurantFilter}
					setValue={setRestaurantFilter}
				/>
				<CategoryCard
					image={require("../imgs/img-cinemark.jpg")}
					subtitle="Entretenimento"
					legend="Imagem de um cinema"
					value={entertainmentFilter}
					setValue={setEntertainmentFilter}
				/>
				<CategoryCard
					image={require("../imgs/img-livraria.jpg")}
					subtitle="Livraria"
					legend="Imagem de uma livraria"
					value={libraryFilter}
					setValue={setLibraryFilter}
				/>
				<CategoryCard
					image={require("../imgs/img-roupas.jpg")}
					subtitle="Serviços"
					legend="Imagem de uma loja de roupa"
					value={serviceFilter}
					setValue={setServiceFilter}
				/>
			</CardGrid>

			<Title title="Direitos em destaque!" />
			<ProductCardGrid>
				<ProductCardContainer>
					{rights.length > 0
						? rights.map((card) => (
								<ProductCard
									key={card.id}
									images={card.image}
									title={card.subtitle}
									description={card.paragraph}
								/>
						  ))
						: null}
				</ProductCardContainer>
			</ProductCardGrid>

			<Footer />
		</div>
	);
}
