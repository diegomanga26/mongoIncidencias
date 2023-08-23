import { Router } from 'express';

const initApi = () => {
    const apiRouter = Router();
    apiRouter.use('/get', getInit());
    return apiRouter;
}

export default initApi;