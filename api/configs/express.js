const express = require ('express');
const consign = require ('consign');
const cors = require ('cors');
const mongoose = require ('./mongoose.js');
const logger = require ('./logger.js');
const swaggerUi = require ('swagger-ui-express');
const swaggerFile = require ('../swagger-output.json');
const methodOverride = require ('method-override');
const swagger = require ('./swagger.js');

module.exports = () => {
	const app = express();
	app.logger = logger;
	mongoose();
	swagger();
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(methodOverride());
	app.use(cors());
	app.options('*', cors());
	app.use('/api/v1', app._router);
	app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

	consign({ cwd: 'src', verbose: true })
		.include('models')
		.then('repositories')
		.then('mappers')
		.then('services')
		.then('controllers')
		.then('middlewares')
		.then('routes')
		.into(app);

	return app;
};
