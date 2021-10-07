const validation = require('../middlewares/validationMiddleware');
const authSchemas = require('../schemas/authSchema');
const authSwagger = require('../swaggers/authSwagger');

module.exports = (app) => {
	const { controllers: { authController } } = app;
	app.post('/auth', authSwagger.auth(), validation(authSchemas.authentication), authController.authUser);
};
