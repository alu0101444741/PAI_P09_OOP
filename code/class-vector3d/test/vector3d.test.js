/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 24 2022
 * @desc Tests for class Vector3D
 *       
 */
 'use strict';
 import { Vector3D } from '../vector3d';
 
 describe('Vector3D', () => {
  let vector;

  beforeEach(() => {
    vector = new Vector3D(10, 3, 99);
    
  });

  test('has an add method', () => {
    let otherVector = vector.add(new Vector3D(5, 7, 1));
    expect(otherVector.toString()).toBe('(15, 10, 100)');
    otherVector = otherVector.add(new Vector3D(5, 7, -9));
    expect(otherVector.toString()).toBe('(20, 17, 91)');
  });

  test('has a multiply by a number method', () => {
    expect((vector.multiplyByNumber(2)).toString()).toBe('(20, 6, 198)');
    expect((vector.multiplyByNumber(1.5)).toString()).toBe('(15, 4.5, 148.5)');
    expect((vector.multiplyByNumber(-3)).toString()).toBe('(-30, -9, -297)');
  });

  test('has a product of two vectors method', () => {
    let otherVector = new Vector3D(5, 7, 1);
    expect((otherVector.productOfTwoVectors(otherVector))).toBe(75);
    expect((vector.productOfTwoVectors(otherVector))).toBe(170);
    expect((vector.productOfTwoVectors(new Vector3D(1,1,1)))).toBe(112);
  });

  test('has a module method', () => {
    let otherVector = new Vector3D(5, 7, 1);
    expect(((new Vector3D(10,3,9)).module())).toBe(Math.sqrt(190));
    expect((otherVector.module())).toBe(Math.sqrt(75));
    expect(((new Vector3D(1,1,1)).module())).toBe(Math.sqrt(3));
  });

  test('has a normalize method', () => {
    let otherVector = new Vector3D(5, 7, 1);
    expect(((new Vector3D(10,3,9)).normalize().toString())).toBe(new Vector3D(10/Math.sqrt(190),3/Math.sqrt(190),9/Math.sqrt(190)).toString());
    expect((otherVector.normalize().toString())).toBe(new Vector3D(5/Math.sqrt(75),7/Math.sqrt(75),1/Math.sqrt(75)).toString());
    expect(((new Vector3D(1,1,1)).normalize().toString())).toBe(new Vector3D(1/Math.sqrt(3),1/Math.sqrt(3),1/Math.sqrt(3)).toString());
  });

  test('has a create from string method', () => {
    let otherVector = new Vector3D(5, 7, -1);
    expect(vector.toString()).toBe('(10, 3, 99)');
    expect(otherVector.toString()).toBe('(5, 7, -1)');
  });
});