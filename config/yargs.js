const completado = {
    dafault: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const descripcion = {
    demand: true, //hace que sea obligatorio el campo
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completao de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
    .help()
    .argv

module.exports = {
    argv
}