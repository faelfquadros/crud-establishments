const port = process.env.APPLICATION_PORT;
const app = require('./configs/express.js')();

app.listen(port, () => console.log(`Crud de Estabelecimentos starting... \nURL: http://localhost:${port} \nEnviroment: ${process.env.NODE_ENV}`));