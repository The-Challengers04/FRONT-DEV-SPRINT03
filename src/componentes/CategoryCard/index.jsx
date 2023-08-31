import * as S from "./styles";

export default function CategoryCard({ image, subtitle, legend }) {
	return (
		<S.StyledCard>
			<S.Image src={image} alt={legend} />
			<S.LegendBox>
				<S.Subtitle>{subtitle}</S.Subtitle>
			</S.LegendBox>
		</S.StyledCard>
	);
}
