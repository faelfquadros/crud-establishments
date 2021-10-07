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
		getById: async (establishment_id, subject) => {

			const establishmentsExist = await establishmentsRepository.find({ query: { _id: establishment_id, created_by: subject } });

			if (!establishmentsExist.length) {
				return exception.unauthorized('Establishment belongs to another user', 'establishmentsService', 'getById');
			}

			const esblishment = await establishmentsRepository.findById(establishment_id);

			if (!esblishment) {
				return exception.notFound('Establishment id not found', 'establishmentsService', 'getById');
			}

			return establishmentsMapper.filterOne(esblishment);
		},
		update: async (query, options, subject) => {

			const establishmentsExist = await establishmentsRepository.find({ query: { ...options, created_by: subject } });

			if (!establishmentsExist.length) {
				return exception.unauthorized('Establishment belongs to another user', 'establishmentsService', 'update');
			}

			const establishment = await establishmentsRepository.update(options, query);

			if (!establishment) {
				return exception.notFound('Estabilishment id not found', 'establishmentsService', 'update');
			}

			return establishment;
		},
		delete: async (query, subject) => {

			const establishmentsExist = await establishmentsRepository.find({ query: { ...query, created_by: subject } });

			if (!establishmentsExist.length) {
				return exception.unauthorized('Establishment belongs to another user', 'establishmentsService', 'delete');
			}

			const establishment = await establishmentsRepository.delete(query);

			if (!establishment) {
				return exception.notFound('Establishment id not found', 'establishmentsService', 'delete');
			}

			return establishment;
		},
	};
};
