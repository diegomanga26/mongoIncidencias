import { collGenerator } from "../db/atlas.js";

export class trainer {
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

    /**
     * ! RETORNA LA CONEXIÓN A LA COLECCIÓN:
     * @returns result;
     */

    async connection() {
        try {
            const result = await collGenerator('trainer');
            return result;
        } catch (error) {
            throw error;
        }
    }

    /**
     * ! FUNCIÓN PARA RETORNAR TODA LA COLECCIÓN DE "trainer":
     * @returns result;
     */

    async getTrainers() {
        try {
            const connection = await this.connection();
            const result = await connection.find().toArray();
            return result;
        } catch (error) {
            throw error
        }
    }

    /**
     * ! FUNCIÓN PARA RETORNAR UNA TRAINER ESPECÍFICO POR "id":
     * @param {id} *Se pasa el "id" para hacer una busqueda específica de trainer por el mismo.
     * @returns result;
     */

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


    /**
     * ! FUNCIÓN PARA ELIMINAR UNA INCIDENCIA POR "id":
     */

    async deleteTrainer(id) {
        try {
            const connection = await this.connection();
            const result = await connection.deleteOne(
                {
                    id: id
                }
            )
            return result;
        } catch (error) {
            throw error;
        }
    }
}