module.exports = {

	filterOne: async ({ _id, name, email, phone, street, number, city, state, country, cnpj, created_by, created_at, updated_at }) => {
		return { _id, name, email, phone, street, number, city, state, country, cnpj, created_by, created_at, updated_at };
	},

	filter: async (establishments) => {

		const data = {
			establishments: establishments.map(({ _id, name, email, phone, street, number, city, state, country, cnpj, created_by, created_at, updated_at }) => {
				return { _id, name, email, phone, street, number, city, state, country, cnpj, created_by, created_at, updated_at };
			}),
		};

		return data;
	},
};
