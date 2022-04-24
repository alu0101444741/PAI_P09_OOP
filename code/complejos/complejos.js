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

function main() {
  let complejoOne = new Complejo(0, 0);
  let complejoTwo = new Complejo(2, 2);
  let complejoThree = new Complejo(3, 3);

  console.log('Ambas partes iguales a 0:', complejoOne.toString());

  console.log('\nUna de las partes iguales a 0:');
  console.log('  Parte real:', (new Complejo(0, 1)).toString())
  console.log('  Parte imaginaria:',(new Complejo(1, 0)).toString());

  console.log('\nNinguna de las partes es igual a 0:');
  console.log('  ', complejoTwo.toString());
  console.log('  ', complejoThree.toString());

  console.log('\nOperaciones con complejos:');
  console.log(' * Suma:', complejoTwo.add(complejoThree).toString());
  console.log(' * Resta:', complejoTwo.subtract(complejoThree).toString());
  console.log(' * Multiplicación:', complejoTwo.multiply(complejoThree).toString());
  console.log(' * Conjugado:', complejoThree.conjugate().toString());
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}