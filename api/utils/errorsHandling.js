const  { code, message } = require('./httpStatusCode');
module.exports = {
	badRequest: (error, entity, step) => {
		throw ({
			code: code.BAD_REQUEST,
			error,
			entity,
			step,
			message: message.BAD_REQUEST,
		});
	},
	unauthorized: (error, entity, step) => {
		throw ({
			code: code.UNAUTHORIZED,
			error,
			entity,
			step,
			message: message.UNAUTHORIZED,
		});
	},
	notFound: (error, entity, step) => {
		throw ({
			code: code.NOT_FOUND,
			error,
			entity,
			step,
			message: message.NOT_FOUND,
		});
	},
	unprocessableEntity: (error, entity, step) => {
		throw ({
			code: code.UNPROCESSABLE_ENTITY,
			error,
			entity,
			step,
			message: message.UNPROCESSABLE_ENTITY,
		});
	},
	internalServerError: (error, entity, step) => {
		throw ({
			code: code.INTERNAL_SERVER_ERROR,
			error,
			entity,
			step,
			message: message.INTERNAL_SERVER_ERROR,
		});
	},
};
