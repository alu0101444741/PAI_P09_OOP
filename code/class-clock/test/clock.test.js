/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 22 2022
 * @desc Tests for class Clock
 *       
 */

 'use strict';

 import { Clock } from '../clock';
 
 describe('Clock', () => {
    let clock, clock_two, clock_three;
 
    beforeEach(() => {
      clock = new Clock(10, 3);
      clock_two = new Clock(23, 59);
      clock_three = new Clock(0, 0);
   });
 
  test('internal properties cannot be accessed', () => {
    expect(clock.hours).toBe(undefined);
    expect(clock.minutes).toBe(undefined);
  });

  test('has an add minutes method', () => {
    clock.addMinutes(7);
    expect(clock.toString()).toBe('10:10h');
    clock.addMinutes(60);
    expect(clock.toString()).toBe('11:10h');
    clock.addMinutes(-600);
    expect(clock.toString()).toBe('01:10h');
  });

  test('has a subtract minutes method', () => {
    clock.subtractMinutes(13);
    expect(clock.toString()).toBe('09:50h');
    clock.subtractMinutes(60);
    expect(clock.toString()).toBe('08:50h');
    clock.subtractMinutes(-600);
    expect(clock.toString()).toBe('18:50h');
  });

  test('has a toString method', () => {
    expect(clock.toString()).toBe('10:03h');
    expect(clock_two.toString()).toBe('23:59h');
    expect(clock_three.toString()).toBe('00:00h');
  });

});