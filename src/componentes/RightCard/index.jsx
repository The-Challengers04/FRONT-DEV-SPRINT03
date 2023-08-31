import * as S from "./styles";

export default function RightCard({ image, subtitle, legend, paragraph }) {
	return (
		<S.Card>
			<S.Image src={image} alt={legend} width="200" height="300" />
			<S.LegendBox>
				<S.Subtitle>{subtitle}</S.Subtitle>
				<S.Paragraph>{paragraph}</S.Paragraph>
			</S.LegendBox>
		</S.Card>
	);
}
