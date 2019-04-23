const fs = require('fs');
const color = require('colors');

let listadoporhacer = [];

const guardarbd = () => {
    let data = JSON.stringify(listadoporhacer) //convierte el objeto en un json
    fs.writeFile('db/data.json', data, (err) => { //destino - datos a cargar - manejo de error
        if (err) throw new Error('No se puedo grabar', err);
    })
}

const cargardb = () => {
    try {
        listadoporhacer = require('../db/data.json'); //va a buscar el dato al archivo
    } catch (error) {
        listadoporhacer = [];
    }

}

const crear = (descripcion) => {

    cargardb();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoporhacer.push(porHacer); //agrega a la lista un nuevo registro

    guardarbd();

    return porHacer;
}

const getListado = () => {
    cargardb();
    return listadoporhacer;
}

const actualizar = (descripcion, completado = true) => {
    cargardb();

    let index = listadoporhacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoporhacer[index].completado = completado;
        guardarbd();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargardb();

    let nuevolistado = listadoporhacer.filter(tarea => { //filter: nos devuelve un vector con los elementos que no sean los que le pase
        return tarea.descripcion !== descripcion;
    });

    if (nuevolistado.length === listadoporhacer.length) {
        return false
    } else {
        listadoporhacer = nuevolistado;
        guardarbd();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}