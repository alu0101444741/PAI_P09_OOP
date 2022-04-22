# Práctica 9. Programación Orientada a Objetos en Javascript
### Factor de ponderación: 8

### Objetivos
Los objetivos de esta práctica son:
* Poner en práctica metodologías y conceptos de Programación Orientada a Objetos en JavaScript.
* Poner en práctica Principios y Buenas prácticas de programación Orientada a Objetos.

### Rúbrica de evaluacion del ejercicio
Se señalan a continuación los aspectos más relevantes (la lista no es exhaustiva)
que se tendrán en cuenta a la hora de evaluar esta práctica:
* Se valorará la realización de las diferentes tareas que se proponen.
* El comportamiento del programa debe ajustarse a lo solicitado en este enunciado.
* Capacidad de la programadora de introducir cambios en el programa desarrollado.
* Conocer y poner en prácticas los principios y buenas prácticas de programación orientada a objetos.
* Deben usarse estructuras de datos adecuadas para representar los diferentes elementos que intervienen en el problema
* Acreditar que se sabe generar informes de cubrimiento de código utilizando tanto 
[Jest](https://jestjs.io/)
como
[CodeCov](https://docs.codecov.com/docs)
* Saber corregir bugs en sus programas utilizando el depurador de Visual Studio Code
* Ser capaz de desarrollar tests unitarios para sus programas utilizando 
[Jest](https://jestjs.io/)
* Acreditar su capacidad para configurar y utilizar 
[ESLint](https://eslint.org/)
  y que es capaz de trabajar con la misma en Visual Studio Code.
* El código ha de estar documentado con 
[JSDoc](https://jsdoc.app/). 
  y ha de acreditarse la capacidad de generar documentación para sus programas utilizando la herramienta.
  Haga que la documentación del programa generada con JSDoc esté disponible a través de una web alojada en su máquina IaaS de la asignatura.
* Ser capaz de resolver problemas de la plataforma Exercism, subiendo sus soluciones a la misma.
* Acreditar que es capaz de desarrollar y ejecutar programas simples de la plataforma Jutge.
* Se comprobará que el código que el alumnado escribe se adhiere a las reglas de la 
[Guía de Estilo de Google para Javascript](https://google.github.io/styleguide/jsguide.html).
* Acreditar que es capaz de editar ficheros de forma remota en su VM usando Visual Studio
  Code (VSC)

### Indicaciones de caracter general
Los programas han de organizarse en torno a clases que se han de implementar usando la sintaxis para
clases ES6 de JavaScript y poniendo en práctica los principios de abstracción y encapsulamiento característicos 
de la Programación Orientada a Objetos.
En los ejercicios han de ponerse en práctica los principios y buenas prácticas que han sido expuestos en las clases de la asignatura.

Vigile siempre el tipo de visibilidad que elige para los atributos (properties) de sus clases
y tenga en cuenta tanto las reglas de 
[estilo](https://google.github.io/styleguide/jsguide.html#features-classes)
como las 
[etiquetas JSDoc](https://stackoverflow.com/questions/41715994/how-to-document-ecma6-classes-with-jsdoc)
relacionadas con el constructo `class`.

Previo a la implementación de cada clase, diseñe y desarrolle un conjunto de tests para probar el correcto
funcionamiento de todos los métodos públicos.

Encapsule las clases en módulos que exporten la correspondiete clase hacia otros programas clientes que pudieran utilizarla.

Configure para la práctica una página web que sirva de índice para mostrar la documentación generada por
JSDoc para todos los ejercicios de la práctica.

Configure un fichero `package.json` en el directorio raíz de su repositorio de modo que ejecutando 
`npm install` queden instaladas todas las dependencias de su proyecto.

### Ejercicios de Exercism
Resuelva los siguientes problemas ejecutando los tests correspondientes a cada uno de ellos hasta conseguir
que todos pasen correctamente. 
Una vez que lo logre, suba su solución a Exercism.
1.- [Queen Attack](https://exercism.org/tracks/javascript/exercises/queen-attack)

### 2.- La clase *Clock*
En este ejercicio se propone desarrollar un módulo ES6 que implemente una clase `Clock` 
para representar un reloj digital con horas y minutos. No es necesario contemplar segundos.

La clase no ha de usar en modo alguno objetos 
[Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
de JavaScript.

La clase ha de sobreescribir el método *toString()* para imprimir en pantalla un objeto *Clock* en el
formato `hh:mm`.
La clase ha de contemplar asimismo métodos que permitan sumar y restar minutos a un objeto *Clock*.
Análogamente, dos objetos que representen la misma hora deben ser iguales entre sí.
Incluya discrecionalmente cualesquiera otras operaciones que considere adecuadas como métodos en la clase
`Clock`.

Desarrolle un programa *cliente* que utilice la clase *Clock* e instancie objetos de esa clase:
```javascript
const horaActual = new Clock(11, 59);
console.log(horaActual.toString());   // 11:59h
```

### 3.- La clase *Complejo*
Un
[número complejo](https://es.wikipedia.org/wiki/N%C3%BAmero_complejo)
puede representarse como la suma de un número real y un número imaginario, de la forma `a + bi` donde el
término `a` es la parte real, `b` la parte imaginaria e `i` la
[unidad imaginaria](https://es.wikipedia.org/wiki/Unidad_imaginaria).

En este ejercicio se propone desarrollar un módulo ES6 que implemente una clase `Complejo` que permita operar con números complejos.
La clase ha de contener al menos métodos que permitan las siguientes operaciones con números complejos:

* `toString` Imprimir un número complejo 
* `add` Sumar 
* `sub` Restar
* `mul` Multiplicar
* `div` Dividir
* `abs` Calcular el valor absoluto
* `conj` Calcular el conjugado de un número complejo

Incluya discrecionalmente cualesquiera otras operaciones que considere adecuadas como métodos en la clase.

Desarrolle un programa cliente `complejos.js` que permita operar con números complejos haciendo uso de la clase desarrollada.
El programa cliente tomará por línea de comandos un par de números complejos y los operará usando todas las operaciones
anteriores.

### 4.- La clase *Vector3D*
Desarrolle una clase `Vector3D` para representar vectores en el espacio tridimensional.
La clase contemplará métodos al menos para:
  * Imprimir en pantalla las componentes de un vector en un formato adecuado 
  * Sumar un par de vectores
  * Calcular el producto de un número real por un vector
  * Calcular el producto escalar de dos vectores
  * Calcular el módulo de un vector 
  * Normalizar un vector

## Referencias
* [ESLint](https://eslint.org/)
* [JSDoc](https://jsdoc.app/)
* [The Modern Javascript Tutorial](https://javascript.info)
* [PAI Code Examples](https://github.com/ULL-ESIT-PAI-2021-2022/PAI-class-code-examples/tree/master/src)
* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
