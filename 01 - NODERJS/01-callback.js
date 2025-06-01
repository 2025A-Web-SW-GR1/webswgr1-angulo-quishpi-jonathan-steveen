//Es el lado del servidor
const fs = require('fs');
console.log('Primero');
fs.readFile(
    './a.txt', //path
    'utf-8', //codificación
    (errorLectura, contenido) => {
        if(errorLectura){
            console.error('Error al leer el archivo:', errorLectura);
        } else {
            console.log('Tercero ', contenido);
        }
    }
)
console.log('Segundo');