const fs = require('fs');

function promesaEsPar(numero){
    const miPriemeraPromesa = new Promise(
        (resolve, reject) => {
            if (numero % 2 === 0){
                resolve('El número es par');
            } else {
                reject('El número es impar');
            }
        }
    )
}

function promesaElevarAlCuadrado(numero){
    return new Promise( numero * numero)
}   

function leerArchivo(nombreDelArchivo){
        return new Promise((resolve, reject) => {
            fs.readFile(
                nombreDelArchivo,
                'utf-8',
                (errorLectura, contenido) => {
                    if (errorLectura) {
                        reject('Error al leer el archivo: ' + errorLectura);
                    } else {
                        resolve(contenido);
                    }
                }
            );
        });
    }

promesaEsPar(4)
    .then(
        (respuestaEsPar) =>{
            console.log('Respuesta es Par',respuestaEsPar);
            return promesaElevarAlCuadrado(respuestaEsPar);
        }
    )
    .then(
        (respuestaAElevarAlCuadrado) => {
            console.log('Elevado: ', respuestaAElevarAlCuadrado);
        }
    )
    .catch(
        (respuestaError) => {
            console.error('No es par: ', respuestaError);
        }
    );

    leerArchivoPromise('./a.txt')
    .then(
        (contenido) => {
            console.log('Contenido del archivo: ', contenido);
        }
    ).catch(
        (error) => {
            console.error('Error al leer el archivo: ', error);
        }
    );

    async function correLogicaPromesas(){
        try{
            const respuestaLeerArchivo = await leerArchivo('./a.txt');
            console.log('1) Contenido del archivo: ', respuestaLeerArchivo);
            const respuestaLeerArchivo2 = await leerArchivo('./a.txt');
            console.log('2) Contenido del archivo: ', respuestaLeerArchivo2);
            await leerArchivo('./b.txt');
        } catch (error) {
            console.log('3) Error al leer el archivo: ', error);
        }
    }

    correLogicaPromesas().then().catch(); //async-await transforma a la funcion en una promesa

    const correLogicaPromesas2 = async () => {}

    