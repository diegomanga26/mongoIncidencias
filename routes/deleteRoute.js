import { Router } from "express";
import * as deleteController from '../controllers/deleteController.js'
import { limitGet } from "../middlewares/limit.js";

const deleteInit = () => {
    const appRouter = Router();
    appRouter.delete('/trainerID', limitGet(), deleteController.deleteTrainerController);
    appRouter.delete('/incidenciaID', limitGet(), deleteController.deleteIncidenciaController);

    return appRouter;
}

export default deleteInit;