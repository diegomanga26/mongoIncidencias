import * as getService from '../services/getService.js';

export const getTrainersController = async (req, res) => {
    try {
        const result = await getService.getTrainersService();
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

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