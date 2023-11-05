import React from "react";

export default function FilterItem({ label, value, setValue }) {
	return (
		<div>
			<input
				type="checkbox"
				value={value}
				onChange={(e) => setValue(e.target.checked)}
			/>
			<label>{label}</label>
		</div>
	);
}
