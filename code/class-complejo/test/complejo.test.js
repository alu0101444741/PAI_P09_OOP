  /**
   * Universidad de La Laguna
   * Escuela Superior de Ingeniería y Tecnología
   * Grado en Ingeniería Informática
   * Programación de Aplicaciones Interactivas
   *
   * @author Roberto Carrazana Pernía
   * @since Apr 22 2022
   * @desc Tests for class Complejo
   *       
   */

  'use strict';

  import { Complejo } from '../complejo';

  describe('Complejo', () => {
    let complex, complexNegative,complexTwo, complexThree, complexFour;

    beforeEach(() => {
      complex = new Complejo(10, 3);
      complexNegative = new Complejo(-10, -3);
      complexTwo = new Complejo(5, 0);
      complexThree = new Complejo(0, 5);
      complexFour = new Complejo(0, 0);
    });
  /* 
  test('internal properties cannot be accessed', () => {
    expect(complex.real).toBe(undefined);
    expect(complex.imaginary).toBe(undefined);
  });
  */
  test('has an add method', () => {
    expect((complex.add(complexTwo)).toString()).toBe('15+3i');
    expect((complex.add(new Complejo(-10, 7))).toString()).toBe('10i');
    expect((complex.add(complexNegative)).toString()).toBe('0');
  });

  test('has a subtract method', () => {
    expect((complex.subtract(complexNegative)).toString()).toBe('20+6i');
    expect((complex.subtract(new Complejo(-10, 7))).toString()).toBe('20-4i');
    expect((complex.subtract(complex)).toString()).toBe('0');
  });

  test('has a multiply method', () => {
    expect((complex.multiply(complexNegative)).toString()).toBe('-91-60i');
    expect((complex.multiply(complexFour)).toString()).toBe('0');
  });

  test('has a abs method', () => {
    expect(complexNegative.abs()).toBe(Math.sqrt(109.0));
    expect(complexTwo.abs()).toBe(Math.sqrt(25));
    expect(complexThree.abs()).toBe(Math.sqrt(25));
    expect(complexFour.abs()).toBe(Math.sqrt(0));
  });

  test('has a conjugate method', () => {
    expect((complexNegative.conjugate()).toString()).toBe((new Complejo(-10, 3)).toString());
    expect((complexTwo.conjugate()).toString()).toBe((new Complejo(5, 0)).toString());
    expect((complexThree.conjugate()).toString()).toBe((new Complejo(0, -5)).toString());
    expect((complexFour.conjugate()).toString()).toBe((new Complejo(0, 0)).toString());
  });

  test('has a toString method', () => {
    expect(complex.toString()).toBe('10+3i');
    expect(complexTwo.toString()).toBe('5');
    expect(complexThree.toString()).toBe('5i');
    expect(complexFour.toString()).toBe('0');
    expect(complexNegative.toString()).toBe('-10-3i');
  });
});