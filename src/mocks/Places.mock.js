const Places = [
	{
		id: 1,
		name: "Praça da Sé",
		lat: -23.5505199,
		lng: -46.6333094,
		accessibility: {
			ramp: true,
			elevator: false,
			braileMaterial: false,
			accessibleRestrooms: true,
			accessibleParking: false,
		},
	},
	{
		id: 2,
		name: "Praça da República",
		lat: -23.543178,
		lng: -46.642592,
		accessibility: {
			ramp: true,
			elevator: true,
			braileMaterial: true,
			accessibleRestrooms: true,
			accessibleParking: true,
		},
	},
	{
		id: 3,
		name: "Praça da Liberdade",
		lat: -23.556686,
		lng: -46.635803,
		accessibility: {
			ramp: true,
			elevator: false,
			braileMaterial: false,
			accessibleRestrooms: true,
			accessibleParking: true,
		},
	},
];

export default Places;
