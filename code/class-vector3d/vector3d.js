/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 24 2022
 * @desc Clase Vector3D
 * @module vector3d
 */

 'use static';

 /** @desc Clase Vector3D */
export class Vector3D {
  #coordinateX;
  #coordinateY;
  #coordinateZ;
  /**
  * @desc Constructor de la clase Vector3D
  * @param {Number} pointX - coordenada x del vector
  * @param {Number} pointY - coordenada y del vector
  * @param {Number} pointZ - coordenada z del vector 
  */
   constructor(pointX = 0, pointY = 0, pointZ = 0) {
    let x = Number(pointX);
    let y = Number(pointY);
    let z = Number(pointZ);
    if ((Number.isNaN(x)) || (Number.isNaN(y)) || (Number.isNaN(z))) {
      throw new Error('No se ha proporcionado un número.');
    }
    this.#coordinateX = x;
    this.#coordinateY = y;
    this.#coordinateZ = z;
  }

  /**
  * @desc Método para sumar un vector con otro pasado como parámetro.
  * @param {Vector3D} otherVector - instancia de la clase Vector3D
  * @return {Vector3D} instancia de la clase Vector3D con la suma resultante.
  */
   add(otherVector) {
    if (!otherVector instanceof Vector3D) {
      throw new Error('No se ha proporcionado un objeto de la clase Vector3D.');
    }
    return (new Vector3D(this.#coordinateX + otherVector.#coordinateX, this.#coordinateY + otherVector.#coordinateY, this.#coordinateZ + otherVector.#coordinateZ));
  }

  /**
  * @desc Método para multiplicar un vector por un número real.
  * @param {Number} number - número real
  * @return {Vector3D} instancia de la clase Vector3D con la multiplicación resultante.
  */
  multiplyByNumber(number) {
    let theNumber = Number(number);
    if (Number.isNaN(theNumber)) {
      throw new Error('No se ha proporcionado un número.');
    }
    return (new Vector3D(this.#coordinateX * theNumber, this.#coordinateY * theNumber, this.#coordinateZ * theNumber));
  }

  /**
  * @desc Método para calcular el producto escalar de dos vectores.
  * @param {Vector3D} otherVector - instancia de la clase Vector3D
  * @return {Number} multiplicación resultante.
  */
  productOfTwoVectors(otherVector) {
    if (!otherVector instanceof Vector3D) {
      throw new Error('No se ha proporcionado un objeto de la clase Vector3D.');
    }
    return(this.#coordinateX * otherVector.#coordinateX + this.#coordinateY * otherVector.#coordinateY + this.#coordinateZ * otherVector.#coordinateZ);
  }

  /**
  * @desc Método para calcular el módulo del vector.
  * @return {Number} cálculo resultante.
  */
  module() {
    return(Math.sqrt(Math.pow(this.#coordinateX,2) + Math.pow(this.#coordinateY,2) + Math.pow(this.#coordinateZ,2)));
  }

  /**
  * @desc Método para normalizar el vector.
  * @return {Vector3D} vector normalizado
  */
  normalize() {
    let module = this.module();
    return(new Vector3D(this.#coordinateX / module, this.#coordinateY / module, this.#coordinateZ / module));
  }

  /**
  * @desc Método para calcular ángulo en grados formado por dos vectores.
  * @param {Vector3D} otherVector - instancia de la clase Vector3D
  * @return {Number} grados del ángulo formado.
  */
  angle(otherVector) {
    if (!otherVector instanceof Vector3D) {
      throw new Error('No se ha proporcionado un objeto de la clase Vector3D.');
    }
    let radians = Math.acos((this.productOfTwoVectors(otherVector)) / (this.module() * otherVector.module()));
    return ((radians * 180.0) / Math.PI);
  }

  /**
  * @desc Devuelve una cadena formateada con la información del objeto
  * @return {String} cadena con formato (x,y,z)
  */
  toString() {
    let x = this.#coordinateX/*.toFixed(2)*/;
    let y = this.#coordinateY/*.toFixed(2)*/;
    let z = this.#coordinateZ/*.toFixed(2)*/;
    return(`(${x}, ${y}, ${z})`);
  }

  /**
  * @desc Método para obtener la coordenada X del vector.
  * @return {Number} coordenada X del vector.
  */
  get coordinateX() {
    return(this.#coordinateX);
  }

  /**
  * @desc Método para obtener la coordenada Y del vector.
  * @return {Number} coordenada Y del vector.
  */
  get coordinateY() {
    return(this.#coordinateY);
  }

  /**
  * @desc Método para obtener la coordenada Z del vector.
  * @return {Number} coordenada Z del vector.
  */
   get coordinateZ() {
    return(this.#coordinateZ);
  }
}
