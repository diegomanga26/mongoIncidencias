import { Router } from "express";
import * as getController from '../controllers/getController.js'

const getInit = () => {
    const appRouter = Router();
    appRouter.get('/trainers', getController.getTrainersController);
    appRouter.get('/trainerID', getController.getTrainerController);

    return appRouter;
}

export default getInit;