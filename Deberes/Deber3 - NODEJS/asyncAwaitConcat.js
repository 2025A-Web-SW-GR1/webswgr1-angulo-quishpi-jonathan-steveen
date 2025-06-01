// asyncAwaitConcat.js
const fs = require('fs');
const path = './deber.txt';

// 3) IMPLEMENTACIÓN USANDO ASYNC / AWAIT
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

async function concatFechaAsyncAwait(nombreArchivo) {
    try {
        const contenidoActual = await leerArchivoPromise(nombreArchivo);
        const nuevoContenido = contenidoActual + '\n' + new Date().toString();
        await escribirArchivoPromise(nombreArchivo, nuevoContenido);
        console.log('Archivo actualizado con fecha usando ASYNC/AWAIT.');
    } catch (error) {
        console.error('Error (async/await):', error);
    }
}

concatFechaAsyncAwait(path);
