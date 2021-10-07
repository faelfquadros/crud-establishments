const { code: { OK, CREATED } } = require('../../utils/httpStatusCode');

module.exports = ({ services: { establishmentsService } }) => {

	return {
		getEstablishments: async (req, res, next) => {
			try {
				const { query, headers: { subject } } = req;
				const response = await establishmentsService.get({ ...query, created_by: subject });
				res.status(OK)
					.json({ data: response });
			} catch (error) {
				next(error);
			}
		},

		getEstablishmentsById: async (req, res, next) => {
			try {
				const { params: { establishment_id }, headers: { subject } } = req;
				const response = await establishmentsService.getById(establishment_id, subject);
				res.status(OK)
					.json({ data: response });
			} catch (error) {
				next(error);
			}
		},

		createEstablishments: async (req, res, next) => {
			try {
				const { body, headers: { subject } } = req;
				const response = await establishmentsService.create({ ...body, subject });
				res.status(CREATED)
					.json({ data: response });
			} catch (error) {
				next(error);
			}
		},

		updateEstablishments: async (req, res, next) => {
			try {
				const { body, params: { establishment_id }, headers: { subject } } = req;
				const response = await establishmentsService.update(body, { _id: establishment_id }, subject);
				res.status(OK)
					.json({ data: response });
			} catch (error) {
				next(error);
			}
		},

		deleteEstablishments: async (req, res, next) => {
			try {
				const { params: { establishment_id }, headers: { subject } } = req;
				const response = await establishmentsService.delete({ _id: establishment_id }, subject);
				res.status(OK)
					.json({ data: response });
			} catch (error) {
				next(error);
			}
		},
	};
};
