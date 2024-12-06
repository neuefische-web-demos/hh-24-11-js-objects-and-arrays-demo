const userName = 'Jessica Loers'; // string
const isUserCoach = true; // boolean
const userId = 1337; // number

const emptyValue = null; //
const missingValue = undefined; //

// Objects

// document.querySelector()

const person = {
  name: 'Jane',
  age: 23,
  isStudent: true,
  // nested object
  adress: { street: 'super street', houseNo: '23' },
  colors: ['red', 'blue'],
};

// Maniplate (update) Objects
person.name = 'John';
person['name'] = 'Hans';

// add property
person.score = 123;
person['score'] = 1234;

// delete property
delete person.age;

// DOT NOTATION
console.log('DOT_', person.name);

// BRACKET NOTATION
console.log('BRACKET_', person['adress']['houseNo']);

// returns an array of all properties (keys) found directly on the object
console.log('OBJECT_Properties', Object.getOwnPropertyNames(person));

// ------

// Arrays 🎉

// const myArray = [...]
const people = [
  { name: 'Hans', age: 12 },
  { name: 'Fritz', age: 23 },
];

const user = {
  name: 'Bob',
  // nested Array
  colors: ['red', 'yellow', 'blue'],
};

console.log('ARRAY_2', people[0].age);

console.log('ARRAY_3', user.colors[1]);

console.log('ARRAY_4', user.colors.length === 3);

const shoppingList = ['tomato', 'beer', 'chips'];

// maniplate array
shoppingList[0] = 'Banane';

//  maniplate array with array methods

shoppingList.push('apple');

shoppingList.pop();

console.log('ARRAY_1', shoppingList.length);

// returns an array of all properties (keys) found directly on the array
console.log('ARRAY_Properties', Object.getOwnPropertyNames(shoppingList));
