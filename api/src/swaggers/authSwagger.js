const auth = () => {
	return (req, res, next) => {
		/* #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Authentication',
            schema: {
                $user: 'rafaelfquadros',
                $password: 'testedesenha',
            }
        } */
		next();
	};
};

module.exports = { auth };
