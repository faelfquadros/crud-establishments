const validation = require('../middlewares/validationMiddleware');
const establishmentsSchema = require('../schemas/establishmentsSchema');
const establishmentsSwagger = require('../swaggers/establishmentsSwagger');

module.exports = (app) => {

	const { controllers: { establishmentsController } } = app;

	app.post('/establishments', establishmentsSwagger.createEstablishments(), validation(establishmentsSchema.createEstablishments), establishmentsController.createEstablishments);
	app.get('/establishments', establishmentsSwagger.getEstablishments(), validation(establishmentsSchema.getEstablishments), establishmentsController.getEstablishments);
	app.get('/establishments/:establishment_id', establishmentsSwagger.getEstablishmentsById(),  validation(establishmentsSchema.getEstablishmentsById), establishmentsController.getEstablishmentsById);
	app.put('/establishments/:establishment_id', establishmentsSwagger.updateEstablishments(), validation(establishmentsSchema.updateEstablishments), establishmentsController.updateEstablishments);
	app.delete('/establishments/:establishment_id', establishmentsSwagger.deleteEstablishments(), validation(establishmentsSchema.deleteEstablishments), establishmentsController.deleteEstablishments);
};
