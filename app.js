import dotenv from 'dotenv';
import express from 'express';
import initApi from './routes/index.js';

dotenv.config();
let appExpress = express();

appExpress.use(express.json());
appExpress.use('/api', initApi());

let config = JSON.parse(process.env.myServer);
appExpress.listen(config, () => {
    console.log(`http://${config.hostname}:${config.port}`);
});