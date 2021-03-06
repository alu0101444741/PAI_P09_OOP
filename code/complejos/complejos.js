/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 22 2022
 * @desc Client program for class Complejo
*/

'use strict';

import { Complejo } from '../class-complejo/complejo.js';
import { fileURLToPath } from 'url';

/** @desc Función main para probar el funcionamiento de la clase Complejo*/
function main() {
  if (process.argv[2] === '--help') {
    console.log('Modo de uso: node complejos.js A B C D\n\
    Siendo A y B respectivamente la parte real e imaginaria del primer número complejo\
    y siendo C y D respectivamente la parte real e imaginaria del segundo número complejo.');
    return(0);
  }
  let realOne = Number(process.argv[2]);
  let imaginaryOne = Number(process.argv[3]);
  let realTwo = Number(process.argv[4]);
  let imaginaryTwo = Number(process.argv[5]);
  validateInput(realOne, imaginaryOne, realTwo, imaginaryTwo);

  let complejoOne = new Complejo(realOne, imaginaryOne);
  let complejoTwo = new Complejo(realTwo, imaginaryTwo);
  console.log('  ', complejoOne.toString());
  console.log('  ', complejoTwo.toString());  

  console.log('\nOperaciones con complejos:');
  console.log(' * Suma:', complejoTwo.add(complejoOne).toString());
  console.log(' * Resta:', complejoTwo.subtract(complejoOne).toString());
  console.log(' * Multiplicación:', complejoTwo.multiply(complejoOne).toString());
  console.log(' * Conjugado:', complejoOne.conjugate().toString());
}

/**
 * @desc Función para validar la entrada proporcionada.
 * Será válida si todas las cuatro entradas son números, en caso de no serlo se lanzará un error.
 * @param realOne - parte real del primer número complejo
 * @param imaginaryOne - parte imaginaria del primer número complejo
 * @param realTwo - parte real del segundo número complejo
 * @param imaginaryTwo - parte imgainaria del segundo número complejo
 */
function validateInput(realOne, imaginaryOne, realTwo, imaginaryTwo) {
  if (Number.isNaN(realOne) || Number.isNaN(imaginaryOne) || Number.isNaN(realTwo) || Number.isNaN(imaginaryTwo)) {
    throw new Error('La entrada no es número\n\
    Pruebe node complejos.js --help para más información')
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}