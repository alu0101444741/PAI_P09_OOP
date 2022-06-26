/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 28 2022
 * @desc Clase Compute
 * @module compute
 */

 'use static';

import { writeFile } from 'fs';

/** @desc Clase Compute */
export class Compute {

  /**
  * @desc Método para calcular el factorial de un número.
  * @param {Number} number - número entero
  * @return {Number} factorial del número
  */
  factorial(number) {
    let result = 1;
    for (let i = 1; i < number; ++i) {
      result *= i;
    } 
    return(result);
  }

  /**
  * @desc Método para calcular la suma de todos los números entre 0 y otro
  * proporcionado.
  * @param {Number} number - número hasta el cual sumar
  * @return {Number} suma obtenida
  */
  suma(number) {
    let result = 0;
    for (let i = 0; i < number; ++i) {
      result += i;
    } 
    return(result);
  }

  /**
  * @desc Método para determinar si un número es primo.
  * @param {Number} number - número a verificar 
  * @return {true | false}} true si es primo
  */
  esPrimo(number) {   
    for (let i = 2; i < number; ++i) {
      if (number % i === 0) {
        return(false);
      }     
    }
    return(true);
  }

  /**
  * @desc Método para determinar si dos números son primos relativos.
  * @param {Number} fisrtNumber - primer número
  * @param {Number} secondNumber - segundo número
  * @return {true | false}} true si son primos relativos
  */
  sonPrimosRelativos(firstNumber, secondNumber) {
    let greater = Math.max(firstNumber, secondNumber);
    for (let i = 2; i <= greater; ++i) {
      if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
        return(false);
      }
    }
    return(true);
  }

  /**
  * @desc Método para imprimir por pantalla la tabla de multiplicación de un
  * número proporcionado
  * @param {Number} number - el número
  */
  printProductTable(number) {
    let table = '';
    for (let i = 0; i <= 10; ++i) {
      table += `${number} * ${i} = ${number * i}\n`;
    }
    console.log(table);
  }

  /**
  * @desc Método para escribir en un fichero todas las tablas de multiplicar (del 0 al 10).
  * @param {String} fileName - nombre o path del fichero en el cual escribir
  */
  printAllTables(fileName) {
    let tables = '';
    for(let j = 0; j <= 10; ++j) {
      for (let i = 0; i <= 10; ++i) {
        tables += `${j} * ${i} = ${j * i}\n`;
      }
    }
    writeFile(fileName, tables, (err) => {
      if (err) throw err;
    });
  }
}