const createUsers = () => {
	return (req, res, next) => {
		/* #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Create user',
            schema: {
                $name: 'Rafael Fernandes',
                $user: 'rafaelfquadros',
                $password: 'testedesenha',
            },
        }
        */
		next();
	};
};

const getUsers = () => {
	return (req, res, next) => {
		next();
	};
};

const getUsersById = () => {
	return (req, res, next) => {
		next();
	};
};

const updateUsers = () => {
	return (req, res, next) => {
		/* #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Update user',
            schema: {
                $name: 'Rafael Fernandes',
                $user: 'rafaelfquadros',
                $password: 'testedesenha',
            },
        }
        */
		next();
	};
};

const deleteUsers = () => {
	return (req, res, next) => {
		next();
	};
};

module.exports = { createUsers, getUsers, getUsersById, updateUsers, deleteUsers };
