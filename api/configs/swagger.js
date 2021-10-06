const swaggerAutogen = require('swagger-autogen');
const generateDoc = swaggerAutogen();

module.exports = () => {
	const doc = {
		swagger: '2.0',
		info: {
			title: 'Crud de Estabelecimentos',
			description: 'API',
		},
		host: 'localhost:7777/api/v1',
		schemes: ['http'],
		securityDefinitions: {
			bearerAuth: {
				type: 'apiKey',
				scheme: 'bearer',
				bearerFormat: 'JWT',
				name: 'authorization',
			},
		},
		security: [
			{
				bearerAuth: [],
			},
		],
	};

	const outputFile = './swagger-output.json';
	const endpointsFiles = ['./src/routes/authRoute.js']; // A adicionar ainda

	generateDoc(outputFile, endpointsFiles, doc);
};
