import { Router } from 'express';
import getInit from './getRoute.js';
import deleteInit from './deleteRoute.js';
import { tokenJWT } from '../middlewares/mwJWT.js';

const initApi = () => {
    const apiRouter = Router();
    apiRouter.use('/get', getInit());
    apiRouter.use('/token', tokenJWT);
    apiRouter.use('/delete', deleteInit());
    return apiRouter;
}

export default initApi;