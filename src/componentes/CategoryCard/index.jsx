import "./sass.scss"

export default function CategoryCard({ image, subtitle, legend }) {
	return (
		<div className="styled-card">
			<img className="image" src={image} alt={legend} />
			<div className="legend-box">
				<h2 className="subtitle">{subtitle}</h2>
			</div>
		</div>
	);
}
