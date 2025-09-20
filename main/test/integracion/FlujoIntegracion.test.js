const ProcesadorDatos = require('../../src/components/ProcesadorDatos');
const GeneradorReporte = require('../../src/components/GeneradorReporte');
const GuardadorArchivo = require('../../src/components/GuardadorArchivo');

describe('Flujo de Integración Completo', () => {
    let procesador;
    let generador;
    let guardador;

    beforeEach(() => {
        procesador = new ProcesadorDatos();
        generador = new GeneradorReporte();
        guardador = new GuardadorArchivo();
    });

    test('debe procesar, generar un reporte y simular el guardado correctamente', () => {
        // 1. Datos de entrada (simulando los datos crudos)
        const datosCrudos = [
            { id: 1, nombre: 'Producto A', valor: 100 },
            { id: 2, nombre: 'Producto B', valor: null }, // Este dato se debe filtrar
            { id: 3, nombre: 'Producto C', valor: 250 },
        ];

        // 2. Ejecutar el flujo completo de los tres componentes
        const datosProcesados = procesador.procesar(datosCrudos);
        const reporteGenerado = generador.generar(datosProcesados);
        const guardadoExitoso = guardador.guardar('reporte_final.txt', reporteGenerado);

        // 3. Validaciones
        expect(datosProcesados.length).toBe(2); // Valida que el ProcesadorDatos haya funcionado
        expect(reporteGenerado).toContain('Valor total: $350.00'); // Valida que el GeneradorReporte haya funcionado
        expect(guardadoExitoso).toBe(true); // Valida que el GuardadorArchivo haya funcionado
    });
});