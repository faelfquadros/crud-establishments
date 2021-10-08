conn = new Mongo();
db = conn.getDB('crud-establishments');

db.createUser(
	{
		user: 'root',
		pwd: 'root',
		roles: [
			{
				role: 'readWrite',
				db: 'crud-establishments',
			},
		],
	},
);

db.users.insert({
	created_by: 'system',
	updated_by: 'system',
	name: 'Usuário Padrão',
	user: 'admin',
	// password = gd2D2@cjwcvneSMs2Sc_ew // Alterar para nova senha com encript novo
	password: 'e025931cd226c575196f9a9f76de0125', // Alterar para nova senha com encript novo
	is_deleted: false,
	active: true,
});