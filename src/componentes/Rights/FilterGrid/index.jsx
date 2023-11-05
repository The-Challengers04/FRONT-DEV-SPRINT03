import React from "react";
import "./style.css";

export default function FilterGrid({ children }) {
	return (
		<div className="filters">
			<h2>Filtros</h2>
			{children}
		</div>
	);
}
