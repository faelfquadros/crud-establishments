const validation = require('../middlewares/validationMiddleware.js');
const establishmentsSchema = require('../schemas/establishmentsSchema.js');
module.exports = (app) => {

	const { controllers: { establishmentsController } } = app;

	app.post('/establishments', validation(establishmentsSchema.createEstablishments), establishmentsController.createEstablishments);
	app.get('/establishments', validation(establishmentsSchema.getEstablishments), establishmentsController.getEstablishments);
	app.get('/establishments/:establishment_id', validation(establishmentsSchema.getEstablishmentsById), establishmentsController.getEstablishmentsById);
	app.put('/establishments/:establishment_id', validation(establishmentsSchema.updateEstablishments), establishmentsController.updateEstablishments);
	app.delete('/establishments/:establishment_id', validation(establishmentsSchema.deleteEstablishments), establishmentsController.deleteEstablishments);
};
