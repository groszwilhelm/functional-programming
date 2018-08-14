/**
 * What we see is that for mutable values, updating state applies across all references to that variable. 
 * So changing a value in one place, changes it for all references to that object. 
 * For the immutable data types, we have no way of changing the internal state of the data, so the reference always gets reassigned to a new object.
 */

let obj = {
  prop: 'Hello world'
}

let obj2 = obj;

obj.prop = 'I wanna change!';

console.log(obj2.prop);
console.log(obj === obj);

let array = ['1', '2'];

let array2 = array;

array.push(5);

console.log(array2);
console.log(array === array2);

let number = 16;
let number2 = number;

number = 88;

console.log(number2);
console.log(number === number2);

const PI = 3.14;
