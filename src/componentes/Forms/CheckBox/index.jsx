import React, { memo } from "react";
import { Form } from "react-bootstrap";

const CheckBoxComponent = ({ label, value, setValue, id }) => {
	return (
		<Form.Check
			type="checkbox"
			label={label}
			value={value}
			onChange={(e) => {
				setValue(e.target.value);
			}}
			id={`formHorizontalCheckbox${id}`}
		/>
	);
};

export default memo(CheckBoxComponent);
