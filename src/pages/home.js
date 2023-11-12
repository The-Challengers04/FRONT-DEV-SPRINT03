import React from "react";
import MainMenu from "../componentes/MainMenu";
import Title from "../componentes/Title";
import CardGrid from "../componentes/CardGrid";
import CategoryCard from "../componentes/CategoryCard";
import RightCard from "../componentes/RightCard";
import categories from "../mocks/Categories.mock";
import rights from "../mocks/Rights.mock";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";

export function Home() {
	return (
		<div>
			<NavBar />
			
			<MainMenu text="Seja bem-vindo ao Inclui+" />

			<Title title="Busque por categorias: " />

			<CardGrid>
				{categories.map((card, index) => (
					<CategoryCard
						key={index}
						image={card.image}
						subtitle={card.subtitle}
						legend={card.legend}
					/>
				))}
			</CardGrid>

			<Title title="Direitos em destaque!" />
			<CardGrid>
				{rights.map((card, index) => (
					<RightCard
						key={index}
						image={card.image}
						subtitle={card.subtitle}
						legend={card.legend}
						paragraph={card.paragraph}
					/>
				))}
			</CardGrid>

			<Footer />
		</div>
	);
}
