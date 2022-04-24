/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 24 2022
 * @desc Program to test Vector3D class functionalities.
*/
'use strict';
import { Vector3D } from './vector3d.js';
import { fileURLToPath } from 'url';

/** @desc Función main */
function main() {
  let vector = new Vector3D(1, 0, 1);
  let vector2 = new Vector3D(0, 1, 0);
  console.log('Método toString', vector.toString(), vector2.toString());

  console.log('Suma', (vector.add(vector2)).toString());
  console.log('Multiplicacion vector #1: ', (vector.multiplyByNumber(5)).toString());
  console.log('Multiplicacion vector #2: ', (vector2.multiplyByNumber(5)).toString());
  console.log('Producto de dos vectores', vector.productOfTwoVectors(vector2));
  console.log('Modulo', (vector.module()).toString());
  console.log('Normalización', (vector.normalize()).toString());
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}