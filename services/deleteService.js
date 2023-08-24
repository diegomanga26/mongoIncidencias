import { trainer } from "../collections/trainer.js";
import { incidencia } from "../collections/incidencia.js"

/**
 * ! SERVICIOS DELETE DE "trainer":
 */

export const deleteTrainerService = async (id) => {
    const trainerID = new trainer;
    return await trainerID.deleteTrainer(id);
};

/**
 * ! SERVICIOS DELETE DE "incidencia":
 */

export const deleteIncidenciaService = async (id) => {
    const incidenciaID = new incidencia;
    return await incidenciaID.deleteIncidencia(id);
};