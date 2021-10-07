const exception = require('../../utils/errorsHandling');
module.exports = ({ repositories: { establishmentsRepository }, mappers: { establishmentsMapper } }) => {

	return {

		create: async ({ name, email, phone, street, number, city, state, country, cnpj, subject }) => {

			const establishmentCreate = await establishmentsRepository.create({
				name,
				email,
				phone,
				street,
				number,
				city,
				state,
				country,
				cnpj,
				created_by: subject,
			});

			return establishmentsMapper.filterOne(establishmentCreate);
		},

		get: async (query) => {
			const establishments = await establishmentsRepository.find({ query });

			if (establishments.length > 0) {
				return establishmentsMapper.filter(establishments);
			}

			return establishments;
		},
		getById: async (establishment_id, subjectEstablishments) => {

			const establishmentsExist = subjectEstablishments.find(se => se === establishment_id);

			if (!establishmentsExist) {
				return exception.unauthorized('Establishment belongs to another user', 'establishmentsService', 'getById');
			}

			const esblishment = await establishmentsRepository.findById(establishment_id);

			if (!esblishment) {
				return exception.notFound('Establishment id not found', 'establishmentsService', 'getById');
			}

			return establishmentsMapper.filterOne(esblishment);
		},
		update: async (query, establishment_id, subjectEstablishments) => {

			const establishmentsExist = subjectEstablishments.find(se => se === establishment_id);

			if (!establishmentsExist) {
				return exception.unauthorized('Establishment belongs to another user', 'establishmentsService', 'update');
			}

			const establishment = await establishmentsRepository.update({ _id: establishment_id }, query);

			if (!establishment) {
				return exception.notFound('Estabilishment id not found', 'establishmentsService', 'update');
			}

			return establishment;
		},
		delete: async (establishment_id, subjectEstablishments) => {

			const establishmentsExist = subjectEstablishments.find(se => se === establishment_id);

			if (!establishmentsExist) {
				return exception.unauthorized('Establishment belongs to another user', 'establishmentsService', 'delete');
			}

			const establishment = await establishmentsRepository.delete({ _id: establishment_id });

			if (!establishment) {
				return exception.notFound('Establishment id not found', 'establishmentsService', 'delete');
			}

			return establishment;
		},
	};
};
