//Typescript file
console.log("Hola Typescript");
let nombre = "algo"; // NO VAMOS A USAR VAR NUNCA
let nombres = "Adrian";
nombres = "A";
nombres = 'C';
// nombres = 1;

let nombreTS: string = "";
console.log(typeof nombres, "nombres");

let numeros = 1;
let numerosTS: number = 1;
console.log(typeof numeros, "numeros");

numeros = 1.1; // Decimales
console.log(typeof numeros, "numeros decimales");

let booleanos = true;
let booleanosTS: boolean = false;
booleanos = false;
console.log(typeof booleanos, "booleanos");

let nulos = null;
let nulosTS: null = null;
console.log(typeof nulos, "nulos");

let arreglos = [];
let arreglosTS: number[] = [];
let arreglosTS2: Array<number> = [];
console.log(typeof arreglos, "arreglos");

let objetos = {};
let objetosTS: object = {};
console.log(typeof objetos, "objetos");

let undefineds = undefined;
let undefinedsTS: undefined = undefined;
console.log(typeof undefineds, "undefineds");

// Truthy y Falsy
let truthyFalsy: any;

truthyFalsy = "";
if (truthyFalsy) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

truthyFalsy = "a";
if (truthyFalsy) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

truthyFalsy = -1;
if (truthyFalsy) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

truthyFalsy = 0;
if (truthyFalsy) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

truthyFalsy = 1;
if (truthyFalsy) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

truthyFalsy = null;
if (truthyFalsy) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

truthyFalsy = {};
if (truthyFalsy) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

truthyFalsy = [];
if (truthyFalsy) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

//Objetos
const User:any = {
    "nombre": "Yo",
    "apellido": "Yo",
    edad: 20,
    estado: true,
    zapatos: undefined,
    ropa:{
        color: "plomo",
        talla: 40
    },
    mascotas: ["ola", "ola"]
};

//acceso a propiedades
console.log(User);
User.nombre
User["apellido"]
User.nombre = "Otro";
User["apellido"] = "Otro";

delete User.estado;
User.estado = undefined;

//Valores por valor o por referencia
//Valores por valor
//Primitivas: number, string y boolean
let a = 1;
let b = a;
console.log(a); //1
console.log(b); //1
a = a + 1;
console.log(a); //2
console.log(b); //1
//Valores por referencia
let notas = {
    total: 10,
}

let notas2 = notas;
notas2.total = notas2.total + 1;
console.log(notas); //11
console.log(notas2); //11
//como clonar
let notas1 = Object.assign({}, notas); //clonamos el objeto
let arregloACopiar = [1, 2, 3];
let arregloCopiado = Object.assign(
    [], arregloACopiar
); //clonamos el arreglo
notas1.total = notas1.total + 1;
console.log(notas); //11
console.log(notas2); //11
console.log(notas1); //12

//Arreglos
const arregloEjemplar = [1, 2, 3, 4, 5];
//for of
for (let valorEjemplarDelArregloEjemplar of arregloEjemplar) {
    console.log("Valor: ", valorEjemplarDelArregloEjemplar);
}
//for in
for (let indiceEjemplarDelArregloEjemplar in arregloEjemplar) {
    console.log("Indice: ", indiceEjemplarDelArregloEjemplar);
    console.log("Valor: ", arregloEjemplar[indiceEjemplarDelArregloEjemplar]);
}
//añadir al final arreglo
let numeroEjemplarParaElArregloEjemplar = 6;
arregloEjemplar.push(numeroEjemplarParaElArregloEjemplar); //[1,2,3,4,5,6]
//elimiinar del final arreglo
arregloEjemplar.pop(); //[1,2,3,4,5]
//añadir al inicio arreglo
let otroNumeroEjemplarParaElArregloEjemplar = 0;
arregloEjemplar.unshift(otroNumeroEjemplarParaElArregloEjemplar); //[0,1,2,3,4,5]
//eliminar y agregar elememtos
//splice - indice
//       - numero de elementos a eliminar
//       - elementos a agregar
arregloEjemplar.splice(
    0, //indice para empezar a eliminar
    3, //numero de elementos a eliminar
    3,4,5 //elementos a agregar 
);
//eliminados [0,1,2]
//agregados [3,4,5]

//Operadores para trabajar con arreglos
/*
find
findIndex
forEach
map
filter
some
every
reduce
*/

//funciones
function onlyNumbers(a: number, b: number, c:number): number 
{
    return a - b + c;

}

function onlyPrint(texto: string): void 
{
    console.log(texto);

}

function onlyPrintV2(texto: string): undefined 
{
    console.log(texto);

}

//funciones nombradas
function nombreDeMiFuncion(a: number, b: number){};
const functionNoNamed = function(){};
nombreDeMiFuncion(1, 2);
functionNoNamed();
[].forEach(function(){}); //funcion anonima
//funciones flecha
const functionFatArrow = (a: number, b: number): number => a - b;
const functionFatArrow2 = () => { console.log("Hola")};
const funcrionFAOmitReturn = (a,b) => a - b;
const functionOnlyOneParameter = a => a - 1;
//parametros infinitos
function sumar(...todosLosNumeros:number[]): number {
    let total = 0;
    for (let numero of todosLosNumeros) {
        total = total + numero;
    }
    return total;
}
sumar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12); //78

//destructuracion de objetos
const userDestructurado = {
    nombre: "hola",
}
const otroUserDestructurado = {
    nombre: "hola",
    apellido: "numdo",
}

const losDosUserDestructurados = {
    ...userDestructurado,
    ...otroUserDestructurado,
};
//{nombre: "hola", apellido: "numdo"}

const losDosUserDestructuradosOtravez = {
    ...otroUserDestructurado,
    ...userDestructurado,
};
//{nombre: "hola", apellido: "numdo"}

const overrideUserDestructurado = {
    ...otroUserDestructurado,
    ...userDestructurado,
    nombre: "nuevo nombre",
};

//destructuracion de arreglos
const arregloDestructurado = [1, 2, 3, 4, 5];
const arregloDestructurado2 = [6, 7, 8, 9, 10];
//merge de arreglos
const mergeDeArreglos = [
    ...arregloDestructurado,
    ...arregloDestructurado2,
];
//[1,2,3,4,5,6,7,8,9,10]

const mergeDeArreglosInverso = [
    ...arregloDestructurado2,
    ...arregloDestructurado,
];
//[6,7,8,9,10,1,2,3,4,5]
// la destructuracion es una forma de clonar
const objetoDestructuradoCopiar = {"content": "type-aplication JSON"}
const objetoDestructuradoCopiadoA = {...objetoDestructuradoCopiar}