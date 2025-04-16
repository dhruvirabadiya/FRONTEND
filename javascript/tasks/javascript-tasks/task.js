//1) function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
//     let age = 21;
// }

// sayHi();

// ANS: D: undefined and ReferenceError

// Solve:
// function sayHi() {
//     var name = 'Lydia';
//     let age = 21;
//     console.log(name);
//     console.log(age);
// }

// sayHi();

// 2)for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i));
// }

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i));
// }

// Ans: 3 3 3 and 0 1 2

// 3) const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());
// Ans:B: 20 and NaN

// solve:
// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * shape.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

// 4)
// console.log(+true);
// console.log(!'Lydia');

// A: 1 and false

// 5)
// const bird = {
//     size: 'small',
// };

// const mouse = {
//     name: 'Mickey',
//     small: true,
// };

// console.log(mouse.bird.size);
// console.log(mouse[bird.size]);
// console.log(mouse[bird["size"]]);

// Ans: mouse.bird.size is not valid

//6)
//  let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);

// Ans:A: Hello

// 7)
// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// Ans:true false false

// class Chameleon {
//     static colorChange(newColor) {
//         this.newColor = newColor;
//         return this.newColor;
//     }

//     constructor({ newColor = 'green' } = {}) {
//         this.newColor = newColor;
//     }
// }

// const freddie = new Chameleon({ newColor: 'purple' });
// console.log(freddie.colorChange('orange'));

// Ans:TypeError

// Solve:
// class Chameleon {
//     colorChange(newColor) {
//         this.newColor = newColor;
//         return this.newColor;
//     }

//     constructor({ newColor = 'green' } = {}) {
//         this.newColor = newColor;
//     }
// }

// const freddie = new Chameleon({ newColor: 'purple' });
// console.log(freddie.colorChange('orange'));

// 9)
// let greeting;
// greetign = {}; // Typo!
// console.log(greetign);
// Ans: {}

// 10)
// function bark() {
//     console.log('Woof!');
// }

// console.log(bark.animal = 'dog');
// Ans:Nothing, this is totally fine!

// 11)
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// const member = new Person('Lydia', 'Hallie');
// Person.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName());

// Ans: TypeError

// Solve:
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// const member = new Person('Lydia', 'Hallie');
// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName());

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// const lydia = new Person('Lydia', 'Hallie');
// const sarah = Person('Sarah', 'Smith');

// console.log(lydia);
// console.log(sarah);
// Ans: Person {firstName: "Lydia", lastName: "Hallie"} and undefined

// 15)
// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(1, '2'));
// Ans:12

// 16)
// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);
// let number = 0;
// console.log(++number);
// console.log(number++);
// console.log(number);

// 17)
// function getPersonInfo(one, two, three) {
//     console.log(one);
//     console.log(two);
//     console.log(three);
// }

// const person = 'Lydia';
// const age = 21;

// getPersonInfo`${person} is ${age} years old`;
// console.log(`${person} is ${age} years old`);

// 18)
// function checkAge(data) {
//     if (data === { age: 18 }) {
//         console.log('You are an adult!');
//     } else if (data == { age: 18 }) {
//         console.log('You are still an adult.');
//     } else {
//         console.log(`Hmm.. You don't have an age I guess`);
//     }
// }

// checkAge({ age: 18 });

// function checkAge(data) {
//     if (data.age === 18) {
//         console.log('You are an adult!');
//     } else if (data.age === 18) {
//         console.log('You are still an adult.');
//     } else {
//         console.log(`Hmm.. You don't have an age I guess`);
//     }
// }

// checkAge({ age: 18 });

// 19)
// function getAge(...args) {
//     console.log(typeof args);
// }

// getAge(21);

// Ans:"object"

// 20)
// function getAge() {
//     'use strict';
//     age = 21;
//     console.log(age);
// }

// getAge();
// Ans:ReferenceError

// 21)
// const sum = eval('10*10+5');
// console.log(sum);

// Ans:105

// 22)
// var num = 8;
// var num = 10;

// console.log(num);
// Ans:10

