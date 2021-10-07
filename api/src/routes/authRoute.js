const validation = require('../middlewares/validationMiddleware.js');
const authSchemas = require('../schemas/authSchema.js');

module.exports = (app) => {
	const { controllers: { authController } } = app;
	app.post('/auth', (req, res, next) => {
		/* #swagger.parameters['obj'] = {
			in: 'body',
			description: 'Authentication',
			schema: {
				$user: 'rafaelfquadros',
				$password: 'testedesenha',
			}
		} */
		next();
	}, validation(authSchemas.authentication), authController.authUser);
};
