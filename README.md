# crud-establishments

- To run the project locally just access /api
- Run "npm i" command to install packages
- Run the command docker-compose up -d to upload the database and create a default user
- To run the project just run the command "npm run dev"
- Access documentation for routes can be found at http://localhost:7777/api/v1/docs

- Adopted business rules
- It was done as follows, the idea was to create a system with user login in which each user can register their establishments and have access to only their establishments.
- For this, the authentication route was created to create the access token of the other routes.
- Two CRUDS were created, one for users and one for establishments.
- The rule was also created that users can only have access to the data of their establishments.