import { collGenerator } from "../db/atlas.js";

class trainer {
    _id;
    id;
    nombre;
    email_personal;
    email_corporativo;
    telefono_movil;
    telefono_residencia;
    telefono_empresa;
    telefono_movil_empresarial;
    constructor() { }
    async connection() {
        try {
            const result = await collGenerator('trainer');
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getTrainers() {
        try {
            const connection = await this.connection();
            const result = await connection.find().toArray();
            return result;
        } catch (error) {
            throw error
        }
    }
    async getTrainer(id) {
        try {
            const connection = await this.connection();
            const result = await connection.find(
                {
                    id: id
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

export { trainer };