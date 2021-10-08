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