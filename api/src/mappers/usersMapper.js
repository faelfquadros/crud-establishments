module.exports = {

	filterOne: async ({ _id, name, user, active, created_by, updated_by, created_at, updated_at  }) => {
		return { _id, name, user, active, created_by, updated_by, created_at, updated_at  };
	},

	filter: async (users) => {

		const data = {
			users: users.map(({ _id, name, user, active, created_by, updated_by, created_at, updated_at  }) => {
				return { _id, name, user, active, created_by, updated_by, created_at, updated_at  };
			}),
		};

		return data;
	},
};
