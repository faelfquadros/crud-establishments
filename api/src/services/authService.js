const crypto = require('../../utils/crypto');
const exception = require('../../utils/errorsHandling');
const jwt = require('jsonwebtoken');

module.exports = ({ repositories: { usersRepository } }) => {

	return {
		authentication: async ({ user, password }) => {

			const passwordHash = await crypto.createHash(password);
			const userExist = await usersRepository.find({ query: { user, password: passwordHash } });

			if (!userExist.length || !userExist[0].active) {
				exception.unauthorized('Invalid user', 'authService', 'authentication');
			}

			const { name, active } = userExist.shift();

			const token = jwt.sign({ name, user, active }, process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: '1h' });

			return { token };
		},
	};
};
