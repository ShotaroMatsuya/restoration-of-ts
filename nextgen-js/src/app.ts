// const userName = 'Show';
// // userName = 'ShowTarou';
// let age = 30;

// age = 29;
// var result;

// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// }

// this works
// if (age > 20) {
//   var isOld = true;
// }

// this not work
// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// const add = (a: number, b: number = 1) => a + b;
// console.log(add(2, 5));

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);

const person = {
  firstName: 'Show',
  age: 30,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);

console.log(addedNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age, person);

console.log('test!!!!');
