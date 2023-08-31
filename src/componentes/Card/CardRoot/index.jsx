import variants from "./styles";

const CardRoot = ({ variant, children }) => {
	const Card = variants[variant];
	return <Card>{children}</Card>;
};
