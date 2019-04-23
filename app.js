//const argv = require('yargs').argv;
const argv = require(`./config/yargs`).argv;
const porhacer = require(`./por-hacer/por-hacer`);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porhacer.crear(argv.descripcion);
        break;

    case 'listar':
        let listado = porhacer.getListado();

        for (const tarea of listado) {
            console.log('===================='.green);
            console.log('Tarea: ', tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('===================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = porhacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porhacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log(`Comando no reconocido`);
}