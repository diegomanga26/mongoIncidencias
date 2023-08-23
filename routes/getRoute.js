import { Router } from "express";

const getInit = () => {
    const appRouter = Router();
    appRouter.get('/trainers', getController.getAllTrainersController);
    appRouter.get('/trainerID', getController.getTrainerByIdController);

    return appRouter;
}

export default getInit;