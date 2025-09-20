/**
 * Interfaz para el componente Procesador de Datos.
 * Define el contrato para procesar y validar un conjunto de datos.
 *
 * @interface IProcesadorDatos
 */
class IProcesadorDatos {
    /**
     * Procesa y valida un array de datos.
     * @param {Array<Object>} datos - Los datos de entrada.
     * @returns {Array<Object>} Un array con los datos procesados.
     */
    procesar(datos) {
        throw new Error('El método procesar() debe ser implementado.');
    }
}

module.exports = IProcesadorDatos;