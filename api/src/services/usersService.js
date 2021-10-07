const crypto = require('../../utils/crypto');
const exception = require('../../utils/errorsHandling');
module.exports = ({ repositories: { usersRepository }, mappers: { usersMapper } }) => {

	return {

		create: async ({ name, user, password, subject }) => {

			const userExist = await usersRepository.find({ query: { user } });

			if (userExist.length) {
				return exception.unprocessableEntity('User already exists', 'usersService', 'create');
			}

			const passwordHash = await crypto.createHash(password);
			const userCreate = await usersRepository.create({
				name,
				user,
				created_by: subject,
				updated_by: subject,
				password: passwordHash,
			});

			return usersMapper.filterOne(userCreate);
		},

		get: async (query) => {
			const users = await usersRepository.find({ query });

			if (users.length > 0) {
				return usersMapper.filter(users);
			}

			return users;
		},

		getById: async (user_id) => {
			const user = await usersRepository.findById(user_id);

			if (!user) {
				return exception.notFound('User id not found', 'usersService', 'getById');
			}

			return usersMapper.filterOne(user);
		},

		update: async (query, options) => {

			if (query.password) {
				query.password = await crypto.createHash(query.password);
			}

			const user = await usersRepository.update(options, query);

			if (!user) {
				return exception.notFound('User id not found', 'usersService', 'update');
			}

			return user;
		},

		delete: async (query) => {
			const user = await usersRepository.delete(query);

			if (!user) {
				return exception.notFound('User id not found', 'usersService', 'delete');
			}

			return user;
		},
	};
};
