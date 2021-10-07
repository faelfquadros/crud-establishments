const Joi = require('joi');

const headers = {
	headers: Joi.object()
		.keys({
			authorization: Joi.string()
				.required(),
		}),
};

const schemas = {
	createEstablishments: Joi.object()
		.keys({
			headers,
			body: Joi.object()
				.keys({
					name: Joi.string()
						.required(),
					email: Joi.string()
						.email()
						.required(),
					phone: Joi.string()
						.min(10)
						.max(11)
						.required(),
					street: Joi.string()
						.required(),
					number: Joi.number()
						.required(),
					city: Joi.string()
						.required(),
					state: Joi.string()
						.required(),
					country: Joi.string()
						.required(),
					cnpj: Joi.string()
						.min(14)
						.max(14)
						.required(),
				}),
		}),

	getEstablishments: Joi.object()
		.keys({
			headers,
		}),

	getEstablishmentsById: Joi.object()
		.keys({
			headers,
			params: Joi.object()
				.keys({
					establishment_id: Joi.string()
						.required(),
				}),
		}),

	updateEstablishments: Joi.object()
		.keys({
			headers,
			params: Joi.object()
				.keys({
					establishment_id: Joi.string()
						.required(),
				}),
			body: Joi.object()
				.keys({
					name: Joi.string(),
					email: Joi.string()
						.email(),
					phone: Joi.string()
						.min(10)
						.max(11),
					street: Joi.string(),
					number: Joi.number(),
					city: Joi.string(),
					state: Joi.string(),
					country: Joi.string(),
				}),
		}),

	deleteEstablishments: Joi.object()
		.keys({
			headers,
			params: Joi.object()
				.keys({
					establishment_id: Joi.string()
						.required(),
				}),
		}),
};

module.exports = schemas;
