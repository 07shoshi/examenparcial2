const IProcesadorDatos = require('../interfaces/IProcesadorDatos');

class ProcesadorDatos extends IProcesadorDatos {
    /**
     * Procesa y valida un array de datos.
     * @param {Array<Object>} datos - Los datos de entrada.
     * @returns {Array<Object>} Un array con los datos procesados.
     */
    procesar(datos) {
        if (!Array.isArray(datos)) {
            throw new Error('La entrada debe ser un array.');
        }

        return datos.filter(item => {
            // Un dato es válido si tiene 'id', 'nombre' y 'valor'
            return item && item.id && item.nombre && typeof item.valor === 'number';
        });
    }
}

module.exports = ProcesadorDatos;