import { trainer } from "../collections/trainer.js";

export const getTrainersService = async () => {
    const trainers = new trainer;
    return await trainers.getTrainers();
};
export const getTrainerService = async (id) => {
    const trainerID = new trainer;
    
    return await trainerID.getTrainer(id);
};