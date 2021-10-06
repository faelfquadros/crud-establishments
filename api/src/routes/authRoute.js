const validation = require('../middlewares/validationMiddleware.js');
const authSchemas = require('../schemas/authSchema.js');

module.exports = (app) => {
	const { controllers: { authController } } = app;
	app.post('/auth', validation(authSchemas.authentication), authController.authUser);
};
