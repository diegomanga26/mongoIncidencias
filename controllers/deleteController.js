import * as deleteService from '../services/deleteService.js'

/**
 * ? TRAINERS:
 */

/**
 * ! CONTROLADOR PARA ELIMINAR TRAINER:
 */

export const deleteTrainerController = async (req, res) => {
    try {
        const { id } = req.query;
        const result = await deleteService.deleteTrainerService(parseInt(id));
        res.status(200).send("Se ha eliminado correctamente");
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    };
};

/**
 * ? INCIDENCIAS:
 */

/**
 * ! CONTROLADOR PARA ELIMINAR INCIDENCIA:
 */

export const deleteIncidenciaController = async (req, res) => {
    try {
        const { id } = req.query;
        const result = await deleteService.deleteIncidenciaService(parseInt(id));
        res.status(200).send("Se ha eliminado correctamente");
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    };
}