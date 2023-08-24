import * as getService from '../services/getService.js';

/**
 * ? TRAINERS:
 */

/**
 * ! CONTROLADOR PARA TRAER TODOS LOS TRAINERS:
 */

export const getTrainersController = async (req, res) => {
    try {
        const result = await getService.getTrainersService();
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

/**
 * ! CONTROLADOR PARA TRAER TRAINER POR "id":
 */

export const getTrainerController = async (req, res) => {
    try {
        const { id } = req.query;
        const result = await getService.getTrainerService(parseInt(id));
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
        
    }
}

/**
 * ? INCIDENCIAS:
 */

/**
 * ! CONTROLADOR PARA TRAER TODAS LAS INCIDENCIAS:
 */

export const getIncidenciasController = async (req, res) => {
    try {
        const result = await getService.getIncidenciasService();
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

/**
 * ! CONTROLADOR PARA TRAER INCIDENCIA POR "id":
 */

export const getIncidenciaController = async (req, res) => {
    try {
        const { id } = req.query;
        const result = await getService.getIncidenciaService(parseInt(id));
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);

    }
}