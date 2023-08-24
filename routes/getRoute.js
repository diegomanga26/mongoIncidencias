import { Router } from "express";
import * as getController from '../controllers/getController.js';
import { limitGet } from "../middlewares/limit.js";
import { validateJWT,tokenJWT } from "../middlewares/mwJWT.js";

const getInit = () => {
    const appRouter = Router();
    appRouter.get('/trainers', validateJWT, limitGet(),getController.getTrainersController);
    appRouter.get('/trainerID', validateJWT, limitGet(), getController.getTrainerController);
    appRouter.get('/incidencias', validateJWT, limitGet(), getController.getIncidenciasController);
    appRouter.get('/incidenciaID', validateJWT, limitGet(), getController.getIncidenciaController);

    return appRouter;
}

export default getInit;