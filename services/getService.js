import { trainer } from "../collections/trainer.js";
import { incidencia } from "../collections/incidencia.js"

/**
 * ! SERVICIOS DE "trainer":
 */

export const getTrainersService = async () => {
    const trainers = new trainer;
    return await trainers.getTrainers();
};
export const getTrainerService = async (id) => {
    const trainerID = new trainer;
    return await trainerID.getTrainer(id);
};

/**
 * ! SERVICIOS DE "incidencia"
 */

export const getIncidenciasService = async () => {
    const incidencias = new incidencia;
    return await incidencias.getIncidencias();
};
export const getIncidenciaService = async (id) => {
    const incidenciaID = new incidencia;
    return await incidenciaID.getIncidencia(id);
};