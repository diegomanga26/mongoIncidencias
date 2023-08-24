import { collGenerator } from "../db/atlas.js";

export class incidencia {
    _id;
    id;
    trainerId;
    categoria;
    tipo_incidencia;
    fecha_reporte;
    area_incidencia;
    equipo_averiado;
    codigo_equipo;
    descripcion;

    constructor() { };

    /**
     * ! RETORNA LA CONEXIÓN A LA COLECCIÓN:
     * @returns result;
     */

    async connection() {
        try {
            const result = await collGenerator("incidencia");
            return result;
        } catch (error) {
            throw error;
        }
    }

    /**
     * ! FUNCIÓN PARA RETORNAR TODA LA COLECCIÓN DE "incidencia":
     * @returns result;
     */

    async getIncidencias() {
        try {
            const connection = await this.connection();
            const result = await connection.find().toArray();
            return result;
        } catch (error) {
            throw error
        }
    }

    /**
     * ! FUNCIÓN PARA RETORNAR UNA INCIDENCIA ESPECÍFICA POR "id":
     * @param {id} *Se pasa el "id" para hacer una busqueda específica de la incidencia por el mismo.
     * @returns result;
     */

    async getIncidencia(id) {
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

    async deleteIncidencia(id) {
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
