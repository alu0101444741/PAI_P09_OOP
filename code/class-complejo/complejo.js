/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 22 2022
 * @desc Clase Complejo
 * @module complejo
 */

 'use static';

/** @desc Clase Complejo */
export class Complejo {
  #real;
  #imaginary;
  /**
  * @desc Constructor de la clase Complejo
  * @param {Number} real - parte real
  * @param {Number} imaginary - parte imaginaria
  */
   constructor(real, imaginary) {
    this.#validateInput(real, imaginary);
    this.#real = Number(real);
    this.#imaginary = Number(imaginary);   
  }

  /**
  * @desc Método para sumar un número complejo con otro pasado como parámetro.
  * @param {Complejo} complexNumber - instancia de la clase Complejo
  * @return {Complejo} instancia de la clase con el resultado obtenido
  */
  add (complexNumber) {
    if (!complexNumber instanceof Complejo) {
      throw new Error('No se ha proporcionado un objeto de la clase Complejo.');
    }
    return(new Complejo(complexNumber.#real + this.#real, complexNumber.#imaginary + this.#imaginary));
  }

  /**
  * @desc Método para realizar la resta de un número complejo con otro pasado como parámetro.
  * @param {Complejo} complexNumber - instancia de la clase Complejo
  * @return {Complejo} instancia de la clase con el resultado obtenido
  */
  subtract (complexNumber) {
    if (!complexNumber instanceof Complejo) {
      throw new Error('No se ha proporcionado un objeto de la clase Complejo.');
    }
    return(new Complejo(this.#real - complexNumber.#real,this.#imaginary - complexNumber.#imaginary));
  }

  /**
  * @desc Método para realizar la multiplicación de un número complejo con otro pasado como parámetro.
  * @param {Complejo} complexNumber - instancia de la clase Complejo
  * @return {Complejo} instancia de la clase con el resultado obtenido
  */
  multiply (complexNumber) {
    if (!complexNumber instanceof Complejo) {
      throw new Error('No se ha proporcionado un objeto de la clase Complejo.');
    }
    let realPart = this.#real * complexNumber.#real + (this.#imaginary * complexNumber.#imaginary) * -1.0;
    let imaginaryPart = this.#real * complexNumber.#imaginary + this.#imaginary * complexNumber.#real;
    return(new Complejo(realPart, imaginaryPart));
  }

  /**
  * @desc Método para realizar el conjugado de un número complejo.
  * Se considera un número complejo conjugado de otro cuando solo difieren en el signo
  * de la parte imaginaria.
  * @return {Complejo} instancia de la clase con el resultado obtenido
  */
   conjugate () {
    return(new Complejo(this.#real, this.#imaginary * -1.0));
  }

  /**
  * @desc Método para calcular el valor absoluto del número complejo.
  * @return {Number} valor numérico del resultado obtenido
  */
  abs () {
    return( Math.sqrt(Math.pow(this.#real, 2) + Math.pow(this.#imaginary, 2)) );
  }

  /**
  * @desc Devuelve una cadena formateada con la información del número complejo.
  * @return {String} cadena con formato a+bi
  */
  toString() {
    if ((this.#imaginary === 0) && (this.#real === 0)) {
      return('0');
    }
    let imaginary = '';
    let real = '';
    if(this.#imaginary !== 0) {
      imaginary = (this.#imaginary + 'i');
    }
    if(this.#real !== 0) {
      real += this.#real;
      if((this.#imaginary !== 0) && (this.#imaginary > 0)) {
        real += '+';
      }
    }
    if (this.#imaginary < 0) {
      return(`${real}${imaginary}`);
    }    
    return(`${real}${imaginary}`);
  }
  /**
  * @desc Método para validar la entrada proporcionada. Será válida si la entrada son números.
  * En caso de no ser válida una de las entradas, se lanzará un error.
  * @param {Number} real - parte real
  * @param {Number} imaginary - parte imaginaria
  */
  #validateInput(real, imaginary) {
    let numberReal = Number(real);
    let numberImaginary = Number(imaginary);
    if ((Number.isNaN(numberReal)) || (Number.isNaN(numberImaginary))) {
      throw new Error('La entrada proporcionada no es un número');
    }
  }
}