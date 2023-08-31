import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileCard({ icon, subtitle }) {
	return (
		<S.Card>
			<FontAwesomeIcon className="icon" icon={icon} />
			<S.Subtitle>{subtitle}</S.Subtitle>
		</S.Card>
	);
}
