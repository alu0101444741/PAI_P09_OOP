/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 22 2022
 * @desc Client program for class Clock
*/

'use strict';

import { Clock } from '../class-clock/clock.js';
import { fileURLToPath } from 'url';

function main() {
  let clockOne = new Clock(0, 0);
  let clockTwo = new Clock(12, 35);
  let clockThree = new Clock(23, 59);

  console.log(clockOne.toString());
  console.log(clockTwo.toString());
  console.log(clockThree.toString());

  clockOne.addMinutes(50); console.log(clockOne.toString());
  clockOne.addMinutes(50); console.log(clockOne.toString());
  clockOne.subtractMinutes(250); console.log(clockOne.toString());

  clockThree.addMinutes(1441); console.log(clockThree.toString());
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}