// 23)
// const obj = { 1: 'a', 2: 'b', 3: 'c' };
// const set = new Set([1, 2, 3, 4, 5]);

// console.log(obj.hasOwnProperty('1'));
// console.log(obj.hasOwnProperty(1));
// console.log(set.has('1'));
// console.log(set.has(1));

// Ans: true true false true

// 25)
// const obj = { a: 'one', b: 'two', a: 'three' };
// console.log(obj);

// Ans: { a: "three", b: "two" }

// 27)
// for (let i = 1; i < 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
// }

// Ans: 1 2 4

// 28)
// String.prototype.giveLydiaPizza = () => {
//     return 'Just give Lydia pizza already!';
// };

// const name = 'Lydia';

// console.log(name.giveLydiaPizza())

// 29)
// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);
// Ans:4 5 6

// 30)
// const foo = () => console.log('First');
// const bar = () => setTimeout(() => console.log('Second'));
// const baz = () => console.log('Third');

// bar();
// foo();
// baz();

// Ans:First Third Second

// 33)
// const person = { name: 'Lydia' };

// function sayHi(age) {
//     return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));

// Ans:Lydia is 21 function

// 34)
// function sayHi() {
//     return (() => 0)();
// }

// console.log(typeof sayHi());
// Ans: number

// 35)
// console.log(0);
// console.log(new Number(0));
// console.log((''));
// console.log((' '));
// console.log(new Boolean(false));
// console.log(undefined);

// Ans:0, '', undefined

// 36)
// console.log(typeof typeof 1);
// Ans: number string

// 37)
// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);
// Ans:[1, 2, 3, empty × 7, 11]

// 38)
// (() => {
//     let x, y;
//     try {
//         throw new Error();
//     } catch (x) {
//         (x = 1), (y = 2);
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();

// Ans:1 undefined 2

// 41)
// console.log(!!null);
// console.log(!!'');
// console.log(!!1);
// Ans: false false true

// 42)
// setInterval(() => console.log('Hi'), 1000);
// Ans: a unique id

// 43)
// console.log([...'Lydia']);
// Ans:['L', 'y', 'd', 'i', 'a']

// 44)
// function* generator(i) {
//     yield i;
//     yield i * 2;
// }

// const gen = generator(10);

// console.log(gen.next().value);
// console.log(gen.next().value);
// Ans:10, 20


// 46)
// let person = { name: 'Lydia' };
// const members = [person];
// person = null;

// console.log(members);

// Ans:[{ name: "Lydia" }]

// 47)
// const person = {
//     name: 'Lydia',
//     age: 21,
// };

// for (const item in person) {
//     console.log(item);
// }

// 48)
// console.log(3 + 4 + '5');
// Ans:75

// 49)
// const num = parseInt('7*6', 10);
// console.log(num);
// Ans:7

// 50)
// const abc = [1, 2, 3].map(num => {
//     if (typeof num === 'number') return;
//     return num * 2;
// });
// console.log(abc);

// Ans:[undefined, undefined, undefined]

// 51)
// function getInfo(member, year) {
//     member.name = 'Lydia';
//     year = '1998';
// }

// const person = { name: 'Sarah' };
// const birthYear = '1997';

// const abcd = getInfo(person, birthYear);

// console.log(person, birthYear);
// Ans:{name: 'Lydia'} '1997'

// 52)
// function greeting() {
//     throw 'Hello world!';
// }
// function sayHi() {
//     try {
//         const data = greeting();
//         console.log('It worked!', data);
//     } catch (e) {
//         console.log('Oh no an error:', e);
//     }
// }

// sayHi();

// Ans:Oh no an error: Hello world!

// 53)
// function Car() {
//     this.make = 'Lamborghini';
//     return { make: 'Maserati' };
// }

// const myCar = new Car();
// console.log(myCar.make);

// Ans:"Maserati"

// 55)
// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// Dog.prototype.bark = function () {
//     console.log(`Woof I am ${this.name}`);
// };

// const pet = new Dog('Mara');

// pet.bark();

// delete Dog.prototype.bark;

// pet.bark();
// Ans:"Woof I am Mara", TypeError

// 56)
// const set = new Set([1, 1, 2, 3, 4]);

