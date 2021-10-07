const jwt = require('jsonwebtoken');
const exception = require('../../utils/errorsHandling.js');

module.exports = (app) => {
	const { repositories: { establishmentsRepository } } = app;
	app.use(async (req, res, next) => {
		try {
			const { headers } = req;

			if (req.originalUrl === '/api/v1/auth' || req.originalUrl === '/api/v1/docs/') {
				return next();
			}

			jwt.verify(headers.authorization, process.env.JWT_SECRET, { algorithm: 'HS256' }, async (err, decoded) => {
				try {
					if (err || !decoded.user) {
						exception.unauthorized('Invalid token', 'validation', 'jwt.verify');
					}
					headers.subject = decoded.user;

					const userEstabilishments = await establishmentsRepository.find({ query: { created_by: decoded.user } });

					headers.subjectEstablishments = [];
					userEstabilishments.map(ue => headers.subjectEstablishments.push(ue._id.toString()));

					next();
				} catch (err) {
					next(err);
				}
			});
		} catch (err) {
			next(err);
		}
	});
};
