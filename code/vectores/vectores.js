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
import { Vector3D } from '../class-vector3d/vector3d.js';
import { fileURLToPath } from 'url';

/** @desc Función main para probar el funcionamiento de la clase Vector3D*/
function main() {
  let vector = new Vector3D(1, 0.5, 3);
  let vectorTwo = new Vector3D(4, -4, 1);
  console.log('Método toString', vector.toString(), vectorTwo.toString());

  console.log('Suma', (vector.add(vectorTwo)).toString());
  console.log('Multiplicacion vector #1: ', (vector.multiplyByNumber(5)).toString());
  console.log('Multiplicacion vector #2: ', (vectorTwo.multiplyByNumber(5)).toString());
  console.log('Producto de dos vectores', vector.productOfTwoVectors(vectorTwo));
  console.log('Modulo', (vector.module()).toString());
  console.log('Normalización', (vector.normalize()).toString());
  console.log('Ángulo formado: ', vector.angle(vectorTwo));

  //console.log('Ángulo formado: ', (new Vector3D(1,0,0)).angle(new Vector3D(0,1,0)));
  //console.log('Ángulo formado: ', (new Vector3D(0,0,1)).angle(new Vector3D(1,0,0)));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}