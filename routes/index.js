import { Router } from 'express';
import getInit from './getRoute.js';

const initApi = () => {
    const apiRouter = Router();
    apiRouter.use('/get', getInit());
    return apiRouter;
}

export default initApi;