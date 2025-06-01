// callbackConcat.js
const fs = require('fs');
const path = './deber.txt';

// 1) IMPLEMENTACIÓN USANDO CALLBACKS
fs.readFile(path, 'utf-8', (err, contenido) => {
    if (err) {
        console.error('Error al leer el archivo (callbacks):', err);
        return;
    }

    const nuevaData = contenido + '\n' + new Date().toString();

    fs.writeFile(path, nuevaData, (errEscritura) => {
        if (errEscritura) {
            console.error('Error al escribir el archivo (callbacks):', errEscritura);
            return;
        }
        console.log('Archivo actualizado con fecha usando CALLBACKS.');
    });
});
