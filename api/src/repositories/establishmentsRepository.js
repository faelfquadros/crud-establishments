module.exports = ({ models: { establishmentsModel } }) => {
	return {
		find: async ({ query = {}, options = {} }) => {
			return establishmentsModel.find(query, options);
		},

		findById: async (user_id) => {
			return establishmentsModel.findById(user_id);
		},

		create: async (data) => {
			return establishmentsModel.create(data);
		},

		update: async (options = {}, query = {}) => {
			return establishmentsModel.updateOne(options, query);
		},

		delete: async (query = {}) => {
			return establishmentsModel.deleteOne(query);
		},
	};
};
