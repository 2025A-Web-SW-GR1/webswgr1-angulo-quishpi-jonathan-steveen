// promesaConcat.js
const fs = require('fs');
const path = './deber.txt';

// 2) IMPLEMENTACIÓN USANDO PROMESAS (then / catch)
function leerArchivoPromise(nombreArchivo) {
    return new Promise((resolve, reject) => {
        fs.readFile(nombreArchivo, 'utf-8', (err, contenido) => {
            if (err) {
                reject(err);
            } else {
                resolve(contenido);
            }
        });
    });
}

function escribirArchivoPromise(nombreArchivo, contenido) {
    return new Promise((resolve, reject) => {
        fs.writeFile(nombreArchivo, contenido, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

leerArchivoPromise(path)
    .then((contenidoActual) => {
        const nuevoContenido = contenidoActual + '\n' + new Date().toString();
        return escribirArchivoPromise(path, nuevoContenido);
    })
    .then(() => {
        console.log('Archivo actualizado con fecha usando PROMESAS (then/catch).');
    })
    .catch((err) => {
        console.error('Error (promesas then/catch):', err);
    });
