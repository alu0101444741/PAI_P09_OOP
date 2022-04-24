/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 22 2022
 * @desc Clase Clock
 * @module clock
 */

 'use static';

  const MAX_HOUR = 23;
  const MAX_MINUTE = 59;

 /** @desc Clase Clock */
export class Clock {
  #hours;
  #minutes;
  /**
  * @desc Constructor de la clase Clock
  * @param {Number} hours - número entre 0 y 23
  * @param {Number} minutes - número entre 0 y 59
  */
   constructor(hours, minutes) {
    this.#validateHour(hours, minutes);
    this.#hours = Number(hours);
    this.#minutes = Number(minutes);   
  }

  /**
  * @desc Método para sumar minutos a la hora almacenada.
  * @param {Number} minutes - cantidad de minutos a sumar
  */
  addMinutes(minutes) {
    if (minutes < 0) {
      this.subtractMinutes(minutes * -1);
    }
    else {
      this.#minutes = this.#minutes + minutes;
      while (this.#minutes > MAX_MINUTE) {
        this.#hours ++;
        this.#minutes -= 60;
      }
      if (this.#hours > MAX_HOUR) this.#hours = this.#hours % 24;
    }
  }

  /**
  * @desc Método para restar minutos a la hora almacenada.
  * @param {Number} minutes - cantidad de minutos a restar
  */
  subtractMinutes(minutes) {
    if (minutes < 0) {
      this.addMinutes(minutes * -1);
    }
    else {
      this.#minutes = this.#minutes - minutes;
      while (this.#minutes < 0) {
        this.#hours --;
        this.#minutes += 60;
      }
      if (this.#hours < 0) this.#hours += 24;
    }
  }

  /**
  * @desc Devuelve una cadena formateada con la información de la hora.
  * @return {String} cadena con formato hh:mm ( ejemplo: 05:30h )
  */
  toString() {
    let hours = (this.#hours < 10) ? `0${this.#hours}`: `${this.#hours}`;
    let minutes = (this.#minutes < 10) ? `0${this.#minutes}`: `${this.#minutes}`;
    return(`${hours}:${minutes}h`);
  }

  /**
  * @desc Método para validar la hora proporcionada. Será válida si la entrada correspondiente a los minutos es
  * un número natural entre 0 y 59 (ambos incluidos) y la hora es un número natural entre 0 y 23 (ambos incluidos).
  * En caso de no ser válida una de las entradas, se lanzará un error.
  * @param {Number} hour - número que representa las horas
  * @param {Number} minures - número que representa los minutos
  */
  #validateHour(hour, minutes) {
    let numberHour = Number(hour);
    let numberMinutes = Number(minutes);
    if ((Number.isNaN(numberHour)) || (Number.isNaN(numberMinutes))) {
      throw new Error('La entrada proporcionada no es un número');
    }
    if (!(((numberHour >= 0) && (numberHour <= MAX_HOUR)) && ((numberMinutes >= 0) && (numberMinutes <= MAX_MINUTE)))){
      throw new Error('La hora proporcionada no es válida');
    }
  }
}