// console.log(set);
// Ans: { 1, 2, 3, 4 }

// 58)
// const name = 'Lydia';
// age = 21;

// console.log(delete name);
// console.log(delete age);

// 59)
// const numbers = [1, 2, 3, 4, 5];
// const [y] = numbers;

// console.log(y);
// Ans:1

// 60)
// const user = { name: 'Lydia', age: 21 };
// const admin = { admin: true, ...user };

// console.log(admin);

// Ans:{ admin: true, name: "Lydia", age: 21 }

// 61)
// const person = { name: 'Lydia' };

// Object.defineProperty(person, 'age', { value: 21 });

// console.log(person);
// console.log(Object.keys(person));

// Ans:{name: 'Lydia', age: 21},['name']

// 62)
// const settings = {
//     username: 'lydiahallie',
//     level: 19,
//     health: 90,
// };

// const data = JSON.stringify(settings, ['level', 'health']);
// console.log(data);

// Ans:{"level":19,"health":90}

// 63)
// let num = 10;

// const increaseNumber = () => num++;
// const increasePassedNumber = number => number++;

// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1);

// console.log(num1);
// console.log(num2);

// 64)
// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//     console.log((x.number *= 2));
// };

// multiply();
// multiply();
// multiply(value);
// multiply(value);

// 65)
// [1, 2, 3, 4].reduce((x, y) => console.log(x, y));

// 68)
// console.log(Number(2) === Number(2));
// console.log(Boolean(false) === Boolean(false));
// console.log(Symbol('foo') === Symbol('foo'));

// 69)
// const name = 'Lydia Hallie';
// console.log(name.padStart(20, "abc"));
// console.log(name.padStart(2));

// // 70).
// console.log('🥑' + '💻');

// 73)
// async function getData() {
//     return await Promise.resolve('I made it!');

// }

// const data = getData();
// console.log(data);

// Ans: Promise {<pending>}
// async function getData() {
//     return await Promise.resolve('I made it!');

// }

// const data = getData();
// data.then(res => console.log(res))
// console.log(data);

// 74)
// function addToList(item, list) {
//     return list.push(item);
// }

// const result = addToList('apple', ['banana']);
// console.log(result);

// 75)
// const box = { x: 10, y: 20 };

// Object.freeze(box);

// const shape = box;
// shape.x = 100;

// console.log(shape);

// 76)
// const { name: myName } = { name: 'Lydia' };

// console.log(myName); // "lydia"
// console.log(name); // "" ----- Browser e.g. Chrome
// console.log(name); // ReferenceError: name is not defined  ----- NodeJS

// const { firstName: myName } = { firstName: 'Lydia' };

// console.log(myName);

// console.log(firstName);

// Ans:ReferenceError

// 78)
// const add = () => {
//     const cache = {};

//     return num => {
//         if (num in cache) {
//             return `From cache! ${cache[num]}`
//         } else {
//             const result = num + 10;
//             cache[num] = result;
//             return `Calculated! ${result}`;
//         }
//     };
// };

// const addFunction = add();
// console.log(addFunction(10));
// console.log(addFunction(10));
// console.log(addFunction(5 * 2));

// 79)
// const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];

// for (let item in myLifeSummedUp) {
//     console.log(item);
// }

// for (let item of myLifeSummedUp) {
//     console.log(item);
// }

// Ans: 0 1 2 3 and "☕" "💻" "🍷" "🍫"

// 80)
// const list = [1 + 2, 1 * 2, 1 / 2];
// console.log(list);

// 81)
// function sayHi(name) {
//     return `Hi there, ${name}`;
// }

// console.log(sayHi());

// 82)
// var status = '😎';

// setTimeout(() => {
//     const status = '😍';

//     const data = {
//         status: '🥑',
//         getStatus() {
//             return this.status;
//         },
//     };

//     console.log(data.getStatus());
//     console.log(data.getStatus.call(this));
// }, 0);


var sum = [1, 2, 3, 4, 10, 11]
var arraySum = 0
var i
for (i = 0; i < sum.length; i++) {
    arraySum += sum[i]
}
console.log(arraySum)

