/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 22 2022
 * @desc Queen attack
 * @module queen-attack
 */

 'use static';

 /** @desc Clase Robot */
export class QueenAttack {
  /**
  * @desc Constructor de la clase Robot
  * @param {Object} Object con propiedades 'white' y 'black' cuyo valor es
  * un array de tamaño 2 que incluye números naturales entre 0 y 7.
  */
  constructor({
    black: [blackRow = 0, blackColumn = 3] = [],
    white: [whiteRow = 7, whiteColumn = 3] = [],
  } = {}) {     
    this.white = [whiteRow, whiteColumn];    
    this.black = [blackRow, blackColumn];

    this.#validatePositions(blackRow, blackColumn, whiteRow, whiteColumn);
    this.BOARD = this.#buildBoard();
  }

  /**
  * @desc Método para visualizar el tablero. Cada casilla está representada por un '_' a menos
  * que haya una reina en ella, en cuyo caso habría una 'B' (reina negra) o una 'W' (reina blanca).
  * @return {String} cadena con la representación del tablero
  */
  toString() {
    let board = [...this.BOARD];
    let stringifiedRow;
    let stringifiedBoard = '';
    
    board[this.black[0]][this.black[1]] = 'B';
    board[this.white[0]][this.white[1]] = 'W';
    for (let row = 0; row <= 7; ++row) {
      stringifiedRow = '';
      stringifiedRow = this.BOARD[row].join(' ');
      if (row !== 7) stringifiedRow += '\n';
      stringifiedBoard += stringifiedRow;
    }console.log(stringifiedBoard);
    return(stringifiedBoard);
  }

  /**
  * @desc Método para inicializar el tablero (sin reinas) en una constante. Devuelve un array
  * de cadenas que representan cada una de las filas del tablero. Cada casilla es un '_'
  * @return {String[]} array de cadenas con la representación del tablero
  */
  #buildBoard() {
    let board = [];
    let actualRow;
    for (let column = 0; column <= 7; ++column) {
      actualRow = [];
      for (let row = 0; row <= 7; ++row) {
        actualRow.push('_');
      }
      board.push(actualRow);
    }
    return(board);
  }

  /**
  * @desc Método para determinar si una reina puede atacar a otra. Para que esto sea posbile, ambas deben
  * estar situadas en la misma fila, misma columna o en la misma diagonal.
  * @return {true | false} true si es posible el ataque
  */
  get canAttack() {
    if ((this.black[0] === this.white[0]) || (this.black[1] === this.white[1])) {
      return(true);
    }
    let column = this.black[1]; let i = 0;
    for (let row = this.black[0]; row >= 0 && column >= 0; --row) {
      if ((this.white[0] === row) && (this.white[1] === column)) {
        return(true);
      }
      --column;
    }
    column = this.black[1];
    for (let row = this.black[0]; row >= 0 && column >= 0; --row) {
      if ((this.white[0] === row) && (this.white[1] === column)) {
        return(true);
      }
      ++column;
    }
    column = this.black[1];
    for (let row = this.black[0]; row <= 7 && column >= 0; ++row) {
      if ((this.white[0] === row) && (this.white[1] === column)) {
        return(true);
      }
      --column;
    }
    column = this.black[1];
    for (let row = this.black[0]; row <= 7 && column <= 7; ++row) {
      if ((this.white[0] === row) && (this.white[1] === column)) {
        return(true);
      }
      ++column;
    }
    return(false);
  }

  /**
  * @desc Método para validar las posiciones proporcionadas. Serán válidas si son números naturales
  * entre 0 y 7 (ambos incluidos). En caso de no ser válida una de las entradas, se lanzará un error.
  * @param {Number} whiteRow - fila en la que se encuentra la reina blanca
  * @param {Number} whiteColumn - columna en la que se encuentra la reina blanca
  * @param {Number} blackRow - fila en la que se encuentra la reina negra
  * @param {Number} blackColumn - columna en la que se encuentra la reina negra
  */
  #validatePositions(whiteRow, whiteColumn, blackRow, blackColumn) {
    if ((whiteRow === blackRow) && (whiteColumn === blackColumn)) {
      throw new Error('Queens cannot share the same space');
    }
    if (!(this.#isValidPosition(whiteRow)) || !(this.#isValidPosition(whiteColumn))) {
      throw new Error('Queen must be placed on the board');
    }
    if (!(this.#isValidPosition(blackRow)) || !(this.#isValidPosition(blackColumn))) {
      throw new Error('Queen must be placed on the board');
    }
  }


  /**
  * @desc Método para determinar si una posición dada (representando una fila o columna) es válida.
  * Será de esta forma si es un número natural entre 0 y 7, ambos incluidos.
  * @return {true | false} true si es una posición válida.
  */
  #isValidPosition(position) {
    if (!(Number.isNaN(Number(position))) && ((position >= 0) && (position <= 7))) {
      return(true);
    }
    return(false);
  }
}
