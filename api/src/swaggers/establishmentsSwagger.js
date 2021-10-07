const createEstablishments = () => {
	return (req, res, next) => {
		/* #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Create establishment',
            schema: {
                "name": "Empresa teste 3",
                "email": "teste@gmail.com",
                "phone": "1234567894",
                "street": "Rua Amazonas",
                "number": 123,
                "city": "Divinópolis",
                "state": "Minas Gerais",
                "country": "Brasil",
                "cnpj": "12345678978945"
            },
        }
        */
		next();
	};
};

const getEstablishments = () => {
	return (req, res, next) => {
		next();
	};
};

const getEstablishmentsById = () => {
	return (req, res, next) => {
		next();
	};
};

const updateEstablishments = () => {
	return (req, res, next) => {
		/* #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Update user',
            schema: {
                "name": "Empresa teste 3",
                "email": "teste@gmail.com",
                "phone": "1234567894",
                "street": "Rua Amazonas",
                "number": 123,
                "city": "Divinópolis",
                "state": "Minas Gerais",
                "country": "Brasil",
                "cnpj": "12345678978945"
            },
        }
        */
		next();
	};
};

const deleteEstablishments = () => {
	return (req, res, next) => {
		next();
	};
};

module.exports = { createEstablishments, getEstablishments, getEstablishmentsById, updateEstablishments, deleteEstablishments };
