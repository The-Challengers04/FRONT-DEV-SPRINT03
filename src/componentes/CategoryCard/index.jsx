import { memo } from "react";
import * as S from "./styles";

function CategoryCard({ image, subtitle, legend, value, setValue }) {
	return (
		<S.StyledCard onClick={() => setValue(!value)}>
			<S.Image src={image} alt={legend} />
			<S.LegendBox isClicked={value}>
				<S.Subtitle>{subtitle}</S.Subtitle>
			</S.LegendBox>
		</S.StyledCard>
	);
}

export default memo(CategoryCard);
