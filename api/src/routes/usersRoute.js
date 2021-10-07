const validation = require('../middlewares/validationMiddleware');
const usersSchema = require('../schemas/usersSchema');
const usersSwagger = require('../swaggers/usersSwagger');

module.exports = (app) => {

	const { controllers: { usersController } } = app;

	app.post('/users', usersSwagger.createUsers(), usersController.createUsers);
	app.get('/users', usersSwagger.getUsers(), validation(usersSchema.getUsers), usersController.getUsers);
	app.get('/users/:user_id', usersSwagger.getUsersById(), validation(usersSchema.getUsersById), usersController.getUsersById);
	app.put('/users/:user_id', usersSwagger.updateUsers(), validation(usersSchema.updateUsers), usersController.updateUsers);
	app.delete('/users/:user_id', usersSwagger.deleteUsers(), validation(usersSchema.deleteUsers), usersController.deleteUsers);
};
