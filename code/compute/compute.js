/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 28 2022
 * @desc compute.js
*/
'use strict';
import { fileURLToPath } from 'url';
import { Compute } from './class-compute.js';

/** @desc Función main*/
function main() {
  let compue = new Compute();

  console.log(compue.factorial(5)); 
  console.log(compue.suma(100)); 
  console.log(compue.esPrimo(13));
  console.log(compue.sonPrimosRelativos(13, 17)); 
  compue.printProductTable(7);
  compue.printAllTables('ficheroTablas.txt');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
