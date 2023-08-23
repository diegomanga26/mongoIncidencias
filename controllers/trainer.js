import { collectionGen } from "../db/atlas.js";

class Trainer {
    _id;
    id_trainer;
    nombre;
    email_personal;
    email_corporativo;
    telefono_movil;
    telefono_residencia;
    telefono_empresa;
    telefono_movil_empresarial;
    constructor() { }
    async connect() {
        try {
            const result = await collectionGen('trainer');
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getAllTrainers() {
        try {
            const connection = await this.connect();
            const result = await connection.find().toArray();
            return result;
        } catch (error) {
            throw error
        }
    }
    async getTrainerById(id) {
        try {
            const connection = await this.connect();
            const result = await connection.find(
                {
                    id_trainer: id
                },
                {
                    _id: 0
                }
            ).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export { Trainer };