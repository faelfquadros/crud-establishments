const { Schema, model } = require('mongoose');

module.exports = () => {

	const establishmentsSchema = new Schema({
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		street: {
			type: String,
			required: true,
		},
		number: {
			type: Number,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		state: {
			type: String,
			required: true,
		},
		country: {
			type: String,
			required: true,
		},
		cnpj: {
			type: String,
			required: true,
		},
		created_by: {
			type: String,
		},
	}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

	return model('establishments', establishmentsSchema);
};
